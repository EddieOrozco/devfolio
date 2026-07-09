// src/components/About.js

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden bg-white py-24">

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border-tertiary, #e5e7eb) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-tertiary, #e5e7eb) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Fade top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          {/* <div className="mb-3 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-teal-400" />
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-teal-600">
              Get To Know Me
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-teal-400" />
          </div> */}
          <h2 className="font-serif text-4xl font-bold text-slate-900 md:text-5xl">
            About Me
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid gap-12 md:grid-cols-[300px_1fr] md:items-start">

          {/* LEFT: Photo */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-xl bg-teal-100 z-0" />
            <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-xl bg-teal-300/40 z-0" />
            <div className="relative z-10 mx-auto h-[340px] w-[280px] overflow-hidden rounded-2xl border border-slate-100 shadow-2xl shadow-slate-900/10">
              <Image
                // src="/assets/images/aboutImg.webp"
                src="/assets/images/about-img.webp"
                alt="Eddie Orozco - Front-End Developer & CMS Specialist"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT: Copy */}
          <div className="flex flex-col gap-4">

            {/* Intro statement */}
            <p className="font-serif text-2xl text-slate-900 leading-snug pb-6 border-b border-slate-100">
              I keep content moving, and I never stop learning.
            </p>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
             As a CMS Specialist with a background in front-end development, I manage enterprise web content, publishing workflows, and page lifecycle updates across large-scale CMS platforms. I work closely with stakeholders, designers, and developers to deliver accurate, organized digital experiences.
           </p>
           <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
             My experience spans website redesigns in the beauty industry and enterprise healthcare content operations, including large-scale CMS migrations and ongoing content governance. Alongside my CMS work, I've expanded my skills into HTML email development, Klaviyo, and AI-assisted workflows that improve efficiency and streamline production.
           </p>


            {/* Tagline */}
            {/* <div className="my-1 rounded-r-lg border-l-2 border-teal-500 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-800">
              Clean UI. Strong UX. Thoughtful execution.
            </div>

            <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
              Outside of development, you'll usually find me fishing, traveling, or working on new ideas and side projects.
            </p> */}

          </div>
        </div>
      </div>
    </section>
  );
}