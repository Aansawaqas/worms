import React from 'react';
import { Play } from 'lucide-react';

export function HeroDevice() {
  return (
    <div className="relative animate-float">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-30 animate-pulse" />
      <div className="relative bg-white rounded-[2rem] p-2 shadow-2xl">
        <div className="relative aspect-[9/16] rounded-[1.7rem] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=800&auto=format&fit=crop"
            alt="Video Editor Interface"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg">
              <Play className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}