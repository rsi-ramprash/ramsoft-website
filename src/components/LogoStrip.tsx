const companies = [
  "Meridian Health",
  "Apex Imaging",
  "Northview Radiology",
  "Summit Teleradiology",
  "Clarity MRI",
  "Crestwood Medical",
];

export default function LogoStrip() {
  return (
    <section className="bg-dodger py-10">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="text-white font-bold text-[11px] uppercase tracking-[2px] mb-5 font-[family-name:var(--font-manrope)]">
          Trusted by leading healthcare organisations worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
          {companies.map((name) => (
            <span
              key={name}
              className="text-white font-bold text-[13px] uppercase tracking-wide font-[family-name:var(--font-manrope)]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
