"use client";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: "/assets/images/html-5.webp" },
    { name: "CSS3", icon: "/assets/images/css3.webp" },
    { name: "JavaScript", icon: "/assets/images/javascript.webp" },
    { name: "Next.js", icon: "/assets/images/nextjs.webp" },
    { name: "Responsive", icon: "/assets/images/responsive.webp" },
    { name: "UI/UX", icon: "/assets/images/ui-ux.webp" },
    { name: "Shopify", icon: "/assets/images/shopify.webp"},
    { name: "Bootstrap", icon: "/assets/images/bootstrap.webp"},
    { name: "Tailwind", icon: "/assets/images/tailwindcss.webp" },
    { name: "Git", icon: "/assets/images/Git.webp" },
    { name: "Figma", icon: "/assets/images/figma.webp" },
    { name: "Sitecore", icon: "/assets/images/sitecore.webp" },
  ];

  const badge = {
    Frontend: "from-orange-300 to-red-400",
    Framework: "from-blue-300 to-indigo-400",
    Design: "from-purple-300 to-pink-400",
    Platform: "from-emerald-300 to-teal-400",
    Tools: "from-yellow-300 to-orange-400",
  };

  const defaultBadge = "from-slate-200 to-slate-300";

  return (
    <section id="skills" className="relative px-4 overflow-hidden bg-slate-50 pt-20 pb-20">
    
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-700 font-mono text-xs tracking-[0.3em] uppercase">Tech Arsenal</span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Skills & Technologies</h2>
          <p className="mt-3 text-slate-700 max-w-2xl mx-auto">
            A toolkit I use to deliver clean, accessible, and performant UIs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skills.map((skill, i) => (
            <div key={skill.name} className="group relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-slate-200 to-white blur opacity-0 group-hover:opacity-100 transition" />
              <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="absolute top-3 right-3">
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={skill.icon} alt={`${skill.name} icon`} className="w-16 h-16 object-contain" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
