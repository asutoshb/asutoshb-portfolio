import { useEffect, useState } from "react";
import { profile } from "../data/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-bg/70 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a
          href="#home"
          className="group flex items-center gap-2 font-display text-lg font-bold"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-cyan text-bg">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name.split(" ")[0]}</span>
          <span className="hidden sm:inline text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-ink-muted transition hover:text-ink hover:bg-white/[0.05]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex btn-primary">
          Let's talk
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 md:hidden"
        >
          <span className="block h-0.5 w-5 bg-ink relative">
            <span
              className={`absolute inset-0 transition-transform ${
                open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              } bg-ink`}
            />
            <span
              className={`absolute inset-0 transition-transform ${
                open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
              } bg-ink`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-bg/95 backdrop-blur-xl">
          <ul className="container-x flex flex-col gap-1 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-lg px-4 py-3 text-sm text-ink-muted hover:bg-white/[0.05] hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={() => setOpen(false)}
                href="#contact"
                className="btn-primary mt-2 w-full justify-center"
              >
                Let's talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
