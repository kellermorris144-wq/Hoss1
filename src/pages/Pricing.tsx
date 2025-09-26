import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Users, Briefcase, Truck, Building, PlusCircle, MinusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

const Pricing: React.FC = () => {
  const [officeUsers, setOfficeUsers] = useState(0);
  const [drivers, setDrivers] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const costs = {
    office: 30,
    driver: 10,
    customer: 10,
    base: 50,
  };

  useEffect(() => {
    const officeCost = officeUsers * costs.office;
    const driverCost = drivers * costs.driver;
    const customerCost = customers * costs.customer;
    
    setTotalCost(officeCost + driverCost + customerCost + costs.base);
  }, [officeUsers, drivers, customers]);

  const animatedTotalCost = useAnimatedCounter(totalCost, 500);

  const includedFeatures = [
    'Live GPS Tracking & Mapping',
    'Automated Quoting & Invoicing',
    'Multi-Stop Bookings',
    'Digital POD & Document Capture',
    'Vehicle Maintenance Alerts',
    'Accounting Software Integrations',
    'Mobile App for Drivers & Customers',
    'Advanced Analytics & Reporting',
    'Unlimited Admin Users',
    '24/7 Priority Support',
  ];

  const faqData = [
    {
      question: 'What is considered an "Office User"?',
      answer: 'An Office User is anyone on your team who needs to access the HOSS dashboard to manage operations, dispatch drivers, handle invoicing, or view analytics. This typically includes dispatchers, administrators, and managers.'
    },
    {
      question: 'How are "Drivers" and "Customers" defined for billing?',
      answer: 'A "Driver" is any active driver profile in the system that can be assigned to jobs. A "Customer" is a client profile that has access to a portal to track their shipments or manage bookings. You can have unlimited inactive profiles.'
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

  const Slider = ({ label, value, setValue, max, icon: Icon }: { label: string, value: number, setValue: (v: number) => void, max: number, icon: React.ElementType }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let numValue = parseInt(e.target.value);
      if (isNaN(numValue)) {
        numValue = 0;
      }
      if (numValue > max) {
        numValue = max;
      }
      if (numValue < 0) {
        numValue = 0;
      }
      setValue(numValue);
    };

    return (
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="font-medium text-gray-700 dark:text-gray-300 flex items-center">
            <Icon className="w-5 h-5 mr-2 text-amber-600 dark:text-amber-400" />
            {label}
          </label>
          <input
            type="number"
            value={value}
            onChange={handleInputChange}
            min="0"
            max={max}
            className="w-20 text-right bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg px-2 py-1 font-bold text-lg text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-colors"
          />
        </div>
        <input
          type="range"
          min="0"
          max={max}
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="w-full"
        />
      </div>
    );
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Simple, Flexible Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            One powerful plan that scales with your business. No tiers, no hidden fees. Just everything you need to succeed.
          </p>
        </div>
      </section>

      {/* Calculator and Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Calculator */}
            <div className="lg:col-span-3">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-xl opacity-20 animate-pulse-slow"></div>
                <Card className="relative p-8 sticky top-24" gradient>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Estimate Your Monthly Cost</h2>
                  <div className="space-y-8 mb-8">
                    <Slider label="Office Users" value={officeUsers} setValue={setOfficeUsers} max={100} icon={Briefcase} />
                    <Slider label="Drivers" value={drivers} setValue={setDrivers} max={200} icon={Truck} />
                    <Slider label="Customers" value={customers} setValue={setCustomers} max={500} icon={Users} />
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl space-y-3 text-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 transition-colors">
                      <span>Base Fee</span>
                      <span className="font-medium text-gray-800 dark:text-gray-200">£{costs.base.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 transition-colors">
                      <span>Office Users ({officeUsers} x £{costs.office})</span>
                      <span className="font-medium text-gray-800 dark:text-gray-200">£{(officeUsers * costs.office).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 transition-colors">
                      <span>Drivers ({drivers} x £{costs.driver})</span>
                      <span className="font-medium text-gray-800 dark:text-gray-200">£{(drivers * costs.driver).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 transition-colors">
                      <span>Customers ({customers} x £{costs.customer})</span>
                      <span className="font-medium text-gray-800 dark:text-gray-200">£{(customers * costs.customer).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-300 dark:border-gray-700 my-3"></div>
                    <div className="flex justify-between items-center text-xl font-bold text-gray-900 dark:text-gray-100">
                      <span>Estimated Monthly Total</span>
                      <span>£{animatedTotalCost.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Link to="/demo" className="block mt-8">
                    <Button size="lg" className="w-full" icon={ArrowRight} iconPosition="right">
                      Book a Demo
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>

            {/* Features */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Everything You Need, All Included</h3>
                <ul className="space-y-4">
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          {/* Enterprise Note */}
          <div className="mt-24">
            <Card className="p-8 bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-2xl">
              <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6">
                <div className="flex-shrink-0">
                  <Building className="w-16 h-16 text-amber-200" />
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
    </div>
  );
};

export default Pricing;