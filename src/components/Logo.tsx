import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = 'h-8 w-auto' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 180 50"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="HOSS Logo"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F59E0B" /> {/* amber-500 */}
          <stop offset="100%" stopColor="#EA580C" /> {/* orange-600 */}
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        dy=".35em"
        textAnchor="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize="48"
        fontWeight="bold"
        fill="url(#logoGradient)"
        letterSpacing="2"
      >
        HOSS
      </text>
    </svg>
  );
};

export default Logo;