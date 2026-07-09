// src/components/Skills.js

import Image from "next/image";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: "/assets/images/html-5.webp" },
    { name: "CSS3", icon: "/assets/images/css3.webp" },
    { name: "JavaScript", icon: "/assets/images/javascript.webp" },
    { name: "Figma", icon: "/assets/images/figma.webp" },
    { name: "Sitecore", icon: "/assets/images/sitecore.webp" },
    { name: "WordPress", icon: "/assets/images/wp.webp" },
    { name: "Shopify", icon: "/assets/images/shopify.webp" },
    { name: "Git", icon: "/assets/images/Git.webp" },
    { name: "Google Analytics", icon: "/assets/images/google-analytics.webp" },
    { name: "Klaviyo", icon: "/assets/images/klaviyo.webp" },
    { name: "HTML Email", icon: "/assets/images/mjml.webp" },
    { name: "HubSpot", icon: "/assets/images/hubspot-logo.webp" },
    // { name: "Litmus", icon: "/assets/images/litmus-logo.webp" },
  ];

  return (
    <section id="skills" className="relative scroll-mt-24 overflow-hidden bg-white py-24">

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
              Tech Arsenal
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-teal-400" />
          </div> */}
          <h2 className="font-serif text-4xl font-bold text-slate-900 md:text-5xl">
            Skills &amp; Technologies
          </h2>
        </div>

        {/* Skills grid */}
        <div
          className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 md:grid-cols-3 lg:grid-cols-4"
          style={{ gap: "1px", background: "var(--color-border-tertiary, #e5e7eb)" }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-3 bg-white px-4 py-7 transition-colors duration-150 hover:bg-slate-50"
            >
              <div className="flex h-14 w-14 items-center justify-center">
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <span className="text-center text-sm font-medium text-slate-800">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}