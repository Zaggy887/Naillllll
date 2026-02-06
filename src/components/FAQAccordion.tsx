import React, { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ question, answer, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight);
    }
  }, [answer]);

  useEffect(() => {
    if (isOpen || (!isOpen && height > 0)) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen, height]);

  const handleToggle = () => {
    if (!isAnimating) {
      onToggle();
    }
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:border-[#1e3a8a] transition-all duration-300 hover:shadow-lg"
      style={{
        willChange: isAnimating ? 'border-color, box-shadow' : 'auto'
      }}
    >
      <button
        onClick={handleToggle}
        className="w-full px-4 py-4 md:px-6 md:py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 min-h-[44px] group"
        aria-expanded={isOpen}
        disabled={isAnimating}
      >
        <span className="font-semibold text-[#0A2540] pr-4 text-sm md:text-base group-hover:text-[#1e3a8a] transition-colors duration-200">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#1e3a8a] flex-shrink-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            willChange: isAnimating ? 'transform' : 'auto'
          }}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-350 ease-in-out"
        style={{
          maxHeight: isOpen ? `${height}px` : '0px',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
          willChange: isAnimating ? 'max-height, opacity, transform' : 'auto',
        }}
      >
        <div
          ref={contentRef}
          className="px-4 pb-4 md:px-6 md:pb-5 pt-1 text-gray-600 leading-relaxed text-sm md:text-base"
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
