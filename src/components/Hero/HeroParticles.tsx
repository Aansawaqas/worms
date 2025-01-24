import React from 'react';
import { Video, Edit, Film, Share2 } from 'lucide-react';

const icons = [Video, Edit, Film, Share2];

export function HeroParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(12)].map((_, i) => {
        const Icon = icons[i % icons.length];
        const size = 20 + Math.random() * 20;
        
        return (
          <Icon
            key={i}
            size={size}
            className="absolute text-blue-600/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        );
      })}
    </div>
  );
}