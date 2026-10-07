import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import workImplantImg from '../assets/work-dental-implant.png';
import workTeethImg from '../assets/work-teeth-straightening.jpg';
import insightDentalImg from '../assets/insight-dental.jpg';
import consultationMainImg from '../assets/consultation-main.jpg';

export default function ServicesPage({ onBookClick }) {
  const treatments = [
    {
      title: "Dental Implants & Oral Surgery",
      subtitle: "Permanent, natural-looking tooth restoration and surgical extractions.",
      description: "Conducted by Dr. Ankush Gupta MDS (Oral & Maxillofacial Surgeon). Restore missing teeth with biocompatible titanium implants designed for lifelong strength and natural feel.",
      image: workImplantImg,
      highlights: ["Single & Full-Mouth Implants", "Painless Wisdom Tooth Extractions", "Bone Grafting & Jaw Surgery"],
      cta: "Schedule Implant Consultation"
    },
    {
      title: "Root Canal & Restorative Dentistry",
      subtitle: "Save infected or damaged natural teeth with pain-free precision.",
      description: "Using rotary endodontic equipment and digital imaging, our painless root canal treatments eliminate infection while preserving your natural teeth with custom crowns.",
      image: consultationMainImg,
      highlights: ["Microscopic & Rotary Endodontics", "Zirconia & Ceramic Crowns", "Tooth Filling & Restoration"],
      cta: "Book Root Canal Treatment"
    },
    {
      title: "Braces, Aligners & Orthodontics",
      subtitle: "Straighten your smile with clear aligners or ceramic braces.",
      description: "Correct crooked teeth, gaps, and bite misalignment with comfortable invisible aligners or traditional aesthetic ceramic braces for teenagers and adults.",
      image: workTeethImg,
      highlights: ["Invisible Clear Aligners", "Ceramic & Metal Braces", "Bite Correction & Retention"],
      cta: "Schedule Orthodontic Checkup"
    },
    {
      title: "Teeth Whitening & Smile Makeover",
      subtitle: "Brighten discolored teeth and achieve a radiant celebrity smile.",
      description: "Professional in-clinic laser teeth whitening and veneer applications that safely lighten stains by multiple shades in a single comfortable visit.",
      image: insightDentalImg,
      highlights: ["Instant Laser Whitening", "Porcelain Veneers & Laminates", "Complete Aesthetic Smile Design"],
      cta: "Book Smile Makeover"
    }
  ];

  return (
    <div className="w-full bg-[#FAFAF7] text-[#16211B] py-12 sm:py-20 px-6 sm:px-12 md:px-16 lg:px-24 min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8F2F7] text-[#216FA7] text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
            Comprehensive Dental Care
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#16211B] leading-[1.15] mb-6">
            Expert Dental Treatments in Sangrur
          </h1>
          <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
            From preventative checkups to advanced surgical implants, Dental Lounge delivers world-class dental care tailored to your comfort and health.
          </p>
        </div>

        {/* Clean Editorial List */}
        <div className="space-y-20 sm:space-y-28">
          {treatments.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center border-b border-[#E2E8F0] pb-16 sm:pb-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Image Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="w-full h-[300px] sm:h-[380px] rounded-3xl overflow-hidden shadow-md">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Text Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#216FA7]">
                    Service 0{index + 1}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-semibold text-[#16211B] tracking-tight mt-2 mb-3">
                    {item.title}
                  </h2>
                  <p className="text-sm sm:text-base font-medium text-[#216FA7] mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#16211B]">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#216FA7]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* BUTTON: Green (#07852F) Default -> Blue (#216FA7) Hover */}
                  <button 
                    onClick={() => onBookClick && onBookClick(item.title)}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#07852F] hover:bg-[#216FA7] text-white text-sm font-bold shadow-md transition-colors duration-200 cursor-pointer"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
