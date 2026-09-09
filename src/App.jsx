import React, { useState } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import logoImg from './assets/logo.png';
import heroBgImg from './assets/hero-bg.jpg';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Product', 'Services', 'Appointment'];

  return (
    <div className="relative w-full min-h-screen bg-[#080808] font-sans antialiased overflow-hidden flex flex-col justify-between">
      
      {/* Background Image - Untouched as requested */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-x-[-1] scale-105"
          style={{ backgroundImage: `url(${heroBgImg})` }}
        />
        {/* Dark vignette overlay for left text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/30 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Header Navigation */}
      <header className="relative z-20 w-full px-6 sm:px-12 md:px-16 lg:px-20 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group focus:outline-none">
          <img 
            src={logoImg} 
            alt="Dentara Logo" 
            className="h-9 sm:h-11 md:h-12 w-auto object-contain mix-blend-screen drop-shadow-md transition-transform group-hover:scale-105"
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
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
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

        {/* Right Action Button (Call Now) & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+1234567890"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-white/90 active:scale-95 transition-all shadow-md cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
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
            className="sm:hidden flex items-center justify-center gap-2 mt-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs text-center"
          >
            <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Call Now</span>
          </a>
        </div>
      )}

      {/* Hero Content - Scaled down title & subtext to match exact reference image */}
      <main className="relative z-10 my-auto w-full px-6 sm:px-12 md:px-16 lg:px-20 py-8 sm:py-12 md:py-16 max-w-2xl">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.08]">
          Seamless
          <br />
          <span className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1">
            <span>Dental</span>
            
            {/* Tooth Emoji Badge - Exact matching reference image */}
            <span className="inline-flex items-center justify-center mx-0.5 transform translate-y-[-2px]">
              <svg 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 drop-shadow-md" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main Tooth Body */}
                <path 
                  d="M72 18C62 18 55 24 50 29C45 24 38 18 28 18C16 18 8 28 8 42C8 60 16 72 23 82C27 88 31 94 38 94C43 94 45 89 46 82C48 74 49 66 50 66C51 66 52 74 54 82C55 89 57 94 62 94C69 94 73 88 77 82C84 72 92 60 92 42C92 28 84 18 72 18Z" 
                  fill="white" 
                />
                {/* Tooth Shadow/Cavity Detail matching reference */}
                <path 
                  d="M38 48C34 50 32 55 34 60C36 65 42 66 45 61C47 57 44 50 38 48Z" 
                  fill="#7A604D" 
                  opacity="0.85"
                />
              </svg>
            </span>

            <span>Care</span>
          </span>
        </h1>

        {/* Muted exact subtext with matching font size and layout */}
        <p className="mt-4 sm:mt-5 mb-7 text-white/70 text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed max-w-md tracking-wide">
          Whether it's a leaky faucet or a major plumbing emergency, our experienced professionals are just a call away
        </p>

        {/* CTA Button */}
        <div>
          <button className="group flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-100 active:scale-95 transition-all duration-200 shadow-xl cursor-pointer">
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2] group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </main>

      {/* Footer Bar */}
      <footer className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-20 py-5 border-t border-white/10 flex justify-between items-center text-[11px] text-white/40">
        <span>&copy; {new Date().getFullYear()} Dentara Clinic. All rights reserved.</span>
        <span className="hidden sm:inline">Crafted with Inter Variable typography</span>
      </footer>

    </div>
  );
}
