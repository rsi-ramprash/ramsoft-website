"use client";

import { useState } from "react";
import { FiCheck } from "react-icons/fi";

const benefits = [
  "See your actual workflows inside the platform",
  "Get a custom ROI analysis for your practice",
  "Discover AI features tailored to your specialty",
  "No commitment, no pressure, no sales pitch",
];

const practiceTypes = [
  "Select practice type",
  "Imaging Center",
  "Teleradiology",
  "Hospital",
  "Mobile Imaging",
  "Mammography Center",
  "Other",
];

const practiceSizes = [
  "Select practice size",
  "1-5 radiologists",
  "6-15 radiologists",
  "16-50 radiologists",
  "50+ radiologists",
];

export default function DemoForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceType: "",
    practiceSize: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <section id="demo" className="bg-zircon border-t border-lilac py-16 lg:py-[88px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left - Copy */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="text-dodger font-bold text-[11px] uppercase tracking-[2px] mb-3 font-[family-name:var(--font-manrope)]">
              See It For Yourself
            </p>
            <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-[32px] lg:text-[42px] text-navy-mid leading-tight mb-4">
              30 minutes. No fluff.
              <br />
              Just your workflows,
              <br />
              in RamSoft.
            </h2>
            <p className="text-waikawa text-base leading-relaxed font-[family-name:var(--font-manrope)] mb-8 max-w-md">
              Book a personalized demo and see exactly how RamSoft fits your
              practice, your specialty, and your goals.
            </p>

            <div className="space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-full border border-spring/40 bg-spring/8 flex items-center justify-center">
                    <FiCheck className="w-4 h-4 text-spring" />
                  </span>
                  <span className="text-navy-mid text-sm font-medium font-[family-name:var(--font-manrope)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form Card */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-[22px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden">
              {/* Gradient bar */}
              <div className="h-1.5 bg-gradient-to-r from-dodger to-spring" />

              <form onSubmit={handleSubmit} className="p-7 lg:p-9">
                <h3 className="font-[family-name:var(--font-manrope)] font-extrabold text-xl text-navy-mid mb-6">
                  Book your free demo
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-lilac bg-zircon text-sm text-navy-mid placeholder:text-bali font-[family-name:var(--font-manrope)] focus:outline-none focus:border-dodger focus:ring-1 focus:ring-dodger/30 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-lilac bg-zircon text-sm text-navy-mid placeholder:text-bali font-[family-name:var(--font-manrope)] focus:outline-none focus:border-dodger focus:ring-1 focus:ring-dodger/30 transition-colors"
                  />
                </div>

                <div className="space-y-4 mb-4">
                  <input
                    type="email"
                    placeholder="Work Email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-lilac bg-zircon text-sm text-navy-mid placeholder:text-bali font-[family-name:var(--font-manrope)] focus:outline-none focus:border-dodger focus:ring-1 focus:ring-dodger/30 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-lilac bg-zircon text-sm text-navy-mid placeholder:text-bali font-[family-name:var(--font-manrope)] focus:outline-none focus:border-dodger focus:ring-1 focus:ring-dodger/30 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <select
                    value={formData.practiceType}
                    onChange={(e) =>
                      setFormData({ ...formData, practiceType: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-lilac bg-zircon text-sm text-navy-mid font-[family-name:var(--font-manrope)] focus:outline-none focus:border-dodger focus:ring-1 focus:ring-dodger/30 transition-colors appearance-none"
                  >
                    {practiceTypes.map((type) => (
                      <option
                        key={type}
                        value={type === "Select practice type" ? "" : type}
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                  <select
                    value={formData.practiceSize}
                    onChange={(e) =>
                      setFormData({ ...formData, practiceSize: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-lilac bg-zircon text-sm text-navy-mid font-[family-name:var(--font-manrope)] focus:outline-none focus:border-dodger focus:ring-1 focus:ring-dodger/30 transition-colors appearance-none"
                  >
                    {practiceSizes.map((size) => (
                      <option
                        key={size}
                        value={size === "Select practice size" ? "" : size}
                      >
                        {size}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-spring rounded-xl text-[15px] font-extrabold text-navy font-[family-name:var(--font-manrope)] hover:bg-spring-dark transition-colors"
                >
                  Request My Free Demo
                </button>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-5">
                  {[
                    "HIPAA Compliant",
                    "FDA 510(k) Cleared",
                    "No spam, ever",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-1.5 text-bali text-xs font-[family-name:var(--font-manrope)]"
                    >
                      <FiCheck className="w-3.5 h-3.5 text-spring" />
                      {badge}
                    </span>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
