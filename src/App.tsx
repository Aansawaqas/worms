import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingIcons } from './components/FloatingIcons';
import { MouseFollower } from './components/MouseFollower';
import { Hero } from './components/Hero';
import { VerticalSlider } from './components/VerticalSlider';
import { Content } from './components/Content';
import { Features } from './components/Features';
import { Tutorial } from './components/Tutorial';
import { DownloadSection } from './components/Download';
import { Reviews } from './components/Reviews';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { ROUTES } from './utils/routes';

function HomePage() {
  return (
    <>
      <Hero />
      <VerticalSlider />
      <Features />
      <Content />
      <Tutorial />
      <DownloadSection />
      <Reviews />
    </>
  );
}

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <MouseFollower />
        <FloatingIcons />
        <Header />
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.PRIVACY} element={<Privacy />} />
          <Route path={ROUTES.TERMS} element={<Terms />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
