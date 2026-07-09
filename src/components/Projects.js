// src/components/Portfolio.js

import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Advocate Health Care",
      description: "Enterprise CMS",
      image: "/assets/images/aah.webp",
      technologies: ["Crownpeak", "Sitecore","Content Management","Web Publishing"],
      liveUrl: "https://www.advocatehealth.com/",
      liveUrl2: "/projects/advocate-health-care",
      category: "Professional Experience · CMS Specialist",
    },
    {
      id: 2,
      title: "Sullivan Beauty",
      description: "Front-End Development",
      image: "/assets/images/sullivan.webp",
      technologies: ["CMS", "HTML", "SCSS", "JavaScript","Web Publishing"],
      liveUrl: "https://www.sullivanbeauty.com/",
      liveUrl2: "/projects/sullivan-beauty",
      category: "Professional Experience · Front-End Developer ",
    },
    {
      id: 3,
      title: "Campco Outdoors",
      description: "Promotional HTML Email",
      image: "/assets/images/campco-icon.png",
      technologies: ["HTML", "MJML", "Design", "Responsive"],
      liveUrl: "https://campco-outdoors-promo.vercel.app/",
      // liveUrl2: "/projects/rnl-studio",
      category: "Promo HTML Email · AI Visual Creation",
    },
    {
      id: 4,
      title: "Morning Sip Café",
      description: "Promotional HTML Email",
      image: "/assets/images/cafe.jpg",
      technologies: ["MJML", "HTML","Design", "Responsive"],
      liveUrl: "https://morning-sip-cafe-promo.vercel.app/",
      // liveUrl2: "/projects/campco",
      category: "Promo HTML Email · AI Visual Creation",
    },
    // {
    //   id: 6,
    //   title: "R&L Studio",
    //   description: "Digital Studio Website",
    //   image: "/assets/images/rnlstudio.webp",
    //   technologies: ["WordPress", "HubSpot"],
    //   liveUrl: "https://risenlaunchstudio.com/",
    //   liveUrl2: "/projects/rnl-studio",
    //   category: "WordPress · HubSpot · Front-End",
    // },
    // {
    //   id: 7,
    //   title: "CampCo Outdoors",
    //   description: "Password: password23",
    //   image: "/assets/images/campco-outdoors.webp",
    //   technologies: ["Shopify", "Klaviyo", "HTML Emails"],
    //   liveUrl: "https://campcooutdoors.myshopify.com/",
    //   liveUrl2: "/projects/campco",
    //   category: "Shopify · Klaviyo · Email Marketing",
    // },
    {
      id: 5,
      title: "The Donut Shop",
      description: "Front-End Development",
      image: "/assets/images/dds.webp",
      technologies: ["HTML", "CSS","Design"],
      liveUrl: "https://www.thedonutshop.shop",
      liveUrl2: "/projects/the-donut-shop",
      category: "Freelance · Front-End · Design · Image Optimization",
    },
    {
      id: 6,
      title: "A-Baits & Tackle",
      description: "Front-End Development",
      image: "/assets/images/a-baits.webp",
      technologies: ["HTML","Tailwind", "JavaScript","Design" ],
      liveUrl: "https://abaitsandtackle.com/",
      liveUrl2: "/projects/abaitsandtackle",
      category: "Freelance · Front-End · Design · Image Optimization",
    },
  ];

  return (
    <section id="projects" className="relative scroll-mt-24 overflow-hidden bg-white py-24">

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
              Selected Works
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-teal-400" />
          </div> */}
          <h2 className="font-serif text-4xl font-bold text-slate-900 md:text-5xl">
            My Projects
          </h2>
        </div>

        {/* Projects grid */}
        <div
          className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "1px", background: "var(--color-border-tertiary, #e5e7eb)" }}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-white transition-colors duration-150 hover:bg-slate-50"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-2 p-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-teal-600">
                  {project.category}
                </p>
                <h3 className="font-serif text-lg text-slate-900 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-slate-100 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex items-center gap-4 border-t border-slate-100 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-teal-600 px-4 py-2 text-[11px] font-medium uppercase tracking-wide text-white transition hover:bg-teal-700"
                  >
                    Live Site
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17L17 7M7 7h10v10"/>
                    </svg>
                  </a>
                  {project.liveUrl2 && (
                    <Link
                      href={project.liveUrl2}
                      className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide text-slate-500 transition hover:text-teal-600"
                    >
                      Case Study
                      <span className="text-sm">→</span>
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}