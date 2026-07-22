import { WHY_HIRE, PROFILE } from "../../data/portfolio";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhyHireMe() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section
      id="why"
      ref={ref}
      className="relative py-28 md:py-40 border-t border-white/[0.06] overflow-hidden"
      data-testid="why-section"
    >
      {/* Parallax bg image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 pointer-events-none"
      >
        <img
          src={PROFILE.officeUrl}
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A]/70 to-[#0F172A]" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="section-num">/ 07</span>
            <span className="label">Why hire me</span>
          </div>
        </Reveal>
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight max-w-4xl mb-14">
            Six reasons I'd add{" "}
            <span className="font-serif-i text-[#CBD5E1]">real value</span> to
            your marketing team.
          </h2>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_HIRE.map((w, i) => (
            <StaggerItem key={w.k}>
              <div
                className="pcard p-8 h-full"
                data-testid={`why-card-${i}`}
              >
                <div className="font-serif text-4xl text-[#3B82F6]/80">
                  {w.k}
                </div>
                <h3 className="mt-4 font-display text-xl">{w.t}</h3>
                <p className="mt-3 text-sm text-[#CBD5E1] leading-relaxed">
                  {w.d}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
