import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slideLeft' | 'slideRight' | 'scale';
  className?: string;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade',
  className = '',
  delay = 0
}) => {
  const { ref, isVisible } = useScrollAnimation();

  const animationClass = {
    fade: 'fade-in-scroll',
    slideLeft: 'slide-in-left',
    slideRight: 'slide-in-right',
    scale: 'scale-in',
  }[animation];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${animationClass} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
