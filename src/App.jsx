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
      
      {/* Fullscreen Background Image with Horizontal Flip (Right Shift/Rotate) & Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-x-[-1] scale-105 transition-transform duration-700"
          style={{ backgroundImage: `url(${heroBgImg})` }}
        />
        {/* Left-to-right vignette gradient for ultra clear text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/35 sm:to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
      </div>

      {/* Header Navigation - Full Width Container */}
      <header className="relative z-20 w-full px-6 sm:px-12 md:px-16 lg:px-20 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group focus:outline-none">
          <img 
            src={logoImg} 
            alt="Dentara Logo" 
            className="h-10 sm:h-12 md:h-14 w-auto object-contain mix-blend-screen drop-shadow-lg transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Capsule */}
        <nav className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeNav === item;
            return (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-lg'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* Right Action Button (Call Now) & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+1234567890"
            className="hidden sm:flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 active:scale-95 transition-all shadow-lg cursor-pointer"
          >
            <Phone className="w-4 h-4 stroke-[2.5]" />
            <span>Call Now</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden relative z-30 mx-6 p-5 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/15 flex flex-col gap-3 animate-in fade-in duration-200">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveNav(item);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition ${
                activeNav === item ? 'bg-white text-black font-semibold' : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {item}
            </button>
          ))}
          <a
            href="tel:+1234567890"
            className="sm:hidden flex items-center justify-center gap-2 mt-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-center"
          >
            <Phone className="w-4 h-4 stroke-[2.5]" />
            <span>Call Now</span>
          </a>
        </div>
      )}

      {/* Hero Content - Fullscreen Left Alignment */}
      <main className="relative z-10 my-auto w-full px-6 sm:px-12 md:px-16 lg:px-20 py-12 sm:py-16 md:py-24 max-w-4xl">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-semibold text-white tracking-tight leading-[1.02] sm:leading-[1.05]">
          Seamless
          <br />
          <span className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mt-2">
            <span>Dental</span>
            
            {/* White Tooth Badge Icon */}
            <span className="inline-flex items-center justify-center p-2.5 sm:p-3.5 md:p-4 rounded-2xl sm:rounded-3xl bg-white/15 backdrop-blur-md border border-white/25 text-white shadow-inner">
              <svg
                className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 fill-white drop-shadow"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 2C14.5 2 13 3.5 12 4.5C11 3.5 9.5 2 7 2C4 2 2 4.5 2 8C2 12.5 4 15.5 5.5 18C6.5 19.8 7.5 22 9.5 22C10.8 22 11.2 20.8 11.5 19C11.7 17.8 11.8 16 12 16C12.2 16 12.3 17.8 12.5 19C12.8 20.8 13.2 22 14.5 22C16.5 22 17.5 19.8 18.5 18C20 15.5 22 12.5 22 8C22 4.5 20 2 17 2Z" />
              </svg>
            </span>

            <span>Care</span>
          </span>
        </h1>

        <p className="mt-6 sm:mt-8 mb-8 sm:mb-10 text-white/80 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl tracking-wide">
          Whether it's a leaky faucet or a major plumbing emergency, our experienced professionals are just a call away
        </p>

        {/* Book Appointment CTA Button */}
        <div>
          <button className="group flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-black font-semibold text-base sm:text-lg hover:bg-neutral-100 active:scale-95 transition-all duration-200 shadow-2xl cursor-pointer">
            <span>Book Appointment</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>
        </div>
      </main>

      {/* Footer Bar - Fullscreen Width */}
      <footer className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-20 py-6 border-t border-white/10 flex justify-between items-center text-xs text-white/40">
        <span>&copy; {new Date().getFullYear()} Dentara Clinic. All rights reserved.</span>
        <span className="hidden sm:inline">Crafted with Inter Variable typography</span>
      </footer>

    </div>
  );
}
