import { SKILLS, PROFILE } from "../../data/portfolio";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const CATS = [
  { key: "SEO", span: "lg:col-span-2 lg:row-span-2", accent: "#06B6D4" },
  { key: "Digital Marketing", span: "lg:col-span-2", accent: "#3B82F6" },
  { key: "Tools", span: "lg:col-span-2", accent: "#8B5CF6" },
  { key: "Soft Skills", span: "lg:col-span-2", accent: "#22C55E" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 md:py-40 border-t border-white/[0.06]"
      data-testid="skills-section"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="section-num">/ 03</span>
            <span className="label">Skills</span>
          </div>
        </Reveal>
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-6 items-end mb-14">
            <h2 className="lg:col-span-8 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
              A modern marketing{" "}
              <span className="font-serif-i text-[#CBD5E1]">stack</span>, used
              in production.
            </h2>
            <p className="lg:col-span-4 text-[#CBD5E1] leading-relaxed">
              A working toolkit spanning search, paid media, content and
              analytics — with AI layered in where it moves the needle.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 auto-rows-fr">
          {CATS.map((c, i) => (
            <Reveal
              key={c.key}
              delay={i * 0.05}
              className={`pcard p-8 ${c.span}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="label" style={{ color: c.accent }}>
                    Category {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl">
                    {c.key}
                  </h3>
                </div>
                <span
                  className="w-10 h-10 rounded-full grid place-items-center font-serif-i text-lg"
                  style={{
                    background: `${c.accent}18`,
                    color: c.accent,
                    border: `1px solid ${c.accent}33`,
                  }}
                >
                  {SKILLS[c.key].length}
                </span>
              </div>
              <div className="mt-6 h-px bg-white/[0.06]" />
              <Stagger className="mt-6 flex flex-wrap gap-2" stagger={0.03}>
                {SKILLS[c.key].map((s) => (
                  <StaggerItem key={s}>
                    <span
                      className="chip"
                      data-testid={`skill-${s.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {s}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          ))}
        </div>

        {/* Signature footer band */}
        <Reveal delay={0.1}>
          <div className="mt-10 pcard p-6 flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm text-[#CBD5E1]">
              <span className="font-serif-i text-white">Signature stack</span>{" "}
              — GA4, Google Ads, Meta Ads Manager, WordPress, ChatGPT, Gemini.
            </div>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[#06B6D4] hover:text-white transition-colors"
              data-testid="skills-linkedin-link"
            >
              See more on LinkedIn →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
