import React from 'react';
import { ArrowRight, CheckCircle, Truck, Clock, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import AnimatedBackground from '../components/AnimatedBackground';
import FloatingElements from '../components/FloatingElements';

const Home: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: 'Real-Time Tracking',
      description: 'Live ETA updates and full visibility of your shipments from pickup to delivery.',
    },
    {
      icon: Clock,
      title: 'Instant Quotes',
      description: 'Get accurate pricing in seconds with our intelligent quoting system.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.',
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Dedicated customer success team available around the clock.',
    },
  ];

  const benefits = [
    'Save 40% on logistics costs',
    'Reduce manual processes by 80%',
    'Improve delivery times by 25%',
    'Complete visibility across operations',
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 min-h-screen flex items-center">
        <AnimatedBackground />
        <FloatingElements />
        
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/1 via-purple-500/1 to-emerald-500/1 animate-gradient-shift" style={{ zIndex: 3 }}></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-gray-200/2 to-blue-200/3 animate-gradient-shift-reverse" style={{ zIndex: 3 }}></div>
        
        {/* Complex geometric shapes */}
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-200/3 to-blue-200/2 rounded-lg rotate-45 animate-morph" style={{ zIndex: 3 }}></div>
        <div className="absolute top-1/2 left-1/6 w-40 h-40 border border-emerald-200/4 transform rotate-12 animate-float-medium" style={{ zIndex: 3 }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 right-1/3 w-2 h-2 bg-blue-400/8 rounded-full animate-twinkle" style={{ zIndex: 4 }}></div>
        <div className="absolute top-1/3 left-1/5 w-1.5 h-1.5 bg-purple-400/6 rounded-full animate-twinkle-delayed" style={{ zIndex: 4 }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-2.5 h-2.5 bg-emerald-400/7 rounded-full animate-twinkle-slow" style={{ zIndex: 4 }}></div>
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 bg-amber-400/5 rounded-full animate-twinkle" style={{ zIndex: 4 }}></div>
        
        {/* Wave effects */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-100/8 to-transparent animate-wave" style={{ zIndex: 3 }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" style={{ zIndex: 10 }}>
          <div className="text-center">
            <div className="relative">
              {/* Subtle text shadow */}
              <div className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent blur-sm opacity-5">
                HOSS
              </div>
              <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 animate-fade-in">
                HOSS
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl text-gray-700 dark:text-gray-300">Haulage One Stop Solutions</span>
              </h1>
            </div>
            
            {/* Animated underline */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl"></div>
              <p className="relative text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed p-6">
                Transform your logistics operations with our comprehensive customer portal. 
                Streamline processes, reduce costs, and gain complete visibility over your haulage operations.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-5 group-hover:opacity-15 transition duration-500"></div>
                <Link to="/demo" className="relative">
                  <Button size="lg" icon={ArrowRight} iconPosition="right" className="transform hover:scale-102 transition-all duration-200">
                    Book Free Demo
                  </Button>
                </Link>
              </div>
              <div className="relative group">
                <Link to="/product">
                  <Button variant="outline" size="lg" className="backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 border-2 border-gray-300 hover:border-blue-500 transform hover:scale-102 transition-all duration-200">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg"></div>
              <div className="relative flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400 p-4">
                {benefits.map((benefit, index) => (
                  <div key={benefit} className={`flex items-center animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Professional Logistics Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive logistics management platform designed for modern haulage operations
              with enterprise-grade reliability and industry-leading features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} hover className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of logistics companies who have already revolutionized 
            their operations with HOSS. Book your free face-to-face demo today.
          </p>
          <Link to="/demo">
            <Button 
              variant="secondary" 
              size="lg" 
              icon={ArrowRight} 
              iconPosition="right"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
            >
              Schedule Your Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;