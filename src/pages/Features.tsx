import React from 'react';
import { Smartphone, Globe, Zap, Shield, Users, BarChart3, Bell, CreditCard } from 'lucide-react';
import Card from '../components/Card';

const Features: React.FC = () => {
  const coreFeatures = [
    {
      icon: Smartphone,
      title: 'CX Mobile App',
      description: 'Native mobile application for drivers and customers with offline capabilities.',
      details: [
        'Driver job management',
        'Photo documentation',
        'Digital signatures',
        'Offline functionality',
        'Push notifications',
        'Route optimization'
      ],
    },
    {
      icon: Globe,
      title: 'Courier Exchange Integration',
      description: 'Seamless integration with major courier networks and freight exchanges.',
      details: [
        'Multi-platform connectivity',
        'Automated load matching',
        'Rate comparison',
        'Bid management',
        'Performance tracking',
        'Network optimization'
      ],
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Intelligent automation that reduces manual work and improves efficiency.',
      details: [
        'Smart quote generation',
        'Automated dispatching',
        'Invoice processing',
        'Status updates',
        'Exception handling',
        'Compliance checks'
      ],
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with comprehensive audit trails and compliance.',
      details: [
        'End-to-end encryption',
        'Multi-factor authentication',
        'Role-based access control',
        'Audit logging',
        'GDPR compliance',
        'ISO 27001 certified'
      ],
    },
    {
      icon: Users,
      title: 'Multi-Tenant Architecture',
      description: 'Support for multiple customers with isolated data and custom branding.',
      details: [
        'Tenant isolation',
        'Custom branding',
        'User management',
        'Permission controls',
        'White-label options',
        'Scalable infrastructure'
      ],
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and business intelligence tools.',
      details: [
        'Real-time dashboards',
        'Custom reports',
        'Predictive analytics',
        'Performance metrics',
        'Cost optimization',
        'Trend analysis'
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Intelligent notification system that keeps everyone informed.',
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Integrated payment gateway with multiple payment methods.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Platform Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the comprehensive suite of tools and integrations that make HOSS 
            the most powerful logistics management platform available.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Core Platform Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Essential tools that power your logistics operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature) => (
              <Card key={feature.title} hover className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Built on Modern Technology
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Cutting-edge infrastructure for maximum performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-8" gradient>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Technical Specifications
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Architecture</span>
                    <span className="text-blue-600 font-semibold">Cloud-Native Microservices</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Database</span>
                    <span className="text-blue-600 font-semibold">PostgreSQL + Redis</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium text-gray-700 dark:text-gray-300">API</span>
                    <span className="text-blue-600 font-semibold">RESTful + GraphQL</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Hosting</span>
                    <span className="text-blue-600 font-semibold">AWS / Azure</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Uptime SLA</span>
                    <span className="text-green-600 font-semibold">99.9%</span>
                  </div>
                </div>
              </Card>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {additionalFeatures.map((feature) => (
                <Card key={feature.title} hover className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Platform Performance
            </h2>
            <p className="text-xl text-blue-100">
              Industry-leading metrics that our customers rely on
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '< 200ms', label: 'Average Response Time' },
              { metric: '99.9%', label: 'Uptime Guarantee' },
              { metric: '10M+', label: 'Transactions Processed' },
              { metric: '24/7', label: 'Support Coverage' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;