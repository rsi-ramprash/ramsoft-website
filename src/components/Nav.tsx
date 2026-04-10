"use client";

import { useState } from "react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Resources", href: "#resources" },
  { label: "Company", href: "#company" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-lilac shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src="https://cdn.prod.website-files.com/666856968a13d14b838d5230/66776c9768e94b4fef093907_RamSoft-Logo-short-lightbg.svg"
            alt="RamSoft"
            className="h-8"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-manrope)] font-semibold text-sm text-waikawa hover:text-navy-mid transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#portal"
            className="px-4 py-2 border border-lilac rounded-lg text-sm font-semibold text-waikawa hover:bg-zircon transition-colors font-[family-name:var(--font-manrope)]"
          >
            Customer Portal
          </a>
          <a
            href="#demo"
            className="px-5 py-2.5 bg-spring rounded-lg text-[13.5px] font-extrabold text-navy font-[family-name:var(--font-manrope)] hover:bg-spring-dark transition-colors"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-waikawa"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-lilac bg-white px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block font-[family-name:var(--font-manrope)] font-semibold text-sm text-waikawa py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 space-y-2">
            <a
              href="#portal"
              className="block text-center px-4 py-2 border border-lilac rounded-lg text-sm font-semibold text-waikawa"
            >
              Customer Portal
            </a>
            <a
              href="#demo"
              className="block text-center px-5 py-2.5 bg-spring rounded-lg text-[13.5px] font-extrabold text-navy font-[family-name:var(--font-manrope)]"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
