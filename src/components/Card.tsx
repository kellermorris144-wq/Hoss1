import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  gradient = false 
}) => {
  const baseClasses = 'relative bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800';
  
  // New hover effect using a pseudo-element for a subtle glow/border
  const hoverClasses = hover 
    ? 'group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ' +
      'before:absolute before:-inset-px before:rounded-xl before:bg-gradient-to-r before:from-amber-500/30 before:to-orange-500/30 before:blur-md before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300'
    : '';

  const gradientClasses = gradient 
    ? 'bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800' 
    : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`}>
      {/* The actual content needs to be wrapped to stay above the pseudo-element */}
      <div className="relative z-10 h-full"> 
        {children}
      </div>
    </div>
  );
};

export default Card;