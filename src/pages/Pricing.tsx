import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Building, PlusCircle, MinusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import PricingCalculator from '../components/PricingCalculator';

const Pricing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const includedFeatures = [
    'Live GPS Tracking & Mapping',
    'Automated Quoting & Invoicing',
    'Multi-Stop Bookings',
    'Digital POD & Document Capture',
    'Vehicle Maintenance Alerts',
    'Accounting Software Integrations',
    'Mobile App for Drivers',
    'Advanced Analytics & Reporting',
    '24/7 Priority Support',
    'Branded Customer Portals',
    'Unlimited Jobs & Users',
    'Secure Cloud Storage',
  ];

  const faqData = [
    {
      question: 'What is considered an "Office User"?',
      answer: 'An Office User is anyone on your team who needs to access the HOSS dashboard to manage operations, dispatch drivers, handle invoicing, or view analytics. This typically includes dispatchers, administrators, and managers.'
    },
    {
      question: 'How are "Drivers" and "Customers" defined for billing?',
      answer: 'A "Driver" is any active driver profile in the system that can be assigned to jobs. A "Customer" is a client profile that has access to a portal to track their shipments or manage bookings.'
    },
    {
      question: 'Is the pricing really all-inclusive?',
      answer: 'Yes, the price you calculate is what you pay. It includes all features, unlimited jobs, full support, and regular software updates. There are no hidden fees or setup costs.'
    },
    {
      question: 'What if my team size changes?',
      answer: 'Our model is flexible. You can easily adjust the number of users in your account settings at any time. Your billing will be automatically prorated for the current cycle.'
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-900 py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 dark:from-amber-500/10 dark:to-orange-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            One powerful plan that scales with your business. No tiers, no hidden fees, no feature gates. Just everything you need to succeed.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 sm:py-24 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCalculator />
        </div>
      </section>

      {/* All-in-One Plan Section */}
      <section className="py-20 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              The All-in-One Plan
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Every HOSS subscription comes fully loaded with all the features you need to run and scale your business.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
            {includedFeatures.map((feature) => (
              <div key={feature} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Note */}
      <section className="bg-white dark:bg-gray-900 pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-2xl">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6">
              <div className="flex-shrink-0">
                <Building className="w-12 h-12 md:w-16 md:h-16 text-amber-200" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Need a solution for 50+ users?</h3>
                <p className="text-amber-100">
                  We offer negotiable pricing and dedicated enterprise support for larger teams. 
                  Contact our sales team to discuss a custom package tailored to your business.
                </p>
              </div>
              <div className="flex-shrink-0 mt-4 md:mt-0">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-amber-700 hover:bg-slate-100 font-bold shadow-lg transform hover:scale-105">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left font-semibold text-gray-900 dark:text-gray-100"
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? (
                    <MinusCircle className="w-6 h-6 text-amber-600" />
                  ) : (
                    <PlusCircle className="w-6 h-6 text-gray-500" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;