// src/components/Footer.js

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const social = [
    { name: "GitHub", href: "https://github.com/EddieOrozco", icon: "github" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/eduardoorozco23/", icon: "linkedin" },
    { name: "Email", href: "mailto:eddieorozco231@gmail.com", icon: "email" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/#skills" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
  ];

  const Icon = ({ name }) => {
    switch (name) {
      case "github":
        return (
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234C5.662 21.302 4.967 19.16 4.967 19.16c-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.947 21.798 24 17.301 24 12 24 5.373 18.627 0 12 0z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
          </svg>
        );
      case "email":
        return (
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-slate-200/60 bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-0">

        {/* Top row */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between pb-12">

          {/* Brand */}
          <div className="max-w-xs space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-9 w-32 overflow-hidden">
                <Image
                  src="/assets/images/logo-main.png"
                  alt="Eddie Orozco logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            <p className="text-sm text-slate-500 leading-relaxed">
              Turning ideas into websites and digital experiences that people enjoy using.
            </p>

            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                Connect
              </p>
              <div className="flex gap-2">
                {social.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.name}
                    title={s.name}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-teal-500 hover:text-teal-600"
                  >
                    <Icon name={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Nav + Availability */}
          <div className="flex flex-col gap-10 md:flex-row md:gap-16">

            {/* Navigation */}
            <div>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                Navigation
              </p>
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block py-1 text-sm text-slate-500 transition hover:text-teal-600"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Availability */}
            <div className="max-w-[220px] space-y-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                Availability
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Open to opportunities in Front-end development and CMS management.
              </p>
              <a
                href="mailto:eddieorozco231@gmail.com"
                className="inline-flex items-center gap-1.5 rounded-lg bg-teal-600 px-4 py-2.5 text-xs font-medium uppercase tracking-wide text-white shadow-md shadow-teal-600/20 transition hover:bg-teal-700"
              >
                Let&apos;s Work Together
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </a>
            </div>

          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 py-5 text-xs text-slate-400 sm:flex-row">
          <span>© {currentYear} Eddie Orozco. All rights reserved.</span>
          <Link
            href="/#home"
            aria-label="Back to top"
            className="inline-flex items-center gap-1 transition hover:text-teal-600"
          >
            Back to top
            <span>↑</span>
          </Link>
        </div>

      </div>
    </footer>
  );
}