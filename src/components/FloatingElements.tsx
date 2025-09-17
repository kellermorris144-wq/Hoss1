import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
      {/* Subtle background elements */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-br from-blue-400/3 to-purple-400/2 blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-32 left-1/4 w-56 h-56 bg-gradient-to-br from-purple-400/2 to-blue-400/2 blur-3xl animate-float-slow-reverse"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-1/2 w-24 h-24 border border-blue-300/4 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-300/3 to-blue-300/2 transform rotate-12 animate-pulse-slow"></div>
      
      {/* Floating lines */}
      <div className="absolute top-1/2 left-10 w-px h-48 bg-gradient-to-b from-transparent via-blue-300/6 to-transparent animate-float-vertical"></div>
      <div className="absolute top-1/3 right-16 w-32 h-px bg-gradient-to-r from-transparent via-purple-300/5 to-transparent animate-float-horizontal"></div>
      
      {/* Small particles */}
      <div className="absolute top-16 left-1/3 w-1.5 h-1.5 bg-blue-400/8 rounded-full animate-twinkle"></div>
      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-400/6 rounded-full animate-twinkle-delayed"></div>
      <div className="absolute bottom-20 left-1/2 w-2 h-2 bg-emerald-400/5 rounded-full animate-twinkle-slow"></div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/6 via-transparent to-purple-50/4 animate-gradient-shift"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-50/3 via-transparent to-transparent animate-gradient-shift-reverse"></div>
    </div>
  );
};

export default FloatingElements;