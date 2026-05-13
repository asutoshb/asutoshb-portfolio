import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="container-x">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="pill">03 — Projects</span>
            <h2 className="heading-lg mt-4">
              Things I've <span className="text-grad">designed & built.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-ink-muted">
            A selection of side-projects and clones I built while learning new stacks. Each one taught me something different.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="reveal h-full">
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
