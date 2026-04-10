import { FiPhone } from "react-icons/fi";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function UtilityBar() {
  const languages = [
    { label: "EN", href: "#" },
    { label: "ES", href: "#" },
    { label: "FR", href: "#" },
    { label: "PT", href: "#" },
  ];

  return (
    <div className="bg-dodger">
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-9">
        {/* Left */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+18883439146"
            className="flex items-center gap-1.5 text-white font-semibold text-xs"
          >
            <FiPhone className="w-3 h-3" />
            +1-888-343-9146
          </a>
          <a
            href="#contact"
            className="text-white/70 text-xs hover:text-white transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {languages.map((lang, i) => (
              <a
                key={lang.label}
                href={lang.href}
                className={`text-xs transition-colors ${
                  i === 0
                    ? "text-white font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {lang.label}
              </a>
            ))}
          </div>
          <div className="w-px h-3.5 bg-white/30" />
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/company/ramsoft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com/@ramsoft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <FaYoutube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
