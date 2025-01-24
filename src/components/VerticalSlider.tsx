import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=800&fit=crop',
  'https://images.unsplash.com/photo-1622151834677-70f982c9adef?w=400&h=800&fit=crop',
  'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=400&h=800&fit=crop',
  'https://images.unsplash.com/photo-1618331835717-801e976710b2?w=400&h=800&fit=crop',
  'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=800&fit=crop',
];

export function VerticalSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const slide = (direction: 'up' | 'down') => {
    setCurrentIndex((prev) => {
      if (direction === 'up') {
        return prev === 0 ? images.length - 1 : prev - 1;
      }
      return (prev + 1) % images.length;
    });
  };

  const getSlideIndex = (offset: number) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">App Screenshots</h2>
        <div className="relative max-w-5xl mx-auto flex justify-center gap-8">
          {[-1, 0, 1].map((offset) => (
            <div
              key={offset}
              className="relative w-[300px]"
              style={{
                transform: offset === 0 ? 'scale(1.1)' : 'scale(0.9)',
                zIndex: offset === 0 ? 10 : 0,
              }}
            >
              <div className="overflow-hidden rounded-3xl shadow-2xl h-[600px] bg-gray-900 transition-all duration-500">
                <div className="relative h-full">
                  <img
                    src={images[getSlideIndex(offset)]}
                    alt={`Screenshot ${getSlideIndex(offset) + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    style={{
                      opacity: offset === 0 ? 1 : 0.5,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <button
              onClick={() => slide('up')}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronUp className="w-6 h-6 text-blue-600" />
            </button>
            <button
              onClick={() => slide('down')}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronDown className="w-6 h-6 text-blue-600" />
            </button>
          </div>

          <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}