import React, { useState, useEffect } from 'react';
import { Briefcase, Truck, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

const CalculatorSlider = ({ label, value, setValue, min, max }: { label: string, value: number, setValue: (v: number) => void, min: number, max: number }) => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center text-sm">
        <label className="font-medium text-gray-300">{label}</label>
        <span className="px-2 py-0.5 bg-slate-700 rounded font-mono text-white">{value}</span>
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

const Visualizer = ({ office, drivers, customers }: { office: number, drivers: number, customers: number }) => {
  const renderIcons = (count: number, Icon: React.ElementType, color: string) => {
    const displayCount = Math.min(count, 30); // Cap icons for performance
    return Array.from({ length: displayCount }).map((_, i) => (
      <Icon key={i} className={`w-5 h-5 ${color} transition-all duration-300 animate-pop-in`} style={{ animationDelay: `${i * 15}ms` }} />
    ));
  };

  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-0 bg-slate-900 rounded-2xl p-6 flex flex-col justify-center overflow-hidden border border-slate-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 w-full space-y-4">
        {office > 0 && (
          <div>
            <h3 className="text-white font-semibold mb-2 text-sm">Office Users</h3>
            <div className="flex flex-wrap gap-2">{renderIcons(office, Briefcase, 'text-amber-400')}</div>
          </div>
        )}
        {drivers > 0 && (
          <div>
            <h3 className="text-white font-semibold mb-2 text-sm">Drivers</h3>
            <div className="flex flex-wrap gap-2">{renderIcons(drivers, Truck, 'text-orange-400')}</div>
          </div>
        )}
        {customers > 0 && (
          <div>
            <h3 className="text-white font-semibold mb-2 text-sm">Customers</h3>
            <div className="flex flex-wrap gap-2">{renderIcons(customers, Users, 'text-red-400')}</div>
          </div>
        )}
        {office === 0 && drivers === 0 && customers === 0 && (
            <div className="text-center text-slate-500">
                <p>Your fleet will appear here</p>
            </div>
        )}
      </div>
    </div>
  );
};

const PricingCalculator: React.FC = () => {
  const [officeUsers, setOfficeUsers] = useState(1);
  const [drivers, setDrivers] = useState(1);
  const [customers, setCustomers] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const costs = {
    office: 30,
    driver: 10,
    customer: 10,
    base: 50,
  };

  const officeCost = officeUsers * costs.office;
  const driverCost = drivers * costs.driver;
  const customerCost = customers * costs.customer;

  const animatedOfficeCost = useAnimatedCounter(officeCost);
  const animatedDriverCost = useAnimatedCounter(driverCost);
  const animatedCustomerCost = useAnimatedCounter(customerCost);
  const animatedTotalCost = useAnimatedCounter(totalCost);

  useEffect(() => {
    setTotalCost(officeCost + driverCost + customerCost + costs.base);
  }, [officeCost, driverCost, customerCost, costs.base]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <Card className="p-6 sm:p-8 bg-slate-800/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-700 text-white shadow-2xl shadow-slate-900/50">
        <div className="space-y-6">
          <CalculatorSlider label="Office Users" value={officeUsers} setValue={setOfficeUsers} min={1} max={50} />
          <CalculatorSlider label="Drivers" value={drivers} setValue={setDrivers} min={1} max={50} />
          <CalculatorSlider label="Customers" value={customers} setValue={setCustomers} min={0} max={100} />
        </div>

        <div className="my-8 p-6 bg-slate-900/70 rounded-xl text-center">
          <p className="text-slate-400 text-sm">Your Estimated Monthly Total</p>
          <p className="text-5xl font-bold text-white tracking-tight">
            £{animatedTotalCost.toFixed(2)}
          </p>
        </div>

        <div className="space-y-2 text-sm border-t border-slate-700 pt-6">
          <div className="flex justify-between text-slate-300">
            <span>Base Fee</span>
            <span className="font-mono">£{costs.base.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Office Users ({officeUsers} x £{costs.office})</span>
            <span className="font-mono">£{animatedOfficeCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Drivers ({drivers} x £{costs.driver})</span>
            <span className="font-mono">£{animatedDriverCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Customers ({customers} x £{costs.customer})</span>
            <span className="font-mono">£{animatedCustomerCost.toFixed(2)}</span>
          </div>
        </div>
        
        <p className="text-xs text-slate-500 mt-6">
          Please note: Prices shown are a rough guide. Bulk enquiries may qualify for discounted rates — contact us for a tailored quote.
        </p>

        <Link to="/demo" className="block mt-6">
          <Button size="lg" className="w-full" icon={ArrowRight} iconPosition="right">
            Book a Demo
          </Button>
        </Link>
      </Card>
      <Visualizer office={officeUsers} drivers={drivers} customers={customers} />
    </div>
  );
};

export default PricingCalculator;