import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.png';
import heroBgImg from '../assets/hero-bg.jpg';
import toothEmojiImg from '../assets/tooth-emoji.png';

export default function HeroDesktop({ navItems, activeNav, setActiveNav }) {
  return (
    <div className="hidden lg:flex relative w-full min-h-screen bg-[#080808] overflow-hidden flex-col justify-between">
      
      {/* High Definition Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-x-[-1] scale-105"
          style={{ backgroundImage: `url(${heroBgImg})` }}
        />
        {/* Left-to-Right dark gradient overlay for website view text readability + subtle top/bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/75" />
      </div>

      {/* Header Navigation for Desktop */}
      <header className="relative z-20 w-full px-16 lg:px-20 pt-[39px] pb-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center h-[45px] group focus:outline-none">
          <img 
            src={logoImg} 
            alt="Dentara Logo" 
            className="h-[36px] w-auto object-contain mix-blend-screen drop-shadow-md transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Capsule */}
        <nav className="flex items-center h-[45px] gap-1 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-xl">
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

        {/* Right Action Button (Call Now) */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+1234567890"
            className="flex items-center justify-center gap-3 h-[45px] px-7 rounded-full bg-white text-black text-[15px] font-semibold hover:bg-white/95 active:scale-95 transition-all shadow-xl cursor-pointer"
          >
            <Phone className="w-[19px] h-[19px] stroke-[2.2] text-black" />
            <span className="tracking-tight">Call Now</span>
          </a>
        </div>
      </header>

      {/* Hero Section Content for Desktop */}
      <main className="relative z-10 my-auto w-full px-16 lg:px-20 py-12 md:py-16 max-w-3xl flex flex-col items-start text-left ml-0">
        <h1 className="text-6xl md:text-7xl lg:text-[76px] font-bold text-white tracking-tight leading-[1.05] text-left">
          Seamless
          <br />
          <span className="flex flex-wrap items-center justify-start gap-3 mt-1">
            <span>Dental</span>
            
            {/* Tooth Emoji Asset */}
            <span className="inline-flex items-center justify-center mx-1 transform translate-y-[-2px]">
              <img 
                src={toothEmojiImg} 
                alt="Tooth Emoji" 
                className="h-[59px] md:h-[67px] w-auto object-contain drop-shadow-md"
              />
            </span>

            <span>Care</span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-5 mb-8 text-white/80 text-base font-normal leading-relaxed tracking-wide max-w-xl text-left">
          Whether it's a leaky faucet or a major plumbing emergency,
          <br className="inline" />
          {' '}our experienced professionals are just a call away
        </p>

        <div className="flex justify-start w-full">
          <button className="group flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-base hover:bg-neutral-100 active:scale-95 transition-all duration-200 shadow-xl cursor-pointer">
            <span>Book Appointment</span>
            <ArrowRight className="w-5 h-5 stroke-[2.2] group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </main>

      {/* Bottom Hero Spacer */}
      <div className="relative z-10 h-12" />
    </div>
  );
}
