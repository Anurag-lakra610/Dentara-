import React, { useState } from 'react';
import { Phone, ArrowRight, Menu, X, Play, Plus } from 'lucide-react';
import logoImg from './assets/logo.png';
import heroBgImg from './assets/hero-bg.jpg';
import toothEmojiImg from './assets/tooth-emoji.png';
import aboutLeftImg from './assets/about-left.jpg';
import aboutCenterImg from './assets/about-center.png';
import aboutRightImg from './assets/about-right.jpg';
import servicesVideoImg from './assets/services-video.jpg';
import iconCavity from './assets/icon-cavity.png';
import iconRootCanal from './assets/icon-root-canal.png';
import iconOralSurgery from './assets/icon-oral-surgery.png';
import consultationMainImg from './assets/consultation-main.jpg';
import consultationRightImg from './assets/consultation-right.png';
import consultationVideoImg from './assets/consultation-video.png';
import flossEmojiImg from './assets/floss-emoji.png';

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

      {/* SERVICES WE PROVIDE SECTION - 3rd Section (Asymmetric Pastel Cards Matching Reference Mockup) */}
      <section className="w-full bg-[#FAF8F5] text-[#111827] pt-[60px] sm:pt-[80px] lg:pt-[100px] pb-[60px] sm:pb-[80px] lg:pb-[100px] px-5 sm:px-10 md:px-14 lg:px-18 xl:px-24 overflow-hidden border-t border-black/[0.04]">
        <div className="max-w-[1650px] mx-auto">
          
          {/* Section Header: Title on Left, Description above CTA Button on Right */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-[#111827] leading-[1.25]">
                <span className="block mb-1.5">Services We Provide</span>
                <span className="block">Are Listed Below</span>
              </h2>
            </div>

            {/* Right Side: Small Description Text on Top, CTA Button Below */}
            <div className="flex flex-col items-start md:items-end gap-3.5 text-left md:text-right max-w-md">
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-normal">
                The blocks & components you need to build a professional website are based drivers.
              </p>
              <button className="group inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#3BB0E5] via-[#2A97D1] to-[#1C7DBB] text-white font-medium text-sm hover:opacity-95 active:scale-95 transition-all shadow-[0_6px_20px_rgba(28,125,189,0.25)] cursor-pointer whitespace-nowrap">
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Service Cards Container (All 4 cards 350px height, Cavity Protection 700px width, Root Canal & Oral Surgery equal 500px width) */}
          <div className="relative flex flex-col gap-6 lg:gap-8">
            
            {/* Vertical Divider with "our services" text in the whitespace gap, shifted right next to Root Canal Treatment box */}
            <div className="hidden lg:flex absolute right-[515px] xl:right-[525px] top-0 h-[350px] z-10 flex-col items-center pointer-events-none">
              <span className="text-[#475569]/80 text-[12px] font-normal tracking-[0.2em] lowercase [writing-mode:vertical-lr] rotate-180 mb-3">
                our services
              </span>
              <div className="w-[1px] h-28 bg-[#CBD5E1]"></div>
            </div>

            {/* Row 1: Cavity Protection (700px) + Empty Whitespace + Root Canal Treatment (500px) */}
            <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-8">
              
              {/* Card 1: Cavity Protection (Pastel Cyan Blue #CFECF0, Width 700px, Height 350px) */}
              <div className="w-full lg:w-[700px] flex-shrink-0 bg-[#CFECF0] rounded-[32px] p-7 sm:p-8 lg:p-9 shadow-sm transition-all duration-300 flex flex-col justify-between relative group h-[350px]">
                <div className="flex items-start justify-between w-full">
                  {/* Single White Circle Badge (No inner blue gradient) */}
                  <div className="w-14 h-14 rounded-full bg-white/70 border border-white/90 flex items-center justify-center shadow-sm">
                    <svg className="w-7 h-7 text-[#1E293B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4.5C9 4.5 7 6.5 7 10C7 13.5 8 16.5 9 19.5C9.5 21 10.5 21.5 12 21.5C13.5 21.5 14.5 21 15 19.5C16 16.5 17 13.5 17 10C17 6.5 15 4.5 12 4.5Z" />
                      <circle cx="12" cy="9" r="2" strokeWidth="1.4" />
                    </svg>
                  </div>
                  <svg className="w-6 h-6 text-black/15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
                  </svg>
                </div>

                <div className="mt-auto mb-1">
                  <h3 className="text-xl sm:text-[24px] font-medium text-[#111827] mb-2 tracking-tight">
                    Cavity Protection
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-[#475569] font-normal leading-[1.6] max-w-md mb-6">
                    As we move into this new era of technology, we tend to look at the future with confidence and pride, which is why our theme.
                  </p>
                  <div>
                    <a href="#" className="inline-flex items-center gap-2 text-xs sm:text-[13.5px] font-semibold text-[#111827] hover:text-[#0284C7] transition-colors group/link">
                      <span className="underline underline-offset-4 decoration-1">Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Root Canal Treatment (Pastel Cream Yellow #FBF9BA, Width 500px, Height 350px) */}
              <div className="w-full lg:w-[500px] flex-shrink-0 bg-[#FBF9BA] rounded-[32px] p-7 sm:p-8 lg:p-9 shadow-sm transition-all duration-300 flex flex-col justify-between relative group h-[350px]">
                <div className="flex items-start justify-between w-full">
                  {/* Single White Circle Badge (No inner blue gradient) */}
                  <div className="w-14 h-14 rounded-full bg-white/70 border border-white/90 flex items-center justify-center shadow-sm">
                    <svg className="w-7 h-7 text-[#1E293B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4.5C9 4.5 7 6 7 9.5C7 13 8 16 9.5 19.5C10 20.5 10.5 21.5 11.5 21.5C12.5 21.5 12 18 12 15M12 4.5C15 4.5 17 6 17 9.5C17 13 16 16 14.5 19.5C14 20.5 13.5 21.5 12.5 21.5C11.5 21.5 12 18 12 15" />
                    </svg>
                  </div>
                  <svg className="w-6 h-6 text-black/15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
                  </svg>
                </div>

                <div className="mt-auto mb-1">
                  <h3 className="text-xl sm:text-[24px] font-medium text-[#111827] mb-2 tracking-tight">
                    Root Canal Treatment
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-[#475569] font-normal leading-[1.6] max-w-[360px] mb-6">
                    In the new era of technology we look in the future with certainty and pride, that's why our theme looks so good.
                  </p>
                  <div>
                    <a href="#" className="inline-flex items-center gap-2 text-xs sm:text-[13.5px] font-semibold text-[#111827] hover:text-[#0284C7] transition-colors group/link">
                      <span className="underline underline-offset-4 decoration-1">Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Oral Surgery (500px - EXACT match with Root Canal Treatment) + Video Image Card (Fills remaining width) */}
            <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
              
              {/* Card 3: Oral Surgery (Pastel Lavender Pink #FCBCFF, Width 500px, Height 350px - EXACT match with Root Canal Treatment) */}
              <div className="w-full lg:w-[500px] flex-shrink-0 bg-[#FCBCFF] rounded-[32px] p-7 sm:p-8 lg:p-9 shadow-sm transition-all duration-300 flex flex-col justify-between relative group h-[350px]">
                <div className="flex items-start justify-between w-full">
                  {/* Single White Circle Badge (No inner blue gradient) */}
                  <div className="w-14 h-14 rounded-full bg-white/70 border border-white/90 flex items-center justify-center shadow-sm">
                    <svg className="w-7 h-7 text-[#1E293B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3.5C9 3.5 7 5 7 8.5C7 12 8 14 9.5 17C10 18 10.5 18.5 11.5 18.5C12.5 18.5 12 16 12 14M12 3.5C15 3.5 17 5 17 8.5C17 12 16 14 14.5 17C14 18 13.5 18.5 12.5 18.5C11.5 18.5 12 16 12 14" />
                      <path d="M9 20.5H15M10.5 18.5V22.5M13.5 18.5V22.5" />
                    </svg>
                  </div>
                  <svg className="w-6 h-6 text-black/15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
                  </svg>
                </div>

                <div className="mt-auto mb-1">
                  <h3 className="text-xl sm:text-[24px] font-medium text-[#111827] mb-2 tracking-tight">
                    Oral Surgery
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-[#475569] font-normal leading-[1.6] max-w-[360px] mb-6">
                    In the new era of technology we look in the future with certainty and pride, that's why our theme looks so good.
                  </p>
                  <div>
                    <a href="#" className="inline-flex items-center gap-2 text-xs sm:text-[13.5px] font-semibold text-[#111827] hover:text-[#0284C7] transition-colors group/link">
                      <span className="underline underline-offset-4 decoration-1">Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 4: Video Image Card (Fills remaining width, Height 350px) */}
              <div className="flex-1 relative rounded-[32px] overflow-hidden shadow-md cursor-pointer group h-[350px]">
                <img 
                  src={servicesVideoImg} 
                  alt="Dental Procedure Patient Video" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white translate-x-[2px]" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* DOCTOR CONSULTATIONS SECTION - 4th Section (Full Screen Ratio) */}
      <section className="w-full bg-[#FAF8F5] text-[#111827] pt-[60px] sm:pt-[80px] lg:pt-[100px] pb-[60px] sm:pb-[80px] lg:pb-[100px] px-5 sm:px-10 md:px-14 lg:px-18 xl:px-24 overflow-hidden border-t border-black/[0.04]">
        <div className="max-w-[1650px] mx-auto">
          
          {/* Main 3-Column Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-stretch">
            
            {/* Left Column: Badge, Title with Floss Emoji, Subtext */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                {/* Tag Badge: (cost care) */}
                <div className="flex items-center gap-3 text-[#2A91CF] font-medium text-xs sm:text-sm tracking-wide mb-4">
                  <span>(cost care)</span>
                  <span className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-[#2A91CF]/40 to-transparent"></span>
                </div>

                {/* Main Heading with Floss Emoji Badge */}
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-[#111827] leading-[1.2] mb-6">
                  <span className="block">Doctor Consultations</span>
                  <span className="flex items-center gap-2 flex-wrap mt-1">
                    <span>Are</span>
                    <span className="inline-flex items-center justify-center align-middle mx-0.5">
                      <img 
                        src={flossEmojiImg} 
                        alt="Floss Emoji" 
                        className="h-[36px] sm:h-[42px] w-auto rounded-full object-cover shadow-sm border border-black/5"
                      />
                    </span>
                    <span>Free & Trusted</span>
                  </span>
                </h2>
              </div>

              {/* Subtext Paragraph on Bottom Left */}
              <div className="mt-8 lg:mt-auto">
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal max-w-xs sm:max-w-sm">
                  Team carefully evaluates your results to provide actionable insights for improving your health & lifespan.
                </p>
              </div>
            </div>

            {/* Middle Column: Center Square Image + Bottom Row (98% Card + Video Picture Box) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-5 sm:gap-6">
              
              {/* Main Center Square Image (Wide Rectangular Aspect Ratio) */}
              <div className="w-full rounded-[28px] overflow-hidden shadow-md group">
                <img 
                  src={consultationMainImg} 
                  alt="Doctor Dental Procedure" 
                  className="w-full h-[280px] sm:h-[320px] lg:h-[340px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom Row under Main Image: 98% Stat Card + Video Picture Box */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-5 w-full">
                
                {/* 98% Stat Card */}
                <div className="w-full sm:w-[170px] md:w-[180px] flex-shrink-0 bg-white rounded-[24px] p-5 shadow-sm border border-black/[0.02] flex flex-col justify-between h-[145px] sm:h-[155px]">
                  <div>
                    <div className="text-3xl sm:text-[34px] font-medium text-[#2C8ECB] tracking-tight leading-none mb-2">98%</div>
                    <div className="w-8 h-[2px] bg-[#E0F2FE] mb-1.5"></div>
                  </div>
                  <p className="text-[11px] text-[#6B7280] font-normal leading-snug">
                    Client satisfaction with our service
                  </p>
                </div>

                {/* Video Picture Box */}
                <div className="flex-1 relative rounded-[24px] overflow-hidden shadow-md cursor-pointer group h-[145px] sm:h-[155px]">
                  <img 
                    src={consultationVideoImg} 
                    alt="Doctor Consultation Video" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-4.5 h-4.5 fill-white text-white translate-x-[1px]" />
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Paragraph Description + CTA Button + Vertical Portrait Image */}
            <div className="lg:col-span-3 flex flex-col justify-between gap-6">
              
              {/* Upper Right: Description & CTA Button */}
              <div className="flex flex-col items-start gap-4">
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                  Take control of your health with a comprehensive assessment unlike any other. We use the latest medical innovations, including next-generation MRI, cardiovascular & neurocognitive assessments, early cancer detection, and genetic testing.
                </p>
                <button className="group inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#3BB0E5] via-[#2A97D1] to-[#1C7DBB] text-white font-medium text-sm hover:opacity-95 active:scale-95 transition-all shadow-[0_6px_20px_rgba(28,125,189,0.25)] cursor-pointer whitespace-nowrap">
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Lower Right: Vertical Portrait Image (Left-aligned under button matching mockup) */}
              <div className="mt-8 lg:mt-auto flex justify-start">
                <div className="w-full max-w-[210px] sm:max-w-[230px] rounded-[24px] overflow-hidden shadow-md group">
                  <img 
                    src={consultationRightImg} 
                    alt="Dental Consultation Patient" 
                    className="w-full h-[220px] sm:h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
