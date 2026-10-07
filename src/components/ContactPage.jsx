import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { clinicConfig } from '../clinicConfig';

export default function ContactPage({ onBookClick }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    treatment: 'General Consultation',
    preferredDate: '',
    preferredTime: 'Morning (9:30 AM - 1:00 PM)',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const todayDate = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile Number is required';
    } else {
      const cleanPhone = formData.mobileNumber.replace(/[\s\-\(\)]/g, '');
      const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
      if (!phoneRegex.test(cleanPhone)) {
        newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    const dateDisplay = formData.preferredDate 
      ? new Date(formData.preferredDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
      : 'As soon as available';

    const rawMsg = formData.message.trim() ? formData.message.trim() : 'None';
    const whatsappNum = clinicConfig?.whatsappNumber || "919878863897";

    const messageText = `Hello Dental Lounge,

I would like to book an appointment.

Patient Name: ${formData.fullName.trim()}
Mobile Number: ${formData.mobileNumber.trim()}
Treatment / Concern: ${formData.treatment}
Preferred Date: ${dateDisplay}
Preferred Time Slot: ${formData.preferredTime}
Additional Note: ${rawMsg}

Please confirm my appointment.
Thank you.`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setSubmitting(false);
      setSubmitted(true);
    }, 300);
  };

  return (
    <div className="w-full bg-[#FAFAF7] text-[#16211B] py-12 sm:py-20 px-6 sm:px-12 md:px-16 lg:px-24 min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8F2F7] text-[#216FA7] text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
            Contact Dental Lounge
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#16211B] leading-[1.15] mb-6">
            We'd Love to Hear From You.
          </h1>
          <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
            Visit our clinic in Sangrur or book your appointment directly below with Dr. Ankush Gupta MDS.
          </p>
        </div>

        {/* 2-Column Section: Clinic Information on Left + Appointment Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start mb-16 border-b border-[#E2E8F0] pb-16">
          
          {/* Clinic Details (Left Column) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#16211B] mb-6">Clinic Information</h2>
              
              <div className="space-y-6">
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8F2F7] text-[#216FA7] flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#16211B] mb-1">Location Address</h3>
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {clinicConfig.address}
                    </p>
                    <a 
                      href={clinicConfig.googleMapsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block text-xs font-bold text-[#216FA7] hover:underline mt-2"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8F2F7] text-[#216FA7] flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#16211B] mb-1">Phone Call</h3>
                    <p className="text-sm text-[#475569]">
                      <a href={clinicConfig.phoneTel} className="font-semibold text-[#16211B] hover:text-[#216FA7]">
                        {clinicConfig.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8F2F7] text-[#216FA7] flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#16211B] mb-1">WhatsApp Clinic</h3>
                    <p className="text-sm text-[#475569]">
                      <a href={clinicConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#216FA7] hover:underline">
                        {clinicConfig.whatsappDisplay}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8F2F7] text-[#216FA7] flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#16211B] mb-1">Email Address</h3>
                    <p className="text-sm text-[#475569]">
                      <a href={`mailto:${clinicConfig.email}`} className="font-semibold text-[#16211B] hover:text-[#216FA7]">
                        {clinicConfig.email}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8F2F7] text-[#216FA7] flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#16211B] mb-1">Clinic Timings</h3>
                    <p className="text-sm text-[#475569]">
                      {clinicConfig.timing}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Appointment Booking Form (Right Column) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-[#16211B] mb-2">Book Your Appointment</h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
              Fill out your details below to schedule your consultation with Dr. Ankush Gupta MDS.
            </p>

            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#E8F2F7] text-[#216FA7] flex items-center justify-center mb-4 shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#16211B] mb-2">
                  Booking Request Sent!
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-md mx-auto mb-6">
                  Your appointment details are opened on WhatsApp. Tap <strong className="text-[#216FA7]">Send</strong> to complete your request directly with Dental Lounge clinic ({clinicConfig.phoneDisplay}).
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm">
                  <a
                    href={`https://wa.me/${clinicConfig?.whatsappNumber || "919878863897"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#07852F] hover:bg-[#216FA7] text-white font-bold text-sm shadow-md cursor-pointer transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span>Open WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full px-6 py-3 rounded-full bg-gray-100 text-[#16211B] font-semibold text-sm hover:bg-[#216FA7] hover:text-white cursor-pointer transition-colors"
                  >
                    Book Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-[#16211B] uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-gray-50 border transition-all focus:outline-none focus:bg-white ${
                        errors.fullName ? 'border-red-500' : 'border-gray-200 focus:border-[#216FA7]'
                      }`}
                    />
                    {errors.fullName && <span className="text-[10px] text-red-500 font-medium">{errors.fullName}</span>}
                  </div>

                  {/* Mobile Number */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-[#16211B] uppercase tracking-wider">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 070091 73897"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-gray-50 border transition-all focus:outline-none focus:bg-white ${
                        errors.mobileNumber ? 'border-red-500' : 'border-gray-200 focus:border-[#216FA7]'
                      }`}
                    />
                    {errors.mobileNumber && <span className="text-[10px] text-red-500 font-medium">{errors.mobileNumber}</span>}
                  </div>

                </div>

                {/* Treatment Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-[#16211B] uppercase tracking-wider">
                    Treatment / Concern *
                  </label>
                  <select
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-gray-50 border border-gray-200 focus:border-[#216FA7] focus:bg-white transition-all focus:outline-none font-medium text-[#16211B]"
                  >
                    <option value="General Consultation">General Consultation</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Root Canal Treatment">Root Canal Treatment</option>
                    <option value="Braces & Orthodontics">Braces & Orthodontics</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Smile Makeover">Smile Makeover</option>
                    <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                    <option value="Aesthetic & Skincare">Aesthetic & Skincare Treatments</option>
                    <option value="Oral & Maxillofacial Surgery">Oral & Maxillofacial Surgery</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Preferred Date */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-[#16211B] uppercase tracking-wider">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      min={todayDate}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-gray-50 border border-gray-200 focus:border-[#216FA7] focus:bg-white transition-all focus:outline-none font-medium text-[#16211B]"
                    />
                  </div>

                  {/* Preferred Time Slot */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-[#16211B] uppercase tracking-wider">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-gray-50 border border-gray-200 focus:border-[#216FA7] focus:bg-white transition-all focus:outline-none font-medium text-[#16211B]"
                    >
                      <option value="Morning (9:30 AM - 1:00 PM)">Morning (9:30 AM - 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 7:30 PM)">Evening (4:00 PM - 7:30 PM)</option>
                    </select>
                  </div>

                </div>

                {/* Additional Note */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-[#16211B] uppercase tracking-wider">
                    Additional Note (Optional)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Describe your dental concern or appointment preference..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-gray-50 border border-gray-200 focus:border-[#216FA7] focus:bg-white transition-all focus:outline-none resize-none"
                  ></textarea>
                </div>

                {/* Submit CTA Button: Green default -> Blue hover */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full bg-[#07852F] hover:bg-[#216FA7] text-white font-bold text-base shadow-md active:scale-95 transition-colors cursor-pointer"
                  >
                    <span>{submitting ? 'Preparing Request...' : 'Confirm Appointment via WhatsApp'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
