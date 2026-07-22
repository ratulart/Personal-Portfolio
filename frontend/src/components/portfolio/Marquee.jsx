import { MARQUEE_WORDS, PROFILE } from "../../data/portfolio";

export default function Marquee() {
  const items = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <section
      className="relative py-16 md:py-24 border-y border-white/[0.06] overflow-hidden"
      data-testid="marquee-section"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-transparent to-[#0F172A] z-10 pointer-events-none" />
      <div className="whitespace-nowrap">
        <div className="marquee-track inline-flex gap-16">
          {items.map((w, i) => (
            <span
              key={i}
              className="font-serif-i text-5xl sm:text-7xl text-[#94A3B8] inline-flex items-center gap-16"
            >
              {w}
              <span className="text-[#3B82F6] text-3xl">✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mt-8 flex items-center justify-between text-xs text-[#94A3B8]">
        <span className="label">Disciplines</span>
        <span className="label">
          {PROFILE.name} · Portfolio 2026
        </span>
      </div>
    </section>
  );
}
