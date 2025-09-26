import React from 'react';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';

const Pricing: React.FC = () => {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '29',
      description: 'For owner-drivers and small fleets getting started.',
      features: [
        'Live GPS Tracking',
        'Standard Quoting',
        'Digital Invoicing',
        'Basic Reporting',
        'Mobile App Access',
        '24/7 Standard Support',
      ],
      buttonText: 'Get Started',
      variant: 'secondary',
    },
    {
      name: 'Professional',
      price: '49',
      description: 'For growing businesses that need advanced features and automation.',
      features: [
        'Everything in Starter, plus:',
        'Automated Quoting & Invoicing',
        'Multi-Stop Bookings',
        'Document Capture (PODs)',
        'Vehicle Maintenance Alerts',
        'Accounting Integrations',
        'Priority Support',
      ],
      buttonText: 'Choose Professional',
      variant: 'primary',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale operations requiring tailored solutions.',
      features: [
        'Everything in Professional, plus:',
        'Branded Customer Portals',
        'Advanced BI & Analytics',
        'Full API Access',
        'Dedicated Account Manager',
        'Custom Integrations',
        'SLA Guarantees',
      ],
      buttonText: 'Contact Sales',
      variant: 'secondary',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business size and needs. All plans are flexible, scalable, and designed to help you grow.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl transition-all duration-300 group ${
                  tier.popular ? 'transform lg:-translate-y-4' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center justify-center px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-lg">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}
                <Card
                  className={`w-full h-full p-8 flex flex-col transition-all duration-300 group-hover:shadow-2xl ${
                    tier.popular ? 'border-amber-500 border-2' : ''
                  }`}
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{tier.description}</p>
                  
                  <div className="mb-6">
                    {tier.price === 'Custom' ? (
                      <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">Custom</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">£{tier.price}</span>
                        <span className="text-gray-500 dark:text-gray-400">/ vehicle / month</span>
                      </>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link to={tier.name === 'Enterprise' ? '/contact' : '/demo'} className="block">
                      <Button
                        size="lg"
                        variant={tier.variant as 'primary' | 'secondary'}
                        className="w-full"
                      >
                        {tier.buttonText}
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have questions? We've got answers.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We don't offer a traditional free trial. Instead, we provide a free, personalized demo to show you exactly how HOSS can meet your specific needs. This ensures you get the most value from your evaluation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">Can I change my plan later?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely! You can upgrade or downgrade your plan at any time. Our plans are designed to be flexible and scale with your business.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">What kind of support is included?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                All our plans include 24/7 support via email and phone for critical issues. The Professional plan includes priority support, and the Enterprise plan comes with a dedicated account manager for personalized assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Our team is ready to help you find the perfect solution for your business. Get in touch to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" icon={ArrowRight} iconPosition="right">
                Contact Sales
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" size="lg">
                Book a Free Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;