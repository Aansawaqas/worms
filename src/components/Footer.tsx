import React from 'react';
import { Gamepad2, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="w-6 h-6" />
              <span className="text-lg font-bold">Worms Zone Mod Apk</span>
            </div>
            <p className="text-gray-400">
              Dive into Worms Zone Android Game, an electrifying multiplayer arcade game where survival, strategy, and skill collide!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to={ROUTES.CONTACT} className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to={ROUTES.ABOUT} className="text-gray-400 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to={ROUTES.PRIVACY} className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to={ROUTES.TERMS} className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-gray-400">contact@wormszonemodapk.fun</span>
              </li>              
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Worm Zone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
