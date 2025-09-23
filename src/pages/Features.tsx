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
  Truck,
} from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

// Main highlighted features with detailed descriptions and visuals
const highlightedFeatures = [
  {
    icon: MapPin,
    title: 'Live GPS Tracking & Mapping',
    description: 'Gain complete operational oversight with our real-time GPS tracking. HOSS integrates a state-of-the-art mapping system to help you plan routes, monitor vehicle progress, and provide customers with accurate ETAs. Reduce idle time, improve fuel efficiency, and enhance driver safety with a live, interactive fleet map.',
    visual: () => (
      <Card className="p-6 h-full flex items-center justify-center bg-slate-50 dark:bg-slate-800/50" hover>
        <div className="w-full h-64 bg-slate-200 dark:bg-slate-900/70 rounded-lg relative overflow-hidden">
          {/* Map background elements */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-300 dark:bg-slate-700/50 -translate-y-1/2"></div>
          <div className="absolute top-1/4 left-1/2 w-3/4 h-0.5 bg-slate-300 dark:bg-slate-700/50 -translate-x-1/2 rotate-12"></div>
          <div className="absolute top-0 bottom-0 left-1/3 w-0.5 bg-slate-300 dark:bg-slate-700/50 -translate-x-1/2"></div>
          {/* Animated trucks */}
          <Truck className="w-8 h-8 text-blue-500 absolute top-[20%] left-[10%] animate-float-horizontal" />
          <Truck className="w-8 h-8 text-green-500 absolute top-[60%] left-[70%] animate-float-slow" />
          <MapPin className="w-6 h-6 text-red-500 absolute top-[40%] left-[50%] animate-pulse" />
          <div className="absolute bottom-4 right-4 p-2 bg-white/80 dark:bg-slate-900/80 rounded-lg shadow-md text-xs font-semibold">
            3 Vehicles Online
          </div>
        </div>
      </Card>
    ),
  },
  {
    icon: CreditCard,
    title: 'Automated Billing & Payments',
    description: 'Accelerate your cash flow and eliminate administrative headaches. Once a job is marked complete, HOSS automatically generates professional customer invoices and driver self-bills. Track payment statuses in real-time and integrate with popular accounting software to streamline your entire financial workflow.',
    visual: () => (
      <Card className="p-6 h-full flex items-center justify-center bg-slate-50 dark:bg-slate-800/50" hover>
        <div className="w-full max-w-sm">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 shadow-lg">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold text-slate-800 dark:text-slate-200">Invoice #INV-0452</h4>
              <span className="px-2 py-1 text-xs font-semibold rounded-full text-green-800 bg-green-100 dark:text-green-100 dark:bg-green-900/50">
                Paid
              </span>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between"><span className="text-slate-500 dark:text-slate-400">Haulage Fee</span><span className="font-medium">£850.00</span></div>
              <div className="flex justify-between"><span className="text-slate-500 dark:text-slate-400">Fuel Surcharge</span><span className="font-medium">£75.00</span></div>
              <div className="w-full h-px bg-slate-200 dark:bg-slate-700 my-2"></div>
              <div className="flex justify-between font-bold text-base"><span className="text-slate-800 dark:text-slate-200">Total</span><span>£925.00</span></div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 shadow-lg mt-4 -mr-8 ml-8 transform rotate-3">
             <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold text-slate-800 dark:text-slate-200">Invoice #INV-0451</h4>
              <span className="px-2 py-1 text-xs font-semibold rounded-full text-yellow-800 bg-yellow-100 dark:text-yellow-100 dark:bg-yellow-900/50">
                Pending
              </span>
            </div>
          </div>
        </div>
      </Card>
    ),
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics & BI',
    description: 'Make data-driven decisions with powerful insights. HOSS provides built-in reporting and statistics for a clear overview of your activity, from fleet performance to profitability per job. For deeper analysis, connect directly to your favorite Business Intelligence tools and unlock the full potential of your operational data.',
    visual: () => (
       <Card className="p-6 h-full flex items-center justify-center bg-slate-50 dark:bg-slate-800/50" hover>
        <div className="w-full h-64 flex space-x-4">
          <div className="w-2/3 bg-slate-200 dark:bg-slate-900/70 rounded-lg p-4 flex flex-col justify-between">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Revenue (Monthly)</h4>
            <div className="flex-grow flex items-end justify-between space-x-2">
              <div className="w-1/4 h-[40%] bg-blue-500 rounded-t-md animate-grow-bar" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-1/4 h-[60%] bg-blue-500 rounded-t-md animate-grow-bar" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1/4 h-[50%] bg-blue-500 rounded-t-md animate-grow-bar" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-1/4 h-[80%] bg-blue-500 rounded-t-md animate-grow-bar" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
          <div className="w-1/3 bg-slate-200 dark:bg-slate-900/70 rounded-lg p-4 flex flex-col justify-center items-center">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-2">On-Time Rate</h4>
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path className="text-slate-300 dark:text-slate-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                <path className="text-green-500" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-slate-800 dark:text-slate-200">98%</div>
            </div>
          </div>
        </div>
      </Card>
    ),
  },
];

// Other features for the grid
const otherFeatures = [
  {
    icon: Spline,
    title: 'Multi-Stop Bookings',
    description: 'Easily manage complex jobs with multi-stop collection and delivery capabilities, whether booked via our app or CX.',
  },
  {
    icon: FileSignature,
    title: 'Digital POD & Document Capture',
    description: 'Go paperless. Manage PODs and other crucial documents in a secure, easy-to-use digital format.',
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

      {/* Highlighted Features */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {highlightedFeatures.map((feature, index) => (
              <div key={feature.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`lg:order-${index % 2 === 1 ? '2' : '1'}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-xl mb-4">
                    <feature.icon className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{feature.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">{feature.description}</p>
                </div>
                <div className={`lg:order-${index % 2 === 1 ? '1' : '2'}`}>
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
              <Card key={feature.title} className="p-8 text-center" hover>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-2xl mb-6">
                  <feature.icon className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </Card>
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