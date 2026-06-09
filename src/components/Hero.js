// src/components/Hero.js

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-48 lg:pb-40"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border-tertiary, #e5e7eb) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-tertiary, #e5e7eb) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Fade out grid at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />

      {/* Teal accent line at top */}
      <div className="absolute top-0 left-6 right-6 h-[2px] rounded-b-sm bg-gradient-to-r from-teal-400 via-teal-600 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row md:items-center md:justify-between">

        {/* LEFT: Text */}
        <div className="w-full space-y-6 md:w-1/2">

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              <span className="text-teal-500 text-lg">·</span> Web Development{" "}
              <span className="text-teal-500 text-lg">·</span> CMS Management{" "}
              <span className="text-teal-500 text-lg">·</span> AI-Enhanced Solutions
            </p>
          </div>

          {/* Title */}
          <div className="leading-[1.05]">
            <h1 className="font-serif text-4xl font-bold text-slate-900 lg:text-6xl">
              Hi, I'm Eddie
            </h1>
            <h1 className="font-serif text-4xl font-bold text-teal-600 lg:text-6xl">
              Web Developer & CMS Specialist
            </h1>
          </div>

          {/* Description */}
          <p className="max-w-lg text-sm text-slate-500 sm:text-base leading-relaxed">
            Developing responsive websites, managing CMS platforms, and delivering AI-enhanced solutions that improve user experiences.
          </p>

          {/* CTA */}
          <div className="pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-medium text-white shadow-md shadow-teal-600/30 transition hover:bg-teal-700"
            >
              View My Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* RIGHT: Photo */}
        <div className="w-full md:w-1/2">
          <div className="relative mx-auto max-w-sm">

            {/* Teal decorative blocks */}
            <div className="absolute -top-4 right-0 h-28 w-28 rounded-xl bg-teal-100" />
            <div className="absolute bottom-[-12px] left-[-12px] h-20 w-20 rounded-xl bg-teal-300/40" />

            {/* Photo */}
            <div className="relative mx-auto mt-6 h-72 w-72 overflow-hidden rounded-2xl border border-slate-100 bg-slate-200 shadow-2xl shadow-slate-900/15 z-10">
              <Image
                src="/assets/images/hero-image-main.webp"
                alt="Eddie - Front-End Developer & Marketer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}