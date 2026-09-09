import React, { useState } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import logoImg from './assets/logo.png';
import heroBgImg from './assets/hero-bg.jpg';
import toothEmojiImg from './assets/tooth-emoji.png';
import aboutLeftImg from './assets/about-left.jpg';
import aboutCenterImg from './assets/about-center.png';
import aboutRightImg from './assets/about-right.jpg';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Product', 'Services', 'Appointment'];

  return (
    <div className="w-full bg-[#080808] font-sans antialiased">
      
      {/* HERO SECTION */}
      <div className="relative w-full min-h-screen bg-[#080808] overflow-hidden flex flex-col justify-between">
        
        {/* High Definition Hero Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-x-[-1] scale-105"
            style={{ backgroundImage: `url(${heroBgImg})` }}
          />
          {/* Dark vignette gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/30 sm:to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

        {/* Header Navigation */}
        <header className="relative z-20 w-full px-6 sm:px-12 md:px-16 lg:px-20 pt-[39px] pb-6 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center h-[45px] group focus:outline-none">
            <img 
              src={logoImg} 
              alt="Dentara Logo" 
              className="h-[32px] sm:h-[36px] w-auto object-contain mix-blend-screen drop-shadow-md transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Capsule */}
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

          {/* Right Action Button (Call Now) */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+1234567890"
              className="hidden sm:flex items-center justify-center gap-3 h-[45px] px-7 rounded-full bg-white text-black text-[15px] font-semibold hover:bg-white/95 active:scale-95 transition-all shadow-xl cursor-pointer"
            >
              <Phone className="w-[19px] h-[19px] stroke-[2.2] text-black" />
              <span className="tracking-tight">Call Now</span>
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
              className="sm:hidden flex items-center justify-center gap-3 mt-2 h-[45px] px-7 rounded-full bg-white text-black font-semibold text-[15px] text-center"
            >
              <Phone className="w-[19px] h-[19px] stroke-[2.2] text-black" />
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
              
              {/* Tooth Emoji Asset */}
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

        {/* Bottom Hero Spacer for Seamless Transition */}
        <div className="relative z-10 h-12" />

      </div>

      {/* ABOUT US SECTION - Ultra-Responsive Full Screen Ratio with 100px Padding */}
      <section className="w-full bg-[#FAF8F5] text-[#111827] pt-[60px] sm:pt-[80px] lg:pt-[100px] pb-[60px] sm:pb-[80px] lg:pb-[100px] px-5 sm:px-10 md:px-14 lg:px-18 xl:px-24 overflow-hidden">
        <div className="max-w-[1650px] mx-auto">
          
          {/* Main 3-Column Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-start">
            
            {/* Middle Column - Content & Bottom Center Image (Appears first on Mobile for UX flow) */}
            <div className="order-1 lg:order-2 lg:col-span-4 text-center flex flex-col items-center justify-between">
              <div className="w-full flex flex-col items-center">
                {/* Tag Badge: (about us) */}
                <div className="flex items-center justify-center gap-3 text-[#2A91CF] font-medium text-xs sm:text-sm tracking-wide mb-3">
                  <span className="h-[1px] w-10 sm:w-12 bg-gradient-to-r from-transparent to-[#2A91CF]/40"></span>
                  <span>(about us)</span>
                  <span className="h-[1px] w-10 sm:w-12 bg-gradient-to-l from-transparent to-[#2A91CF]/40"></span>
                </div>

                {/* Main Heading - Responsive font scaling & wide max-w container */}
                <h2 className="text-2xl sm:text-[38px] lg:text-[44px] font-medium tracking-tight text-[#111827] leading-[1.2] mb-4 text-center w-full max-w-[520px]">
                  <span className="block sm:inline lg:block">A Simple Way to Save</span>
                  <span className="block sm:inline lg:block"> on Dental Care</span>
                </h2>

                {/* Paragraph Subtitle */}
                <p className="mb-6 text-[#4B5563] text-xs sm:text-sm leading-relaxed max-w-[460px] mx-auto font-normal px-2 sm:px-0">
                  Our team of skilled and experienced dental professionals strives to create comfortable and welcoming environment for each and every patient. We offer a wide range of services.
                </p>

                {/* Blue Cerulean Gradient CTA Button */}
                <button className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#32A7DC] via-[#2A94D1] to-[#1C81BD] text-white font-medium text-sm hover:opacity-95 active:scale-95 transition-all shadow-md shadow-[#2A94D1]/20 cursor-pointer mx-auto">
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Center Bottom High Definition Image Card */}
              <div className="w-full max-w-[460px] rounded-[24px] overflow-hidden shadow-md mt-10 sm:mt-12 transition-transform duration-300 hover:scale-[1.01]">
                <img 
                  src={aboutCenterImg} 
                  alt="Dental Teeth Cleaning Procedure" 
                  className="w-full h-[190px] sm:h-[230px] object-cover block"
                />
              </div>
            </div>

            {/* Left Column - High Definition Image Card */}
            <div className="order-2 lg:order-1 lg:col-span-4 flex justify-center lg:justify-start lg:pt-[72px]">
              <div className="relative w-full max-w-[380px] rounded-[24px] overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.01]">
                <img 
                  src={aboutLeftImg} 
                  alt="Dental Team at Work" 
                  className="w-full h-[340px] sm:h-[420px] lg:h-[470px] object-cover block"
                />
              </div>
            </div>

            {/* Right Column - Image Card & 98% Satisfaction Stat (Bottom aligned parallel with center bottom image) */}
            <div className="order-3 lg:order-3 lg:col-span-4 flex justify-center lg:justify-end h-full">
              <div className="w-full max-w-[380px] flex flex-col justify-between h-full items-start">
                <div className="relative w-full rounded-[24px] overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.01]">
                  <img 
                    src={aboutRightImg} 
                    alt="Teeth Whitening Procedure" 
                    className="w-full h-[400px] sm:h-[440px] object-cover block"
                  />
                </div>

                {/* Stat Badge directly under right image (Bottom edge parallel with middle bottom image) */}
                <div className="mt-6 sm:mt-8 text-left">
                  <div className="text-4xl sm:text-6xl lg:text-[66px] font-medium text-[#2C8ECB] tracking-tight leading-none mb-1.5">
                    98%
                  </div>
                  <p className="text-xs sm:text-sm text-[#4B5563] font-normal leading-snug">
                    Client satisfaction with our service
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Global Footer */}
      <footer className="w-full bg-[#111827] text-white/50 px-6 sm:px-12 py-8 flex flex-col sm:flex-row justify-between items-center text-xs gap-3">
        <span>&copy; {new Date().getFullYear()} Dentara Clinic. All rights reserved.</span>
        <span>Crafted with Inter Variable typography</span>
      </footer>

    </div>
  );
}
