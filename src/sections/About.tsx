import { Code2, Coffee, Globe2, Trophy } from "lucide-react";
import { profile } from "../data/content";

const stats = [
  { icon: Code2, label: "Years building software", value: "4+" },
  { icon: Trophy, label: "Production releases shipped", value: "50+" },
  { icon: Globe2, label: "Users impacted", value: "1M+" },
  { icon: Coffee, label: "Cups of chai", value: "∞" },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-x">
        <div className="reveal">
          <span className="pill">01 — About</span>
          <h2 className="heading-lg mt-4">
            Building things on the web, <span className="text-grad">with intent.</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-7 space-y-5">
            {profile.about.map((p, i) => (
              <p key={i} className="reveal text-base leading-relaxed text-ink-muted md:text-lg">
                {p}
              </p>
            ))}

            <div className="reveal pt-2">
              <p className="text-sm uppercase tracking-widest text-ink-dim">
                Outside the editor
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {profile.hobbies.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-ink-muted"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="reveal grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="card group">
                  <Icon className="mb-3 text-accent" size={22} />
                  <div className="font-display text-3xl font-bold text-grad">{value}</div>
                  <div className="mt-1 text-xs text-ink-muted">{label}</div>
                </div>
              ))}
            </div>

            <div className="reveal card mt-4 border-accent/20">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Currently
              </p>
              <p className="mt-2 text-ink leading-relaxed">
                SDE 2 @ <span className="text-grad font-semibold">Tessell</span> — building an
                AI-powered blog publishing pipeline as an MCP server that reads GitHub commit
                history, writes SEO-optimised posts in the company's brand voice, and
                auto-publishes to Sanity CMS and Hashnode — reducing manual blog production
                from days to minutes.
              </p>
              <p className="mt-3 font-mono text-[11px] text-ink-dim">
                Tech stack: React.js · TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
