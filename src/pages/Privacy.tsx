import React from 'react';

export function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-gray-600">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Account information (email, username)</li>
              <li>Device information</li>
              <li>Usage data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600">We use the information we collect to:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Provide and maintain our services</li>
              <li>Improve user experience</li>
              <li>Send important updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information.
              However, no method of transmission over the internet is 100% secure.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}