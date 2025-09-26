import React from 'react';
import { CheckCircle, ArrowRight, Star, XCircle } from 'lucide-react';
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
      variant: 'outline',
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
      variant: 'outline',
    },
  ];

  const featureComparison = [
    {
      category: 'Core Features',
      features: [
        { name: 'Live GPS Tracking', starter: true, professional: true, enterprise: true },
        { name: 'Standard Quoting', starter: true, professional: true, enterprise: true },
        { name: 'Digital Invoicing', starter: true, professional: true, enterprise: true },
        { name: 'Mobile App Access', starter: true, professional: true, enterprise: true },
        { name: 'Basic Reporting', starter: true, professional: true, enterprise: true },
      ],
    },
    {
      category: 'Automation & Efficiency',
      features: [
        { name: 'Automated Quoting & Invoicing', starter: false, professional: true, enterprise: true },
        { name: 'Multi-Stop Bookings', starter: false, professional: true, enterprise: true },
        { name: 'Document Capture (PODs)', starter: false, professional: true, enterprise: true },
        { name: 'Vehicle Maintenance Alerts', starter: false, professional: true, enterprise: true },
      ],
    },
    {
      category: 'Advanced & Enterprise',
      features: [
        { name: 'Accounting Integrations', starter: false, professional: true, enterprise: true },
        { name: 'Branded Customer Portals', starter: false, professional: false, enterprise: true },
        { name: 'Advanced BI & Analytics', starter: false, professional: false, enterprise: true },
        { name: 'Full API Access', starter: false, professional: false, enterprise: true },
      ],
    },
    {
      category: 'Support',
      features: [
        { name: '24/7 Standard Support', starter: true, professional: true, enterprise: true },
        { name: 'Priority Support', starter: false, professional: true, enterprise: true },
        { name: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true },
        { name: 'SLA Guarantees', starter: false, professional: false, enterprise: true },
      ],
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
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl transition-all duration-500 group animate-fade-in ${
                  tier.popular ? 'transform lg:-translate-y-6' : 'lg:hover:-translate-y-2'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {tier.popular && (
                  <>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="flex items-center justify-center px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-lg">
                        <Star className="w-4 h-4 mr-2" />
                        Most Popular
                      </div>
                    </div>
                  </>
                )}
                <Card
                  className={`relative w-full h-full p-8 flex flex-col transition-all duration-300 ${
                    tier.popular ? 'border-amber-500/50 border-2' : ''
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
                    {tier.features.slice(0, 6).map((feature, index) => (
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
                        variant={tier.variant as 'primary' | 'outline'}
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

      {/* Feature Comparison Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Compare Plans
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Find the perfect set of features for your business needs.
            </p>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="min-w-[1024px]">
              {/* Header */}
              <div className="grid grid-cols-4 gap-4 p-4 sticky top-16 bg-gray-100 dark:bg-gray-900 z-10 rounded-t-xl">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Features</h3>
                {pricingTiers.map(tier => (
                  <div key={tier.name} className="text-center">
                    <h3 className={`text-lg font-semibold ${tier.popular ? 'text-amber-600 dark:text-amber-400' : 'text-gray-900 dark:text-gray-100'}`}>{tier.name}</h3>
                  </div>
                ))}
              </div>

              {/* Body */}
              <div className="bg-white dark:bg-gray-900/50 rounded-b-xl shadow-md">
                {featureComparison.map(category => (
                  <div key={category.category} className="border-t border-gray-200 dark:border-gray-700">
                    <div className="py-3 px-4 bg-gray-50 dark:bg-gray-800/50">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">{category.category}</h4>
                    </div>
                    {category.features.map((feature, idx) => (
                      <div key={feature.name} className="grid grid-cols-4 gap-4 p-4 items-center transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature.name}</span>
                        {[feature.starter, feature.professional, feature.enterprise].map((hasFeature, planIndex) => (
                          <div key={planIndex} className="flex justify-center items-center">
                            {hasFeature ? (
                              <CheckCircle className="w-6 h-6 text-green-500 animate-pop-in" style={{ animationDelay: `${idx * 30}ms` }} />
                            ) : (
                              <XCircle className="w-6 h-6 text-gray-300 dark:text-gray-600" />
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
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