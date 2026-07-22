import { PROFILE } from "../../data/portfolio";
import { ArrowUp, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-10 border-t border-white/[0.06]"
      data-testid="site-footer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <div className="font-display text-4xl sm:text-5xl leading-tight tracking-tight">
              {PROFILE.name}
              <span className="text-[#94A3B8]">
                {" "}
                — {PROFILE.subrole}.
              </span>
            </div>
            <p className="mt-4 text-[#CBD5E1] max-w-md">
              Currently Digital Marketing Executive at SM Solutions. Open to
              full-time roles across SEO, growth and performance marketing.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="btn-ghost"
                data-testid="footer-email"
              >
                <Mail size={14} /> {PROFILE.email}
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
                data-testid="footer-linkedin"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="label mb-4">Quick Links</div>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[#CBD5E1] hover:text-white transition-colors text-sm"
                    data-testid={`footer-link-${l.label.toLowerCase()}`}
                  >
                    → {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="label mb-4">Meta</div>
            <div className="text-sm text-[#CBD5E1] space-y-2">
              <div>Portfolio v1.0</div>
              <div>Handbuilt · Dark aesthetic</div>
              <div>India</div>
            </div>
            <a
              href="#top"
              className="mt-6 btn-ghost"
              data-testid="footer-back-to-top"
            >
              <ArrowUp size={14} /> Back to top
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs text-[#94A3B8]">
          <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <div className="font-serif-i">
            Designed with intent · Built for hiring managers
          </div>
        </div>
      </div>
    </footer>
  );
}
