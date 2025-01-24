import React from 'react';
import { Move, Apple, Crown } from 'lucide-react';

const steps = [
  {
    icon: Move,
    title: 'Control Your Worm',
    description: 'Tap and hold to direct your worm around the arena',
  },
  {
    icon: Apple,
    title: 'Collect & Grow',
    description: 'Eat glowing orbs and defeated players to increase your size',
  },
  {
    icon: Crown,
    title: 'Dominate',
    description: 'Become the biggest worm and rule the arena',
  },
];

export function Tutorial() {
  return (
    <section id="tutorial" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">How to Play</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Master these simple steps to become the ultimate worm
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center max-w-sm">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 -right-4 w-8 h-0.5 bg-green-200" />
              )}
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}