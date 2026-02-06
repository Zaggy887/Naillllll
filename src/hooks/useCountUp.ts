import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook for animated count-up effect
 * @param endValue - The target number to count up to
 * @param duration - Animation duration in milliseconds (default: 2000ms)
 * @param startOnMount - Whether to start animation immediately on mount (default: true)
 * @returns Current count value and function to trigger animation
 */
export const useCountUp = (
  endValue: number,
  duration: number = 2000,
  startOnMount: boolean = true
) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const animate = (currentTime: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = currentTime;
    }

    const elapsed = currentTime - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function for smooth animation (easeOutQuart)
    const easeProgress = 1 - Math.pow(1 - progress, 4);
    const currentCount = Math.floor(easeProgress * endValue);

    setCount(currentCount);

    if (progress < 1) {
      frameRef.current = requestAnimationFrame(animate);
    } else {
      setCount(endValue);
      setHasAnimated(true);
    }
  };

  const startAnimation = () => {
    if (hasAnimated) return;

    startTimeRef.current = undefined;
    frameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (startOnMount && !hasAnimated) {
      // Small delay to ensure smooth rendering
      const timeout = setTimeout(startAnimation, 100);
      return () => clearTimeout(timeout);
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [startOnMount, hasAnimated]);

  return { count, startAnimation, hasAnimated };
};
