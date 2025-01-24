import React from 'react';

export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow${i + 1}`}
            style={{
              background: `radial-gradient(circle at center, ${['#60A5FA', '#818CF8', '#C084FC'][i]} 0%, transparent 70%)`,
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