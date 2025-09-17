import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Truck, Briefcase, Users, Database, CreditCard, MapPin, BarChart2, PieChart, ArrowRight } from 'lucide-react';

const integrations = [
  { name: 'Accounting', icons: [CreditCard, Briefcase] },
  { name: 'Freight Networks', icons: [Users] },
  { name: 'File Storage', icons: [Database] },
  { name: 'Maps & Tracking', icons: [MapPin] },
];

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Background decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-100/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-12">
        {/* Top Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            One Platform, hundreds of logistics integrations
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            HOSS is the leading platform for customer-facing logistics integrations, trusted by Fortune 500 organizations and thousands of other B2B SaaS companies.
          </p>
          <Link to="/demo">
            <Button variant="dark" size="lg">
              Book a Demo
            </Button>
          </Link>
        </div>

        {/* Visual Diagram */}
        <div className="relative w-full max-w-6xl mx-auto mt-16 md:mt-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left: Integrations */}
            <div className="space-y-4 w-full md:w-auto">
              {integrations.map((integration, index) => (
                <div key={integration.name} className="flex items-center space-x-4">
                  <div className="flex items-center justify-center space-x-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 shadow-sm">
                    {integration.icons.map((Icon, i) => (
                      <Icon key={i} className="w-6 h-6 text-gray-400" />
                    ))}
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">{integration.name}</span>
                </div>
              ))}
            </div>

            {/* Center: Hub */}
            <div className="relative my-8 md:my-0 md:mx-16">
              <div className="w-24 h-24 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-lg">
                <Truck className="w-10 h-10 text-blue-600 dark:text-blue-500" />
              </div>
            </div>

            {/* Right: Product UI */}
            <div className="w-full md:w-auto max-w-md">
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4">
                <div className="flex items-center space-x-1.5 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-end space-x-2 h-24 p-2 bg-gray-100 dark:bg-gray-900/50 rounded">
                    <div className="w-1/6 h-1/3 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                    <div className="w-1/6 h-2/3 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                    <div className="w-1/6 h-full bg-blue-400 dark:bg-blue-600 rounded-sm"></div>
                    <div className="w-1/6 h-1/2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                    <div className="w-1/6 h-3/4 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                    <div className="w-1/6 h-1/2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/2 p-2 bg-gray-100 dark:bg-gray-900/50 rounded">
                      <div className="h-3 w-3/4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      <div className="h-2 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mt-2"></div>
                    </div>
                    <div className="w-1/2 p-2 bg-gray-100 dark:bg-gray-900/50 rounded">
                      <div className="h-3 w-3/4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      <div className="h-2 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SVG Lines for Desktop */}
          <svg className="absolute top-0 left-0 w-full h-full z-[-1] hidden md:block" preserveAspectRatio="none">
            <defs>
              <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">
                <circle cx="5" cy="5" r="5" fill="rgba(59, 130, 246, 0.5)" />
              </marker>
            </defs>
            {/* Paths from integrations to hub */}
            <path d="M 220 50 C 350 50, 350 150, 480 150" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="4 4" />
            <path d="M 220 115 C 350 115, 350 150, 480 150" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="4 4" />
            <path d="M 220 180 C 350 180, 350 150, 480 150" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="4 4" />
            <path d="M 220 245 C 350 245, 350 150, 480 150" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="4 4" />
            
            {/* Path from hub to product */}
            <path d="M 580 150 H 700" stroke="#9ca3af" strokeWidth="2" fill="none" />

            {/* Animated dots */}
            <circle cx="0" cy="0" r="3" fill="#3b82f6" className="opacity-75">
              <animateMotion dur="6s" repeatCount="indefinite" path="M 220 50 C 350 50, 350 150, 480 150" />
            </circle>
            <circle cx="0" cy="0" r="3" fill="#3b82f6" className="opacity-75">
              <animateMotion dur="5s" repeatCount="indefinite" path="M 220 180 C 350 180, 350 150, 480 150" />
            </circle>
             <circle cx="0" cy="0" r="3" fill="#3b82f6" className="opacity-75">
              <animateMotion dur="7s" repeatCount="indefinite" path="M 580 150 H 700" />
            </circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;