import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Users, Briefcase, Truck, Building, PlusCircle, MinusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

const Pricing: React.FC = () => {
  const [officeUsers, setOfficeUsers] = useState(1);
  const [drivers, setDrivers] = useState(1);
  const [customers, setCustomers] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const costs = {
    office: 30,
    driver: 10,
    customer: 10,
    base: 50,
  };

  // Calculate individual costs
  const officeCost = officeUsers * costs.office;
  const driverCost = drivers * costs.driver;
  const customerCost = customers * costs.customer;

  // Animate individual and total costs
  const animatedOfficeCost = useAnimatedCounter(officeCost);
  const animatedDriverCost = useAnimatedCounter(driverCost);
  const animatedCustomerCost = useAnimatedCounter(customerCost);
  const animatedTotalCost = useAnimatedCounter(totalCost);

  useEffect(() => {
    setTotalCost(officeCost + driverCost + customerCost + costs.base);
  }, [officeCost, driverCost, customerCost, costs.base]);

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

  const Slider = ({ label, value, setValue, min = 0, max, icon: Icon }: { label: string, value: number, setValue: (v: number) => void, min?: number, max: number, icon: React.ElementType }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let numValue = parseInt(e.target.value);
      if (isNaN(numValue)) numValue = min;
      if (numValue > max) numValue = max;
      if (numValue < min) numValue = min;
      setValue(numValue);
    };

    return (
      <div className="space-y-3 group">
        <div className="flex justify-between items-center">
          <label className="font-medium text-gray-700 dark:text-gray-300 flex items-center">
            <Icon className="w-5 h-5 mr-2 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-200" />
            {label}
          </label>
          <input
            type="number"
            value={value}
            onChange={handleInputChange}
            min={min}
            max={max}
            className="w-20 text-right bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg px-2 py-1 font-bold text-lg text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-colors"
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="w-full"
        />
      </div>
    );
  };

  const BarChart = () => {
    const maxCost = costs.base + (50 * costs.office) + (50 * costs.driver) + (100 * costs.customer);
    const costData = [
      { label: 'Base Fee', value: costs.base, color: 'bg-slate-400' },
      { label: 'Office Users', value: animatedOfficeCost, color: 'bg-amber-500' },
      { label: 'Drivers', value: animatedDriverCost, color: 'bg-orange-500' },
      { label: 'Customers', value: animatedCustomerCost, color: 'bg-red-500' },
    ];

    return (
      <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">Cost Breakdown</h4>
        <div className="flex items-end justify-center h-40 space-x-4">
          {costData.map(item => (
            <div key={item.label} className="flex-1 flex flex-col items-center group">
              <div className="relative w-full h-full flex items-end justify-center">
                <div
                  className={`w-3/4 rounded-t-lg ${item.color} transition-all duration-500 ease-out hover:opacity-80`}
                  style={{ height: `${(item.value / maxCost) * 150}%` }}
                >
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-gray-900 text-white text-xs font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    £{item.value.toFixed(2)}
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Simple, Flexible Pricing
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            One powerful plan that scales with your business. No tiers, no hidden fees. Just everything you need to succeed.
          </p>
        </div>
      </section>

      {/* Calculator and Features Section */}
      <section className="py-20 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Calculator */}
            <div className="lg:col-span-3">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-xl opacity-20 animate-pulse-slow"></div>
                <Card className="relative p-6 sm:p-8 sticky top-24" gradient>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Estimate Your Monthly Cost</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                    {/* Sliders */}
                    <div className="space-y-6">
                      <Slider label="Office Users" value={officeUsers} setValue={setOfficeUsers} min={1} max={50} icon={Briefcase} />
                      <Slider label="Drivers" value={drivers} setValue={setDrivers} min={1} max={50} icon={Truck} />
                      <Slider label="Customers" value={customers} setValue={setCustomers} min={0} max={100} icon={Users} />
                    </div>
                    {/* Total Cost Display */}
                    <div className="text-center bg-gray-100 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                        <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">Monthly Total</p>
                        <p className="text-5xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent leading-none">
                            £{animatedTotalCost.toFixed(2)}
                        </p>
                    </div>
                  </div>

                  {/* Cost Breakdown Chart */}
                  <BarChart />
                  
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
              <Card className="p-6 sm:p-8">
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
          <div className="mt-20 sm:mt-24">
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