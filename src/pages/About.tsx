import React from 'react';
import { Award, Users, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">About Worms zone mod apk </h1>
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600">
             Grow, fight, and conquer in this addictive mobile gaming experience that tests your skills and reflexes.
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">Committed to delivering the best video editing experience</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">1M+ Users</h3>
              <p className="text-gray-600">Trusted by creators worldwide</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Available in 150+ countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
