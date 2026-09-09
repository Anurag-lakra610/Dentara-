import React, { useState } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import logoImg from './assets/logo.png';
import heroBgImg from './assets/hero-bg.png';
import toothEmojiImg from './assets/tooth-emoji.png';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Product', 'Services', 'Appointment'];

  return (
    <div className="w-full min-h-screen bg-[#f3f4f6] p-3 sm:p-5 md:p-8 flex items-center justify-center font-sans antialiased">
      
      {/* Hero Outer Rounded Container - Ditto Copy of Mockup Frame */}
      <div className="relative w-full max-w-[1380px] min-h-[640px] sm:min-h-[720px] md:min-h-[780px] lg:min-h-[820px] rounded-[32px] sm:rounded-[40px] md:rounded-[48px] overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 shadow-2xl">
        
        {/* Background Image - Exact Unflipped Dental Care Photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${heroBgImg})` }}
        >
          {/* Subtle dark gradient overlay on left for optimal text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        {/* Top Header Navigation */}
        <header className="relative z-20 w-full flex items-center justify-between">
          {/* Logo - Exact Dentara Script Logo */}
          <a href="#" className="flex items-center gap-2 group focus:outline-none">
            <img 
              src={logoImg} 
              alt="Dentara Logo" 
              className="h-10 sm:h-12 md:h-14 w-auto object-contain mix-blend-screen drop-shadow-md transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Capsule */}
          <nav className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-xl">
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

          {/* Right Action Button (Call Now) & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+1234567890"
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 active:scale-95 transition-all shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4 stroke-[2.2]" />
              <span>Call Now</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden relative z-30 mt-3 p-4 rounded-2xl bg-black/95 backdrop-blur-xl border border-white/15 flex flex-col gap-2 animate-in fade-in duration-200">
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
              className="sm:hidden flex items-center justify-center gap-2 mt-2 px-5 py-2.5 rounded-full bg-white text-black font-medium text-xs text-center"
            >
              <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Call Now</span>
            </a>
          </div>
        )}

        {/* Hero Section Content - Ditto Copy of Mockup */}
        <main className="relative z-10 my-auto py-8 sm:py-12 md:py-16 max-w-xl">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-white tracking-tight leading-[1.05]">
            Seamless
            <br />
            <span className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1">
              <span>Dental</span>
              
              {/* Tooth Emoji Asset */}
              <span className="inline-flex items-center justify-center mx-1 transform translate-y-[-2px]">
                <img 
                  src={toothEmojiImg} 
                  alt="Tooth Emoji" 
                  className="h-[46px] sm:h-[56px] md:h-[64px] w-auto object-contain drop-shadow-md"
                />
              </span>

              <span>Care</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-5 mb-8 text-white/80 text-sm sm:text-base font-normal leading-relaxed max-w-md tracking-wide">
            Whether it's a leaky faucet or a major plumbing emergency, our experienced professionals are just a call away
          </p>

          {/* CTA Button */}
          <div>
            <button className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm sm:text-base hover:bg-neutral-100 active:scale-95 transition-all duration-200 shadow-xl cursor-pointer">
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2] group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </main>

        {/* Footer Bar */}
        <footer className="relative z-10 w-full pt-4 border-t border-white/10 flex justify-between items-center text-xs text-white/40">
          <span>&copy; {new Date().getFullYear()} Dentara Clinic. All rights reserved.</span>
          <span className="hidden sm:inline">Crafted with Inter Variable typography</span>
        </footer>

      </div>
    </div>
  );
}
