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
import Card from '../components/Card';

const features = [
  {
    icon: MapPin,
    title: 'Live GPS Tracking & Mapping',
    description: 'Gain complete operational oversight with our real-time GPS tracking, route planning, and accurate ETAs to improve efficiency and safety.',
  },
  {
    icon: CreditCard,
    title: 'Automated Billing & Payments',
    description: 'Accelerate your cash flow. HOSS automatically generates customer invoices and driver self-bills the moment a job is complete.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics & BI',
    description: 'Make data-driven decisions with powerful insights into fleet performance, profitability, and operational efficiency.',
  },
  {
    icon: Spline,
    title: 'Multi-Stop Bookings',
    description: 'Easily manage complex jobs with multi-stop collection and delivery capabilities, whether booked via our app or CX.',
  },
  {
    icon: FileSignature,
    title: 'Digital POD & Document Capture',
    description: 'Go paperless. Manage PODs and other crucial documents in a secure, easy-to-use digital format, accessible anywhere.',
  },
  {
    icon: Search,
    title: 'Intelligent Address Lookup',
    description: 'Save time and reduce errors with our integrated address search engine that quickly finds and verifies locations.',
  },
  {
    icon: Wrench,
    title: 'Vehicle Maintenance Alerts',
    description: 'Stay ahead of maintenance with automated reminders for your entire fleet, ensuring compliance and safety.',
  },
  {
    icon: Palette,
    title: 'Branded Customer Portals',
    description: 'Deliver a professional, white-labelled experience with customer portals fully branded to your company.',
  },
  {
    icon: Smartphone,
    title: 'CX Mobile App',
    description: 'Empower drivers and customers with a native mobile app for job management, photo capture, and digital signatures.',
  },
];

const Features: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            An End-to-End Logistics Platform
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            HOSS is more than just software; it's a complete solution designed to streamline every aspect of your logistics operations, from first mile to final invoice.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="p-8 text-left" hover gradient>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-6 text-white shadow-lg">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
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