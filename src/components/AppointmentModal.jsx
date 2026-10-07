import React, { useState } from 'react';
import { X, CheckCircle2, MessageSquare } from 'lucide-react';
import { clinicConfig } from '../clinicConfig';

export default function AppointmentModal({ isOpen, onClose, defaultTreatment = 'General Consultation' }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    treatment: defaultTreatment,
    preferredDate: '',
    preferredTime: 'Morning (9 AM - 12 PM)',
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
        newErrors.mobileNumber = 'Please enter a valid 10-digit Indian mobile number';
      }
    }

    if (!formData.treatment) {
      newErrors.treatment = 'Please select a treatment';
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
Additional Message: ${rawMsg}

Please confirm my appointment.
Thank you.`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 my-8 text-[#111827]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-[#216FA7] hover:text-white text-[#111827] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#E8F2F7] text-[#216FA7] flex items-center justify-center mb-4 shadow-sm">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-2">
              Details Ready on WhatsApp!
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-md mx-auto mb-6">
              Your appointment request is loaded into WhatsApp. Tap <strong className="text-[#216FA7]">Send</strong> to send directly to Dental Lounge clinic ({clinicConfig.phoneDisplay}).
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
                onClick={onClose}
                className="w-full px-6 py-3 rounded-full bg-gray-100 text-[#111827] font-semibold text-sm hover:bg-[#216FA7] hover:text-white cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            {/* Header */}
            <div className="pr-8">
              <span className="inline-block px-3 py-1 rounded-full bg-[#E8F2F7] text-[#216FA7] text-[11px] font-bold uppercase tracking-wider mb-2">
                Dental Lounge Sangrur
              </span>
              <h3 className="text-2xl font-bold text-[#111827]">
                Book Appointment
              </h3>
              <p className="text-xs text-[#6B7280]">
                Schedule your visit with Dr. Ankush Gupta MDS (Sangrur).
              </p>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#111827] uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-gray-50 border transition-all focus:outline-none focus:bg-white ${
                    errors.fullName ? 'border-red-500' : 'border-gray-200 focus:border-[#216FA7]'
                  }`}
                />
                {errors.fullName && <span className="text-[10px] text-red-500 font-medium">{errors.fullName}</span>}
              </div>

              {/* Mobile */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#111827] uppercase tracking-wider">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 070091 73897"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-gray-50 border transition-all focus:outline-none focus:bg-white ${
                    errors.mobileNumber ? 'border-red-500' : 'border-gray-200 focus:border-[#216FA7]'
                  }`}
                />
                {errors.mobileNumber && <span className="text-[10px] text-red-500 font-medium">{errors.mobileNumber}</span>}
              </div>

              {/* Treatment */}
              <div className="flex flex-col gap-1 sm:col-span-2">
                <label className="text-[11px] font-bold text-[#111827] uppercase tracking-wider">
                  Treatment / Concern *
                </label>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-gray-50 border border-gray-200 focus:border-[#216FA7] focus:bg-white transition-all focus:outline-none font-medium text-[#111827]"
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

              {/* Preferred Date */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#111827] uppercase tracking-wider">
                  Preferred Date
                </label>
                <input
                  type="date"
                  min={todayDate}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-gray-50 border border-gray-200 focus:border-[#216FA7] focus:bg-white transition-all focus:outline-none"
                />
              </div>

              {/* Preferred Time */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#111827] uppercase tracking-wider">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-gray-50 border border-gray-200 focus:border-[#216FA7] focus:bg-white transition-all focus:outline-none font-medium text-[#111827]"
                >
                  <option value="Morning (9:30 AM - 1:00 PM)">Morning (9:30 AM - 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                  <option value="Evening (4:00 PM - 7:30 PM)">Evening (4:00 PM - 7:30 PM)</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1 sm:col-span-2">
                <label className="text-[11px] font-bold text-[#111827] uppercase tracking-wider">
                  Additional Note (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Describe your pain, concern or aesthetic request..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-gray-50 border border-gray-200 focus:border-[#216FA7] focus:bg-white transition-all focus:outline-none resize-none"
                ></textarea>
              </div>

            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#07852F] hover:bg-[#216FA7] text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all duration-200 cursor-pointer text-center leading-snug"
              >
                {submitting ? (
                  <span>Opening WhatsApp...</span>
                ) : (
                  <>
                    <span className="hidden sm:inline">Book Appointment via WhatsApp →</span>
                    <span className="sm:hidden">Book via WhatsApp →</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
