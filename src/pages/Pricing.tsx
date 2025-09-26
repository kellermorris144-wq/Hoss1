import React, 'useState' from 'react';
import { CheckCircle, ArrowRight, Star, XCircle, Truck, Smartphone, MapPin, FileSignature, Users, BarChart3, PlusCircle, MinusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';

const Pricing: React.FC = () => {
  const [vehicleCount, setVehicleCount] = useState(5);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  const allPlansFeatures = [
    { icon: Truck, text: 'Unlimited Jobs & Orders' },
    { icon: Smartphone, text: 'Mobile App for Drivers' },
    { icon: MapPin, text: 'Real-time GPS Tracking' },
    { icon: FileSignature, text: 'Proof of Delivery (Photo & Sign)' },
    { icon: Users, text: 'Unlimited Admin Users' },
    { icon: BarChart3, text: 'Analytics Dashboard' },
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

  const faqData = [
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be prorated for the current billing cycle.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'We offer a personalized demo to showcase how HOSS can fit your needs. While we don\'t have a self-serve free trial, the demo allows us to tailor the experience to your specific operational challenges.'
    },
    {
      question: 'What does "/ vehicle / month" mean?',
      answer: 'Our pricing is based on the number of active vehicles you are tracking in the system per month. You can add or remove vehicles as your fleet size changes.'
    },
    {
      question: 'Are there any setup fees?',
      answer: 'No, there are no hidden setup fees. The monthly price is all-inclusive for the features listed in your plan. For Enterprise plans, custom implementation services may have associated costs, which will be clearly outlined in your proposal.'
    },
    {
      question: 'What kind of support is included?',
      answer: 'All plans come with 24/7 standard support via email and our help center. The Professional plan includes priority support, and the Enterprise plan includes a dedicated account manager and SLA guarantees for the highest level of service.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-24 animate-background-pan">
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
          {/* Vehicle Count Selector */}
          <div className="mb-24">
            <Card className="max-w-3xl mx-auto p-8" gradient hover>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Calculate Your Price</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Adjust the number of vehicles to see your estimated monthly cost.
                </p>
                <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl inline-flex items-center justify-center space-x-6 border border-gray-200 dark:border-gray-700 shadow-inner">
                  <Button variant="secondary" size="md" onClick={() => setVehicleCount(v => Math.max(1, v - 1))} className="rounded-full w-12 h-12 p-0">
                    <MinusCircle className="w-6 h-6" />
                  </Button>
                  <div className="text-center w-40">
                    <span className="text-6xl font-bold text-amber-600 dark:text-amber-400 tracking-tight">{vehicleCount}</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 uppercase font-medium tracking-wider mt-1">Vehicles</p>
                  </div>
                  <Button variant="secondary" size="md" onClick={() => setVehicleCount(v => v + 1)} className="rounded-full w-12 h-12 p-0">
                    <PlusCircle className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {pricingTiers.map((tier, index) => {
              const isNumericPrice = !isNaN(parseInt(tier.price));
              const monthlyCost = isNumericPrice ? parseInt(tier.price) * vehicleCount : null;

              return (
                <div
                  key={tier.name}
                  className={`relative transition-transform duration-500 animate-float-gentle ${
                    tier.popular ? 'transform lg:-translate-y-6' : ''
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
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
                    className={`relative w-full h-full p-8 flex flex-col transition-all duration-300 group hover:shadow-2xl ${
                      tier.popular ? 'border-amber-500/50 border-2' : ''
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{tier.description}</p>
                    
                    <div className="mb-6 text-center">
                      {tier.price === 'Custom' ? (
                        <span className="text-5xl font-bold text-gray-900 dark:text-gray-100">Custom</span>
                      ) : (
                        <>
                          <div className="flex items-baseline justify-center">
                            <span className="text-2xl font-bold text-gray-500 dark:text-gray-400 mr-1">£</span>
                            <span className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">{monthlyCost}</span>
                          </div>
                          <p className="text-gray-500 dark:text-gray-400">per month</p>
                          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">(£{tier.price} / vehicle)</p>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Included in all plans Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Included in All Plans
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Every HOSS subscription comes packed with powerful core features to run your business efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPlansFeatures.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative p-8 bg-white dark:bg-gray-900 h-full rounded-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/50 rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 text-center">
                    {feature.text}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Compare Plans & Features
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

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
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