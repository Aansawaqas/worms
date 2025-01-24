import React from 'react';
import { Star, Download, Users } from 'lucide-react';

const stats = [
  { icon: Star, value: '4.8', label: 'Rating' },
  { icon: Download, value: '1M+', label: 'Downloads' },
  { icon: Users, value: '500K+', label: 'Active Users' },
];

export function HeroStats() {
  return (
    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 w-[90%] backdrop-blur-sm bg-opacity-80">
      <div className="grid grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-2">
              <stat.icon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="font-bold text-2xl">{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}