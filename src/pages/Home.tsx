import React from 'react';
import { ArrowRight, Truck, Clock, Shield, Users, BarChart3, Zap, Database, Warehouse, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import AnimatedBackground from '../components/AnimatedBackground';
import { useTheme } from '../contexts/ThemeContext';
import FeatureShowcase from '../components/FeatureShowcase';
import TestimonialCard from '../components/TestimonialCard';

const Home: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <AnimatedBackground theme={theme} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center" style={{ zIndex: 10 }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 animate-fade-in">
            Orchestrate Your Logistics, Effortlessly.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            HOSS is the all-in-one platform built by logistics experts to streamline operations, slash costs, and deliver unparalleled visibility.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" icon={ArrowRight} iconPosition="right">
                Book a Free Demo
              </Button>
            </Link>
            <Link to="/product">
              <Button variant="outline" size="lg">
                Explore The Platform
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-around items-center gap-8 opacity-60">
            {/* Replace with actual client logos */}
            <p className="font-bold text-2xl">YourLogo</p>
            <p className="font-bold text-2xl">Logistics Inc.</p>
            <p className="font-bold text-2xl">Transport Co.</p>
            <p className="font-bold text-2xl">Freightify</p>
            <p className="font-bold text-2xl">ShipWell</p>
          </div>
        </div>
      </section>

      {/* Feature Showcase Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <FeatureShowcase
            icon={Truck}
            title="Real-Time Tracking & Visibility"
            description="Go beyond dots on a map. Get live ETAs, shareable tracking links, and automated alerts for every shipment, giving you and your customers complete peace of mind."
            imageUrl="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <FeatureShowcase
            icon={Clock}
            title="Instant, Accurate Quoting"
            description="Stop wasting time with spreadsheets. Our intelligent engine generates precise quotes in seconds, factoring in real-time market rates, fuel costs, and vehicle availability."
            imageUrl="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            reverse
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Don't Just Take Our Word For It
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how HOSS is transforming operations for businesses like yours.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="HOSS cut our administrative overhead by 40% in the first three months. The visibility it provides is a game-changer for our customer service."
              author="John Smith"
              title="Operations Director, Logistics Inc."
              companyLogoUrl="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
            />
            <TestimonialCard
              quote="The implementation was seamless. We were up and running in a week, and the team's support has been phenomenal. It feels like they're part of our company."
              author="Sarah Jones"
              title="CEO, Transport Co."
              companyLogoUrl="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
            />
            <TestimonialCard
              quote="Finally, a software that understands the complexities of haulage. From driver management to invoicing, everything is connected and just works."
              author="David Chen"
              title="Founder, Freightify"
              companyLogoUrl="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
            />
          </div>
        </div>
      </section>

      {/* Why HOSS Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
              Built by Experts, For Experts.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              HOSS isn't just software; it's decades of logistics expertise encoded into a platform that anticipates your needs. Our team, seasoned by years on the road and in the office, has built the tool they always wished they had—and now it's yours. We understand the challenges because we've lived them.
            </p>
            <Link to="/demo">
              <Button size="lg">
                Meet the Team & See the Difference
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of logistics companies who have already revolutionized 
            their operations with HOSS. Book your free, personalized demo today.
          </p>
          <Link to="/demo">
            <Button 
              variant="secondary" 
              size="lg" 
              icon={ArrowRight} 
              iconPosition="right"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
            >
              Schedule Your Free Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;