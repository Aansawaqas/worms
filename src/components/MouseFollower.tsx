import React, { useState, useEffect } from 'react';
import { Smartphone } from 'lucide-react';

export function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-50 transition-transform duration-100"
      style={{ 
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    >
      <Smartphone className="w-6 h-6 text-blue-600 animate-pulse" />
    </div>
  );
}