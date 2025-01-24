import React from 'react';
import { Gamepad2, Trophy, Users, Palette, Crown, Zap } from 'lucide-react';

const features = [
  {
    icon: Gamepad2,
    title: 'Addictive Gameplay',
    description: 'Simple to learn, challenging to master mechanics',
  },
  {
    icon: Trophy,
    title: 'Daily Challenges',
    description: 'Complete missions and earn exclusive rewards',
  },
  {
    icon: Users,
    title: 'Multiplayer Arena',
    description: 'Battle against players worldwide in real-time',
  },
  {
    icon: Palette,
    title: 'Custom Skins',
    description: 'Unlock and collect hundreds of unique worm skins',
  },
  {
    icon: Crown,
    title: 'Global Ranking',
    description: 'Climb the leaderboards and become a legend',
  },
  {
    icon: Zap,
    title: 'Power-ups',
    description: 'Collect special abilities and dominate the arena',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Game Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}