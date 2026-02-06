export const ANIMATION_CONFIG = {
  duration: {
    instant: 150,
    fast: 200,
    normal: 300,
    medium: 400,
    slow: 500,
    verySlow: 700,
  },

  easing: {
    standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
    smooth: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  delay: {
    none: 0,
    tiny: 50,
    short: 100,
    medium: 150,
    long: 200,
  },

  stagger: {
    children: 75,
    cards: 100,
    list: 50,
  },
};

export const getAnimationDelay = (index: number, staggerTime: number = 75): number => {
  return index * staggerTime;
};

export const isReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getTransitionDuration = (duration: keyof typeof ANIMATION_CONFIG.duration): number => {
  return isReducedMotion() ? 1 : ANIMATION_CONFIG.duration[duration];
};
