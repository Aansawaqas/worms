import React, { useState } from 'react';
import { Gamepad2, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import { Helmet } from 'react-helmet-async';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: ROUTES.HOME },
    { name: 'Features', href: '#features' },
    { name: 'Download', href: '#download' },
    { name: 'Tutorial', href: '#tutorial' },
  ];

  // SEO metadata
  const seoData = {
    title: "Worms Zone Mod Apk - Unlimited Resources & Free Download",
    description: "Download Worms Zone Mod Apk with unlimited resources, all worms unlocked, and no ads. Enjoy the ultimate slither.io experience with our modded version.",
    keywords: "worms zone mod apk, worms zone, mod apk, slither.io mod, snake game mod, unlimited resources, free download",
    canonicalUrl: "https://wormszonemodapk.fun/",
    author: "Worms Zone Mod Team",
    publisher: "Worms Zone Mod Publishing"
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="author" content={seoData.author} />
        <meta name="publisher" content={seoData.publisher} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={seoData.canonicalUrl} />
        
        {/* Open Graph meta tags for social sharing */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
      </Helmet>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to={ROUTES.HOME} className="flex items-center gap-2">
              <Gamepad2 className="w-8 h-8 text-green-600" />
              <span className="text-xl font-bold">worms zone mod apk</span>
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
    </>
  );
}
