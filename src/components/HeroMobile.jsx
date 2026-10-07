import React, { useState } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';
import heroBgImg from '../assets/hero-bg.jpg';
import toothEmojiImg from '../assets/tooth-emoji.png';
import { clinicConfig } from '../clinicConfig';

export default function HeroMobile({ navItems, activeNav, setActiveNav, onBookClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-[#080808] overflow-hidden flex flex-col justify-between lg:hidden">
      
      {/* Background Image with Top & Bottom Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-x-[-1] scale-105"
          style={{ backgroundImage: `url(${heroBgImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>

      {/* Header Navigation for Mobile / Tablet */}
      <header className="relative z-20 w-full px-6 sm:px-10 md:px-14 pt-[30px] pb-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group focus:outline-none">
          <img 
            src={logoImg} 
            alt="Dental Lounge Logo" 
            className="h-[48px] sm:h-[54px] w-auto object-contain drop-shadow-md transition-transform group-hover:scale-105"
          />
        </a>

        {/* Right Action: Call Now & Hamburger Menu */}
        <div className="flex items-center gap-3">
          <a
            href={clinicConfig.phoneTel}
            className="hidden sm:flex items-center justify-center gap-2.5 h-[40px] px-6 rounded-full bg-[#07852F] hover:bg-[#216FA7] text-white text-sm font-semibold active:scale-95 transition-colors duration-200 shadow-xl cursor-pointer group"
          >
            <Phone className="w-4 h-4 stroke-[2.2] text-white" />
            <span className="tracking-tight">Call Now</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none cursor-pointer hover:bg-[#216FA7] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="relative z-30 mx-6 p-4 rounded-2xl bg-black/95 backdrop-blur-xl border border-white/15 flex flex-col gap-2 animate-in fade-in duration-200">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveNav(item);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeNav === item ? 'bg-[#07852F] text-white font-semibold' : 'text-white/80 hover:bg-[#216FA7] hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
          <a
            href={clinicConfig.phoneTel}
            className="sm:hidden flex items-center justify-center gap-3 mt-2 h-[45px] px-7 rounded-full bg-[#07852F] hover:bg-[#216FA7] text-white font-semibold text-[15px] text-center transition-colors"
          >
            <Phone className="w-[19px] h-[19px] stroke-[2.2] text-white" />
            <span>Call Now ({clinicConfig.phoneDisplay})</span>
          </a>
        </div>
      )}

      {/* Hero Content for Mobile / Tablet */}
      <main className="relative z-10 my-auto w-full px-6 sm:px-12 md:px-16 py-8 flex flex-col items-center text-center max-w-xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.08] text-center">
          Seamless
          <br />
          <span className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-1">
            <span>Dental</span>
            <span className="inline-flex items-center justify-center mx-1 transform translate-y-[-2px]">
              <img 
                src={toothEmojiImg} 
                alt="Tooth Emoji" 
                className="h-[42px] sm:h-[58px] md:h-[66px] w-auto object-contain drop-shadow-md"
              />
            </span>
            <span>Care</span>
          </span>
        </h1>

        <p className="mt-5 mb-8 text-white/90 text-xs sm:text-sm md:text-base font-normal leading-relaxed tracking-wide max-w-md text-center">
          {clinicConfig.intro}
        </p>

        <div className="flex justify-center w-full">
          <button 
            onClick={() => onBookClick && onBookClick('General Consultation')}
            className="group flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#07852F] hover:bg-[#216FA7] text-white font-semibold text-sm sm:text-base active:scale-95 transition-colors duration-200 shadow-xl cursor-pointer"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2] group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </main>

      {/* Bottom Spacer */}
      <div className="relative z-10 h-10" />
    </div>
  );
}
