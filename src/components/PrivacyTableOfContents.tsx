"use client";

import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const tocItems = [
  { id: "definitions", text: "Definitions" },
  { id: "collecting-and-using-your-personal-data", text: "Collecting and Using Your Personal Data" },
  { id: "use-of-your-personal-data", text: "Use of Your Personal Data" },
  { id: "retention-of-your-personal-data", text: "Retention of Your Personal Data" },
  { id: "transfer-of-your-personal-data", text: "Transfer of Your Personal Data" },
  { id: "disclosure-of-your-personal-data", text: "Disclosure of Your Personal Data" },
  { id: "security-of-your-personal-data", text: "Security of Your Personal Data" },
  { id: "breach-notification", text: "Breach Notification" },
  { id: "deletion-of-personal-data", text: "Deletion of Personal Data" },
  { id: "childrens-privacy", text: "Children\u2019s Privacy" },
  { id: "additional-information", text: "Additional Information for Certain Jurisdictions" },
  { id: "ccpa", text: "California Consumer Privacy Act (CCPA)" },
  { id: "pipeda", text: "PIPEDA" },
  { id: "dpdpa", text: "Digital Personal Data Protection Act (DPDPA) \u2013 India" },
  { id: "gdpr", text: "European Economic Area" },
  { id: "links-to-other-websites", text: "Links to Other Websites" },
  { id: "changes", text: "Changes to this Privacy Policy" },
  { id: "contact-us", text: "Contact Us" },
];

export default function PrivacyTableOfContents() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    for (const item of tocItems) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="space-y-0.5">
      {tocItems.map((item) => {
        const isActive = activeId === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block py-1.5 text-[13px] font-[family-name:var(--font-manrope)] leading-snug transition-colors border-l-2 pl-4 ${
              isActive
                ? "border-dodger text-dodger font-semibold"
                : "border-transparent text-waikawa hover:text-navy-mid hover:border-lilac"
            }`}
          >
            {item.text}
          </a>
        );
      })}
      <div className="pt-4 mt-4 border-t border-lilac">
        <a
          href="#top"
          className="flex items-center gap-2 py-2 px-4 text-[13px] font-semibold font-[family-name:var(--font-manrope)] text-dodger hover:text-navy-mid transition-colors"
        >
          <FiArrowUp className="w-3.5 h-3.5" />
          Back to Top
        </a>
      </div>
    </nav>
  );
}
