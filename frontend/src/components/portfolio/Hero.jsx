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
          {/* Ambient glow halo behind the portrait */}
          <div
            aria-hidden
            className="absolute inset-0 -z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 45%, rgba(59,130,246,0.35), rgba(139,92,246,0.18) 45%, transparent 75%)",
              filter: "blur(60px)",
              transform: "scale(1.05)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full max-w-md ml-auto"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 82% 82% at 50% 45%, #000 30%, rgba(0,0,0,0.9) 55%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.2) 90%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 82% 82% at 50% 45%, #000 30%, rgba(0,0,0,0.9) 55%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.2) 90%, transparent 100%)",
              filter:
                "drop-shadow(0 30px 60px rgba(59,130,246,0.35)) drop-shadow(0 10px 30px rgba(139,92,246,0.25)) drop-shadow(0 0 40px rgba(6,182,212,0.15))",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 via-transparent to-[#8B5CF6]/10 mix-blend-overlay pointer-events-none" />
            <img
              src={PROFILE.portraitUrl}
              alt="Ratul Biswas — Digital Marketing Professional"
              className="absolute inset-0 w-full h-full object-cover spotlight-mask"
              style={{ objectPosition: "center 22%" }}
              loading="eager"
              data-testid="hero-portrait"
            />
          </motion.div>

          {/* Info chip below picture */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="mt-6 mx-auto max-w-md flex items-center justify-between gap-4 pcard px-5 py-4"
            data-testid="hero-edu-chip"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#06B6D4]/15 border border-[#06B6D4]/30 grid place-items-center text-[#06B6D4] text-sm font-semibold">
                9.75
              </span>
              <div className="text-xs">
                <div className="text-white text-sm">BBA · Digital Marketing</div>
                <div className="text-[#94A3B8]">Brainware University</div>
              </div>
            </div>
            <div className="text-right">
              <div className="label text-white/60">Currently</div>
              <div className="text-xs text-white mt-1">SM Solutions</div>
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
