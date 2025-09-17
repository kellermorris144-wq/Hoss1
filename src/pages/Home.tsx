import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Truck, Briefcase, Users, Database, CreditCard, BarChart2, PieChart, ArrowRight, Clock, Shield } from 'lucide-react';
import FeatureShowcase from '../components/FeatureShowcase';
import TestimonialCard from '../components/TestimonialCard';

const integrations = [
  { name: 'Job Management', icon: Briefcase },
  { name: 'Accounting', icon: CreditCard },
  { name: 'CRM', icon: Users },
  { name: 'File Storage', icon: Database },
];

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-grid-pattern text-gray-800 dark:text-gray-200">
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-12">
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

          <div className="relative w-full max-w-7xl mx-auto mt-16 md:mt-24">
            <div className="flex flex-col md:flex-row items-center justify-between">
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

              <div className="relative my-8 md:my-0 md:mx-16">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
                <div className="relative w-28 h-28 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center shadow-lg">
                  <Truck className="w-12 h-12 text-blue-600 dark:text-blue-500" />
                </div>
              </div>

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

            <svg className="absolute top-0 left-0 w-full h-full z-[-1] hidden md:block" preserveAspectRatio="none">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(156, 163, 175, 0.1)" />
                  <stop offset="100%" stopColor="rgba(156, 163, 175, 0.5)" />
                </linearGradient>
              </defs>
              <path d="M 250 70 C 400 70, 400 180, 540 180" stroke="url(#grad1)" strokeWidth="2" fill="none" />
              <path d="M 250 145 C 400 145, 400 180, 540 180" stroke="url(#grad1)" strokeWidth="2" fill="none" />
              <path d="M 250 220 C 400 220, 400 180, 540 180" stroke="url(#grad1)" strokeWidth="2" fill="none" />
              <path d="M 250 295 C 400 295, 400 180, 540 180" stroke="url(#grad1)" strokeWidth="2" fill="none" />
              <path d="M 660 180 H 800" stroke="url(#grad1)" strokeWidth="2" fill="none" />
              <circle cx="0" cy="0" r="3" fill="#3b82f6" className="opacity-75"><animateMotion dur="8s" repeatCount="indefinite" path="M 250 70 C 400 70, 400 180, 540 180" /></circle>
              <circle cx="0" cy="0" r="3" fill="#3b82f6" className="opacity-75"><animateMotion dur="6s" repeatCount="indefinite" path="M 250 220 C 400 220, 400 180, 540 180" /></circle>
              <circle cx="0" cy="0" r="3" fill="#3b82f6" className="opacity-75"><animateMotion dur="7s" repeatCount="indefinite" path="M 660 180 H 800" /></circle>
            </svg>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-around items-center gap-8 opacity-60">
            <div className="font-bold text-2xl text-gray-400 dark:text-gray-500">YourLogo</div>
            <div className="font-bold text-2xl text-gray-400 dark:text-gray-500">Logistics Inc.</div>
            <div className="font-bold text-2xl text-gray-400 dark:text-gray-500">Transport Co.</div>
            <div className="font-bold text-2xl text-gray-400 dark:text-gray-500">Freightify</div>
            <div className="font-bold text-2xl text-gray-400 dark:text-gray-500">ShipWell</div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <FeatureShowcase
            icon={Truck}
            title="Real-Time Tracking & Visibility"
            description="Go beyond dots on a map. Get live ETAs, shareable tracking links, and automated alerts for every shipment, giving you and your customers complete peace of mind."
            imageUrl="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <FeatureShowcase
            icon={Clock}
            title="Instant, Accurate Quoting"
            description="Stop wasting time with spreadsheets. Our intelligent engine generates precise quotes in seconds, factoring in real-time market rates, fuel costs, and vehicle availability."
            imageUrl="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            reverse
          />
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Don't Just Take Our Word For It
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how HOSS is transforming operations for businesses like yours.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="HOSS cut our administrative overhead by 40% in the first three months. The visibility it provides is a game-changer for our customer service."
              author="John Smith"
              title="Operations Director, Logistics Inc."
              companyLogoUrl="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
            />
            <TestimonialCard
              quote="The implementation was seamless. We were up and running in a week, and the team's support has been phenomenal. It feels like they're part of our company."
              author="Sarah Jones"
              title="CEO, Transport Co."
              companyLogoUrl="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
            />
            <TestimonialCard
              quote="Finally, a software that understands the complexities of haulage. From driver management to invoicing, everything is connected and just works."
              author="David Chen"
              title="Founder, Freightify"
              companyLogoUrl="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
              Built by Experts, For Experts.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              HOSS isn't just software; it's decades of logistics expertise encoded into a platform that anticipates your needs. Our team, seasoned by years on the road and in the office, has built the tool they always wished they had—and now it's yours. We understand the challenges because we've lived them.
            </p>
            <Link to="/demo">
              <Button size="lg">
                Meet the Team & See the Difference
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of logistics companies who have already revolutionized 
            their operations with HOSS. Book your free, personalized demo today.
          </p>
          <Link to="/demo">
            <Button 
              variant="secondary" 
              size="lg" 
              icon={ArrowRight} 
              iconPosition="right"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
            >
              Schedule Your Free Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;