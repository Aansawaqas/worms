import React from 'react';
import { Play } from 'lucide-react';

export function HeroVideo() {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative">
        <div className="aspect-video rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-[1.01] transition duration-500">
          <img
            src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=1200&auto=format&fit=crop"
            alt="Video Editor Interface"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition duration-500">
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition duration-500">
              <Play className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}