import React from 'react';
import {
  CreditCard,
  Spline,
  BarChart3,
  MapPin,
  FileSignature,
  Search,
  Wrench,
  Palette,
  Smartphone,
  ArrowRight,
} from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: CreditCard,
    title: 'Automated Billing & Payments',
    description: 'Once a job is completed, HOSS automatically generates customer invoices and driver self-bills, helping you streamline your whole accounting process.',
  },
  {
    icon: Spline,
    title: 'Multi-Stop Bookings',
    description: 'Whether you send a booking via our SmartApp or through CX, our system supports multi-stop collection and deliveries for those slightly more complex jobs.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics & BI',
    description: 'HOSS has built-in reporting and statistics to give you a good overview of your activity. Our direct link into BI tools will help with this.',
  },
  {
    icon: MapPin,
    title: 'Live GPS Tracking & Mapping',
    description: 'HOSS is integrated with an excellent mapping system which not only helps plan and route effectively but also gives you complete visibility of your vehicles.',
  },
  {
    icon: FileSignature,
    title: 'Digital POD & Document Capture',
    description: 'Tired of manual paperwork? HOSS provides everything you need to manage PODs and documents in an easy-to-use digital format.',
  },
  {
    icon: Search,
    title: 'Intelligent Address Lookup',
    description: 'Unsure of the full address? Not to worry, we have integrated an address search engine to allow you to quickly find and get the details you require.',
  },
  {
    icon: Wrench,
    title: 'Vehicle Maintenance Alerts',
    description: 'Whether you have a large or small fleet, HOSS will look after all your vehicles, reminding you about what’s due and what actions you need to take.',
  },
  {
    icon: Palette,
    title: 'Branded Customer Portals',
    description: 'Provide a professional, white-labelled experience for your customers with portals that are fully branded with your company logo and colours.',
  },
  {
    icon: Smartphone,
    title: 'CX Mobile App',
    description: 'A native mobile application for drivers and customers with offline capabilities, job management, photo documentation, and digital signatures.',
  },
];

const Features: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Platform Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the comprehensive suite of tools and integrations that make HOSS 
            the most powerful logistics management platform available.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start text-left group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Ready to See It in Action?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Book a free, no-obligation demo with one of our logistics experts to see how these features can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" icon={ArrowRight} iconPosition="right">
                Book Free Demo
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;