// src/components/Hero.js

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-white pt-28 pb-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row md:items-center md:justify-between">
        
        {/* LEFT: Text */}
        <div className="w-full space-y-6 md:w-1/2">
          
          {/* Small top line */}
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Front-End Developer & CMS Specialist
          </p>

          {/* Big title */}
          <div className="leading-[0.95]">
            <h1 className="text-5xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-6xl">
              FRONT-END
            </h1>
            <h1 className="text-5xl font-extrabold uppercase tracking-tight text-teal-600 sm:text-6xl">
              DEVELOPER
            </h1>
          </div>

          {/* Supporting paragraph */}
          <p className="max-w-lg text-base text-slate-700 sm:text-lg">
            I build clean, responsive interfaces with HTML, CSS, and JavaScript, and work within CMS platforms like Sitecore and Crownpeak to create structured landing pages, manage content updates, and optimize page flow for clarity and performance.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-teal-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-teal-600/30 transition hover:bg-teal-700"
            >
              View My Projects
            </a>

            {/* <a
              href="#cms"
              className="inline-flex items-center justify-center rounded-full border border-slate-900 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
            >
              View CMS Work
            </a> */}
          </div>
        </div>

        {/* RIGHT: Image + subtle teal blocks */}
        <div className="w-full md:w-1/2">
          <div className="relative mx-auto max-w-sm">
            
            {/* Background teal blocks */}
            <div className="absolute -top-12 right-0 h-36 w-72 rounded-3xl bg-teal-200" />
            <div className="absolute top-20 right-12 h-28 w-64 rounded-3xl bg-teal-500/30" />

            {/* Photo */}
            <div className="relative mx-auto mt-6 h-72 w-72 overflow-hidden rounded-3xl border-4 border-white bg-slate-200 shadow-2xl shadow-slate-900/15">
              <Image
                src="/assets/images/hero-image-main.webp"
                alt="Eddie - Front-End Developer & CMS Specialist"
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