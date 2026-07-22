import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Download, Linkedin } from "lucide-react";
import { PROFILE } from "../../data/portfolio";

const line1 = "Digital Marketing".split(" ");
const line2 = "Professional.".split(" ");
const line3a = "SEO, Meta &";
const line3b = "Google Ads Specialist.";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] pt-28 md:pt-36 pb-16 overflow-hidden"
      data-testid="hero-section"
    >
      {/* Grid backdrop */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      {/* Radial glows */}
      <motion.div
        style={{ y }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/10 blur-3xl glow pointer-events-none"
      />
      <motion.div
        style={{ y }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/10 blur-3xl glow pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 grid lg:grid-cols-12 gap-10 items-center">
        {/* Left */}
        <motion.div
          style={{ opacity }}
          className="lg:col-span-7 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-10 bg-[#06B6D4]" />
            <span className="label">Portfolio · 2026</span>
          </motion.div>

          <h1 className="font-display text-[11vw] sm:text-[8vw] lg:text-[5vw] xl:text-[4.6vw] leading-[0.98] tracking-tighter">
            <div className="reveal-line block whitespace-nowrap">
              <span style={{ animationDelay: "0.15s" }}>
                {line1.join(" ")}
              </span>
            </div>
            <div className="reveal-line block whitespace-nowrap">
              <span style={{ animationDelay: "0.3s" }}>
                <span className="font-serif-i text-[#CBD5E1]">
                  {line2.join(" ")}
                </span>
              </span>
            </div>
            <div className="reveal-line block whitespace-nowrap">
              <span style={{ animationDelay: "0.45s" }} className="grad-text">
                {line3a}
              </span>
            </div>
            <div className="reveal-line block whitespace-nowrap">
              <span style={{ animationDelay: "0.6s" }} className="grad-text">
                {line3b}
              </span>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-8 text-base sm:text-lg text-[#CBD5E1] max-w-xl leading-relaxed"
            data-testid="hero-subhead"
          >
            Growth-focused marketer building brands with{" "}
            <span className="text-white">SEO</span>, performance media,{" "}
            <span className="text-white">content strategy</span>, analytics and{" "}
            <span className="text-white">AI-powered workflows</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href={PROFILE.resumeUrl}
              download="Ratul-Biswas-Resume.pdf"
              className="btn-primary"
              data-testid="hero-resume-button"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="btn-ghost"
              data-testid="hero-contact-button"
            >
              Contact Me <ArrowUpRight size={16} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              data-testid="hero-linkedin-button"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="mt-14 flex items-center gap-6 text-xs text-[#94A3B8]"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              Open to opportunities · SEO / Growth / Performance
            </div>
          </motion.div>
        </motion.div>

        {/* Right — portrait */}
        <motion.div
          style={{ scale }}
          className="lg:col-span-5 relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full max-w-md ml-auto rounded-2xl overflow-hidden border border-white/[0.08]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/15 via-transparent to-[#8B5CF6]/15 mix-blend-overlay pointer-events-none" />
            <img
              src={PROFILE.portraitUrl}
              alt="Ratul Biswas — Digital Marketing Professional"
              className="absolute inset-0 w-full h-full object-cover spotlight-mask"
              style={{ objectPosition: "68% 18%", transform: "scale(1.12)", transformOrigin: "70% 40%" }}
              loading="eager"
              data-testid="hero-portrait"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/10 to-transparent pointer-events-none" />

            {/* Corner labels */}
            <div className="absolute top-4 left-4 label text-white/70">
              ⌗ 001 / Portfolio
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <div className="label text-white/60">Currently</div>
                <div className="text-sm text-white mt-1">
                  Digital Marketing Executive · SM Solutions
                </div>
              </div>
              <div className="text-right">
                <div className="label text-white/60">Based</div>
                <div className="text-sm text-white mt-1">India</div>
              </div>
            </div>
          </motion.div>

          {/* Floating chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="hidden md:flex absolute -left-6 top-8 pcard px-4 py-3 items-center gap-3"
          >
            <span className="w-8 h-8 rounded-full bg-[#06B6D4]/20 grid place-items-center text-[#06B6D4] text-xs font-semibold">
              9.75
            </span>
            <div className="text-xs">
              <div className="text-white">BBA · Digital Marketing</div>
              <div className="text-[#94A3B8]">Brainware University</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] label flex flex-col items-center gap-2"
      >
        <span>Scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}
