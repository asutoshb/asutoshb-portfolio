import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { profile } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-bg-soft/60">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-ink-muted">
          © {year} {profile.name}. Crafted with React, R3F & GSAP.
        </p>
        <div className="flex items-center gap-3 text-ink-muted">
          <a aria-label="GitHub" href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-accent">
            <FaGithub size={18} />
          </a>
          <a aria-label="LinkedIn" href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
            <FaLinkedinIn size={18} />
          </a>
          <a aria-label="Twitter" href={profile.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-accent">
            <FaTwitter size={18} />
          </a>
          <a aria-label="Hashnode" href={profile.socials.hashnode} target="_blank" rel="noreferrer" className="hover:text-accent">
            <SiHashnode size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
