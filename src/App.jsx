import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, ArrowLeft, Star, Menu, X, Play, Plus } from 'lucide-react';
import logoImg from './assets/logo.png';
import heroBgImg from './assets/hero-bg.jpg';
import toothEmojiImg from './assets/tooth-emoji.png';
import HeroSection from './components/HeroSection';
import aboutLeftImg from './assets/about-left.jpg';
import aboutCenterImg from './assets/about-center.png';
import aboutRightImg from './assets/about-right.jpg';
import servicesVideoImg from './assets/services-video.jpg';
import iconCavity from './assets/icon-cavity.png';
import iconRootCanal from './assets/icon-root-canal.png';
import iconOralSurgery from './assets/icon-oral-surgery.png';
import iconCavityReal from './assets/icon-cavity-real.png';
import iconRootCanalReal from './assets/icon-root-canal-real.png';
import iconOralSurgeryReal from './assets/icon-oral-surgery-real.png';
import workTeethImg from './assets/work-teeth-straightening.jpg';
import workImplantImg from './assets/work-dental-implant.png';
import avatarGlassesImg from './assets/avatar-man-glasses.png';
import avatarBeardedImg from './assets/avatar-man-bearded.png';
import avatarFemaleDoctor from './assets/avatar-female-doctor.jpg';
import consultationMainImg from './assets/consultation-main.jpg';
import consultationRightImg from './assets/consultation-right.png';
import consultationVideoImg from './assets/consultation-video.png';
import flossEmojiImg from './assets/floss-emoji.png';
import insightDentalImg from './assets/insight-dental.jpg';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [isServicesVideoPlaying, setIsServicesVideoPlaying] = useState(false);
  const [isConsultationVideoPlaying, setIsConsultationVideoPlaying] = useState(false);

  const getCardsToShow = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setCardsToShow(getCardsToShow());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonialsBase = [
    { id: 1, name: 'Alex Morgan', title: 'Schedules that work for you', avatar: avatarGlassesImg, quote: '"Our visual designer lets you quickly an of drag and drop your own way to custom-apps for both keep desktop, mobile & also tab for report."' },
    { id: 2, name: 'David Miller', title: 'Health screenings for seniors', avatar: avatarBeardedImg, quote: '"Our visual designer lets you quickly an of drag and drop your own way to custom-apps for both keep desktop, mobile & also tab for report."' },
    { id: 3, name: 'Sarah Jenkins', title: 'Seniors stay independent', avatar: avatarFemaleDoctor, quote: '"Our visual designer lets you quickly an of drag and drop your own way to custom-apps for both keep desktop, mobile & also tab for report."' },
  ];

  // Extended array for seamless, infinite wrap-around slider
  const testimonialsList = [
    ...testimonialsBase,
    ...testimonialsBase,
    ...testimonialsBase,
    ...testimonialsBase,
    ...testimonialsBase,
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const handleNextTestimonial = () => {
    if (!isTransitioning) return;
    setTestimonialIndex((prev) => prev + 1);
  };

  const handlePrevTestimonial = () => {
    if (!isTransitioning) return;
    setTestimonialIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (testimonialIndex >= 9) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setTestimonialIndex(3);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (testimonialIndex <= 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setTestimonialIndex(6);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [testimonialIndex]);

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const navItems = ['Home', 'About', 'Product', 'Services', 'Appointment'];

  return (
    <div className="w-full bg-[#080808] font-sans antialiased">
      
      {/* HERO SECTION (Separated Mobile/Tablet & Desktop Components) */}
      <HeroSection navItems={navItems} activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* ABOUT US SECTION - Ultra-Responsive Full Screen Ratio with 100px Padding */}
      <section className="w-full bg-[#FAF8F5] text-[#111827] pt-[60px] sm:pt-[80px] lg:pt-[100px] pb-[60px] sm:pb-[80px] lg:pb-[100px] px-5 sm:px-10 md:px-14 lg:px-18 xl:px-24 overflow-hidden">
        <div className="max-w-[1650px] mx-auto">
          
          {/* MOBILE VIEW (Centered Hierarchy + Horizontal Touch-Snap Photo Slider) */}
          <div className="lg:hidden flex flex-col items-center text-center">
            {/* Tag Badge: (about us) */}
            <div className="flex items-center justify-center gap-3 text-[#2A91CF] font-medium text-xs sm:text-sm tracking-wide mb-3">
              <span className="h-[1px] w-10 sm:w-12 bg-gradient-to-r from-transparent to-[#2A91CF]/40"></span>
              <span>(about us)</span>
              <span className="h-[1px] w-10 sm:w-12 bg-gradient-to-l from-transparent to-[#2A91CF]/40"></span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-[38px] font-medium tracking-tight text-[#111827] leading-[1.2] mb-6 text-center w-full max-w-[520px]">
              A Simple Way to Save on Dental Care
            </h2>

            {/* MOBILE & TABLET HORIZONTAL PHOTO SLIDER (Full Active Focus + Subtle Edge Peek) */}
            <div className="w-full overflow-x-auto flex snap-x snap-mandatory gap-3.5 sm:gap-5 pb-4 mb-6 -mx-5 px-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="snap-start flex-shrink-0 w-[86%] min-[400px]:w-[88%] sm:w-[calc(46%-0.75rem)] md:w-[calc(45%-0.75rem)] rounded-[24px] overflow-hidden shadow-md">
                <img 
                  src={aboutLeftImg} 
                  alt="Dental Team at Work" 
                  className="w-full h-[260px] sm:h-[300px] md:h-[330px] object-cover block"
                />
              </div>
              <div className="snap-start flex-shrink-0 w-[86%] min-[400px]:w-[88%] sm:w-[calc(46%-0.75rem)] md:w-[calc(45%-0.75rem)] rounded-[24px] overflow-hidden shadow-md">
                <img 
                  src={aboutCenterImg} 
                  alt="Dental Teeth Cleaning Procedure" 
                  className="w-full h-[260px] sm:h-[300px] md:h-[330px] object-cover block"
                />
              </div>
              <div className="snap-start flex-shrink-0 w-[86%] min-[400px]:w-[88%] sm:w-[calc(46%-0.75rem)] md:w-[calc(45%-0.75rem)] rounded-[24px] overflow-hidden shadow-md">
                <img 
                  src={aboutRightImg} 
                  alt="Teeth Whitening Procedure" 
                  className="w-full h-[260px] sm:h-[300px] md:h-[330px] object-cover block"
                />
              </div>
            </div>

            {/* Paragraph Subtitle */}
            <p className="mb-6 text-[#4B5563] text-xs sm:text-sm leading-relaxed max-w-[460px] mx-auto font-normal">
              Our team of skilled and experienced dental professionals strives to create comfortable and welcoming environment for each and every patient. We offer a wide range of services.
            </p>

            {/* Stat Badge (Above CTA Button on Mobile) */}
            <div className="text-center mb-6">
              <div className="text-4xl sm:text-6xl font-medium text-[#2C8ECB] tracking-tight leading-none mb-1.5">
                98%
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563] font-normal leading-snug">
                Client satisfaction with our service
              </p>
            </div>

            {/* Blue Cerulean Gradient CTA Button (Below Stat Badge on Mobile) */}
            <button className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#32A7DC] via-[#2A94D1] to-[#1C81BD] text-white font-medium text-sm hover:opacity-95 active:scale-95 transition-all shadow-md shadow-[#2A94D1]/20 cursor-pointer">
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* DESKTOP VIEW (Preserved 100% Unchanged) */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-14 items-start">
            
            {/* Middle Column - Content & Bottom Center Image */}
            <div className="lg:order-2 lg:col-span-4 text-center flex flex-col items-center justify-between">
              <div className="w-full flex flex-col items-center">
                {/* Tag Badge: (about us) */}
                <div className="flex items-center justify-center gap-3 text-[#2A91CF] font-medium text-xs sm:text-sm tracking-wide mb-3">
                  <span className="h-[1px] w-10 sm:w-12 bg-gradient-to-r from-transparent to-[#2A91CF]/40"></span>
                  <span>(about us)</span>
                  <span className="h-[1px] w-10 sm:w-12 bg-gradient-to-l from-transparent to-[#2A91CF]/40"></span>
                </div>

                {/* Main Heading */}
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

              {/* Center Bottom Image Card */}
              <div className="w-full max-w-[460px] rounded-[24px] overflow-hidden shadow-md mt-10 sm:mt-12 transition-transform duration-300 hover:scale-[1.01]">
                <img 
                  src={aboutCenterImg} 
                  alt="Dental Teeth Cleaning Procedure" 
                  className="w-full h-[190px] sm:h-[230px] object-cover block"
                />
              </div>
            </div>

            {/* Left Column - Image Card */}
            <div className="lg:order-1 lg:col-span-4 flex justify-center lg:justify-start lg:pt-[72px]">
              <div className="relative w-full max-w-[380px] rounded-[24px] overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.01]">
                <img 
                  src={aboutLeftImg} 
                  alt="Dental Team at Work" 
                  className="w-full h-[340px] sm:h-[420px] lg:h-[470px] object-cover block"
                />
              </div>
            </div>

            {/* Right Column - Image Card & Stat */}
            <div className="lg:order-3 lg:col-span-4 flex justify-center lg:justify-end h-full">
              <div className="w-full max-w-[380px] flex flex-col justify-between h-full items-start">
                <div className="relative w-full rounded-[24px] overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.01]">
                  <img 
                    src={aboutRightImg} 
                    alt="Teeth Whitening Procedure" 
                    className="w-full h-[400px] sm:h-[440px] object-cover block"
                  />
                </div>

                {/* Stat Badge */}
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
          
          {/* Section Header: Title & Description centered on mobile */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-16 text-center md:text-left items-center md:items-end">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-[#111827] leading-[1.25]">
                <span className="block mb-1.5">Services We Provide</span>
                <span className="block">Are Listed Below</span>
              </h2>
            </div>

            {/* Right Side: Description Text on Top (CTA Button moved below boxes on mobile) */}
            <div className="flex flex-col items-center md:items-end gap-3.5 text-center md:text-right max-w-md">
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-normal">
                The blocks & components you need to build a professional website are based drivers.
              </p>
              <button className="hidden md:inline-flex group items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#3BB0E5] via-[#2A97D1] to-[#1C7DBB] text-white font-medium text-sm hover:opacity-95 active:scale-95 transition-all shadow-[0_6px_20px_rgba(28,125,189,0.25)] cursor-pointer whitespace-nowrap">
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* MOBILE VIEW CAROUSEL SLIDER (< lg - Full Active Focus + Subtle Edge Peek) */}
          <div className="lg:hidden flex flex-col items-center">
            <div className="w-full flex overflow-x-auto snap-x snap-mandatory gap-3.5 sm:gap-5 pb-4 -mx-5 px-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mb-6">
              
              {/* Card 1 (Video - Placed First on Mobile) */}
              <div className="snap-start flex-shrink-0 w-[86%] min-[400px]:w-[88%] sm:w-[calc(46%-0.75rem)] md:w-[calc(45%-0.75rem)] relative rounded-[32px] overflow-hidden h-[340px] sm:h-[360px] shadow-md group cursor-pointer bg-black">
                {isServicesVideoPlaying ? (
                  <div className="relative w-full h-full">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setIsServicesVideoPlaying(false); }}
                      className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg border border-white/20"
                      title="Close Video"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <iframe
                      src="https://www.youtube.com/embed/Wx8GGSnT9_Y?autoplay=1&rel=0"
                      title="Dental Procedure Patient Video"
                      className="w-full h-full border-0 rounded-[32px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div 
                    onClick={() => setIsServicesVideoPlaying(true)}
                    className="w-full h-full relative"
                  >
                    <img src={servicesVideoImg} alt="Dental Procedure Patient Video" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-white text-white translate-x-[2px]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card 2 (Cavity Protection) */}
              <div className="snap-start flex-shrink-0 w-[86%] min-[400px]:w-[88%] sm:w-[calc(46%-0.75rem)] md:w-[calc(45%-0.75rem)] bg-[#CFECF0] rounded-[32px] p-6 sm:p-7 flex flex-col justify-between h-[340px] sm:h-[360px] shadow-sm">
                <div className="flex items-start justify-between w-full">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-black/5">
                    <img src={iconCavityReal} alt="Cavity Protection Icon" className="w-6 h-6 object-contain" />
                  </div>
                  <svg className="w-5 h-5 text-black/15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
                  </svg>
                </div>
                <div className="mt-auto mb-1 text-center">
                  <h3 className="text-xl font-medium text-[#111827] mb-2 tracking-tight">Cavity Protection</h3>
                  <p className="text-xs text-[#475569] font-normal leading-[1.6] mb-4">
                    As we move into this new era of technology, we tend to look at the future with confidence and pride.
                  </p>
                  <div>
                    <a href="#" className="inline-flex items-center gap-2 text-xs font-semibold text-[#111827]">
                      <span className="underline underline-offset-4">Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3 (Root Canal Treatment) */}
              <div className="snap-start flex-shrink-0 w-[86%] min-[400px]:w-[88%] sm:w-[calc(46%-0.75rem)] md:w-[calc(45%-0.75rem)] bg-[#FBF9BA] rounded-[32px] p-6 sm:p-7 flex flex-col justify-between h-[340px] sm:h-[360px] shadow-sm">
                <div className="flex items-start justify-between w-full">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-black/5">
                    <img src={iconRootCanalReal} alt="Root Canal Treatment Icon" className="w-6 h-6 object-contain" />
                  </div>
                  <svg className="w-5 h-5 text-black/15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
                  </svg>
                </div>
                <div className="mt-auto mb-1 text-center">
                  <h3 className="text-xl font-medium text-[#111827] mb-2 tracking-tight">Root Canal Treatment</h3>
                  <p className="text-xs text-[#475569] font-normal leading-[1.6] mb-4">
                    In the new era of technology we look in the future with certainty and pride, that's why our theme looks so good.
                  </p>
                  <div>
                    <a href="#" className="inline-flex items-center gap-2 text-xs font-semibold text-[#111827]">
                      <span className="underline underline-offset-4">Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 4 (Oral Surgery) */}
              <div className="snap-start flex-shrink-0 w-[86%] min-[400px]:w-[88%] sm:w-[calc(46%-0.75rem)] md:w-[calc(45%-0.75rem)] bg-[#FCBCFF] rounded-[32px] p-6 sm:p-7 flex flex-col justify-between h-[340px] sm:h-[360px] shadow-sm">
                <div className="flex items-start justify-between w-full">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-black/5">
                    <img src={iconOralSurgeryReal} alt="Oral Surgery Icon" className="w-6 h-6 object-contain" />
                  </div>
                  <svg className="w-5 h-5 text-black/15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
                  </svg>
                </div>
                <div className="mt-auto mb-1 text-center">
                  <h3 className="text-xl font-medium text-[#111827] mb-2 tracking-tight">Oral Surgery</h3>
                  <p className="text-xs text-[#475569] font-normal leading-[1.6] mb-4">
                    In the new era of technology we look in the future with certainty and pride, that's why our theme looks so good.
                  </p>
                  <div>
                    <a href="#" className="inline-flex items-center gap-2 text-xs font-semibold text-[#111827]">
                      <span className="underline underline-offset-4">Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile CTA Button (Below Carousel Boxes) */}
            <button className="md:hidden group inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#3BB0E5] via-[#2A97D1] to-[#1C7DBB] text-white font-medium text-sm hover:opacity-95 active:scale-95 transition-all shadow-[0_6px_20px_rgba(28,125,189,0.25)] cursor-pointer whitespace-nowrap">
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* DESKTOP VIEW CARDS CONTAINER */}
          <div className="hidden lg:flex lg:flex-col gap-6 lg:gap-8 relative">
            
            {/* Row 1: Cavity Protection (flex-1 / 800px on 2xl) + Vertical Label 'our services' + Root Canal Treatment */}
            <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-8 relative">
              
              {/* Card 1: Cavity Protection (Pastel Cyan Blue #CFECF0, Width fluid flex-1 / 800px on 2xl, Height 350px) */}
              <div className="w-full lg:flex-1 2xl:w-[800px] 2xl:flex-none flex-shrink-0 bg-[#CFECF0] rounded-[32px] p-7 sm:p-8 lg:p-9 shadow-sm transition-all duration-300 flex flex-col justify-between relative group h-[350px]">
                <div className="flex items-start justify-between w-full">
                  {/* Single White Circle Badge with Real Icon */}
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-black/5">
                    <img src={iconCavityReal} alt="Cavity Protection Icon" className="w-7 h-7 object-contain" />
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

              {/* Right Group: 'our services' vertical label attached right next to Yellow Box */}
              <div className="flex items-center gap-4 lg:gap-5 ml-auto">
                {/* Vertical Divider with "our services" text attached to yellow box */}
                <div className="hidden lg:flex flex-col items-center justify-center pointer-events-none px-1 self-center flex-shrink-0">
                  <span className="text-[#475569]/80 text-[12px] font-normal tracking-[0.2em] lowercase [writing-mode:vertical-lr] rotate-180 mb-3 whitespace-nowrap">
                    our services
                  </span>
                  <div className="w-[1px] h-24 bg-[#CBD5E1]"></div>
                </div>

                {/* Card 2: Root Canal Treatment (Pastel Cream Yellow #FBF9BA, Width 360px on lg, 440px on xl, 500px on 2xl, Height 350px) */}
                <div className="w-full lg:w-[360px] xl:w-[440px] 2xl:w-[500px] flex-shrink-0 bg-[#FBF9BA] rounded-[32px] p-7 sm:p-8 lg:p-9 shadow-sm transition-all duration-300 flex flex-col justify-between relative group h-[350px]">
                <div className="flex items-start justify-between w-full">
                  {/* Single White Circle Badge with Real Icon */}
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-black/5">
                    <img src={iconRootCanalReal} alt="Root Canal Treatment Icon" className="w-7 h-7 object-contain" />
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
            </div>

            {/* Row 2: Oral Surgery (360px lg / 440px xl / 500px 2xl) + Video Image Card (Fills remaining width) */}
            <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
              
              {/* Card 3: Oral Surgery (Pastel Lavender Pink #FCBCFF, Width 360px lg / 440px xl / 500px 2xl, Height 350px) */}
              <div className="w-full lg:w-[360px] xl:w-[440px] 2xl:w-[500px] flex-shrink-0 bg-[#FCBCFF] rounded-[32px] p-7 sm:p-8 lg:p-9 shadow-sm transition-all duration-300 flex flex-col justify-between relative group h-[350px]">
                <div className="flex items-start justify-between w-full">
                  {/* Single White Circle Badge with Real Icon */}
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-black/5">
                    <img src={iconOralSurgeryReal} alt="Oral Surgery Icon" className="w-7 h-7 object-contain" />
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
              <div className="flex-1 relative rounded-[32px] overflow-hidden shadow-md cursor-pointer group h-[350px] bg-black">
                {isServicesVideoPlaying ? (
                  <div className="relative w-full h-full">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setIsServicesVideoPlaying(false); }}
                      className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg border border-white/20"
                      title="Close Video"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <iframe
                      src="https://www.youtube.com/embed/Wx8GGSnT9_Y?autoplay=1&rel=0"
                      title="Dental Procedure Patient Video"
                      className="w-full h-full border-0 rounded-[32px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div 
                    onClick={() => setIsServicesVideoPlaying(true)}
                    className="w-full h-full relative"
                  >
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
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* OUR WORKS / SERVICES WE PROVIDE ARE LISTED BELOW SECTION - FULL SCREEN RATIO GREY BACKGROUND */}
      <section className="w-full bg-[#EBEBEB] text-[#111827] pt-[60px] sm:pt-[80px] lg:pt-[100px] pb-[60px] sm:pb-[80px] lg:pb-[100px] px-5 sm:px-10 md:px-14 lg:px-18 xl:px-24 overflow-hidden border-t border-black/[0.04]">
        <div className="max-w-[1650px] mx-auto relative">
          
          {/* MOBILE VIEW (< lg) */}
          <div className="lg:hidden flex flex-col items-center text-center">
            {/* Top Badge & Title */}
            <div className="flex items-center justify-center gap-3 text-[#2A91CF] font-medium text-xs sm:text-sm tracking-wide mb-3">
              <span className="h-[1px] w-10 sm:w-12 bg-gradient-to-r from-transparent to-[#2A91CF]/40"></span>
              <span>(our works)</span>
              <span className="h-[1px] w-10 sm:w-12 bg-gradient-to-l from-transparent to-[#2A91CF]/40"></span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-[#111827] leading-[1.25] mb-6">
              Services We Provide Are Listed Below
            </h2>

            {/* MOBILE HORIZONTAL PHOTO SLIDER */}
            <div className="w-full overflow-x-auto flex snap-x snap-mandatory gap-4 pb-4 mb-6 -mx-4 px-4 scrollbar-none">
              {/* Card 1 */}
              <div className="snap-center flex-shrink-0 w-[84vw] max-w-[340px] flex flex-col text-center">
                <div className="rounded-[28px] overflow-hidden shadow-md h-[280px] w-full">
                  <img src={workTeethImg} alt="Teeth Straightening Procedure" className="w-full h-full object-cover" />
                </div>
                <div className="pt-3">
                  <h3 className="text-lg font-medium text-[#111827] mb-1">Teeth Straightening</h3>
                  <p className="text-xs text-[#6B7280]">Improve your smile with cleaning.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="snap-center flex-shrink-0 w-[84vw] max-w-[340px] flex flex-col text-center">
                <div className="rounded-[28px] overflow-hidden shadow-md h-[280px] w-full">
                  <img src={workImplantImg} alt="Dental Implant Procedure" className="w-full h-full object-cover" />
                </div>
                <div className="pt-3">
                  <h3 className="text-lg font-medium text-[#111827] mb-1">Dental Implant</h3>
                  <p className="text-xs text-[#6B7280]">Improve your smile with cleaning.</p>
                </div>
              </div>
            </div>

            {/* Description & 10K+ Happy Members Avatar Stack (Above CTA Button on Mobile) */}
            <p className="text-xs sm:text-[14px] text-[#475569] leading-relaxed font-normal max-w-sm mb-6">
              Our team of skilled and experienced dental professionals strives to create comfortable and welcoming environment for each.
            </p>

            {/* 10K+ Happy Members Avatar Stack (Above CTA) */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex items-center -space-x-3.5">
                <img src={avatarBeardedImg} alt="Happy Member" className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src={avatarGlassesImg} alt="Happy Member" className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src={avatarFemaleDoctor} alt="Happy Member" className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm" />
              </div>
              <div className="text-[#2A91CF] font-medium text-xs leading-tight text-left">
                <span className="block">10K+ happy</span>
                <span className="block">member</span>
              </div>
            </div>

            {/* CTA Button (Below Avatar Stack on Mobile) */}
            <button className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#3BB0E5] via-[#2A97D1] to-[#1C7DBB] text-white font-medium text-sm hover:opacity-95 active:scale-95 transition-all shadow-[0_6px_20px_rgba(28,125,189,0.25)] cursor-pointer whitespace-nowrap">
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* DESKTOP VIEW (Preserved 100% Unchanged) */}
          <div className="hidden lg:block">
            {/* Top Header Row: (our works) badge on left, Title on right */}
            <div className="flex flex-row items-start justify-between gap-8 mb-12 sm:mb-16">
              
              {/* Top Left: (our works) Badge with horizontal line on both sides */}
              <div className="flex items-center gap-3 text-[#2A91CF] font-medium text-xs sm:text-sm tracking-wide">
                <span className="h-[1px] w-10 sm:w-12 bg-gradient-to-r from-transparent to-[#2A91CF]/40"></span>
                <span>(our works)</span>
                <span className="h-[1px] w-20 sm:w-28 bg-gradient-to-r from-[#2A91CF]/40 to-transparent"></span>
              </div>

              {/* Top Right: Main Section Title matching other sections */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-[#111827] leading-[1.25]">
                  <span className="block mb-1.5">Services We Provide</span>
                  <span className="block">Are Listed Below</span>
                </h2>
              </div>
            </div>

            {/* Main Grid Content: Left text & CTA button + Right 2 Image Cards */}
            <div className="grid grid-cols-12 gap-8 lg:gap-12 items-end">
              
              {/* Left Column: Description Paragraph, CTA Button, and 10K+ Happy Member Avatar Stack */}
              <div className="col-span-4 flex flex-col justify-between h-full min-h-[340px]">
                <div>
                  <p className="text-xs sm:text-[14px] text-[#475569] leading-relaxed font-normal max-w-sm mb-8">
                    Our team of skilled and experienced dental professionals strives to create comfortable and welcoming environment for each.
                  </p>
                  <button className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#3BB0E5] via-[#2A97D1] to-[#1C7DBB] text-white font-medium text-sm hover:opacity-95 active:scale-95 transition-all shadow-[0_6px_20px_rgba(28,125,189,0.25)] cursor-pointer whitespace-nowrap">
                    <span>Book Appointment</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Bottom Left: 10K+ Happy Member 3 Overlapping Avatars */}
                <div className="flex items-center gap-3 mt-12 pt-4">
                  <div className="flex items-center -space-x-3.5">
                    <img 
                      src={avatarBeardedImg} 
                      alt="Happy Member" 
                      className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                    <img 
                      src={avatarGlassesImg} 
                      alt="Happy Member" 
                      className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                    <img 
                      src={avatarFemaleDoctor} 
                      alt="Happy Member" 
                      className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                  </div>
                  <div className="text-[#2A91CF] font-medium text-xs sm:text-[13.5px] leading-tight">
                    <span className="block">10K+ happy</span>
                    <span className="block">member</span>
                  </div>
                </div>
              </div>

              {/* Right Column: 2 Image Cards (Teeth Straightening & Dental Implant) */}
              <div className="col-span-8 grid grid-cols-2 gap-6 sm:gap-8">
                
                {/* Image Card 1: Teeth Straightening */}
                <div className="flex flex-col">
                  <div className="rounded-[32px] overflow-hidden shadow-md h-[360px] sm:h-[400px] w-full">
                    <img 
                      src={workTeethImg} 
                      alt="Teeth Straightening Procedure" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pt-4 px-2">
                    <h3 className="text-lg sm:text-[20px] font-medium text-[#111827] mb-1 tracking-tight">
                      Teeth Straightening
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#6B7280]">
                      Improve your smile with cleaning.
                    </p>
                  </div>
                </div>

                {/* Image Card 2: Dental Implant */}
                <div className="flex flex-col">
                  <div className="rounded-[32px] overflow-hidden shadow-md h-[360px] sm:h-[400px] w-full">
                    <img 
                      src={workImplantImg} 
                      alt="Dental Implant Procedure" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pt-4 px-2">
                    <h3 className="text-lg sm:text-[20px] font-medium text-[#111827] mb-1 tracking-tight">
                      Dental Implant
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#6B7280]">
                      Improve your smile with cleaning.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* DOCTOR CONSULTATIONS SECTION - 5th Section (Full Screen Ratio) */}
      <section className="w-full bg-[#FAF8F5] text-[#111827] pt-[60px] sm:pt-[80px] lg:pt-[100px] pb-[60px] sm:pb-[80px] lg:pb-[100px] px-5 sm:px-10 md:px-14 lg:px-18 xl:px-24 overflow-hidden border-t border-black/[0.04]">
        <div className="max-w-[1650px] mx-auto">
          
          {/* MOBILE VIEW (< lg) */}
          <div className="lg:hidden flex flex-col items-center text-center">
            {/* Tag Badge */}
            <div className="flex items-center justify-center gap-3 text-[#2A91CF] font-medium text-xs sm:text-sm tracking-wide mb-3">
              <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#2A91CF]/40"></span>
              <span>(cost care)</span>
              <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#2A91CF]/40"></span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-[#111827] leading-[1.2] mb-6">
              <span className="block">Doctor Consultations</span>
              <span className="flex items-center justify-center gap-2 flex-wrap mt-1">
                <span>Are</span>
                <span className="inline-flex items-center justify-center align-middle mx-0.5">
                  <img src={flossEmojiImg} alt="Floss Emoji" className="h-[36px] w-auto rounded-full object-cover shadow-sm border border-black/5" />
                </span>
                <span>Free & Trusted</span>
              </span>
            </h2>

            {/* MOBILE & TABLET HORIZONTAL PHOTO SLIDER */}
            <div className="w-full overflow-x-auto flex snap-x snap-mandatory gap-3.5 sm:gap-5 pb-4 mb-6 -mx-5 px-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              
              {/* Photo 1: Video Box (Placed First on Mobile) */}
              <div className="snap-start flex-shrink-0 w-[86%] min-[400px]:w-[88%] sm:w-[calc(46%-0.75rem)] md:w-[calc(45%-0.75rem)] relative rounded-[24px] overflow-hidden shadow-md h-[240px] sm:h-[280px] cursor-pointer group bg-black">
                {isConsultationVideoPlaying ? (
                  <div className="relative w-full h-full">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setIsConsultationVideoPlaying(false); }}
                      className="absolute top-3 right-3 z-30 w-7 h-7 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg border border-white/20"
                      title="Close Video"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                    <iframe
                      src="https://www.youtube.com/embed/Wx8GGSnT9_Y?autoplay=1&rel=0"
                      title="Doctor Consultation Video"
                      className="w-full h-full border-0 rounded-[24px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div 
                    onClick={() => setIsConsultationVideoPlaying(true)}
                    className="w-full h-full relative"
                  >
                    <img src={consultationVideoImg} alt="Doctor Consultation Video" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-white text-white translate-x-[1px]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Photo 2: Main Center Image */}
              <div className="snap-start flex-shrink-0 w-[86%] min-[400px]:w-[88%] sm:w-[calc(46%-0.75rem)] md:w-[calc(45%-0.75rem)] rounded-[24px] overflow-hidden shadow-md h-[240px] sm:h-[280px]">
                <img src={consultationMainImg} alt="Doctor Dental Procedure" className="w-full h-full object-cover" />
              </div>

              {/* Photo 3: Right Portrait Image */}
              <div className="snap-start flex-shrink-0 w-[86%] min-[400px]:w-[88%] sm:w-[calc(46%-0.75rem)] md:w-[calc(45%-0.75rem)] rounded-[24px] overflow-hidden shadow-md h-[240px] sm:h-[280px]">
                <img src={consultationRightImg} alt="Dental Consultation Patient" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal max-w-sm mb-6 text-center">
              Take control of your health with a comprehensive assessment unlike any other. We use the latest medical innovations, including next-generation MRI, cardiovascular & neurocognitive assessments, early cancer detection, and genetic testing.
            </p>

            {/* 98% Stat Badge (Above CTA Button on Mobile) */}
            <div className="text-center mb-6">
              <div className="text-4xl sm:text-6xl font-medium text-[#2C8ECB] tracking-tight leading-none mb-1.5">
                98%
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563] font-normal leading-snug">
                Client satisfaction with our service
              </p>
            </div>

            {/* CTA Button */}
            <button className="group inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#3BB0E5] via-[#2A97D1] to-[#1C7DBB] text-white font-medium text-sm hover:opacity-95 active:scale-95 transition-all shadow-[0_6px_20px_rgba(28,125,189,0.25)] cursor-pointer whitespace-nowrap mb-6">
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Bottom Subtext */}
            <p className="text-xs text-[#4B5563] leading-relaxed font-normal max-w-xs text-center">
              Team carefully evaluates your results to provide actionable insights for improving your health & lifespan.
            </p>
          </div>

          {/* DESKTOP VIEW (Preserved 100% Unchanged) */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-stretch">
            
            {/* Left Column: Badge, Title with Floss Emoji, Subtext */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                {/* Tag Badge: (cost care) */}
                <div className="flex items-center gap-3 text-[#2A91CF] font-medium text-xs sm:text-sm tracking-wide mb-4">
                  <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#2A91CF]/40"></span>
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
              
              {/* Main Center Square Image */}
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
                <div 
                  onClick={() => !isConsultationVideoPlaying && setIsConsultationVideoPlaying(true)}
                  className="flex-1 relative rounded-[24px] overflow-hidden shadow-md cursor-pointer group h-[145px] sm:h-[155px] bg-black"
                >
                  {isConsultationVideoPlaying ? (
                    <div className="relative w-full h-full">
                      <button 
                        onClick={(e) => { e.stopPropagation(); setIsConsultationVideoPlaying(false); }}
                        className="absolute top-2 right-2 z-30 w-6 h-6 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg border border-white/20"
                        title="Close Video"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                      <iframe
                        src="https://www.youtube.com/embed/Wx8GGSnT9_Y?autoplay=1&rel=0"
                        title="Doctor Consultation Video"
                        className="w-full h-full border-0 rounded-[24px]"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full relative">
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
                  )}
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

              {/* Lower Right: Vertical Portrait Image */}
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

      {/* TESTIMONIALS SECTION ("What Our Clients Say" - Ultra Responsive with 20% Peek Mobile Carousel) */}
      <section className="w-full bg-[#E2F1F8] text-[#111827] pt-[50px] sm:pt-[80px] lg:pt-[100px] pb-[50px] sm:pb-[80px] lg:pb-[100px] px-5 sm:px-10 md:px-14 lg:px-18 xl:px-24 overflow-hidden border-t border-black/[0.03]">
        <div className="w-full relative">
          
          {/* Header Row: Title & Subtitle on Left, Desktop Navigation Buttons on Right */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14 text-center sm:text-left items-center sm:items-end">
            <div>
              <h2 className="text-[24px] min-[380px]:text-[27px] sm:text-4xl lg:text-[44px] font-medium tracking-tight text-[#111827] leading-[1.2] mb-2 text-center sm:text-left whitespace-normal sm:whitespace-nowrap">
                What Our Clients Say
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed max-w-sm sm:max-w-md text-center sm:text-left mx-auto sm:mx-0">
                Team carefully evaluates your results to provide actionable insights for improving your health & lifespan.
              </p>
            </div>

            {/* Desktop Navigation Arrow Buttons (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-3">
              <button 
                onClick={handlePrevTestimonial}
                aria-label="Previous Testimonial" 
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#111827] shadow-sm hover:bg-gray-100 active:scale-95 transition-all cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNextTestimonial}
                aria-label="Next Testimonial" 
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#3BB0E5] via-[#2A97D1] to-[#1C7DBB] flex items-center justify-center text-white shadow-md hover:opacity-95 active:scale-95 transition-all cursor-pointer"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive Testimonial Cards Carousel Slider with Subtle Next-Card Peek on Mobile & Tablet */}
          <div className="overflow-hidden w-full">
            <div 
              className={`flex gap-3.5 sm:gap-5 lg:gap-8 ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
              style={{ transform: `translateX(-${testimonialIndex * (cardsToShow === 1 ? 90 : cardsToShow === 2 ? 46.5 : 100 / cardsToShow)}%)` }}
            >
              {testimonialsList.map((item, idx) => (
                <div 
                  key={idx} 
                  className="w-[86%] min-[400px]:w-[88%] sm:w-[calc(46%-0.75rem)] md:w-[calc(45%-0.75rem)] lg:w-[calc(33.333%-1.07rem)] flex-shrink-0 bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 flex flex-col justify-between shadow-sm min-h-[290px] sm:min-h-[310px] text-left"
                >
                  <div>
                    {/* Avatar */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden mb-4 sm:mb-6 shadow-sm">
                      <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-base sm:text-[19px] font-medium text-[#111827] mb-2 tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-[#475569] font-normal leading-[1.65] mb-4 sm:mb-6">
                      {item.quote}
                    </p>
                  </div>

                  {/* Card Footer: Name & Rating */}
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-black/[0.04]">
                    <span className="font-medium text-xs sm:text-sm text-[#111827]">{item.name}</span>
                    <div className="flex items-center gap-0.5 sm:gap-1 text-[#F59E0B]">
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#F59E0B]" />
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#F59E0B]" />
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#F59E0B]" />
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#F59E0B]" />
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#F59E0B]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Arrow Buttons (BELOW TESTIMONIAL CARDS ON MOBILE) */}
          <div className="md:hidden flex items-center justify-center gap-4 mt-6">
            <button 
              onClick={handlePrevTestimonial}
              aria-label="Previous Testimonial" 
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-[#111827] shadow-md hover:bg-gray-100 active:scale-95 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNextTestimonial}
              aria-label="Next Testimonial" 
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#3BB0E5] via-[#2A97D1] to-[#1C7DBB] flex items-center justify-center text-white shadow-md hover:opacity-95 active:scale-95 transition-all cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* LATEST INSIGHTS SECTION (Between Testimonials & Footer) */}
      <section className="w-full bg-[#FAF8F5] text-[#111827] pt-[60px] sm:pt-[80px] lg:pt-[100px] pb-[60px] sm:pb-[80px] lg:pb-[100px] px-5 sm:px-10 md:px-14 lg:px-18 xl:px-24 overflow-hidden border-t border-black/[0.04]">
        <div className="max-w-[1650px] mx-auto">
          
          {/* Section Header */}
          <div className="mb-10 sm:mb-14 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-[#111827] leading-[1.25]">
              Latest Insights
            </h2>
          </div>

          {/* 3-Card Grid on Desktop & Subtle Touch-Snap Edge Peek Slider on Mobile/Tablet */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-5 px-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:pb-0 lg:mx-0 lg:px-0 lg:overflow-visible">
            
            {/* Card 1: Cream Card Left (Warm Peach-Cream #F2E7E1) */}
            <div className="snap-start flex-shrink-0 w-[86%] min-[400px]:w-[88%] sm:w-[calc(46%-0.75rem)] md:w-[calc(45%-0.75rem)] lg:w-full bg-[#F2E7E1] rounded-[28px] p-6 sm:p-9 lg:p-10 flex flex-col justify-between items-center text-center shadow-sm h-[430px] sm:h-[480px] lg:h-[500px] transition-transform duration-300 hover:scale-[1.01]">
              {/* Top Date Capsule Badge with Spacious Padding */}
              <div className="px-6 py-2 rounded-full border border-black/20 text-xs sm:text-[13px] font-medium tracking-wide text-[#111827]/75 bg-white/50 backdrop-blur-sm">
                July 9, 2025
              </div>

              {/* Center Title */}
              <div className="my-auto py-4">
                <h3 className="text-lg sm:text-[25px] lg:text-[28px] font-medium text-[#111827] tracking-tight leading-snug max-w-[320px] sm:max-w-[360px] mx-auto">
                  Medicare And Long Term Care
                </h3>
              </div>

              {/* Bottom Paragraph */}
              <p className="text-xs sm:text-[13.5px] text-[#475569] font-normal leading-relaxed max-w-[340px] lg:max-w-[380px] mx-auto">
                As seniors age, understanding Medicare and the range of long-term care options becomes. Many families are unsure which services
              </p>
            </div>

            {/* Card 2: User Provided Dental Image Background (media_1789572195511.jpg) */}
            <div className="snap-start flex-shrink-0 w-[86%] min-[400px]:w-[88%] sm:w-[calc(46%-0.75rem)] md:w-[calc(45%-0.75rem)] lg:w-full relative rounded-[28px] overflow-hidden p-6 sm:p-9 lg:p-10 flex flex-col justify-between items-center text-center shadow-md h-[430px] sm:h-[480px] lg:h-[500px] group transition-transform duration-300 hover:scale-[1.01]">
              
              {/* User Provided Exact Dental Image */}
              <img 
                src={insightDentalImg} 
                alt="Medicare And Long Term Care Dental Procedure" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Subtle Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

              {/* Top Date Capsule Badge with Spacious Padding */}
              <div className="relative z-10 px-6 py-2 rounded-full border border-white/40 text-xs sm:text-[13px] font-medium tracking-wide text-white/95 bg-black/25 backdrop-blur-sm">
                July 9, 2025
              </div>

              {/* Center Title */}
              <div className="relative z-10 my-auto py-4">
                <h3 className="text-lg sm:text-[25px] lg:text-[28px] font-medium text-white tracking-tight leading-snug max-w-[320px] sm:max-w-[360px] mx-auto">
                  Medicare And Long Term Care
                </h3>
              </div>

              {/* Bottom Paragraph */}
              <p className="relative z-10 text-xs sm:text-[13.5px] text-white/95 font-normal leading-relaxed max-w-[340px] lg:max-w-[380px] mx-auto">
                As seniors age, understanding Medicare and the range of long-term care options becomes. Many families are unsure which services
              </p>
            </div>

            {/* Card 3: Cream Card Right (Warm Peach-Cream #F2E7E1) */}
            <div className="snap-start flex-shrink-0 w-[86%] min-[400px]:w-[88%] sm:w-[calc(46%-0.75rem)] md:w-[calc(45%-0.75rem)] lg:w-full bg-[#F2E7E1] rounded-[28px] p-6 sm:p-9 lg:p-10 flex flex-col justify-between items-center text-center shadow-sm h-[430px] sm:h-[480px] lg:h-[500px] transition-transform duration-300 hover:scale-[1.01]">
              {/* Top Date Capsule Badge with Spacious Padding */}
              <div className="px-6 py-2 rounded-full border border-black/20 text-xs sm:text-[13px] font-medium tracking-wide text-[#111827]/75 bg-white/50 backdrop-blur-sm">
                July 9, 2025
              </div>

              {/* Center Title */}
              <div className="my-auto py-4">
                <h3 className="text-xl sm:text-[25px] lg:text-[28px] font-medium text-[#111827] tracking-tight leading-snug max-w-[320px] sm:max-w-[360px] mx-auto">
                  Medicare And Long Term Care
                </h3>
              </div>

              {/* Bottom Paragraph */}
              <p className="text-xs sm:text-[13.5px] text-[#475569] font-normal leading-relaxed max-w-[340px] lg:max-w-[380px] mx-auto">
                As seniors age, understanding Medicare and the range of long-term care options becomes. Many families are unsure which services
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* GLOBAL FOOTER SECTION (Full Ratio Screen Width Black Background) */}
      <footer className="w-full bg-[#070707] text-white pt-6 sm:pt-10 lg:pt-12 pb-0 px-5 sm:px-10 md:px-14 lg:px-18 xl:px-24 overflow-hidden relative mt-8 sm:mt-[60px] lg:mt-[80px]">
        <div className="max-w-[1650px] mx-auto relative z-10">
          
          {/* Top Row: Left Email Newsletter + Right 3 Navigation Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-start relative z-10 text-center lg:text-left">
            
            {/* Left Column: Heading & Rectangle Newsletter Form */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start justify-between">
              <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-white tracking-tight leading-snug mb-4 sm:mb-8 text-center lg:text-left">
                <span className="block">Offerings From Bright</span>
                <span className="block">News & Social</span>
              </h2>

              {/* Underline Email Newsletter Form matching reference mockup */}
              <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-sm sm:max-w-md mx-auto lg:mx-0">
                <div className="relative flex items-center border-b border-white/30 focus-within:border-white pb-2.5 transition-colors">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-transparent text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none w-full font-normal text-left pr-8"
                    required
                  />
                  <button 
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="text-white hover:text-white/80 active:scale-95 transition-all cursor-pointer absolute right-0 bottom-2.5"
                  >
                    <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: 3 Navigation Link Columns (3-column Grid on Mobile to prevent tall scrolling) */}
            <div className="lg:col-span-7 grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-8 text-[11.5px] sm:text-[13.5px] text-center sm:text-left pt-2 lg:pt-0">
              
              {/* Column 1 */}
              <ul className="space-y-2 sm:space-y-3 font-normal text-[#E5E7EB]">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Why our network</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Charging solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>

              {/* Column 2 */}
              <ul className="space-y-2 sm:space-y-3 font-normal text-[#E5E7EB]">
                <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press releases</a></li>
              </ul>

              {/* Column 3 */}
              <ul className="space-y-2 sm:space-y-3 font-normal text-[#E5E7EB]">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Linkedin</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Youtube</a></li>
              </ul>

            </div>

          </div>

        </div>

        {/* Bottom Watermark Branding Text - Mobile/Tablet enhanced, Desktop intact */}
        <div className="w-full text-center pointer-events-none select-none pt-12 min-[400px]:pt-14 sm:pt-18 md:pt-20 lg:pt-14 flex justify-center items-end overflow-visible -mb-2 sm:-mb-4 lg:-mb-6">
          <h1 className="text-[78px] min-[380px]:text-[90px] min-[440px]:text-[104px] sm:text-[160px] md:text-[215px] lg:text-[250px] xl:text-[310px] font-medium text-white/[0.08] tracking-tight leading-none text-center whitespace-nowrap inline-block mx-auto translate-y-[6px] lg:translate-y-[10px]">
            Dentara
          </h1>
        </div>

      </footer>

    </div>
  );
}
