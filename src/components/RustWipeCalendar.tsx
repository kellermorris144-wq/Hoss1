import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Users, Zap, Server, Globe, Shield, Target, Flame, Calendar, Info } from 'lucide-react';

interface WipeEvent {
  id: string;
  server: string;
  type: string;
  day: string;
  time: string;
  playerCount: string;
  color: string;
  bgColor: string;
  population: string;
  mapSize: string;
}

const wipeEvents: WipeEvent[] = [
  {
    id: '1',
    server: 'Solo/Duo',
    type: 'Full Wipe',
    day: 'Sunday',
    time: '11:00 AM',
    playerCount: '1-2',
    color: 'text-white',
    bgColor: 'bg-orange-500',
    population: '150/150',
    mapSize: '3000x3000'
  },
  {
    id: '2',
    server: 'Solo/Duo',
    type: 'Full Wipe',
    day: 'Thursday',
    time: '11:00 AM',
    playerCount: '1-2',
    color: 'text-white',
    bgColor: 'bg-orange-500',
    population: '150/150',
    mapSize: '3000x3000'
  },
  {
    id: '3',
    server: 'Trio',
    type: 'Full Wipe',
    day: 'Monday',
    time: '11:00 AM',
    playerCount: '1-3',
    color: 'text-white',
    bgColor: 'bg-emerald-500',
    population: '200/200',
    mapSize: '3500x3500'
  },
  {
    id: '4',
    server: 'Trio',
    type: 'Full Wipe',
    day: 'Friday',
    time: '11:00 AM',
    playerCount: '1-3',
    color: 'text-white',
    bgColor: 'bg-emerald-500',
    population: '200/200',
    mapSize: '3500x3500'
  },
  {
    id: '5',
    server: 'Quad',
    type: 'Full Wipe',
    day: 'Thursday',
    time: '11:00 AM',
    playerCount: '1-4',
    color: 'text-white',
    bgColor: 'bg-purple-500',
    population: '250/250',
    mapSize: '4000x4000'
  }
];

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const getNextWipeTime = (day: string, time: string): Date => {
  const now = new Date();
  const dayIndex = daysOfWeek.indexOf(day);
  const [hours, minutes] = time.match(/(\d+):(\d+)/)!.slice(1).map(Number);
  
  let nextWipe = new Date();
  nextWipe.setHours(hours, minutes, 0, 0);
  
  const currentDay = now.getDay();
  let daysUntilWipe = (dayIndex - currentDay + 7) % 7;
  
  if (daysUntilWipe === 0 && now.getHours() >= hours) {
    daysUntilWipe = 7;
  }
  
  nextWipe.setDate(now.getDate() + daysUntilWipe);
  return nextWipe;
};

const formatTimeUntil = (targetDate: Date): string => {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  
  if (diff <= 0) return 'Wiped!';
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  if (days > 0) return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  if (hours > 0) return `${hours}h ${minutes}m ${seconds}s`;
  return `${minutes}m ${seconds}s`;
};

