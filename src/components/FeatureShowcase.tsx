import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from './Card';

interface FeatureShowcaseProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({ icon: Icon, title, description, imageUrl, reverse = false }) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
      <div className={`lg:order-${reverse ? '2' : '1'}`}>
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{title}</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <div className={`lg:order-${reverse ? '1' : '2'}`}>
        <Card hover gradient className="p-4">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-lg" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FeatureShowcase;