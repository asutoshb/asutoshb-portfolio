import { GraduationCap, Trophy, Award } from "lucide-react";
import { GiCricketBat } from "react-icons/gi";
import { achievements, education } from "../data/content";

const iconMap = {
  trophy: Trophy,
  cricket: GiCricketBat,
  award: Award,
} as const;

export default function Education() {
  return (
    <section id="education" className="section-pad relative">
      <div className="container-x">
        <div className="reveal">
          <span className="pill">03 — Education & Beyond</span>
          <h2 className="heading-lg mt-4">
            Where I learned the craft —{" "}
            <span className="text-grad">and won a few trophies.</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Education timeline */}
          <div className="md:col-span-7">
            <p className="mb-6 text-xs uppercase tracking-widest text-ink-dim">
              Education
            </p>
            <ol className="relative space-y-6 border-l border-white/10 pl-6">
              {education.map((e) => (
                <li key={`${e.school}-${e.period}`} className="reveal relative">
                  <span className="absolute -left-[33px] top-1 grid h-6 w-6 place-items-center rounded-full border border-accent/40 bg-bg">
                    <GraduationCap size={12} className="text-accent" />
                  </span>
                  <div className="card">
                    <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-ink-dim">
                      {e.period}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {e.course}
                    </h3>
                    <p className="mt-1 text-sm text-ink-muted">{e.school}</p>
                    {e.notes && (
                      <ul className="mt-3 space-y-1.5 text-sm text-ink-muted">
                        {e.notes.map((n, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span>{n}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Achievements / extracurricular */}
          <div className="md:col-span-5">
            <p className="mb-6 text-xs uppercase tracking-widest text-ink-dim">
              Extracurricular & Achievements
            </p>
            <div className="space-y-4">
              {achievements.map((a) => {
                const Icon = iconMap[a.icon];
                return (
                  <div key={a.title} className="reveal card border-accent/20">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent">
                        <Icon size={18} />
                      </span>
                      <h3 className="font-display text-base font-semibold text-ink">
                        {a.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {a.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
