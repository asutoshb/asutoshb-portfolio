import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ArrowDown, Sparkles } from "lucide-react";
import HeroScene from "../components/three/HeroScene";
import { profile } from "../data/content";

const ROLES = ["Software Engineer", "Full-Stack Developer", "AI Tinkerer", "Problem Solver"];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[i % ROLES.length];
    const speed = deleting ? 45 : 80;
    const t = setTimeout(() => {
      const next = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
      setText(next);
      if (!deleting && next === word) setTimeout(() => setDeleting(true), 1200);
      else if (deleting && next === "") {
        setDeleting(false);
        setI((v) => v + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="text-grad">
      {text}
      <span className="ml-1 inline-block w-[2px] h-7 align-middle bg-accent animate-pulse" />
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden pt-24 md:pt-0"
    >
      {/* glow orbs */}
      <div className="glow-orb h-[420px] w-[420px] -top-24 -left-24 bg-accent-glow/40" />
      <div className="glow-orb h-[360px] w-[360px] bottom-0 right-0 bg-accent-cyan/30" />

      {/* faint grid */}
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />

      <div className="container-x relative grid min-h-[100svh] grid-cols-1 items-center gap-10 py-10 md:grid-cols-12 md:py-0">
        {/* text column */}
        <div className="md:col-span-7">
          <div className="reveal flex items-center gap-2">
            <span className="pill">
              <Sparkles size={12} className="text-accent-cyan" />
              Available for new opportunities
            </span>
          </div>

          <h1 className="reveal heading-xl mt-6 leading-[1.05]">
            Hi, I'm <span className="text-grad">{profile.name.split(" ")[0]}</span>.
            <br />
            A <Typewriter />
          </h1>

          <p className="reveal mt-6 max-w-xl text-base text-ink-muted md:text-lg">
            {profile.tagline} Currently building AI-powered platforms at{" "}
            <span className="text-ink">Tessell</span>.
          </p>

          <div className="reveal mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View my work
              <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </div>

          <div className="reveal mt-8 flex items-center gap-4 text-ink-muted">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:bg-white/[0.05] hover:text-ink"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:bg-white/[0.05] hover:text-ink"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <span className="text-xs text-ink-dim">{profile.location}</span>
          </div>
        </div>

        {/* 3D column */}
        <div className="relative h-[380px] w-full md:col-span-5 md:h-[520px]">
          <div className="absolute inset-0">
            <HeroScene />
          </div>
          {/* floating tags */}
          <div className="pointer-events-none absolute left-2 top-6 hidden md:block">
            <span className="pill bg-bg/60">React · TypeScript</span>
          </div>
          <div className="pointer-events-none absolute bottom-6 right-2 hidden md:block">
            <span className="pill bg-bg/60">Three.js · GSAP</span>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-ink-dim">
        <div className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-widest">
          Scroll
          <span className="block h-6 w-[1px] bg-gradient-to-b from-accent to-transparent" />
        </div>
      </div>
    </section>
  );
}
