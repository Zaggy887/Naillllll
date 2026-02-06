import { useState, useEffect } from 'react';

interface UseImagePreloaderResult {
  imagesLoaded: boolean;
  progress: number;
  error: string | null;
}

export const useImagePreloader = (imageUrls: string[]): UseImagePreloaderResult => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setImagesLoaded(true);
      setProgress(100);
      return;
    }

    let loadedCount = 0;
    let isMounted = true;
    const imageElements: HTMLImageElement[] = [];

    const updateProgress = () => {
      if (isMounted) {
        const progressPercent = Math.round((loadedCount / imageUrls.length) * 100);
        setProgress(progressPercent);
      }
    };

    const checkAllLoaded = () => {
      if (loadedCount === imageUrls.length && isMounted) {
        setImagesLoaded(true);
        setProgress(100);
      }
    };

    imageUrls.forEach((url) => {
      const img = new Image();

      img.onload = () => {
        loadedCount++;
        updateProgress();
        checkAllLoaded();
      };

      img.onerror = () => {
        loadedCount++;
        if (isMounted) {
          console.warn(`Failed to preload image: ${url}`);
        }
        updateProgress();
        checkAllLoaded();
      };

      img.src = url;
      imageElements.push(img);
    });

    return () => {
      isMounted = false;
      imageElements.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]);

  return { imagesLoaded, progress, error };
};

export const preloadImage = (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    img.src = url;
  });
};

export const preloadImages = async (urls: string[]): Promise<void> => {
  try {
    await Promise.all(urls.map(url => preloadImage(url)));
  } catch (error) {
    console.error('Error preloading images:', error);
  }
};
