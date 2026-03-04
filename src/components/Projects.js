import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Advocate Health Care",
      description: "CMS Component-Based Website",
      image: "/assets/images/aah.webp",
      technologies: ["CMS", "Crownpeak", "Sitecore"],
      liveUrl: "https://www.advocatehealth.com/",
      liveUrl2: "/projects/advocate-health-care",
      githubUrl: "#",
      category: "Enterprise CMS",
      featured: false,
    },
    {
      id: 2,
      title: "Sullivan Beauty",
      description: "Full Website Redesign",
      image: "/assets/images/sullivan.webp",
      technologies: ["CMS","HTML", "SCSS", "JavaScript"],
      liveUrl: "https://www.sullivanbeauty.com/",
      liveUrl2: "/projects/sullivan-beauty",
      githubUrl: "#",
      category: "Enterprise CMS",
      featured: false, // 👈 main featured project
    },
    {
      id: 3,
      title: "The Donut Shop",
      description: "Freelance Front-End Build",
      image: "/assets/images/dds.webp",
      technologies: ["HTML", "CSS"],
      liveUrl: "https://www.thedonutshop.shop",
      liveUrl2: "/projects/the-donut-shop",
      githubUrl: "#",
      category: "Front-End",
      featured: false,
    },
    {
      id: 4,
      title: "A-baits & Tackle",
      description: "Freelance Front-End Build",
      image: "/assets/images/a-baits.webp",
      technologies: ["React", "Next.js", "Tailwind"],
      liveUrl: "https://abaitsandtackle.com/",
      liveUrl2: "/projects/abaitsandtackle",
      githubUrl: "#",
      category: "Front-End · E-commerce",
      featured: false,
    },
    {
      id: 5,
      title: "Salon Services Pro",
      description: "Full Website Redesign",
      image: "/assets/images/ssp.webp",
      technologies: ["CMS","HTML", "CSS"],
      liveUrl: "https://www.salonservicespro.com/",
      githubUrl: "#",
      category: "Front-End",
      featured: false,
    },
    
    {
      id: 6,
      title: "ebeauty",
      description: "Full Website Redesign",
      image: "/assets/images/eb.webp",
      technologies: ["CMS","HTML", "CSS", "JavaScript"],
      liveUrl: "https://www.ebeautyprofessional.com/",
      githubUrl: "#",
      category: "Front-End",
      featured: false,
    },
    
  ];

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    // 📝 Consider changing id="portfolio" to id="projects" if your nav links to #projects
    <section id="projects" className="scroll-mt-24 bg-[#f6f9fc] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-teal-400" />
            <span className="text-teal-600 text-xs tracking-[0.3em] uppercase">
              Selected Works
            </span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-teal-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            My Projects
          </h2>
          {/* <p className="mt-3 text-slate-700 max-w-3xl mx-auto">
            A curated mix of front-end builds and CMS-driven websites showcasing
            UI design, enterprise experience, and e-commerce work.
          </p> */}
        </div>

        <div className="space-y-12">
          {/* 🌟 Featured Project */}
          {featuredProject && (
            <article className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-[0_30px_80px_rgba(15,23,42,0.35)] mb-6">
              <div className="grid md:grid-cols-[1.4fr_minmax(0,1fr)] gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-80">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative flex flex-col justify-center gap-4 p-6 md:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-300">
                    Featured · {featuredProject.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    {featuredProject.title}
                  </h3>
                  <p className="text-xs font-medium text-teal-100/90">
                    {featuredProject.description}
                  </p>
                  <p className="text-sm text-slate-100/90">
                    Responsive redesign implemented within an enterprise CMS,
                    focusing on reusable components, modern UI, and improved
                    content flexibility for marketing.
                  </p>

                  {/* Tech tags */}
                  <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-wide text-slate-100/90">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-800/80 px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-teal-500 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-teal-500/40 transition hover:bg-teal-600"
                    >
                      View Live Site
                      <span className="ml-2 text-sm leading-none">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* 🎯 Grid of other projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-64 md:h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-500">
                    {project.category}
                  </p>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="mt-1 flex flex-wrap gap-2 text-[10px] font-medium uppercase tracking-wide text-slate-500">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-4 flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm hover:bg-teal-700 transition"
                    >
                      View Live Site 
                    </a>
                   {project.liveUrl2 && (
                      <a
                        href={project.liveUrl2}
                        className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wide text-slate-700 hover:text-teal-600 transition"
                      >
                        View Case Study <span className="ml-1 text-base font-black">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}