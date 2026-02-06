/**
 * Pexels Image Optimization Utility
 *
 * Provides optimized Pexels URLs with proper compression, format, and sizing parameters
 * for maximum loading performance across all devices and connection speeds.
 */

interface PexelsImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  fit?: 'crop' | 'cover' | 'contain';
  auto?: 'compress' | 'format' | 'compress,format';
}

/**
 * Generates an optimized Pexels image URL with compression and responsive sizing
 *
 * @param photoId - The Pexels photo ID (e.g., '2182981')
 * @param options - Image optimization options
 * @returns Optimized Pexels image URL
 */
export const getOptimizedPexelsUrl = (
  photoId: string,
  options: PexelsImageOptions = {}
): string => {
  const {
    width = 1920,
    height = 1080,
    quality = 80,
    fit = 'crop',
    auto = 'compress,format'
  } = options;

  // Clean URL without tracking parameters for better performance
  const baseUrl = `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg`;

  // Build optimized query parameters
  const params = new URLSearchParams({
    auto: auto,
    cs: 'tinysrgb', // Tiny sRGB color space for smaller file sizes
    w: width.toString(),
    h: height.toString(),
    fit: fit,
    q: quality.toString(),
    dpr: '1' // Prevent auto DPR scaling for predictable sizes
  });

  return `${baseUrl}?${params.toString()}`;
};

/**
 * Service page hero images - optimized for above-the-fold content
 * These are the critical images that should load immediately
 */
export const HERO_IMAGES = {
  taxAdvisory: getOptimizedPexelsUrl('2182981', {
    width: 1920,
    height: 1080,
    quality: 85 // Higher quality for hero images
  }),
  cloudAccounting: getOptimizedPexelsUrl('3760105', {
    width: 1920,
    height: 1080,
    quality: 85
  }),
  businessServices: getOptimizedPexelsUrl('3760263', {
    width: 1920,
    height: 1080,
    quality: 85
  }),
  smsf: getOptimizedPexelsUrl('3760100', {
    width: 1920,
    height: 1080,
    quality: 85
  }),
  bookkeeping: getOptimizedPexelsUrl('3760072', {
    width: 1920,
    height: 1080,
    quality: 85
  }),
  auditAssurance: getOptimizedPexelsUrl('3760067', {
    width: 1920,
    height: 1080,
    quality: 85
  })
};

/**
 * Secondary/background images - can be lower quality
 */
export const SECONDARY_IMAGES = {
  smsf: getOptimizedPexelsUrl('1642883', {
    width: 1600,
    height: 900,
    quality: 75
  }),
  bookkeeping: getOptimizedPexelsUrl('5940833', {
    width: 1600,
    height: 900,
    quality: 75
  }),
  cloudAccounting: getOptimizedPexelsUrl('19670', {
    width: 1600,
    height: 900,
    quality: 75
  }),
  businessServices: getOptimizedPexelsUrl('13737055', {
    width: 1600,
    height: 900,
    quality: 75
  })
};

/**
 * Mobile-optimized versions for smaller screens
 */
export const MOBILE_HERO_IMAGES = {
  taxAdvisory: getOptimizedPexelsUrl('2182981', {
    width: 800,
    height: 600,
    quality: 80
  }),
  cloudAccounting: getOptimizedPexelsUrl('3760105', {
    width: 800,
    height: 600,
    quality: 80
  }),
  businessServices: getOptimizedPexelsUrl('3760263', {
    width: 800,
    height: 600,
    quality: 80
  }),
  smsf: getOptimizedPexelsUrl('3760100', {
    width: 800,
    height: 600,
    quality: 80
  }),
  bookkeeping: getOptimizedPexelsUrl('3760072', {
    width: 800,
    height: 600,
    quality: 80
  }),
  auditAssurance: getOptimizedPexelsUrl('3760067', {
    width: 800,
    height: 600,
    quality: 80
  })
};

/**
 * Get responsive background image CSS with mobile/desktop variants
 */
export const getResponsiveBackgroundImage = (
  desktopUrl: string,
  mobileUrl: string,
  gradient?: string
): string => {
  const baseGradient = gradient || 'linear-gradient(135deg, rgba(10,37,64,0.75) 0%, rgba(24,56,90,0.65) 60%, rgba(174,134,33,0.70) 100%)';

  return `${baseGradient}, url('${desktopUrl}')`;
};

/**
 * Preload critical images for instant display
 */
export const preloadImages = (imageUrls: string[]): void => {
  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    link.type = 'image/jpeg';
    // Add fetchpriority for critical images
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);
  });
};
