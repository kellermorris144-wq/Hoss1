import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = 'h-8 w-auto' }) => {
  return (
    <img
      src="/hoss-logo.png"
      alt="HOSS Logo"
      className={className}
    />
  );
};

export default Logo;