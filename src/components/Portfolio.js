import Image from "next/image";

export default function Portfolio() {
  const projects = [
    { id: 1, title: "Sullivan Beauty", description: "Full Website Redesign", image: "/assets/images/sullivan.webp", technologies: ["HTML", "SCSS", "JavaScript"], liveUrl: "https://www.sullivanbeauty.com/", githubUrl: "#", featured: true},
    { id: 2, title: "Advocate Health Care", description: "CMS Component Based Website", image: "/assets/images/aah.webp", technologies: ["CMS", "COD10", "Sitecore"], liveUrl: "https://www.advocatehealth.com/", githubUrl: "#", featured: true},
    { id: 3, title: "Salon Services Pro", description: "Full Website Redesign", image: "/assets/images/ssp.webp", technologies: ["HTML", "CSS"], liveUrl: "https://www.salonservicespro.com/", githubUrl: "#", featured: true},
    { id: 4, title: "The Donut Shop", description: "Free Lance Work", image: "/assets/images/dds.webp", technologies: ["HTML", "CSS"], liveUrl: "https://www.thedonutshop.shop", githubUrl: "#", featured: true},
    { id: 5, title: "ebeauty", description: "Full Website Redesign", image: "/assets/images/eb.webp", technologies: ["HTML", "CSS", "JavaScript"], liveUrl: "https://www.ebeautyprofessional.com/", githubUrl: "#", featured: true},
    { id: 6, title: "A-baits & Tackle", description: "Free Lance Work", image: "/assets/images/a-baits.webp", technologies: ["React", "Next.js", "Tailwind"], liveUrl: "https://abaitsandtackle.com/", githubUrl: "#", featured: true},
    
  ];

  return (
    <section id="portfolio" className="relative px-4 overflow-hidden bg-white pt-20 lg:pb-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-700 font-mono text-xs tracking-[0.3em] uppercase">Selected Works</span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">My Projects</h2>
          <p className="mt-3 text-slate-700 max-w-3xl mx-auto">
            A selection of projects and redesigns across multiple industries.
          </p>
        </div>

        {/* 3x3 Grid for Featured Projects */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter((p) => p.featured).map((project, index) => {
              return (
                <article key={project.id} className="col-span-1">
                  <div className="group relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="relative h-64 md:h-80">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                                            
                       {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-white/80 text-sm mb-4">{project.description}</p>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title} (new tab)`}
                          className="inline-flex items-center text-white bg-cyan-500 px-4 py-2 rounded-lg w-fit hover:bg-cyan-600 transition-colors"
                        >
                           <span>View Project</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}