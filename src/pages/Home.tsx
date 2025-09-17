import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Truck, Briefcase, Users, Database, CreditCard, BarChart2, PieChart } from 'lucide-react';

const integrations = [
  { name: 'Job Management', icon: Briefcase },
  { name: 'Accounting', icon: CreditCard },
  { name: 'CRM', icon: Users },
  { name: 'File Storage', icon: Database },
];

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-grid-pattern text-gray-800 dark:text-gray-200">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-12">
        {/* Top Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Your Entire Haulage Operation, Unified.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            HOSS provides a single platform to integrate your accounting, CRM, job management, and tracking, giving you complete control and visibility.
          </p>
          <Link to="/demo">
            <Button variant="dark" size="lg">
              Book a Demo
            </Button>
          </Link>
        </div>

        {/* Visual Diagram */}
        <div className="relative w-full max-w-7xl mx-auto mt-16 md:mt-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left: Integrations */}
            <div className="space-y-6 w-full md:w-auto">
              {integrations.map((integration) => (
                <div key={integration.name} className="flex items-center space-x-4 group">
                  <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/30 group-hover:border-blue-400 dark:group-hover:border-blue-600">
                    <integration.icon className="w-6 h-6 text-slate-500 dark:text-slate-400 transition-colors group-hover:text-blue-500" />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-300 text-lg">{integration.name}</span>
                </div>
              ))}
            </div>

            {/* Center: Hub */}
            <div className="relative my-8 md:my-0 md:mx-16">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="relative w-28 h-28 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center shadow-lg">
                <Truck className="w-12 h-12 text-blue-600 dark:text-blue-500" />
              </div>
            </div>

            {/* Right: Product UI */}
            <div className="w-full md:w-auto max-w-lg">
              <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg shadow-2xl p-4 w-full backdrop-blur-sm">
                <div className="flex items-center space-x-1.5 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="h-5 w-1/3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    <div className="h-5 w-1/4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                  </div>
                  <div className="p-4 bg-slate-100 dark:bg-slate-900/50 rounded-lg">
                    <BarChart2 className="w-full h-24 text-slate-300 dark:text-slate-600" />
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/3 p-2 bg-slate-100 dark:bg-slate-900/50 rounded-lg flex items-center justify-center">
                      <PieChart className="w-16 h-16 text-slate-300 dark:text-slate-600" />
                    </div>
                    <div className="w-2/3 p-2 bg-slate-100 dark:bg-slate-900/50 rounded-lg space-y-2 flex flex-col justify-center">
                      <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded"></div>
                      <div className="h-3 w-5/6 bg-slate-200 dark:bg-slate-700 rounded"></div>
                      <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded"></div>
                      <div className="h-3 w-3/4 bg-slate-200 dark:bg-slate-700 rounded"></div>
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
            <path d="M 250 70 C 400 70, 400 180, 540 180" stroke="url(#grad1)" strokeWidth="2" fill="none" />
            <path d="M 250 145 C 400 145, 400 180, 540 180" stroke="url(#grad1)" strokeWidth="2" fill="none" />
            <path d="M 250 220 C 400 220, 400 180, 540 180" stroke="url(#grad1)" strokeWidth="2" fill="none" />
            <path d="M 250 295 C 400 295, 400 180, 540 180" stroke="url(#grad1)" strokeWidth="2" fill="none" />
            
            {/* Path from hub to product */}
            <path d="M 660 180 H 800" stroke="url(#grad1)" strokeWidth="2" fill="none" />

            {/* Gradient for lines */}
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'rgba(156, 163, 175, 0.1)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(156, 163, 175, 0.5)', stopOpacity: 1 }} />
            </linearGradient>

            {/* Animated dots */}
            <circle cx="0" cy="0" r="3" fill="#3b82f6" className="opacity-75">
              <animateMotion dur="8s" repeatCount="indefinite" path="M 250 70 C 400 70, 400 180, 540 180" />
            </circle>
            <circle cx="0" cy="0" r="3" fill="#3b82f6" className="opacity-75">
              <animateMotion dur="6s" repeatCount="indefinite" path="M 250 220 C 400 220, 400 180, 540 180" />
            </circle>
             <circle cx="0" cy="0" r="3" fill="#3b82f6" className="opacity-75">
              <animateMotion dur="7s" repeatCount="indefinite" path="M 660 180 H 800" />
            </circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;