import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PROFILE } from "../../data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#0F172A]/70 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent"
      }`}
      data-testid="site-nav"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 group"
          data-testid="nav-logo"
        >
          <span className="w-8 h-8 rounded-md border border-white/10 grid place-items-center font-display text-sm bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20">
            {PROFILE.initials}
          </span>
          <span className="hidden sm:block text-sm font-medium tracking-tight">
            {PROFILE.name}
            <span className="text-[#94A3B8]"> — Portfolio</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#CBD5E1] hover:text-white transition-colors"
              data-testid={`nav-link-${l.label.toLowerCase()}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={PROFILE.resumeUrl}
            className="btn-primary text-xs"
            data-testid="nav-resume-button"
          >
            Résumé
          </a>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-white/[0.08] bg-[#0F172A]/95 backdrop-blur-xl"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-[#CBD5E1]"
                  data-testid={`mnav-link-${l.label.toLowerCase()}`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={PROFILE.resumeUrl}
                className="btn-primary self-start mt-2"
                data-testid="mnav-resume-button"
              >
                Résumé
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
