import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '', color = 'currentColor' }) => {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* UH Monogram - Recreated to match original shape and soft-rounded terminals */}
      <svg
        viewBox="0 0 46 25"
        className="h-[21px] sm:h-[23px] w-auto shrink-0 transition-transform duration-200 group-hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g stroke={color} strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round">
          {/* U */}
          <path d="M 3.8 3.5 V 14.5 C 3.8 21.2, 18.2 21.2, 18.2 14.5 V 3.5" />
          {/* H */}
          <path d="M 26.5 3.5 V 21" />
          <path d="M 40.5 3.5 V 21" />
          <path d="M 26.5 12.25 H 40.5" />
        </g>
      </svg>

      {/* Umair Habib Wordmark matching reference typography */}
      <span
        className="font-bold text-[17px] sm:text-[18.5px] tracking-[-0.025em] leading-none transition-colors"
        style={{ color: color }}
      >
        Umair Habib
      </span>
    </div>
  );
};

