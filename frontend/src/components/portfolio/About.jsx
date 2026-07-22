import { STATS } from "../../data/portfolio";
import { Reveal } from "./Reveal";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const isFloat = !Number.isInteger(value);
    const duration = 1400;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = value * eased;
      setN(isFloat ? Number(v.toFixed(2)) : Math.round(v));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

const CHAPTERS = [
  {
    n: "01",
    title: "Analytical by training.",
    body: "A BBA in Digital Marketing with an SGPA of 9.75/10 gave me the vocabulary of business — funnels, positioning, unit economics — and a bias toward decisions grounded in data.",
  },
  {
    n: "02",
    title: "SEO as a first principle.",
    body: "I approach the web like a search engine does. Crawlability, intent mapping, on-page depth, off-page signals and technical hygiene — the fundamentals compound into visibility.",
  },
  {
    n: "03",
    title: "Creative problem solving.",
    body: "Marketing is a puzzle of audience, offer and channel. I like the reframing that turns a stalled campaign into a repeatable growth loop.",
  },
  {
    n: "04",
    title: "AI as a leverage tool.",
    body: "ChatGPT, Gemini and modern AI accelerate research, briefing and reporting — used deliberately, they multiply craft rather than replace it.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="section-num">/ 01</span>
            <span className="label">About</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
              A recruiter-ready{" "}
              <span className="font-serif-i text-[#CBD5E1]">operator</span> for
              modern marketing teams.
            </h2>
            <p className="mt-8 text-[#CBD5E1] leading-relaxed max-w-md">
              I turn brand ambition into structured, measurable digital
              programs — SEO, paid media, content and analytics working as one
              system. I enjoy solving business problems with marketing.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-5">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="pcard p-5"
                  data-testid={`about-stat-${i}`}
                >
                  <div className="font-display text-3xl sm:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 label">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="lg:col-span-7 space-y-14">
            {CHAPTERS.map((c, i) => (
              <Reveal key={c.n} delay={i * 0.05}>
                <div className="grid grid-cols-[auto_1fr] gap-6 sm:gap-10 items-start">
                  <div className="font-serif text-5xl sm:text-6xl text-[#8B5CF6]/80 leading-none">
                    {c.n}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl tracking-tight">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-[#CBD5E1] leading-relaxed max-w-xl">
                      {c.body}
                    </p>
                  </div>
                </div>
                {i < CHAPTERS.length - 1 && (
                  <div className="divider mt-12" />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
