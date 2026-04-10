const badges = [
  {
    label: "HIPAA Compliant",
    src: "https://cdn.prod.website-files.com/666856968a13d14b838d5230/6683c3c7e2e4c74f2c5c7d1a_hipaa-badge.svg",
  },
  {
    label: "SOC 2 Type II",
    src: "https://cdn.prod.website-files.com/666856968a13d14b838d5230/6683c3c8e2e4c74f2c5c7d3e_soc2-badge.svg",
  },
  {
    label: "FDA 510(k) Cleared",
    src: "https://cdn.prod.website-files.com/666856968a13d14b838d5230/6683c3c8e2e4c74f2c5c7d42_fda-badge.svg",
  },
];

export default function Compliance() {
  return (
    <section className="bg-[linear-gradient(135deg,rgb(17,28,60)_0%,rgb(11,23,51)_100%)] py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Badges */}
          <div className="flex items-center gap-8 flex-wrap justify-center">
            {badges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center p-2">
                  <svg
                    className="w-6 h-6 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <span className="text-white/80 text-sm font-semibold font-[family-name:var(--font-manrope)]">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

          {/* Text */}
          <p className="text-white/50 text-sm font-[family-name:var(--font-manrope)] text-center md:text-right max-w-sm">
            RamSoft maintains the highest standards of security, privacy, and
            regulatory compliance across all products.
          </p>
        </div>
      </div>
    </section>
  );
}
