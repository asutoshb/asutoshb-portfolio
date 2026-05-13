import { Briefcase } from "lucide-react";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-x">
        <div className="reveal">
          <span className="pill">02 — Experience</span>
          <h2 className="heading-lg mt-4">
            A timeline of <span className="text-grad">shipping & learning.</span>
          </h2>
        </div>

        <div className="relative mt-14">
          {/* vertical line */}
          <div className="pointer-events-none absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-cyan/40 to-transparent md:left-1/2" />

          <ol className="space-y-12">
            {experience.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <li key={e.company + e.period} className="relative reveal">
                  {/* node */}
                  <div className="absolute left-4 top-2 -translate-x-1/2 md:left-1/2">
                    <span className="block h-3 w-3 rounded-full bg-accent shadow-[0_0_18px_4px_rgba(167,139,250,0.45)]" />
                  </div>

                  <div
                    className={`md:grid md:grid-cols-2 md:gap-12 ${
                      left ? "" : "md:[&>*:first-child]:col-start-2"
                    }`}
                  >
                    <div className={`pl-10 md:pl-0 ${left ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                      <div className="card">
                        <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-ink-dim">
                          <Briefcase size={12} className="text-accent" />
                          {e.period}
                          {e.location && <span>· {e.location}</span>}
                        </div>
                        <h3 className="heading-md">
                          {e.role} <span className="text-grad">@ {e.company}</span>
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm text-ink-muted md:text-[0.95rem]">
                          {e.bullets.map((b, j) => (
                            <li key={j} className="flex gap-2">
                              <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        {e.tags && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {e.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-ink-muted"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
