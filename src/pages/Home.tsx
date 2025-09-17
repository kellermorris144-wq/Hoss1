import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Truck, MapPin, FileText, CreditCard, BarChart3, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';

const features = [
  { name: 'Live ETA Tracking', icon: MapPin },
  { name: 'Instant Quoting', icon: FileText },
  { name: 'Digital Invoicing', icon: CreditCard },
  { name: 'Analytics & Reporting', icon: BarChart3 },
];

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-grid-pattern text-gray-800 dark:text-gray-200">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-900/50 dark:to-transparent z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-12">
        {/* Top Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            The Command Center for Modern Logistics.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            HOSS integrates everything from live tracking and quoting to invoicing and analytics into a single, powerful platform. Stop juggling software and start streamlining your operations.
          </p>
          <div className="flex justify-center items-center gap-4">
            <Link to="/demo">
              <Button variant="dark" size="lg" icon={ArrowRight} iconPosition="right">
                Book a Demo
              </Button>
            </Link>
            <Link to="/features" className="text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Explore Features
            </Link>
          </div>
        </div>

        {/* Visual Diagram */}
        <div className="relative w-full max-w-7xl mx-auto mt-16 md:mt-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left: Features */}
            <div className="space-y-6 w-full md:w-auto">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center space-x-4 group">
                  <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/30 group-hover:border-blue-400 dark:group-hover:border-blue-600">
                    <feature.icon className="w-6 h-6 text-slate-500 dark:text-slate-400 transition-colors group-hover:text-blue-500" />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-300 text-lg">{feature.name}</span>
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
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-lg text-slate-800 dark:text-slate-200">Operations Dashboard</span>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-100 dark:bg-slate-900/50 rounded-lg">
                    <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Live Fleet</h3>
                    <div className="h-24 bg-cover bg-center rounded" style={{backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/pin-s+00f(-2.24,53.48),pin-s+f00(-0.12,51.50)/-1.18,52.49,5/400x200?access_token=pk.eyJ1IjoiZHVtbXl1c2VyIiwiYSI6ImNsbW1mMjRzNzBqN2Mza3FqZ3M3M2Q5c3AifQ.1234567890abcdefghijklmnopqrstuvwxyz')"}}></div>
                  </div>
                  <div className="p-4 bg-slate-100 dark:bg-slate-900/50 rounded-lg">
                    <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Active Jobs</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-slate-700 dark:text-slate-300">#JB-1024 <span className="text-slate-500 dark:text-slate-400 font-normal">LND &rarr; MAN</span></span>
                        <span className="flex items-center text-xs font-semibold px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 rounded-full"><CheckCircle className="w-3 h-3 mr-1" /> On Time</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-slate-700 dark:text-slate-300">#JB-1025 <span className="text-slate-500 dark:text-slate-400 font-normal">BHX &rarr; GLA</span></span>
                        <span className="flex items-center text-xs font-semibold px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 rounded-full"><Truck className="w-3 h-3 mr-1" /> In Transit</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-slate-700 dark:text-slate-300">#JB-1026 <span className="text-slate-500 dark:text-slate-400 font-normal">SOU &rarr; LPL</span></span>
                        <span className="flex items-center text-xs font-semibold px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 rounded-full"><AlertTriangle className="w-3 h-3 mr-1" /> At Risk</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SVG Lines for Desktop */}
          <svg className="absolute top-0 left-0 w-full h-full z-[-1] hidden md:block" preserveAspectRatio="none">
            <defs>
              <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
              </linearGradient>
            </defs>
            {/* Paths from features to hub */}
            <path d="M 250 70 C 400 70, 400 180, 540 180" stroke="url(#line-grad)" strokeWidth="2" fill="none" />
            <path d="M 250 145 C 400 145, 400 180, 540 180" stroke="url(#line-grad)" strokeWidth="2" fill="none" />
            <path d="M 250 220 C 400 220, 400 180, 540 180" stroke="url(#line-grad)" strokeWidth="2" fill="none" />
            <path d="M 250 295 C 400 295, 400 180, 540 180" stroke="url(#line-grad)" strokeWidth="2" fill="none" />
            
            {/* Path from hub to product */}
            <path d="M 660 180 H 800" stroke="url(#line-grad)" strokeWidth="2" fill="none" />

            {/* Animated dots */}
            <circle cx="0" cy="0" r="4" fill="#3b82f6">
              <animateMotion dur="8s" repeatCount="indefinite" path="M 250 70 C 400 70, 400 180, 540 180" />
            </circle>
            <circle cx="0" cy="0" r="4" fill="#3b82f6">
              <animateMotion dur="7s" repeatCount="indefinite" path="M 250 145 C 400 145, 400 180, 540 180" />
            </circle>
            <circle cx="0" cy="0" r="4" fill="#3b82f6">
              <animateMotion dur="6s" repeatCount="indefinite" path="M 250 220 C 400 220, 400 180, 540 180" />
            </circle>
            <circle cx="0" cy="0" r="4" fill="#3b82f6">
              <animateMotion dur="9s" repeatCount="indefinite" path="M 250 295 C 400 295, 400 180, 540 180" />
            </circle>
             <circle cx="0" cy="0" r="4" fill="#3b82f6">
              <animateMotion dur="5s" repeatCount="indefinite" path="M 660 180 H 800" />
            </circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;