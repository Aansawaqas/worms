import React from 'react';
import { Download } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 relative bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Worms Zone Mod Apk Latest Version</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          (Unlimited Coins, MOD Apk, ) 6.4.0 free for android
          Updated January 25, 2025 - Installs 600,000,000+
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#download"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Now
          </a>
          <a
            href="#features"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors border border-blue-600"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
