import { EDUCATION, ACADEMIC_PROJECT, PROFILE } from "../../data/portfolio";
import { Reveal } from "./Reveal";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-28 md:py-40 border-t border-white/[0.06]"
      data-testid="education-section"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="section-num">/ 05</span>
            <span className="label">Education & Project</span>
          </div>
        </Reveal>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight mb-12">
                Foundations,{" "}
                <span className="font-serif-i text-[#CBD5E1]">built well.</span>
              </h2>
            </Reveal>

            <div className="relative pl-8 border-l border-white/[0.08]">
              {EDUCATION.map((e, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="relative pb-10 last:pb-0">
                    <span className="absolute -left-[35px] top-2 w-2 h-2 rounded-full bg-[#06B6D4]" />
                    <div className="label mb-2">{e.period}</div>
                    <h3 className="font-display text-2xl">{e.school}</h3>
                    <div className="mt-1 text-[#CBD5E1]">{e.degree}</div>
                    <p className="mt-3 text-sm text-[#94A3B8] max-w-lg">
                      {e.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div
                className="pcard p-8 relative overflow-hidden"
                data-testid="academic-project-card"
              >
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: `url(${PROFILE.dataUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    mixBlendMode: "luminosity",
                    filter: "grayscale(60%)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#273449] via-[#273449]/70 to-transparent" />
                <div className="relative">
                  <div className="label" style={{ color: "#06B6D4" }}>
                    Academic Project
                  </div>
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl leading-tight">
                    {ACADEMIC_PROJECT.title}
                  </h3>
                  <p className="mt-4 text-[#CBD5E1] leading-relaxed">
                    {ACADEMIC_PROJECT.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {ACADEMIC_PROJECT.pillars.map((p) => (
                      <span key={p} className="chip">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
