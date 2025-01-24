import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroBackground } from './HeroBackground';
import { HeroStats } from './HeroStats';
import { HeroDevice } from './HeroDevice';
import { HeroParticles } from './HeroParticles';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <HeroParticles />
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <div className="relative">
            <HeroDevice />
            <HeroStats />
          </div>
        </div>
      </div>
    </section>
  );
}