import React, { useState } from 'react';
import { Gamepad2, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: ROUTES.HOME },
    { name: 'Features', href: '#features' },
    { name: 'Download', href: '#download' },
    { name: 'Tutorial', href: '#tutorial' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to={ROUTES.HOME} className="flex items-center gap-2">
            <Gamepad2 className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold">worm zone mod apk</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-600 hover:text-green-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
