import React, { useState } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import logoImg from './assets/logo.png';
import heroBgImg from './assets/hero-bg.jpg';
import toothEmojiImg from './assets/tooth-emoji.png';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Product', 'Services', 'Appointment'];

  return (
    /* Edge-to-Edge Fullscreen Layout */
    <div className="relative w-full min-h-screen bg-[#080808] font-sans antialiased overflow-hidden flex flex-col justify-between">
      
      {/* High Definition Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-x-[-1] scale-105"
          style={{ backgroundImage: `url(${heroBgImg})` }}
        />
        {/* Dark vignette gradient overlay for left text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/30 sm:to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Header Navigation - Shifted down 15px (pt-[39px]), Parallel 45px Height UX Alignment */}
      <header className="relative z-20 w-full px-6 sm:px-12 md:px-16 lg:px-20 pt-[39px] pb-6 flex items-center justify-between">
        
        {/* Logo - Perfectly centered vertically alongside 45px navbar & button */}
        <a href="#" className="flex items-center h-[45px] group focus:outline-none">
          <img 
            src={logoImg} 
            alt="Dentara Logo" 
            className="h-[32px] sm:h-[36px] w-auto object-contain mix-blend-screen drop-shadow-md transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Capsule - 45px Height Parallel Alignment */}
        <nav className="hidden md:flex items-center h-[45px] gap-1 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-xl">
          {navItems.map((item) => {
            const isActive = activeNav === item;
            return (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* Right Action Button (Call Now) - Height set to exactly 45px as requested */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+1234567890"
            className="hidden sm:flex items-center justify-center gap-2.5 h-[45px] px-7 rounded-full bg-white text-black text-sm sm:text-base font-semibold hover:bg-white/90 active:scale-95 transition-all shadow-xl cursor-pointer"
          >
            <Phone className="w-4 h-4 stroke-[2.4]" />
            <span>Call Now</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden relative z-30 mx-6 p-4 rounded-2xl bg-black/95 backdrop-blur-xl border border-white/15 flex flex-col gap-2 animate-in fade-in duration-200">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveNav(item);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeNav === item ? 'bg-white text-black font-semibold' : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {item}
            </button>
          ))}
          <a
            href="tel:+1234567890"
            className="sm:hidden flex items-center justify-center gap-2.5 mt-2 h-[45px] px-7 rounded-full bg-white text-black font-semibold text-sm text-center"
          >
            <Phone className="w-4 h-4 stroke-[2.4]" />
            <span>Call Now</span>
          </a>
        </div>
      )}

      {/* Hero Section Content */}
      <main className="relative z-10 my-auto w-full px-6 sm:px-12 md:px-16 lg:px-20 py-8 sm:py-12 md:py-16 max-w-3xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-white tracking-tight leading-[1.05]">
          Seamless
          <br />
          <span className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1">
            <span>Dental</span>
            
            {/* Tooth Emoji Asset - Scaled up by 3px (49px/59px/67px) as requested */}
            <span className="inline-flex items-center justify-center mx-1 transform translate-y-[-2px]">
              <img 
                src={toothEmojiImg} 
                alt="Tooth Emoji" 
                className="h-[49px] sm:h-[59px] md:h-[67px] w-auto object-contain drop-shadow-md"
              />
            </span>

            <span>Care</span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-5 mb-8 text-white/80 text-sm sm:text-base font-normal leading-relaxed tracking-wide max-w-xl">
          Whether it's a leaky faucet or a major plumbing emergency,
          <br className="hidden sm:inline" />
          {' '}our experienced professionals are just a call away
        </p>

        <div>
          <button className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm sm:text-base hover:bg-neutral-100 active:scale-95 transition-all duration-200 shadow-xl cursor-pointer">
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2] group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </main>

      {/* Footer Bar */}
      <footer className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-20 py-6 border-t border-white/10 flex justify-between items-center text-xs text-white/40">
        <span>&copy; {new Date().getFullYear()} Dentara Clinic. All rights reserved.</span>
        <span className="hidden sm:inline">Crafted with Inter Variable typography</span>
      </footer>

    </div>
  );
}
