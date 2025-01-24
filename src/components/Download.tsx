import React from 'react';
import { Download, Star } from 'lucide-react';

export function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Download Worm Zone .io</h2>
        <div className="flex justify-center gap-4 mb-8">
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors">
            <Download className="w-5 h-5" />
            Download APK
          </button>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
          <span className="text-lg">4.3/5 Rating on Google Play</span>
        </div>
      </div>
    </section>
  );
}
