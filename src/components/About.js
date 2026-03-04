// src/components/About.js

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 mb-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-teal-400" />
            <span className="text-teal-600 text-xs tracking-[0.3em] uppercase">Get To Know Me</span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-teal-400" />
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            About Me
          </h2>
          {/* <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Front-End developer focused on building exceptional digital experiences.
          </p> */}
        </div>

        {/* Content grid */}
        <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center">
          
          {/* LEFT: Image Only */}
          <div className="relative">
            
            {/* Soft background accent */}
            <div className="absolute -top-6 -left-6 h-40 w-40 rounded-3xl bg-teal-100 blur-2xl opacity-60" />

            <div className="relative mx-auto w-[320px] h-[380px] overflow-hidden rounded-3xl border border-slate-100 shadow-2xl shadow-slate-900/10">
              <Image
                src="/assets/images/aboutImg.webp"
                alt="Eddie Orozco - Front-End Developer & CMS Specialist"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT: Copy */}
          <div className="space-y-5 text-sm leading-relaxed text-slate-700 sm:text-base">

            <p>
              I build digital experiences that help brands stand out.
            </p>

            <p>
              With a background in front-end development and enterprise CMS platforms like Sitecore and Crownpeak, I specialize in turning creative direction into responsive, scalable websites. I focus on translating design systems into structured, component-driven pages that are easy to manage and built to perform.
            </p>

            <p>
              Alongside my enterprise CMS work, I actively build and experiment with WordPress and Shopify projects to continue expanding my expertise across modern content platforms.
            </p>

            <p>
              I work closely with designers, marketers, and content teams to launch campaign pages, improve performance, and create flexible systems that make ongoing updates simple.
            </p>

            <p className="font-medium text-slate-900">
              Clean UI. Strong UX. Thoughtful execution.
            </p>

            <p>
              Outside of development, you&apos;ll usually find me fishing, traveling, or exploring new ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}