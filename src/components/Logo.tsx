import React from 'react';

// Using the direct Imgur link provided by the user to ensure the image loads.
const logoSrc = "https://i.imgur.com/2I7KaWq.png";

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