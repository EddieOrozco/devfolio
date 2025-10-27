"use client";
import Image from 'next/image';

export default function About() {

  return (
    <section id="about" className="relative px-4 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-teal-50 pt-20 pb-20">
    {/* subtle background shapes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-cyan-50 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-teal-50 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #0ea5e9 2px, transparent 2px), radial-gradient(circle at 70% 60%, #14b8a6 2px, transparent 2px)",
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0, 30px 30px",
        }} />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-10 w-80 h-80 rounded-full bg-sky-50 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-teal-50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-teal-400" />
            <span className="text-teal-600 font-mono text-xs tracking-[0.3em] uppercase">Get To Know Me</span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-teal-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">About Me</h2>
          <p className="mt-3 text-slate-700 max-w-2xl mx-auto">
            Passionate developer focused on building exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* left: Image */}
          <div className="grid place-items-center order-2 lg:order-1">
              <Image
                src="/assets/images/aboutImg.webp"
                alt="Eddie - Web Developer"
                width={300}
                height={200}
                priority
                className="object-cover"
              />
          </div>

          {/* right: copy + values */}
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-slate-900">Passionate Developer & Problem Solver</h3>
            <div>
              <p className="text-lg mb-4 text-slate-700 leading-relaxed">I’m a Front-End Developer passionate about crafting clean, responsive, and user-friendly websites. I work with modern tools like HTML, CSS, JavaScript, React, Next.js, and Tailwind to create smooth, engaging interfaces. I’ve also worked with enterprise CMS platforms like Sitecore and COD10, collaborating with content teams to build accessible, high-quality web pages. I love exploring new design ideas, integrating AI tools to streamline my workflow, and bringing wireframes to life with precision and creativity. When I’m not coding, you’ll probably find me on the water fishing or experimenting with new front-end projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}