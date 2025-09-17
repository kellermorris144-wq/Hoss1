import React from 'react';
import Card from './Card';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  companyLogoUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, title, companyLogoUrl }) => {
  return (
    <Card className="p-8 h-full flex flex-col" gradient>
      <div className="flex-grow mb-4">
        <p className="text-lg text-gray-700 dark:text-gray-300 italic">"{quote}"</p>
      </div>
      <div className="flex items-center">
        <div className="flex-grow">
          <p className="font-bold text-gray-900 dark:text-gray-100">{author}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        </div>
        <img src={companyLogoUrl} alt="Company Logo" className="h-8" />
      </div>
    </Card>
  );
};

export default TestimonialCard;