"use client";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  FiMonitor,
  FiGlobe,
  FiTruck,
  FiActivity,
  FiHeart,
  FiShield,
} from "react-icons/fi";

const tabs = ["All", "Role", "Specialty"];

const cards = [
  {
    icon: FiMonitor,
    title: "Imaging Center",
    description:
      "Streamline scheduling, reporting, and billing for outpatient radiology facilities with seamless integrations.",
  },
  {
    icon: FiGlobe,
    title: "Teleradiology",
    description:
      "Enable remote reading with zero-footprint viewers, AI-assisted routing, and real-time collaboration tools.",
  },
  {
    icon: FiTruck,
    title: "Mobile Imaging",
    description:
      "Manage on-the-go imaging workflows with offline-capable tools built for field operations and portability.",
  },
  {
    icon: FiActivity,
    title: "Hospital",
    description:
      "Enterprise-grade PACS and RIS integration for multi-department, high-volume hospital environments.",
  },
  {
    icon: FiHeart,
    title: "Mammography Center",
    description:
      "Purpose-built workflows for breast imaging, including BI-RADS tracking, recall management, and compliance.",
  },
  {
    icon: FiShield,
    title: "Legal & Personal Injury",
    description:
      "Secure image sharing and structured reporting for legal proceedings, IME firms, and personal injury cases.",
  },
];

export default function WhoWeServe() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section id="who-we-serve" className="bg-zircon py-16 lg:py-[88px]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10">
          <div>
            <p className="text-dodger font-bold text-[11px] uppercase tracking-[2px] mb-3 font-[family-name:var(--font-manrope)]">
              Who We Serve
            </p>
            <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-[32px] lg:text-[42px] text-navy-mid leading-tight mb-3">
              A solution built around{" "}
              <em className="font-[family-name:var(--font-jakarta)] text-dodger not-italic italic">
                your
              </em>{" "}
              practice
            </h2>
            <p className="font-[family-name:var(--font-manrope)] text-base text-waikawa max-w-lg">
              Not a one-size-fits-all platform. RamSoft adapts to your
              specialty, role, and growth stage.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 mt-6 lg:mt-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-[13px] font-bold font-[family-name:var(--font-manrope)] transition-colors ${
                  activeTab === tab
                    ? "bg-dodger text-white"
                    : "bg-white text-waikawa border border-lilac hover:bg-lilac/30"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-lilac rounded-2xl p-6 hover:shadow-lg hover:border-dodger/20 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#EEF3FF] flex items-center justify-center mb-4">
                <card.icon className="w-5 h-5 text-dodger" />
              </div>
              <h3 className="font-[family-name:var(--font-manrope)] font-bold text-base text-navy-mid mb-2">
                {card.title}
              </h3>
              <p className="font-[family-name:var(--font-manrope)] text-[13.5px] text-waikawa leading-relaxed mb-4">
                {card.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-dodger text-sm font-semibold font-[family-name:var(--font-manrope)] group-hover:gap-2.5 transition-all"
              >
                Explore solution
                <span className="w-5 h-5 rounded-full bg-spring/15 flex items-center justify-center">
                  <FiArrowRight className="w-3 h-3 text-spring" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
