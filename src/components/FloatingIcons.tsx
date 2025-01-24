import React from 'react';
import { Gamepad2, Trophy, Crown, Sword, Target, Star, Apple, Sparkles } from 'lucide-react';

const icons = [Gamepad2, Trophy, Crown, Sword, Target, Star, Apple, Sparkles];

export function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => {
        const Icon = icons[i % icons.length];
        const delay = Math.random() * 5;
        const duration = 15 + Math.random() * 10;
        const size = 20 + Math.random() * 30;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;

        return (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              animation: `float ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
              left: `${startX}%`,
              top: `${startY}%`,
            }}
          >
            <Icon
              size={size}
              className="text-primary animate-pulse"
              style={{
                color: `hsl(${Math.random() * 120}, 70%, 50%)`, // Using green-based colors (0-120 hue range)
              }}
            />
          </div>
        );
      })}
    </div>
  );
}