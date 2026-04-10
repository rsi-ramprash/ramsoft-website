import { FiPlay } from "react-icons/fi";

const lightTestimonials = [
  {
    quote:
      "The transition from our legacy PACS to OmegaAI was surprisingly smooth. Our radiologists were productive from day one.",
    author: "Dr. Lisa Chen",
    role: "Chief of Radiology",
    org: "Northview Medical",
  },
  {
    quote:
      "Blume transformed our patient experience. Self-scheduling alone reduced our front desk call volume by 60%.",
    author: "Mark Rodriguez",
    role: "Practice Administrator",
    org: "Summit Imaging",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 lg:py-[88px]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="mb-10">
          <p className="text-dodger font-bold text-[11px] uppercase tracking-[2px] mb-3 font-[family-name:var(--font-manrope)]">
            Customer Stories
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-[32px] lg:text-[42px] text-navy-mid leading-tight max-w-lg">
            Practices that made the switch haven&rsquo;t looked back
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Featured Dark Testimonial */}
          <div className="bg-[linear-gradient(135deg,rgb(17,28,60)_0%,rgb(11,23,51)_100%)] rounded-2xl p-8 lg:p-10 flex flex-col justify-between">
            <div>
              {/* Quote mark */}
              <svg
                className="w-10 h-10 text-spring mb-6"
                viewBox="0 0 40 40"
                fill="currentColor"
              >
                <path d="M8 24c0-5.333 3.333-10 10-14l2 3c-4 2.667-6.333 5.667-7 9h5v10H8V24zm18 0c0-5.333 3.333-10 10-14l2 3c-4 2.667-6.333 5.667-7 9h5v10H26V24z" />
              </svg>
              <blockquote className="font-[family-name:var(--font-hanken)] italic text-lg text-white leading-relaxed mb-8">
                &ldquo;Switching to RamSoft was the single best decision we made
                for our practice. Report turnaround dropped 40%, our billing
                errors virtually disappeared, and the deployment took just three
                weeks. The ROI was evident within the first month.&rdquo;
              </blockquote>
            </div>
            <div>
              {/* Author */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-dodger to-spring flex items-center justify-center text-white font-bold text-sm">
                  JW
                </div>
                <div>
                  <p className="text-white font-bold text-sm font-[family-name:var(--font-manrope)]">
                    Dr. James Wilson
                  </p>
                  <p className="text-white/60 text-xs font-[family-name:var(--font-manrope)]">
                    Medical Director, Meridian Radiology
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 pt-5 border-t border-white/15">
                <div>
                  <p className="text-spring font-extrabold text-xl font-[family-name:var(--font-hanken)]">
                    40%
                  </p>
                  <p className="text-white/60 text-[11px] font-[family-name:var(--font-manrope)]">
                    Faster TAT
                  </p>
                </div>
                <div className="w-px h-8 bg-white/15" />
                <div>
                  <p className="text-spring font-extrabold text-xl font-[family-name:var(--font-hanken)]">
                    ~0
                  </p>
                  <p className="text-white/60 text-[11px] font-[family-name:var(--font-manrope)]">
                    Billing errors
                  </p>
                </div>
                <div className="w-px h-8 bg-white/15" />
                <div>
                  <p className="text-spring font-extrabold text-xl font-[family-name:var(--font-hanken)]">
                    3wk
                  </p>
                  <p className="text-white/60 text-[11px] font-[family-name:var(--font-manrope)]">
                    Deployment
                  </p>
                </div>
              </div>

              {/* Watch Video */}
              <a
                href="#video"
                className="inline-flex items-center gap-2 text-spring text-sm font-semibold font-[family-name:var(--font-manrope)] mt-5 hover:underline"
              >
                <FiPlay className="w-4 h-4" />
                Watch Video
              </a>
            </div>
          </div>

          {/* Light Testimonial Cards */}
          <div className="flex flex-col gap-5">
            {lightTestimonials.map((item) => (
              <div
                key={item.author}
                className="bg-zircon border border-lilac rounded-2xl p-7 flex-1"
              >
                <blockquote className="font-[family-name:var(--font-manrope)] italic text-[15px] text-waikawa leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dodger to-dodger/60 flex items-center justify-center text-white font-bold text-xs">
                    {item.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-navy-mid font-bold text-sm font-[family-name:var(--font-manrope)]">
                      {item.author}
                    </p>
                    <p className="text-waikawa text-xs font-[family-name:var(--font-manrope)]">
                      {item.role}, {item.org}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href="#testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 border border-lilac rounded-xl text-sm font-semibold text-dodger hover:bg-zircon transition-colors font-[family-name:var(--font-manrope)]"
          >
            <FiPlay className="w-4 h-4" />
            Watch video testimonials
          </a>
        </div>
      </div>
    </section>
  );
}
