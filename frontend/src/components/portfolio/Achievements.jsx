import { ACHIEVEMENTS } from "../../data/portfolio";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { Trophy } from "lucide-react";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-28 md:py-40 border-t border-white/[0.06]"
      data-testid="achievements-section"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="section-num">/ 06</span>
            <span className="label">Achievements</span>
          </div>
        </Reveal>
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight max-w-3xl mb-14">
            Curious in the{" "}
            <span className="font-serif-i text-[#CBD5E1]">right rooms.</span>
          </h2>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((a, i) => (
            <StaggerItem key={a.title}>
              <div
                className="pcard p-7 h-full"
                data-testid={`achievement-card-${i}`}
              >
                <div className="flex items-start justify-between">
                  <span className="w-10 h-10 rounded-md border border-white/[0.08] bg-[#8B5CF6]/10 grid place-items-center">
                    <Trophy size={16} className="text-[#8B5CF6]" />
                  </span>
                  <span className="label">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-xl">{a.title}</h3>
                <p className="mt-3 text-sm text-[#CBD5E1] leading-relaxed">
                  {a.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
