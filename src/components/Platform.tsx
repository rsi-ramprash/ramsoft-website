import { FiCheck, FiArrowRight } from "react-icons/fi";

const omegaFeatures = [
  "Unified cloud RIS, PACS, and VNA in one platform",
  "AI-assisted voice dictation and auto-routing",
  "Real-time analytics and customizable dashboards",
  "Zero-footprint viewer with advanced tooling",
];

const powerServerFeatures = [
  "High-performance on-premise PACS engine",
  "Scalable to millions of studies",
  "Advanced HL7 / DICOM integration",
  "Enterprise-grade redundancy and failover",
];

const blumeFeatures = [
  "Self-service patient scheduling portal",
  "Secure image and report sharing",
  "Automated appointment reminders",
  "Mobile-first responsive design",
];

export default function Platform() {
  return (
    <section id="products" className="bg-white py-16 lg:py-[88px]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10">
          <div>
            <p className="text-dodger font-bold text-[11px] uppercase tracking-[2px] mb-3 font-[family-name:var(--font-manrope)]">
              The Products
            </p>
            <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-[32px] lg:text-[42px] text-navy-mid leading-tight">
              One ecosystem.
              <br />
              Every tool you need.
            </h2>
          </div>
          <div className="mt-4 lg:mt-0">
            <p className="text-waikawa text-base font-[family-name:var(--font-manrope)] mb-3 max-w-md">
              Three products, one seamless experience. From acquisition to
              patient engagement.
            </p>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-lilac rounded-xl text-sm font-semibold text-dodger hover:bg-zircon transition-colors font-[family-name:var(--font-manrope)]"
            >
              View Recent Case Studies
              <FiArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* OmegaAI Featured Card */}
        <div className="rounded-2xl overflow-hidden bg-[linear-gradient(135deg,rgb(17,28,60)_0%,rgb(11,23,51)_100%)] border border-white/10 mb-5">
          <div className="flex flex-col lg:flex-row">
            <div className="p-8 lg:p-10 lg:w-[55%]">
              <h3 className="font-[family-name:var(--font-hanken)] font-extrabold text-2xl text-white mb-2">
                OmegaAI<span className="text-sunglow">&reg;</span>
              </h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange/12 text-sunglow text-[11px] font-bold uppercase tracking-wider font-[family-name:var(--font-manrope)] mb-4">
                Cloud-Native RIS / PACS / VNA
              </span>
              <p className="text-white/80 text-[15px] leading-relaxed font-[family-name:var(--font-manrope)] mb-6 max-w-md">
                The all-in-one radiology workspace. OmegaAI unifies scheduling,
                reading, reporting, billing, and patient engagement in a single
                cloud-native platform.
              </p>
              <div className="space-y-3 mb-6">
                {omegaFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="shrink-0 w-5 h-5 rounded bg-orange/12 flex items-center justify-center mt-0.5">
                      <FiCheck className="w-3.5 h-3.5 text-sunglow" />
                    </span>
                    <span className="text-white/80 text-sm font-[family-name:var(--font-manrope)]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="#omega"
                className="inline-flex items-center gap-2 text-sunglow font-bold text-sm font-[family-name:var(--font-manrope)] hover:underline"
              >
                Explore OmegaAI&reg; <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="lg:w-[45%] bg-navy-light/30 flex items-center justify-center p-8 min-h-[240px]">
              <div className="w-full max-w-sm aspect-[4/3] rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="text-white/20 text-sm font-[family-name:var(--font-manrope)]">
                  Product Screenshot
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* PowerServer + Blume */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* PowerServer */}
          <div className="bg-white border border-lilac rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="font-[family-name:var(--font-hanken)] font-extrabold text-xl text-navy-mid mb-2">
              PowerServer<span className="text-spring">&reg;</span>
            </h3>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-spring/10 text-spring-dark text-[11px] font-bold uppercase tracking-wider font-[family-name:var(--font-manrope)] mb-4">
              Enterprise PACS Solution
            </span>
            <p className="text-waikawa text-[15px] leading-relaxed font-[family-name:var(--font-manrope)] mb-5">
              On-premise powerhouse built for high-volume environments. Scales
              effortlessly while maintaining peak performance.
            </p>
            <div className="space-y-2.5 mb-5">
              {powerServerFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 rounded bg-spring/10 flex items-center justify-center mt-0.5">
                    <FiCheck className="w-3.5 h-3.5 text-spring" />
                  </span>
                  <span className="text-waikawa text-sm font-[family-name:var(--font-manrope)]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="#powerserver"
              className="inline-flex items-center gap-2 text-spring-dark font-bold text-sm font-[family-name:var(--font-manrope)] hover:underline"
            >
              Explore PowerServer&reg; <FiArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Blume */}
          <div className="bg-white border border-lilac rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="font-[family-name:var(--font-hanken)] font-extrabold text-xl text-navy-mid mb-2">
              Blume<span className="text-dodger">&reg;</span>
            </h3>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-dodger/10 text-dodger text-[11px] font-bold uppercase tracking-wider font-[family-name:var(--font-manrope)] mb-4">
              Patient Engagement Portal
            </span>
            <p className="text-waikawa text-[15px] leading-relaxed font-[family-name:var(--font-manrope)] mb-5">
              Give patients control of their imaging journey with self-service
              scheduling, secure image access, and automated communications.
            </p>
            <div className="space-y-2.5 mb-5">
              {blumeFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 rounded bg-dodger/10 flex items-center justify-center mt-0.5">
                    <FiCheck className="w-3.5 h-3.5 text-dodger" />
                  </span>
                  <span className="text-waikawa text-sm font-[family-name:var(--font-manrope)]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="#blume"
              className="inline-flex items-center gap-2 text-dodger font-bold text-sm font-[family-name:var(--font-manrope)] hover:underline"
            >
              Explore Blume&reg; <FiArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
