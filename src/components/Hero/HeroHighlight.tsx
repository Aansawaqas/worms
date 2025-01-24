import React from 'react';

interface HeroHighlightProps {
  children: React.ReactNode;
}

export function HeroHighlight({ children }: HeroHighlightProps) {
  return (
    <span className="relative">
      <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 opacity-30 -rotate-1"></span>
    </span>
  );
}