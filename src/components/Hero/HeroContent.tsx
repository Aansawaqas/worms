import React from 'react';
import { Download, ArrowRight } from 'lucide-react';

export function HeroContent() {
  return (
    <div className="text-center lg:text-left">
      <div className="relative inline-block mb-2">
        <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full animate-slide-down">
          New Season Available
        </span>
      </div>
      <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
        Become the{' '}
        <span className="relative">
          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 animate-gradient">
            Ultimate Worm
          </span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-green-200 opacity-30 -rotate-2 animate-width" />
        </span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl animate-fade-in-up delay-200">
        Slither, grow, and dominate in this epic multiplayer arena. Challenge players worldwide and become the biggest worm in the zone!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-400">
        <a
          href="#download"
          className="group bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          <Download className="w-5 h-5" />
          <span>Download Now</span>
          <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
        </a>
        <a
          href="#features"
          className="relative px-8 py-4 rounded-xl group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-blue-600 ease opacity-20 group-hover:translate-x-0 group-hover:translate-y-0 rounded-xl"></span>
          <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-green-600 ease opacity-20 group-hover:translate-x-0 group-hover:translate-y-0 rounded-xl"></span>
          <span className="relative text-green-600 font-medium">How to Play</span>
        </a>
      </div>
    </div>
  );
}