export default function RustWipeCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const getEventsForDate = (date: Date | null) => {
    if (!date) return [];
    const dayName = daysOfWeek[date.getDay()];
    
    return wipeEvents.filter(event => event.day === dayName);
  };

  const navigateMonth = (direction: number) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const days = getDaysInMonth(currentDate);

  // Get next wipes for each server type
  const getNextWipes = () => {
    const serverTypes = ['Solo/Duo', 'Trio', 'Quad'];
    return serverTypes.map(serverType => {
      const serverEvents = wipeEvents.filter(e => e.server === serverType);
      const nextEvent = serverEvents
        .map(event => ({ ...event, nextWipe: getNextWipeTime(event.day, event.time) }))
        .sort((a, b) => a.nextWipe.getTime() - b.nextWipe.getTime())[0];
      
      return nextEvent;
    });
  };

  const nextWipes = getNextWipes();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="flex items-center">
                <div className="w-10 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg mr-3 flex items-center justify-center">
                  <div className="w-6 h-4 bg-orange-400 rounded-sm"></div>
                </div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  RustOps
                </h1>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-lg blur opacity-30"></div>
            </div>
          </div>
          <p className="text-gray-400 text-xl font-medium">Vanilla Wipe Schedule</p>
          <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-1" />
              <span>BST Timezone</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{currentTime.toLocaleTimeString()}</span>
            </div>
          </div>
        </div>

        {/* Next Wipes Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <Zap className="w-7 h-7 text-orange-500 mr-3" />
            <h2 className="text-3xl font-bold text-white">Next Wipes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nextWipes.map((wipe, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/50 to-purple-500/50 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full mr-4 ${
                        wipe.server === 'Solo/Duo' ? 'bg-orange-500' : 
                        wipe.server === 'Trio' ? 'bg-emerald-500' : 'bg-purple-500'
                      } shadow-lg`}></div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{wipe.server}</h3>
                        <p className="text-gray-400 text-sm">Vanilla Server</p>
                      </div>
                    </div>
                    <Users className="w-6 h-6 text-gray-400" />
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-300 font-medium mb-1">{wipe.day} • {wipe.time} BST</p>
                    <p className="text-gray-500 text-sm">Team Size: {wipe.playerCount}</p>
                  </div>
                  
                  <div className="bg-slate-900/80 rounded-xl p-6 mb-6 border border-slate-700/30">
                    <div className="flex items-center mb-3">
                      <Clock className="w-5 h-5 text-orange-500 mr-2" />
                      <span className="text-sm text-gray-400 font-medium">Time remaining</span>
                    </div>
                    <div className="text-3xl font-bold text-white font-mono tracking-wider">
                      {formatTimeUntil(wipe.nextWipe)}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center text-gray-400">
                      <Target className="w-4 h-4 mr-1" />
                      <span>Full Wipe</span>
                    </div>
                    <span className="text-gray-500 font-mono">{wipe.nextWipe.toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar */}
        <div className="relative mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl blur opacity-30"></div>
          <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-3xl border border-slate-700/50 overflow-hidden">
            {/* Calendar Header */}
            <div className="flex items-center justify-between p-8 border-b border-slate-700/50 bg-slate-800/50">
              <button
                onClick={() => navigateMonth(-1)}
                className="p-3 hover:bg-slate-700/50 rounded-xl transition-all duration-200 hover:scale-105"
              >
                <ChevronLeft className="w-6 h-6 text-gray-400" />
              </button>
              
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-1">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <p className="text-gray-400 text-sm">Wipe Schedule Calendar</p>
              </div>
              
              <button
                onClick={() => navigateMonth(1)}
                className="p-3 hover:bg-slate-700/50 rounded-xl transition-all duration-200 hover:scale-105"
              >
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 border-b border-slate-700/50 bg-slate-800/30">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-6 text-center">
                  <span className="text-gray-400 font-bold text-sm uppercase tracking-wider">{day}</span>
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7">
              {days.map((date, index) => {
                const events = getEventsForDate(date);
                const isToday = date && date.toDateString() === new Date().toDateString();
                
                return (
                  <div
                    key={index}
                    className={`min-h-[140px] p-4 border-r border-b border-slate-700/30 transition-all duration-200 hover:bg-slate-700/20 ${
                      !date ? 'bg-slate-900/30' : ''
                    }`}
                  >
                    {date && (
                      <>
                        <div className="mb-3">
                          <span className={`text-lg font-bold ${
                            isToday ? 'text-orange-500 bg-orange-500/10 px-2 py-1 rounded-lg' : 'text-white'
                          }`}>
                            {date.getDate()}
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          {events.map(event => (
                            <div
                              key={event.id}
                              className={`${event.bgColor} rounded-lg px-3 py-2 text-xs font-bold ${event.color} shadow-lg hover:scale-105 transition-transform duration-200`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{event.server}</span>
                                <Clock className="w-3 h-3" />
                              </div>
                              <div className="text-xs opacity-90 mt-1">{event.time}</div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Server Information Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Server Stats */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/30 to-emerald-500/30 rounded-2xl blur opacity-30"></div>
            <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center mb-6">
                <Server className="w-6 h-6 text-orange-500 mr-3" />
                <h3 className="text-2xl font-bold text-white">Server Information</h3>
              </div>
              
              <div className="space-y-6">
                {wipeEvents.slice(0, 3).map((server, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700/30">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-4 ${
                        server.server === 'Solo/Duo' ? 'bg-orange-500' : 
                        server.server === 'Trio' ? 'bg-emerald-500' : 'bg-purple-500'
                      }`}></div>
                      <div>
                        <h4 className="text-white font-semibold">{server.server} Vanilla</h4>
                        <p className="text-gray-400 text-sm">Map: {server.mapSize}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold">{server.population}</p>
                      <p className="text-gray-400 text-sm">Players</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wipe Rules */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-orange-500/30 rounded-2xl blur opacity-30"></div>
            <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-2xl font-bold text-white">Wipe Information</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Flame className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Full Wipes</h4>
                    <p className="text-gray-400 text-sm">Complete server reset including blueprints, bags, and all player progress.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-emerald-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Schedule</h4>
                    <p className="text-gray-400 text-sm">All wipes occur at 11:00 AM BST. Times are consistent across all servers.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Team Limits</h4>
                    <p className="text-gray-400 text-sm">Strictly enforced team size limits. Solo/Duo: 1-2, Trio: 1-3, Quad: 1-4 players.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Vanilla Settings</h4>
                    <p className="text-gray-400 text-sm">Pure vanilla Rust experience with no modifications or plugins.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700/50">
            <Target className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-gray-400 text-sm">Made with ❤️ for the RustOps Community</span>
          </div>
        </div>
      </div>
    </div>
  );
}