import React from 'react';
import { ArrowRight, Truck, Clock, Shield, Users, BarChart3, Zap, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import AnimatedBackground from '../components/AnimatedBackground';

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

  const performanceMetrics = [
    { icon: Zap, metric: '< 200ms', label: 'API Response Time' },
    { icon: BarChart3, metric: '99.99%', label: 'Uptime Guarantee' },
    { icon: Database, metric: '10M+', label: 'Transactions Processed' },
    { icon: Shield, metric: 'ISO 27001', label: 'Certified Security' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <AnimatedBackground />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center" style={{ zIndex: 10 }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 animate-fade-in">
            The Future of Logistics
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            HOSS is the all-in-one platform designed to streamline your haulage operations, reduce costs, and provide unparalleled visibility.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" icon={ArrowRight} iconPosition="right">
                Book a Demo
              </Button>
            </Link>
            <Link to="/product">
              <Button variant="outline" size="lg">
                Explore The Platform
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              An End-to-End Logistics Solution
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform provides everything you need to manage your operations efficiently, from initial quote to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="relative group bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-800">
                <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ zIndex: 0 }}></div>
                <div className="absolute inset-0.5 bg-white dark:bg-gray-900 rounded-lg" style={{ zIndex: 1 }}></div>
                <div className="relative text-center" style={{ zIndex: 2 }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Built for Performance and Scale
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our robust infrastructure ensures reliability and speed, no matter the size of your operation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((item) => (
              <Card key={item.label} hover className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">{item.metric}</div>
                <div className="text-gray-600 dark:text-gray-400">{item.label}</div>
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
              Schedule Your Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;