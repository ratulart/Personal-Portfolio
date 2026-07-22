import { CERTIFICATIONS } from "../../data/portfolio";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-28 md:py-40 border-t border-white/[0.06]"
      data-testid="certifications-section"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="section-num">/ 04</span>
            <span className="label">Certifications</span>
          </div>
        </Reveal>
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight max-w-3xl mb-14">
            Credentials from{" "}
            <span className="font-serif-i text-[#CBD5E1]">
              programs I trust.
            </span>
          </h2>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((c, i) => (
            <StaggerItem key={i}>
              <div
                className="pcard p-6 h-full flex flex-col"
                data-testid={`cert-card-${i}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="w-9 h-9 rounded-md grid place-items-center border border-white/[0.08]"
                    style={{ background: "rgba(59,130,246,0.1)" }}
                  >
                    <Award size={16} className="text-[#3B82F6]" />
                  </span>
                  <span className="label" style={{ color: "#8B5CF6" }}>
                    {c.tag}
                  </span>
                </div>
                <div className="mt-6">
                  <div className="text-xs text-[#94A3B8]">{c.issuer}</div>
                  <div className="mt-1 font-display text-lg leading-snug">
                    {c.title}
                  </div>
                </div>
                <div className="mt-auto pt-6 flex items-center justify-between text-xs text-[#94A3B8]">
                  <span>Certified</span>
                  <span>0{i + 1}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
