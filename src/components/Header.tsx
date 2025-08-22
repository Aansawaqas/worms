import React, { useState, useEffect } from 'react';
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

  // SEO metadata
  const seoData = {
    title: "Worms Zone Mod Apk - Unlimited Resources & Free Download",
    description: "Download Worms Zone Mod Apk with unlimited resources, all worms unlocked, and no ads. Enjoy the ultimate slither.io experience with our modded version.",
    keywords: "worms zone mod apk, worms zone, mod apk, slither.io mod, snake game mod, unlimited resources, free download",
    canonicalUrl: "https://wormszonemodapk.fun/",
    author: "Worms Zone Mod",
    publisher: "Worms Zone Mod"
  };

  // Update document head on component mount
  useEffect(() => {
    // Set title
    document.title = seoData.title;
    
    // Set meta tags
    const setMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Set link tags
    const setLinkTag = (rel, href) => {
      let tag = document.querySelector(`link[rel="${rel}"]`);
      if (!tag) {
        tag = document.createElement('link');
        tag.rel = rel;
        document.head.appendChild(tag);
      }
      tag.href = href;
    };

    // Set all meta tags
    setMetaTag('description', seoData.description);
    setMetaTag('keywords', seoData.keywords);
    setMetaTag('author', seoData.author);
    setMetaTag('publisher', seoData.publisher);
    setMetaTag('robots', 'index, follow');
    
    // Set canonical URL
    setLinkTag('canonical', seoData.canonicalUrl);
    
    // Set Open Graph tags for social media
    setMetaTag('og:title', seoData.title);
    setMetaTag('og:description', seoData.description);
    setMetaTag('og:url', seoData.canonicalUrl);
    setMetaTag('og:type', 'website');
    
    // Set Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', seoData.title);
    setMetaTag('twitter:description', seoData.description);
  }, [seoData]);

  return (
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
  );
}
