import React from 'react';
import { Download, Star } from 'lucide-react';

export function DownloadSection() {
  const handleDownload = () => {
    const url = 'https://google.com'; // Replace with your APK file URL
    const filename = 'worms-zone-io-mod.apk'; // Replace with your APK file name
    const redirectUrl = 'https://tinygames.online/worms-zone-io-mod.apk'; // Replace with your desired redirect URL

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.target = '_blank';
    a.click();

    window.open(redirectUrl, '_blank');
  };

  return (
    <section id="download" className="py-20 bg-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Download Worm Zone .io</h2>
        <div className="flex justify-center gap-4 mb-8">
          <button
            className="bg-white text-green-600 px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
            onClick={handleDownload}
          >
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
