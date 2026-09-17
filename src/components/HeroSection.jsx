import React from 'react';
import HeroMobile from './HeroMobile';
import HeroDesktop from './HeroDesktop';

export default function HeroSection({ navItems, activeNav, setActiveNav }) {
  return (
    <>
      {/* Mobile & Tablet Ratio View Component (< 1024px) */}
      <HeroMobile navItems={navItems} activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* Desktop / Large Screen View Component (>= 1024px) */}
      <HeroDesktop navItems={navItems} activeNav={activeNav} setActiveNav={setActiveNav} />
    </>
  );
}
