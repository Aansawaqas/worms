import React from 'react';

export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-red-200/80 via-white to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(245,105,105,0.3),rgba(255,255,255,0))]" />
      </div>
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow${i + 1}`}
            style={{
              background: `radial-gradient(circle at center, ${['#FF69B4', '#FFC5C5', '#FF99CC'][i]} 0%, transparent 70%)`,
              width: `${[600, 500, 450][i]}px`,
              height: `${[600, 500, 450][i]}px`,
              top: `${[-20, 30, -10][i]}%`,
              left: `${[60, 20, 80][i]}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
