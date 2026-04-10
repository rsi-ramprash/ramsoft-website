import { FiCheck, FiArrowRight, FiMic, FiCpu, FiClock, FiLayers } from "react-icons/fi";

const checkpoints = [
  "AI-assisted voice dictation with real-time transcription",
  "Intelligent study routing and priority assignment",
  "Automated critical findings detection and alerts",
  "Natural language processing for structured reporting",
];

const statCards = [
  {
    icon: FiMic,
    value: "40%",
    title: "Faster Reporting",
    description: "Voice AI cuts dictation time dramatically",
  },
  {
    icon: FiCpu,
    value: "99%",
    title: "Transcription Accuracy",
    description: "Industry-leading speech recognition",
  },
  {
    icon: FiClock,
    value: "60%",
    title: "Less Admin Time",
    description: "Automated workflows reduce manual tasks",
  },
  {
    icon: FiLayers,
    value: "20+",
    title: "AI Integrations",
    description: "Connect with leading AI partners",
  },
];

export default function AISection() {
  return (
    <section className="bg-zircon border-t border-b border-lilac py-16 lg:py-[88px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left - Copy */}
          <div className="lg:w-1/2">
            <p className="text-dodger font-bold text-[11px] uppercase tracking-[2px] mb-3 font-[family-name:var(--font-manrope)]">
              AI at the Core
            </p>
            <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-[32px] lg:text-[42px] text-navy-mid leading-tight mb-4">
              Intelligence built in,
              <br />
              not bolted on
            </h2>
            <p className="text-waikawa text-base leading-relaxed font-[family-name:var(--font-manrope)] mb-8 max-w-md">
              Every RamSoft product is infused with AI that learns your
              workflow, anticipates your needs, and automates the mundane so
              you can focus on patient care.
            </p>

            <div className="space-y-3.5 mb-8">
              {checkpoints.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 rounded bg-dodger/10 flex items-center justify-center mt-0.5">
                    <FiCheck className="w-3.5 h-3.5 text-dodger" />
                  </span>
                  <span className="text-navy-mid text-sm font-medium font-[family-name:var(--font-manrope)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#ai"
              className="inline-flex items-center gap-2 px-6 py-3 bg-spring rounded-xl text-[14px] font-extrabold text-navy font-[family-name:var(--font-manrope)] hover:bg-spring-dark transition-colors"
            >
              Explore AI Capabilities
              <FiArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Stats Grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {statCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-lilac rounded-[18px] p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-dodger/8 flex items-center justify-center mb-4">
                    <card.icon className="w-5 h-5 text-dodger" />
                  </div>
                  <p className="font-[family-name:var(--font-hanken)] font-extrabold text-[38px] text-dodger leading-none mb-1">
                    {card.value}
                  </p>
                  <p className="font-[family-name:var(--font-manrope)] font-bold text-[15px] text-navy-mid mb-1">
                    {card.title}
                  </p>
                  <p className="font-[family-name:var(--font-manrope)] text-[13px] text-waikawa">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
