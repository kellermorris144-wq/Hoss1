import React from 'react';
import logoSrc from '../assets/logo.png';

const Logo: React.FC<{ className?: string }> = ({ className = 'h-8 w-auto' }) => {
  return (
    <img
      src={logoSrc}
      alt="HOSS Logo"
      className={className}
    />
  );
};

export default Logo;