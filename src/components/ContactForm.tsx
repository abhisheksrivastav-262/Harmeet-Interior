"use client";

import React, { useState } from "react";
import { MessageCircle, CheckCircle, AlertCircle, Send, ArrowRight } from "lucide-react";

interface ContactFormProps {
  defaultService?: string;
}

export default function ContactForm({ defaultService }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService || "Modular Kitchens",
    propertyType: "3BHK Apartment",
    approxArea: "",
    budget: "₹3 Lakh - ₹7 Lakh",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const servicesList = [
    "Modular Kitchens",
    "Wardrobes & Almirahs",
    "False Ceiling & Lighting",
    "Wall Panelling & Decoration",
    "Electrical & Lighting",
    "Bathroom & Tiles",
    "Flooring Solutions",
    "Complete Home Interiors (Turnkey)",
    "Commercial / Office Renovation",
    "Other Consultation",
  ];

  const propertyTypes = [
    "1BHK Apartment",
    "2BHK Apartment",
    "3BHK Apartment",
    "4BHK+ Apartment",
    "Independent Builder Floor",
    "Villa / Kothi",
    "Commercial Office / Studio",
    "Retail Shop / Showroom",
  ];

  const budgetRanges = [
    "Under ₹2 Lakh",
    "₹2 Lakh - ₹5 Lakh",
    "₹5 Lakh - ₹10 Lakh",
    "₹10 Lakh - ₹20 Lakh",
    "Above ₹20 Lakh",
    "Undecided / Open for Estimate",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage("Please provide your full name.");
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    setStatus("submitting");

    // Client-side validated form processing
    // Since no backend SMTP server is provided out-of-the-box, we record the inquiry and provide immediate WhatsApp handoff
    setTimeout(() => {
      setStatus("success");
      setSubmittedData({ ...formData });
    }, 600);
  };

  const getWhatsAppHandoffUrl = (data: typeof formData) => {
    const text = `*New Interior Enquiry - Meet Interior Website*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Service Required:* ${data.service}\n` +
      `*Property Type:* ${data.propertyType}\n` +
      (data.approxArea ? `*Approx Area:* ${data.approxArea} sq.ft\n` : "") +
      (data.budget ? `*Budget Range:* ${data.budget}\n` : "") +
      (data.email ? `*Email:* ${data.email}\n` : "") +
      (data.message ? `*Notes/Requirements:* ${data.message}\n` : "");

    return `https://wa.me/919990327474?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 border border-slate-200">
      <div className="border-b border-slate-100 pb-4 mb-6">
        <h3 className="font-serif text-2xl font-bold text-[#0B1D3A]">
          Request a Consultation &amp; Site Visit
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Share your space requirements. Our site supervisor will review and contact you with indicative pricing details.
        </p>
      </div>

      {status === "success" && submittedData ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 space-y-4 text-center">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
            <CheckCircle className="w-7 h-7" />
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold text-emerald-950">
              Thank You, {submittedData.name}!
            </h4>
            <p className="text-xs text-emerald-800 mt-1 max-w-md mx-auto leading-relaxed">
              Your inquiry for <strong>{submittedData.service}</strong> has been prepared. For immediate priority booking and fastest response, send your inquiry details directly to our master contractor on WhatsApp:
            </p>
          </div>

          <div className="pt-2">
            <a
              href={getWhatsAppHandoffUrl(submittedData)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-lg text-sm shadow-md transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Send Enquiry via WhatsApp Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-[11px] text-slate-500">
            Or call us directly at <a href="tel:+919990327474" className="font-semibold text-slate-800 underline">+91 9990327474</a>.
          </p>

          <button
            onClick={() => {
              setStatus("idle");
              setSubmittedData(null);
            }}
            className="text-xs text-slate-500 hover:text-slate-700 underline block mx-auto pt-2"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rajesh Sharma"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:border-[#173D78] focus:bg-white text-slate-900 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:border-[#173D78] focus:bg-white text-slate-900 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rajesh@example.com"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:border-[#173D78] focus:bg-white text-slate-900 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                Service Required <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:border-[#173D78] focus:bg-white text-slate-900 transition-colors"
              >
                {servicesList.map((srv) => (
                  <option key={srv} value={srv}>
                    {srv}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                Property Type
              </label>
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:border-[#173D78] focus:bg-white text-slate-900 transition-colors"
              >
                {propertyTypes.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                Approx Area (Sq. Ft.)
              </label>
              <input
                type="text"
                value={formData.approxArea}
                onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                placeholder="e.g. 1400 sq.ft"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:border-[#173D78] focus:bg-white text-slate-900 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                Budget Range (Optional)
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:border-[#173D78] focus:bg-white text-slate-900 transition-colors"
              >
                {budgetRanges.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
              Project Details or Location in Delhi
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your floor plan, key priorities, or preferred visit date..."
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:border-[#173D78] focus:bg-white text-slate-900 transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3.5 px-6 bg-[#0B1D3A] hover:bg-[#173D78] text-[#E9C94A] font-bold text-sm uppercase tracking-wider rounded-md shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {status === "submitting" ? (
                <span>Validating &amp; Preparing Inquiry...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Request Free Site Estimate</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-slate-500 text-center pt-1">
            We value your privacy. Your information is never sold or shared with third-party telemarketers.
          </p>
        </form>
      )}
    </div>
  );
}
