import React from 'react';
import hossLogo from '../assets/logo.png';

const Logo: React.FC<{ className?: string }> = ({ className = 'h-8 w-auto' }) => {
  return (
    <img
      src={hossLogo}
      alt="HOSS Logo"
      className={className}
    />
  );
};

export default Logo;