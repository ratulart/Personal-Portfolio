import { EXPERIENCE } from "../../data/portfolio";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 md:py-40 border-t border-white/[0.06]"
      data-testid="experience-section"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="section-num">/ 02</span>
            <span className="label">Experience</span>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight max-w-3xl">
            Building marketing systems that{" "}
            <span className="font-serif-i text-[#CBD5E1]">actually ship.</span>
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="absolute left-0 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i}>
              <div className="pl-8 sm:pl-16 py-8 relative">
                <div className="absolute left-[-5px] sm:left-[11px] top-10 w-2.5 h-2.5 rounded-full bg-[#3B82F6] shadow-[0_0_0_6px_rgba(59,130,246,0.15)]" />
                <div className="grid lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <div className="label">{e.period}</div>
                    <div className="mt-3 font-display text-3xl">
                      {e.company}
                    </div>
                    <div className="mt-2 text-[#CBD5E1]">{e.role}</div>
                    <div className="mt-2 text-xs text-[#94A3B8] font-serif-i">
                      {e.prev}
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <Stagger className="space-y-3">
                      {e.highlights.map((h, j) => (
                        <StaggerItem
                          key={j}
                          className="flex gap-4 text-[#CBD5E1] leading-relaxed"
                        >
                          <span className="text-[#06B6D4] mt-2 shrink-0">
                            —
                          </span>
                          <span>{h}</span>
                        </StaggerItem>
                      ))}
                    </Stagger>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {e.tags.map((t) => (
                        <span
                          key={t}
                          className="chip"
                          data-testid={`experience-tag-${t.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
