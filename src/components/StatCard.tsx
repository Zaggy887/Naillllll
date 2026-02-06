import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

/**
 * Animated statistics card component
 * Displays a number that counts up on mount with smooth animation
 */
const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2000,
}) => {
  const { count } = useCountUp(value, duration);

  // Format the count based on decimals
  const formattedCount = decimals > 0 ? count.toFixed(decimals) : count;

  return (
    <div className="flex flex-col items-center justify-start px-4 sm:px-6 py-4 transition-all duration-300 flex-1 min-w-[140px] sm:min-w-[160px]">
      {/* Animated Number */}
      <div className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-2 tabular-nums tracking-tight leading-none">
        {prefix && <span className="text-white font-light">{prefix}</span>}
        {formattedCount}
        <span className="text-[#C9A227] font-light">{suffix}</span>
      </div>

      {/* Label */}
      <div className="text-sm sm:text-base text-white font-light text-center leading-tight">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
