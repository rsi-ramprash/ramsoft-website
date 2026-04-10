import { FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

const platformLinks = [
  { label: "OmegaAI", href: "#" },
  { label: "PowerServer", href: "#" },
  { label: "Blume", href: "#" },
  { label: "AI Capabilities", href: "#" },
  { label: "Integrations", href: "#" },
  { label: "Security", href: "#" },
];

const serveLinks = [
  { label: "Imaging Centers", href: "#" },
  { label: "Teleradiology", href: "#" },
  { label: "Hospitals", href: "#" },
  { label: "Mobile Imaging", href: "#" },
  { label: "Mammography", href: "#" },
  { label: "Legal & PI", href: "#" },
];

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Partners", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Events", href: "#" },
  { label: "Contact", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Compliance", href: "#" },
  { label: "AI Disclaimer", href: "#" },
];

const certPills = ["HIPAA", "SOC2", "FDA 510K", "PIPEDA"];

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,rgb(17,28,60)_0%,rgb(11,23,51)_100%)]">
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10 border-b border-white/10">
          {/* Brand Column */}
          <div>
            <img
              src="https://cdn.prod.website-files.com/666856968a13d14b838d5230/66776c9768e94b4fef093907_RamSoft-Logo-short-lightbg.svg"
              alt="RamSoft"
              className="h-7 brightness-0 invert mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed font-[family-name:var(--font-manrope)] mb-5">
              AI-powered cloud RIS/PACS solutions trusted by 750+ radiology
              practices worldwide.
            </p>
            <div className="space-y-2 mb-5">
              <a
                href="tel:+18883439146"
                className="flex items-center gap-2 text-white/60 text-sm font-[family-name:var(--font-manrope)] hover:text-white transition-colors"
              >
                <FiPhone className="w-3.5 h-3.5" />
                +1-888-343-9146
              </a>
              <a
                href="mailto:info@ramsoft.com"
                className="flex items-center gap-2 text-white/60 text-sm font-[family-name:var(--font-manrope)] hover:text-white transition-colors"
              >
                <FiMail className="w-3.5 h-3.5" />
                info@ramsoft.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/ramsoft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-colors"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com/@ramsoft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-colors"
              >
                <FaYoutube className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com/ramsoftinc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-colors"
              >
                <FaTwitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-bold text-sm font-[family-name:var(--font-manrope)] mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm font-[family-name:var(--font-manrope)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Serve */}
          <div>
            <h4 className="text-white font-bold text-sm font-[family-name:var(--font-manrope)] mb-4">
              Who We Serve
            </h4>
            <ul className="space-y-2.5">
              {serveLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm font-[family-name:var(--font-manrope)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm font-[family-name:var(--font-manrope)] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm font-[family-name:var(--font-manrope)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-[family-name:var(--font-manrope)]">
            &copy; {new Date().getFullYear()} RamSoft Inc. All rights reserved.
            Imaging Accelerated&reg; is a registered trademark of RamSoft Inc.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/40 text-xs font-[family-name:var(--font-manrope)] hover:text-white/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {certPills.map((cert) => (
              <span
                key={cert}
                className="px-2.5 py-1 rounded-md bg-white/8 text-white/50 text-[10px] font-bold font-[family-name:var(--font-manrope)] uppercase tracking-wide"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
