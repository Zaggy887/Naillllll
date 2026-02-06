/**
 * Image Preloader Utility
 *
 * Handles preloading of images before displaying page content.
 * Provides loading progress tracking and error handling.
 */

export interface ImageLoadResult {
  src: string;
  success: boolean;
  error?: string;
}

export interface PreloadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

/**
 * Preload a single image
 * @param src - Image source URL
 * @param timeout - Optional timeout in milliseconds (default: 10000)
 * @returns Promise that resolves when image is loaded or rejects on error
 */
export const preloadImage = (src: string, timeout: number = 10000): Promise<ImageLoadResult> => {
  return new Promise((resolve) => {
    const img = new Image();
    let timeoutId: NodeJS.Timeout;

    const cleanup = () => {
      if (timeoutId) clearTimeout(timeoutId);
      img.onload = null;
      img.onerror = null;
    };

    // Set timeout to prevent hanging
    timeoutId = setTimeout(() => {
      cleanup();
      resolve({
        src,
        success: false,
        error: 'Image load timeout'
      });
    }, timeout);

    img.onload = () => {
      cleanup();
      resolve({ src, success: true });
    };

    img.onerror = () => {
      cleanup();
      resolve({
        src,
        success: false,
        error: 'Failed to load image'
      });
    };

    img.src = src;
  });
};

/**
 * Extract all image sources from a DOM element
 * @param element - Root element to search for images
 * @returns Array of image source URLs
 */
export const extractImageSources = (element: HTMLElement | Document = document): string[] => {
  const sources = new Set<string>();

  // Get all <img> tags
  const imgElements = element.querySelectorAll('img');
  imgElements.forEach((img) => {
    if (img.src && !img.src.startsWith('data:')) {
      sources.add(img.src);
    }
    // Also check srcset
    if (img.srcset) {
      const srcsetUrls = img.srcset.split(',').map(s => s.trim().split(' ')[0]);
      srcsetUrls.forEach(url => sources.add(url));
    }
  });

  // Get background images from inline styles
  const elementsWithBg = element.querySelectorAll('[style*="background-image"]');
  elementsWithBg.forEach((el) => {
    const style = (el as HTMLElement).style.backgroundImage;
    const matches = style.match(/url\(['"]?([^'"]+)['"]?\)/g);
    if (matches) {
      matches.forEach(match => {
        const url = match.replace(/url\(['"]?|['"]?\)/g, '');
        if (!url.startsWith('data:')) {
          sources.add(url);
        }
      });
    }
  });

  // Get background images from CSS
  const allElements = element.querySelectorAll('*');
  allElements.forEach((el) => {
    const computed = window.getComputedStyle(el as Element);
    const bgImage = computed.backgroundImage;
    if (bgImage && bgImage !== 'none') {
      const matches = bgImage.match(/url\(['"]?([^'"]+)['"]?\)/g);
      if (matches) {
        matches.forEach(match => {
          const url = match.replace(/url\(['"]?|['"]?\)/g, '');
          if (!url.startsWith('data:')) {
            sources.add(url);
          }
        });
      }
    }
  });

  return Array.from(sources);
};

/**
 * Preload multiple images with progress tracking
 * @param sources - Array of image source URLs
 * @param onProgress - Optional callback for progress updates
 * @returns Promise that resolves with array of load results
 */
export const preloadImages = async (
  sources: string[],
  onProgress?: (progress: PreloadProgress) => void
): Promise<ImageLoadResult[]> => {
  if (sources.length === 0) {
    return [];
  }

  const results: ImageLoadResult[] = [];
  let loaded = 0;

  const updateProgress = () => {
    loaded++;
    if (onProgress) {
      onProgress({
        loaded,
        total: sources.length,
        percentage: Math.round((loaded / sources.length) * 100)
      });
    }
  };

  // Load all images in parallel
  const promises = sources.map(async (src) => {
    const result = await preloadImage(src);
    updateProgress();
    return result;
  });

  const allResults = await Promise.all(promises);
  return allResults;
};

/**
 * Preload images from a specific element with progress tracking
 * @param element - Root element to search for images
 * @param onProgress - Optional callback for progress updates
 * @returns Promise that resolves with array of load results
 */
export const preloadElementImages = async (
  element: HTMLElement | Document = document,
  onProgress?: (progress: PreloadProgress) => void
): Promise<ImageLoadResult[]> => {
  const sources = extractImageSources(element);
  return preloadImages(sources, onProgress);
};

/**
 * Check if all images in an element are loaded
 * @param element - Root element to check
 * @returns Boolean indicating if all images are loaded
 */
export const areImagesLoaded = (element: HTMLElement | Document = document): boolean => {
  const imgElements = element.querySelectorAll('img');
  return Array.from(imgElements).every(img => img.complete && img.naturalHeight !== 0);
};

/**
 * Wait for all images in an element to load
 * @param element - Root element to monitor
 * @param timeout - Maximum time to wait in milliseconds
 * @returns Promise that resolves when all images are loaded or timeout occurs
 */
export const waitForImages = (
  element: HTMLElement | Document = document,
  timeout: number = 10000
): Promise<boolean> => {
  return new Promise((resolve) => {
    if (areImagesLoaded(element)) {
      resolve(true);
      return;
    }

    const sources = extractImageSources(element);
    if (sources.length === 0) {
      resolve(true);
      return;
    }

    preloadImages(sources)
      .then(() => resolve(true))
      .catch(() => resolve(false));

    // Set timeout fallback
    setTimeout(() => resolve(false), timeout);
  });
};
