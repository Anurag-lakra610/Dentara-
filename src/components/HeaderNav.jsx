import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo-light.png';
import { clinicConfig } from '../clinicConfig';

export default function HeaderNav({ navItems, activeNav, setActiveNav }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm transition-all duration-200">
      <div className="max-w-[1650px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 py-3.5 flex items-center justify-between">
        
        {/* Logo */}
        <button 
          onClick={() => setActiveNav('Home')}
          className="flex items-center group focus:outline-none cursor-pointer"
        >
          <img 
            src={logoImg} 
            alt="Dental Lounge Logo" 
            className="h-[46px] sm:h-[52px] w-auto object-contain transition-transform group-hover:scale-105"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 border border-black/10">
          {navItems.map((item) => {
            const isActive = activeNav === item;
            return (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#216FA7] text-white font-semibold shadow-sm'
                    : 'text-[#16211B] hover:text-[#216FA7] hover:bg-black/5'
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button (Green default -> Blue hover) */}
        <div className="flex items-center gap-3">
          <a
            href={clinicConfig.phoneTel}
            className="hidden sm:flex items-center justify-center gap-2.5 h-[42px] px-6 rounded-full bg-[#07852F] hover:bg-[#216FA7] text-white text-sm font-semibold active:scale-95 transition-colors duration-200 shadow-md cursor-pointer"
          >
            <Phone className="w-4 h-4 stroke-[2.2] text-white" />
            <span className="tracking-tight">Call Now</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-black/5 border border-black/10 text-[#16211B] focus:outline-none cursor-pointer hover:bg-[#216FA7] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-6 mb-4 p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-xl flex flex-col gap-2 animate-in fade-in duration-200">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveNav(item);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeNav === item ? 'bg-[#216FA7] text-white font-semibold' : 'text-[#16211B] hover:bg-gray-100'
              }`}
            >
              {item}
            </button>
          ))}
          <a
            href={clinicConfig.phoneTel}
            className="sm:hidden flex items-center justify-center gap-3 mt-2 h-[45px] px-7 rounded-full bg-[#07852F] hover:bg-[#216FA7] text-white font-semibold text-sm text-center transition-colors shadow-md"
          >
            <Phone className="w-4 h-4 stroke-[2.2] text-white" />
            <span>Call Now ({clinicConfig.phoneDisplay})</span>
          </a>
        </div>
      )}
    </header>
  );
}
