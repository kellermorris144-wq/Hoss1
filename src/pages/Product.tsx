import React from 'react';
import { Monitor, Smartphone, FileText, MapPin, Palette, BarChart3 } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Product: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Instant Quotes & Booking',
      description: 'Get accurate quotes in seconds and book loads instantly through our intuitive portal.',
      benefits: ['Automated pricing calculations', 'Real-time availability', 'Instant confirmation'],
    },
    {
      icon: MapPin,
      title: 'Live ETA Tracking',
      description: 'Real-time GPS tracking with accurate ETA updates for complete shipment visibility.',
      benefits: ['GPS-powered tracking', 'Automated notifications', 'Customer portal access'],
    },
    {
      icon: FileText,
      title: 'Digital Invoicing',
      description: 'Streamlined invoicing system with automated generation and payment tracking.',
      benefits: ['Automated invoice generation', 'Payment status tracking', 'Digital receipt management'],
    },
    {
      icon: Palette,
      title: 'Branded Customer Portals',
      description: 'Fully customizable portals with your company branding and colors.',
      benefits: ['Custom logo integration', 'Brand color schemes', 'Personalized messaging'],
    },
    {
      icon: Smartphone,
      title: 'CX Mobile App Integration',
      description: 'Seamless integration with our mobile app for drivers and customers.',
      benefits: ['Driver mobile access', 'Customer notifications', 'Photo documentation'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Comprehensive reporting and analytics to optimize your operations.',
      benefits: ['Performance dashboards', 'Cost analysis reports', 'Trend identification'],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              The All-in-One Logistics Platform
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              HOSS provides a comprehensive customer portal that puts you in complete control 
              of your haulage operations. From quotes to delivery, everything is in one place.
            </p>
            <div className="flex justify-center">
              <Link to="/demo">
                <Button size="lg">
                  See It In Action
                </Button>
              </Link>
            </div>
          </div>

          {/* Product Overview */}
          <Card className="p-8 mb-16" gradient>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  All-in-One Solution
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Our customer portal brings together every aspect of your logistics workflow 
                  into a single, intuitive platform. Save time, reduce costs, and improve 
                  customer satisfaction with automated processes and real-time visibility.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <Monitor className="w-5 h-5 text-blue-600 mr-3" />
                    Web-based portal accessible anywhere
                  </li>
                  <li className="flex items-center">
                    <Smartphone className="w-5 h-5 text-blue-600 mr-3" />
                    Mobile-responsive design
                  </li>
                  <li className="flex items-center">
                    <Palette className="w-5 h-5 text-blue-600 mr-3" />
                    Fully customizable branding
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-bold">40%</span>
                    </div>
                    <span>Cost Reduction</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-bold">80%</span>
                    </div>
                    <span>Process Automation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-bold">99%</span>
                    </div>
                    <span>Customer Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Every tool you need to streamline your logistics operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} hover className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Experience HOSS Today
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Ready to see how our customer portal can transform your logistics operations? 
            Book a free, personalized demo with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg">
                Book Free Demo
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" size="lg">
                Explore All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;