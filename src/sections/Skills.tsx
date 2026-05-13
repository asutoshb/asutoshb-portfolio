import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiElectron,
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { skills } from "../data/content";

const ICONS: Record<string, { I: React.ComponentType<{ size?: number }>; color: string }> = {
  JavaScript: { I: SiJavascript, color: "#f7df1e" },
  TypeScript: { I: SiTypescript, color: "#3178c6" },
  Python: { I: SiPython, color: "#3776ab" },
  HTML: { I: SiHtml5, color: "#e34f26" },
  CSS: { I: SiCss, color: "#2965f1" },
  React: { I: SiReact, color: "#61dafb" },
  "Next.js": { I: SiNextdotjs, color: "#ffffff" },
  "Node.js": { I: SiNodedotjs, color: "#3c873a" },
  Express: { I: SiExpress, color: "#ffffff" },
  Electron: { I: SiElectron, color: "#47848f" },
  Redux: { I: SiRedux, color: "#764abc" },
  MongoDB: { I: SiMongodb, color: "#47a248" },
  PostgreSQL: { I: SiPostgresql, color: "#336791" },
  Firebase: { I: SiFirebase, color: "#ffca28" },
  Git: { I: SiGit, color: "#f05032" },
  GitHub: { I: SiGithub, color: "#ffffff" },
  "VS Code": { I: SiGithub, color: "#007acc" }, // safe fallback icon
  Postman: { I: SiPostman, color: "#ff6c37" },
  Vercel: { I: SiVercel, color: "#ffffff" },
  AWS: { I: FaAws, color: "#ff9900" },
};

function SkillTile({ name }: { name: string }) {
  const ent = ICONS[name];
  return (
    <div className="group relative flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-5 transition hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.05]">
      <div
        className="grid h-10 w-10 place-items-center rounded-lg bg-white/[0.04] transition group-hover:scale-110"
        style={{ color: ent?.color ?? "#a78bfa" }}
      >
        {ent ? <ent.I size={22} /> : <span className="text-sm">{name[0]}</span>}
      </div>
      <span className="text-center text-xs text-ink-muted">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="container-x">
        <div className="reveal">
          <span className="pill">05 — Skills</span>
          <h2 className="heading-lg mt-4">
            My <span className="text-grad">tech stack</span> & toolkit.
          </h2>
        </div>

        <div className="mt-12 space-y-10">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="reveal">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-dim">
                {group}
              </h3>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                {items.map((s) => (
                  <SkillTile key={s} name={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
