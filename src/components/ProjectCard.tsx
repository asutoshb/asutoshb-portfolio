import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import type { Project } from "../data/content";

export default function ProjectCard({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  // 3D tilt effect
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${
      -y * 8
    }deg) translateZ(0)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  }
  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateY(0) rotateX(0)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative h-full rounded-2xl border border-white/10 bg-bg-card/70 p-6 backdrop-blur-md transition-transform duration-200 will-change-transform"
      style={{
        backgroundImage:
          "radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(167,139,250,0.10), transparent 40%)",
      }}
    >
      {p.highlight && (
        <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-accent to-accent-cyan px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-bg">
          Featured
        </span>
      )}

      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] font-display text-lg text-grad">
        {p.title.charAt(0)}
      </div>

      <h3 className="heading-md text-lg md:text-xl">{p.title}</h3>
      <p className="mt-2 text-sm text-ink-muted">{p.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10.5px] text-ink-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3 text-ink-muted">
        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${p.title} GitHub`}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition hover:bg-white/[0.05] hover:text-ink"
          >
            <FaGithub size={15} />
          </a>
        )}
        {p.blog && (
          <a
            href={p.blog}
            target="_blank"
            rel="noreferrer"
            aria-label={`${p.title} blog`}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition hover:bg-white/[0.05] hover:text-ink"
          >
            <SiHashnode size={15} />
          </a>
        )}
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-cyan"
          >
            Live <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </div>
  );
}
