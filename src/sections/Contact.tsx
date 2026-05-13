import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      {/* glow */}
      <div className="glow-orb h-[360px] w-[360px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-glow/30" />

      <div className="container-x">
        <div className="reveal text-center">
          <span className="pill mx-auto">05 — Contact</span>
          <h2 className="heading-lg mt-4">
            Let's build something <span className="text-grad">remarkable.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Have a role in mind, a product to launch, or just want to chat about engineering?
            My inbox is open.
          </p>
        </div>

        <div className="reveal mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="card flex flex-col items-start gap-3 transition hover:-translate-y-1 hover:border-accent/40"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-ink-dim">Email</p>
              <p className="mt-1 text-sm text-ink break-all">{profile.email}</p>
            </div>
          </a>

          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card flex flex-col items-start gap-3 transition hover:-translate-y-1 hover:border-accent/40"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent-cyan/10 text-accent-cyan">
              <FaLinkedinIn size={16} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-ink-dim">LinkedIn</p>
              <p className="mt-1 text-sm text-ink">/in/asutosh-behera</p>
            </div>
          </a>

          <div className="card flex flex-col items-start gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent-pink/10 text-accent-pink">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-ink-dim">Location</p>
              <p className="mt-1 text-sm text-ink">{profile.location}</p>
            </div>
          </div>
        </div>

        <div className="reveal mt-10 flex flex-col items-center gap-5">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <Send size={16} /> Send me an email
          </a>

          <div className="flex items-center gap-3 text-ink-muted">
            <a aria-label="GitHub" href={profile.socials.github} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/[0.05] hover:text-ink">
              <FaGithub />
            </a>
            <a aria-label="Twitter" href={profile.socials.twitter} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/[0.05] hover:text-ink">
              <FaTwitter />
            </a>
            <a aria-label="Hashnode" href={profile.socials.hashnode} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/[0.05] hover:text-ink">
              <SiHashnode />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
