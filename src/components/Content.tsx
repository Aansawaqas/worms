import React from 'react';
import { contentSections } from '../data/content';

export function Content() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {contentSections.map((section, index) => (
          <div 
            key={index}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              index !== 0 ? 'mt-24' : ''
            }`}
          >
            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
              <img
                src={section.image}
                alt={section.title}
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
            
            <div className={index % 2 === 1 ? 'md:order-1' : ''}>
              <h2 className="text-4xl font-bold mb-6">{section.title}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-600 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}