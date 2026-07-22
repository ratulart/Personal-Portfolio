import { useState } from "react";
import { PROFILE } from "../../data/portfolio";
import { Reveal } from "./Reveal";
import { Mail, Phone, Linkedin, ArrowUpRight, Send } from "lucide-react";
import { toast, Toaster } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill your name, email and message.");
      return;
    }
    const subject = encodeURIComponent(
      form.subject || `New enquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      `Hi Ratul,\n\n${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 border-t border-white/[0.06]"
      data-testid="contact-section"
    >
      <Toaster
        theme="dark"
        position="top-center"
        toastOptions={{
          style: {
            background: "#273449",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#F8FAFC",
          },
        }}
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="section-num">/ 08</span>
            <span className="label">Contact</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-tight">
              Let's build{" "}
              <span className="font-serif-i text-[#CBD5E1]">something</span>{" "}
              measurable.
            </h2>
            <p className="mt-6 text-[#CBD5E1] leading-relaxed max-w-md">
              I'm open to full-time SEO, digital marketing and performance
              marketing roles. Have a brief or a role in mind? Send a note.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="pcard p-5 flex items-center gap-4 group"
                data-testid="contact-email-card"
              >
                <span className="w-10 h-10 rounded-full grid place-items-center bg-[#3B82F6]/15 text-[#3B82F6]">
                  <Mail size={16} />
                </span>
                <div className="flex-1">
                  <div className="label">Email</div>
                  <div className="text-white">{PROFILE.email}</div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[#94A3B8] group-hover:text-white transition-colors"
                />
              </a>
              <a
                href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
                className="pcard p-5 flex items-center gap-4 group"
                data-testid="contact-phone-card"
              >
                <span className="w-10 h-10 rounded-full grid place-items-center bg-[#06B6D4]/15 text-[#06B6D4]">
                  <Phone size={16} />
                </span>
                <div className="flex-1">
                  <div className="label">Phone</div>
                  <div className="text-white">{PROFILE.phone}</div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[#94A3B8] group-hover:text-white transition-colors"
                />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="pcard p-5 flex items-center gap-4 group"
                data-testid="contact-linkedin-card"
              >
                <span className="w-10 h-10 rounded-full grid place-items-center bg-[#8B5CF6]/15 text-[#8B5CF6]">
                  <Linkedin size={16} />
                </span>
                <div className="flex-1">
                  <div className="label">LinkedIn</div>
                  <div className="text-white">
                    /in/ratulbiswas-seo-specialist
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[#94A3B8] group-hover:text-white transition-colors"
                />
              </a>
            </div>

            {/* Map placeholder */}
            <div className="mt-10 pcard p-0 overflow-hidden aspect-[16/9]">
              <iframe
                title="India map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale opacity-70"
                src="https://www.google.com/maps?q=India&output=embed"
                data-testid="contact-map"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="pcard p-8 sm:p-10"
              data-testid="contact-form"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="label block mb-2">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border border-white/[0.08] focus:border-[#3B82F6] rounded-md px-4 py-3 text-white outline-none transition-colors"
                    placeholder="Jane Recruiter"
                    data-testid="contact-input-name"
                  />
                </div>
                <div>
                  <label className="label block mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border border-white/[0.08] focus:border-[#3B82F6] rounded-md px-4 py-3 text-white outline-none transition-colors"
                    placeholder="you@company.com"
                    data-testid="contact-input-email"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="label block mb-2">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-transparent border border-white/[0.08] focus:border-[#3B82F6] rounded-md px-4 py-3 text-white outline-none transition-colors"
                  placeholder="SEO Specialist role at ..."
                  data-testid="contact-input-subject"
                />
              </div>
              <div className="mt-5">
                <label className="label block mb-2">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border border-white/[0.08] focus:border-[#3B82F6] rounded-md px-4 py-3 text-white outline-none transition-colors resize-none"
                  placeholder="Tell me about the role, team, and what you're looking to solve…"
                  data-testid="contact-input-message"
                />
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
                <p className="text-xs text-[#94A3B8] max-w-xs">
                  Submitting opens your email client to send the message
                  directly to {PROFILE.email}.
                </p>
                <button
                  type="submit"
                  className="btn-primary"
                  data-testid="contact-submit-button"
                >
                  <Send size={14} /> Send message
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
