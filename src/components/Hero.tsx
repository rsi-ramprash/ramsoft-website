import { FiPlay, FiArrowRight } from "react-icons/fi";

const stats = [
  { value: "40%", unit: "Faster", label: "Report turnaround" },
  { value: "750+", unit: "Practices", label: "Worldwide" },
  { value: "3wk", unit: "Avg", label: "Deployment" },
  { value: "$0", unit: "Per-seat", label: "Fees" },
];

const productCards = [
  {
    name: "OmegaAI",
    logo: "Omega",
    subtitle: "Cloud-Native RIS / PACS",
    description:
      "Unified cloud platform for radiology workflow, reporting, and image management.",
  },
  {
    name: "PowerServer",
    logo: "Power",
    subtitle: "Enterprise PACS Solution",
    description:
      "On-premise powerhouse for high-volume imaging environments and hospitals.",
  },
  {
    name: "Blume",
    logo: "Blume",
    subtitle: "Patient Engagement Portal",
    description:
      "Patient-facing portal for self-scheduling, image access, and communication.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgb(17,28,60)_0%,rgb(11,23,51)_100%)]">
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-dodger/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-spring/5 blur-3xl" />
        <svg
          className="absolute top-20 right-[30%] opacity-[0.03]"
          width="400"
          height="400"
          viewBox="0 0 400 400"
        >
          <circle
            cx="200"
            cy="200"
            r="180"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="200"
            cy="200"
            r="120"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 py-16 lg:py-[88px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          {/* Left Column - Copy */}
          <div className="lg:w-[60%] flex flex-col justify-center">
            {/* Green pill tag */}
            <div className="inline-flex self-start items-center px-4 py-1.5 rounded-full border border-spring/30 bg-spring/8 mb-6">
              <span className="text-spring text-[11px] font-bold uppercase tracking-wider font-[family-name:var(--font-manrope)]">
                Imaging Accelerated&reg; &middot; 30+ Years &middot; 750+
                Practices
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-[family-name:var(--font-hanken)] font-extrabold text-[40px] lg:text-[62px] leading-[1.05] tracking-[-1.5px] text-white mb-6">
              Your Radiology Team
              <br />
              Deserves Better
              <br />
              <span className="text-dodger">Than Slow Software</span>
            </h1>

            {/* Subtitle */}
            <p className="font-[family-name:var(--font-manrope)] text-[17px] text-white/95 leading-relaxed max-w-[520px] mb-8">
              RamSoft&rsquo;s AI-powered cloud RIS/PACS cuts report turnaround
              by 40%, eliminates billing errors, and deploys in weeks, not
              months.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#demo"
                className="inline-flex items-center px-7 py-3.5 bg-spring rounded-xl text-[15px] font-extrabold text-navy font-[family-name:var(--font-hanken)] hover:bg-spring-dark transition-colors"
              >
                See It In Action - Book a Demo
              </a>
              <a
                href="#overview"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium font-[family-name:var(--font-manrope)] transition-colors"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/30">
                  <FiPlay className="w-3.5 h-3.5 ml-0.5" />
                </span>
                2-min overview
              </a>
            </div>

            {/* Stats Row */}
            <div className="border-t border-white/20 pt-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-[family-name:var(--font-hanken)] font-extrabold text-[30px] text-white">
                        {stat.value}
                      </span>
                      <span className="text-spring text-lg font-semibold font-[family-name:var(--font-manrope)]">
                        {stat.unit}
                      </span>
                    </div>
                    <p className="text-white/70 text-xs font-[family-name:var(--font-manrope)] mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Product Cards */}
          <div className="lg:w-[40%] flex flex-col gap-4">
            {productCards.map((card) => (
              <div
                key={card.name}
                className="relative p-5 rounded-[14px] border border-spring/30 bg-[rgba(11,23,51,0.7)] backdrop-blur-sm hover:border-spring/60 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-hanken)] font-bold text-lg text-white mb-0.5">
                      {card.name}
                      <span className="text-dodger">&reg;</span>
                    </h3>
                    <p className="text-spring text-xs font-semibold uppercase tracking-wide font-[family-name:var(--font-manrope)] mb-2">
                      {card.subtitle}
                    </p>
                    <p className="text-white/70 text-sm font-[family-name:var(--font-manrope)] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="shrink-0 ml-4 w-9 h-9 rounded-full bg-spring/10 border border-spring/30 flex items-center justify-center group-hover:bg-spring/20 transition-colors">
                    <FiArrowRight className="w-4 h-4 text-spring" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
