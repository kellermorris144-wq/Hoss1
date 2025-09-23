import React from 'react';
import { ExternalLink, CheckCircle, ArrowRight } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Integrations: React.FC = () => {
  const integrations = [
    {
      name: 'Courier Exchange',
      category: 'Freight Networks',
      description: 'Connect with the UK\'s largest courier and freight exchange platform for expanded capacity and coverage.',
      logo: 'https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      features: ['Load matching', 'Rate comparison', 'Automated bidding', 'Performance tracking'],
      status: 'Available',
    },
    {
      name: 'Sage Accounting',
      category: 'Financial Management',
      description: 'Seamlessly sync invoices, payments, and financial data with Sage accounting systems.',
      logo: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      features: ['Invoice sync', 'Payment tracking', 'Financial reporting', 'Tax compliance'],
      status: 'Available',
    },
    {
      name: 'QuickBooks',
      category: 'Financial Management',
      description: 'Connect your logistics operations with QuickBooks for streamlined financial management.',
      logo: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      features: ['Real-time sync', 'Expense tracking', 'Profit analysis', 'Cash flow management'],
      status: 'Available',
    },
    {
      name: 'Google Maps Platform',
      category: 'Navigation & Tracking',
      description: 'Advanced routing, geocoding, and real-time tracking powered by Google Maps.',
      logo: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      features: ['Route optimization', 'Real-time tracking', 'ETA calculations', 'Geocoding services'],
      status: 'Available',
    },
    {
      name: 'Stripe Payments',
      category: 'Payment Processing',
      description: 'Secure payment processing with support for multiple payment methods and currencies.',
      logo: 'https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      features: ['Card payments', 'Bank transfers', 'Multi-currency', 'Fraud protection'],
      status: 'Available',
    },
    {
      name: 'Slack',
      category: 'Communication',
      description: 'Get real-time notifications and updates directly in your Slack workspace.',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      features: ['Job notifications', 'Status updates', 'Team communication', 'Alert management'],
      status: 'Available',
    },
    {
      name: 'Microsoft Teams',
      category: 'Communication',
      description: 'Integrate with Microsoft Teams for seamless collaboration and notifications.',
      logo: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      features: ['Team notifications', 'File sharing', 'Meeting integration', 'Workflow automation'],
      status: 'Available',
    },
    {
      name: 'Zapier',
      category: 'Automation',
      description: 'Connect HOSS with 5,000+ apps through Zapier\'s automation platform.',
      logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      features: ['Workflow automation', '5000+ app connections', 'Custom triggers', 'Data synchronization'],
      status: 'Available',
    },
    {
      name: 'Amazon Connect',
      category: 'Customer Service',
      description: 'Integrate customer service operations with Amazon\'s cloud contact center.',
      logo: 'https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      features: ['Call routing', 'IVR integration', 'Analytics', 'Queue management'],
      status: 'Coming Soon',
    },
  ];

  const categories = [...new Set(integrations.map(integration => integration.category))];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Seamless Integrations
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Connect HOSS with your existing tools and platforms. Our extensive integration 
            ecosystem ensures seamless workflow automation across your entire operation.
          </p>
          <div className="flex justify-center">
            <Link to="/demo">
              <Button size="lg" icon={ArrowRight} iconPosition="right">
                Request Custom Integration
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <div 
                key={category} 
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="pb-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration) => (
              <Card key={integration.name} hover className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={integration.logo} 
                      alt={integration.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {integration.name}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        {integration.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {integration.status === 'Available' ? (
                      <div className="flex items-center text-green-600 text-xs">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Available
                      </div>
                    ) : (
                      <div className="text-yellow-600 text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900 rounded">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {integration.description}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {integration.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {integration.status === 'Available' && (
                  <button className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-amber-600 hover:text-amber-700 hover:bg-amber-50 dark:hover:bg-amber-900/50 transition-colors rounded-lg border border-amber-200 dark:border-amber-800">
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Integration CTA */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Need a Custom Integration?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Don't see your preferred platform listed? Our development team can create 
            custom integrations tailored to your specific business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg">
                Discuss Custom Integration
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Technical Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;