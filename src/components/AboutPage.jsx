import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import aboutLeftImg from '../assets/about-left.jpg';
import aboutCenterImg from '../assets/about-center.png';

export default function AboutPage({ onBookClick }) {
  return (
    <div className="w-full bg-[#FAFAF7] text-[#16211B] py-12 sm:py-20 px-6 sm:px-12 md:px-16 lg:px-24 min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* Inner Page Header / Eyebrow (Dental Blue #216FA7) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8F2F7] text-[#216FA7] text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
            About Dental Lounge Sangrur
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#16211B] leading-[1.15] mb-6">
            Enhancing Lives With Brighter, Healthier Smiles.
          </h1>
          <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
            Welcome to Dental Lounge — Sangrur's premier dental & aesthetic clinic led by <strong className="text-[#216FA7]">Dr. Ankush Gupta MDS</strong> (Oral & Maxillofacial Surgeon). We blend modern clinical precision with a warm, comfortable experience.
          </p>
        </div>

        {/* Feature Image - Clean & Unboxed */}
        <div className="w-full h-[320px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden mb-16 shadow-lg">
          <img 
            src={aboutCenterImg} 
            alt="Dental Lounge Clinic Practice" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Story Section - Simple Text & Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center mb-20">
          <div>
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#16211B] tracking-tight mb-6">
              Personalized Dental & Aesthetic Excellence
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-4">
              At Dental Lounge, we believe dental care should be painless, stress-free, and personalized to your unique smile goals. Located opposite Namdev Gurudwara on Krishanpura Road in Sangrur, our clinic offers state-of-the-art diagnostic equipment, advanced surgical care, and complete facial skincare treatments.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
              Whether you need complex oral surgery, dental implants, root canal therapy, teeth whitening, or non-surgical skincare procedures, Dr. Ankush Gupta MDS ensures every treatment is delivered with maximum comfort and clinical excellence.
            </p>
            
            {/* Highlights List - Blue Icons (#216FA7) */}
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-semibold text-[#16211B]">
                <CheckCircle className="w-5 h-5 text-[#216FA7]" />
                <span>Expert Oral & Maxillofacial Surgeon Care</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[#16211B]">
                <CheckCircle className="w-5 h-5 text-[#216FA7]" />
                <span>Modern Sterilization & Advanced Imaging</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[#16211B]">
                <CheckCircle className="w-5 h-5 text-[#216FA7]" />
                <span>Gentle, Pain-Free Patient Centric Approach</span>
              </div>
            </div>

            {/* BUTTON: Green (#07852F) Default -> Blue (#216FA7) Hover */}
            <button 
              onClick={() => onBookClick && onBookClick('General Consultation')}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#07852F] hover:bg-[#216FA7] text-white font-bold text-sm shadow-md transition-colors duration-200 cursor-pointer"
            >
              <span>Book Your Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-md">
            <img 
              src={aboutLeftImg} 
              alt="Dr Ankush Gupta Dental Surgery Practice" 
              className="w-full h-[360px] sm:h-[440px] object-cover"
            />
          </div>
        </div>

        {/* Doctor Spotlight */}
        <div className="border-t border-[#E2E8F0] pt-16 mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#16211B] mb-2">
            Dr. Ankush Gupta MDS
          </h3>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#216FA7] mb-4">
            Oral & Maxillofacial Surgeon
          </p>
          <p className="text-sm text-[#475569] leading-relaxed mb-6">
            Specializing in restorative dentistry, dental implants, facial aesthetic care, and complex oral surgery. Dedicated to serving the Sangrur community with passion and patient empathy.
          </p>

          {/* BUTTON: Green (#07852F) Default -> Blue (#216FA7) Hover */}
          <button 
            onClick={() => onBookClick && onBookClick('Doctor Consultation')}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#07852F] hover:bg-[#216FA7] text-white text-sm font-semibold shadow-md transition-colors duration-200 cursor-pointer"
          >
            <span>Consult Doctor on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
