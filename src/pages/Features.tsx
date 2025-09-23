import React, { useState, useEffect } from 'react';
import {
  CreditCard,
  BarChart3,
  MapPin,
  FileSignature,
  Smartphone,
  ArrowRight,
  Truck,
  Route,
  Navigation,
  ShieldCheck,
  LayoutTemplate,
} from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const AnimatedMap = () => {
  const trucks = [
    { id: 'HOSS-07', driver: 'Sarah J.', status: 'On Time', path: 'M 50 200 Q 150 150 250 200 T 450 200', duration: '10s', color: 'text-blue-600' },
    { id: 'HOSS-11', driver: 'Mike P.', status: 'In Transit', path: 'M 80 70 Q 180 120 280 70 T 480 70', duration: '12s', color: 'text-green-600' },
  ];

  return (
    <div className="relative w-full h-full p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50 dark:opacity-100"></div>
      <div className="relative w-full h-full bg-slate-200/50 dark:bg-slate-900/50 rounded-lg">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 250" preserveAspectRatio="none">
          {/* Paths for trucks */}
          <path id="route1" d="M 50 200 Q 150 150 250 200 T 450 200" stroke="currentColor" className="text-blue-500/50 dark:text-blue-500/30" strokeWidth="2" fill="none" strokeDasharray="5 5" />
          <path id="route2" d="M 80 70 Q 180 120 280 70 T 480 70" stroke="currentColor" className="text-green-500/50 dark:text-green-500/30" strokeWidth="2" fill="none" strokeDasharray="5 5" />
          
          {/* Location Pins */}
          <foreignObject x="240" y="115" width="24" height="24">
            <MapPin className="w-6 h-6 text-red-500 animate-pulse" />
          </foreignObject>

          {/* Moving Trucks with Tooltips */}
          {trucks.map((truck, index) => (
            <g key={truck.id} className="group">
              <foreignObject x="-14" y="-14" width="28" height="28">
                <Truck className={`w-7 h-7 ${truck.color} transition-transform duration-300 group-hover:scale-125`} />
                <animateMotion dur={truck.duration} repeatCount="indefinite" rotate="auto">
                  <mpath xlinkHref={`#route${index + 1}`} />
                </animateMotion>
              </foreignObject>
              
              {/* Tooltip */}
              <foreignObject x="-60" y="-75" width="120" height="60" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                 <div className="p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-lg text-center">
                    <p className="font-bold text-xs text-slate-800 dark:text-slate-200">{truck.id}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{truck.driver}</p>
                    <p className={`text-xs font-semibold ${truck.status === 'On Time' ? 'text-green-500' : 'text-blue-500'}`}>{truck.status}</p>
                 </div>
                 <animateMotion dur={truck.duration} repeatCount="indefinite" rotate="auto">
                  <mpath xlinkHref={`#route${index + 1}`} />
                </animateMotion>
              </foreignObject>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

const AnimatedInvoice = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [total, setTotal] = useState(0);
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    const animateValue = (setter: React.Dispatch<React.SetStateAction<number>>, end: number, duration: number, delay: number = 0) => {
      const timeoutId = setTimeout(() => {
        let start = 0;
        const range = end - start;
        let current = start;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            current = end;
            clearInterval(timer);
          }
          setter(current);
        }, 16);
        return () => clearInterval(timer);
      }, delay);
      return () => clearTimeout(timeoutId);
    };

    const finalSubtotal = 925.00;
    const finalVat = finalSubtotal * 0.20;
    const finalTotal = finalSubtotal + finalVat;

    const cleanupSubtotal = animateValue(setSubtotal, finalSubtotal, 800, 200);
    const cleanupVat = animateValue(setVat, finalVat, 800, 500);
    const cleanupTotal = animateValue(setTotal, finalTotal, 1000, 700);

    const paidTimer = setTimeout(() => {
      setIsPaid(true);
    }, 2000);

    return () => {
      cleanupSubtotal();
      cleanupVat();
      cleanupTotal();
      clearTimeout(paidTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-full p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center group overflow-hidden">
      <div className="w-full max-w-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105 relative">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <Truck className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-lg text-slate-800 dark:text-slate-200">HOSS</span>
          </div>
          <h3 className="text-xl font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Invoice</h3>
        </div>

        {/* Body */}
        <div className="p-4">
          {/* Details */}
          <div className="grid grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-400 mb-6">
            <div>
              <p className="font-bold text-slate-700 dark:text-slate-300 mb-1">Billed To:</p>
              <p>Global Logistics Inc.</p>
              <p>123 Supply Chain Ave.</p>
              <p>London, E1 6AN</p>
            </div>
            <div className="text-right">
              <p><span className="font-bold text-slate-700 dark:text-slate-300">Invoice #:</span> INV-0452</p>
              <p><span className="font-bold text-slate-700 dark:text-slate-300">Date:</span> 23/09/2025</p>
              <p><span className="font-bold text-slate-700 dark:text-slate-300">Due:</span> 23/10/2025</p>
            </div>
          </div>

          {/* Line Items Table */}
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 pb-1 text-xs uppercase">
              <span>Description</span>
              <span>Amount</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-300">
              <span>Haulage Fee</span>
              <span>£850.00</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-300">
              <span>Fuel Surcharge</span>
              <span>£75.00</span>
            </div>
          </div>

          {/* Totals */}
          <div className="space-y-1 text-sm font-mono text-right border-t border-slate-200 dark:border-slate-700 pt-2">
            <div className="flex justify-end items-baseline">
              <span className="text-slate-500 dark:text-slate-400 mr-4">Subtotal</span>
              <span className="font-medium text-slate-800 dark:text-slate-200 w-24">£{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-end items-baseline">
              <span className="text-slate-500 dark:text-slate-400 mr-4">VAT (20%)</span>
              <span className="font-medium text-slate-800 dark:text-slate-200 w-24">£{vat.toFixed(2)}</span>
            </div>
            <div className="flex justify-end items-baseline font-bold text-base mt-2">
              <span className="text-slate-800 dark:text-slate-200 mr-4">Total</span>
              <span className="text-slate-800 dark:text-slate-200 w-24">£{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Status Stamp */}
        {isPaid && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="border-4 border-green-500 text-green-500 rounded-full w-32 h-32 flex items-center justify-center font-bold text-3xl uppercase transform -rotate-12 animate-scale-in-stamp">
              Paid
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main highlighted features with detailed descriptions and visuals
const highlightedFeatures = [
  {
    icon: MapPin,
    title: 'Live GPS Tracking & Mapping',
    description: 'Gain complete operational oversight with our real-time GPS tracking. HOSS integrates a state-of-the-art mapping system to help you plan routes, monitor vehicle progress, and provide customers with accurate ETAs. Reduce idle time, improve fuel efficiency, and enhance driver safety with a live, interactive fleet map.',
    visual: AnimatedMap,
  },
  {
    icon: CreditCard,
    title: 'Automated Billing & Payments',
    description: 'Accelerate your cash flow and eliminate administrative headaches. Once a job is marked complete, HOSS automatically generates professional customer invoices and driver self-bills. Track payment statuses in real-time and integrate with popular accounting software to streamline your entire financial workflow.',
    visual: AnimatedInvoice,
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics & BI',
    description: 'Make data-driven decisions with powerful insights. HOSS provides built-in reporting and statistics for a clear overview of your activity, from fleet performance to profitability per job. For deeper analysis, connect directly to your favorite Business Intelligence tools and unlock the full potential of your operational data.',
    visual: () => (
      <div className="relative w-full h-full p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 group">
        <div className="w-full h-full bg-white dark:bg-slate-800 rounded-lg p-4 shadow-inner flex flex-col space-y-4">
          <h3 className="font-bold text-slate-800 dark:text-slate-200">Performance Dashboard</h3>
          <div className="flex-grow flex items-end justify-between space-x-2 px-2">
            <div className="w-1/4 h-[40%] bg-blue-400 rounded-t-md transition-all duration-300 group-hover:bg-blue-500 animate-grow-bar" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-1/4 h-[60%] bg-blue-400 rounded-t-md transition-all duration-300 group-hover:bg-blue-500 animate-grow-bar" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1/4 h-[50%] bg-blue-400 rounded-t-md transition-all duration-300 group-hover:bg-blue-500 animate-grow-bar" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-1/4 h-[80%] bg-blue-400 rounded-t-md transition-all duration-300 group-hover:bg-blue-500 animate-grow-bar" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="p-2 bg-slate-100 dark:bg-slate-900/50 rounded-md">
              <p className="text-xs text-slate-500 dark:text-slate-400">On-Time Rate</p>
              <p className="font-bold text-lg text-green-500">98.7%</p>
            </div>
            <div className="p-2 bg-slate-100 dark:bg-slate-900/50 rounded-md">
              <p className="text-xs text-slate-500 dark:text-slate-400">Fleet Utilization</p>
              <p className="font-bold text-lg text-blue-500">82%</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

// Other features for the grid
const otherFeatures = [
  {
    icon: Route,
    title: 'Multi-Stop Bookings',
    description: 'Easily manage complex jobs with multi-stop collection and delivery capabilities, whether booked via our app or CX.',
  },
  {
    icon: FileSignature,
    title: 'Digital POD & Document Capture',
    description: 'Go paperless. Manage PODs and other crucial documents in a secure, easy-to-use digital format.',
  },
  {
    icon: Navigation,
    title: 'Intelligent Address Lookup',
    description: 'Save time and reduce errors with our integrated address search engine that quickly finds and verifies locations.',
  },
  {
    icon: ShieldCheck,
    title: 'Vehicle Maintenance Alerts',
    description: 'Stay ahead of maintenance with automated reminders for your entire fleet, ensuring compliance and safety.',
  },
  {
    icon: LayoutTemplate,
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

      {/* Highlighted Features */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {highlightedFeatures.map((feature, index) => (
              <div key={feature.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`lg:order-${index % 2 === 1 ? '2' : '1'}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-xl mb-4">
                    <feature.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{feature.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">{feature.description}</p>
                </div>
                <div className={`lg:order-${index % 2 === 1 ? '1' : '2'} h-80`}>
                  <feature.visual />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Features Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Comprehensive Feature Set
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We've packed HOSS with every tool you need to run a modern, efficient, and profitable logistics business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherFeatures.map((feature) => (
              <div key={feature.title} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative p-8 bg-white dark:bg-gray-900 h-full rounded-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
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