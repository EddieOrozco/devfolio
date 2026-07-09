import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sullivan Beauty – Case Study",
  description:
    "Full website redesign for a beauty distributor, focused on modern UI, responsive layouts, and CMS-friendly components.",
};

export default function SullivanBeautyCaseStudy() {
  return (
    <main className="bg-white">
      <section className="scroll-mt-24 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Breadcrumb */}
          <div className="mb-8 text-xs text-slate-400 flex items-center gap-2">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#projects" className="hover:text-teal-600 transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-slate-600">Sullivan Beauty</span>
          </div>

          {/* Title block */}
          <div className="mb-10">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-600">
              Case Study
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Sullivan Beauty – Full Website Redesign for iBeAuthentic
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-500 max-w-2xl leading-relaxed">
              One of several full website redesigns and content management projects I led for iBeAuthentic's portfolio of beauty and salon brands."
            </p>
          </div>

          {/* Meta strip */}
          <div className="mb-10 grid grid-cols-3 divide-x divide-slate-100 border border-slate-100 rounded-xl overflow-hidden bg-slate-50">
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Role</p>
              <p className="text-xs text-slate-700 leading-relaxed">Front-End Development<br />Content Management <br />UI Implementation</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Tech</p>
              <p className="text-xs text-slate-700 leading-relaxed">HTML · SCSS · JavaScript <br /> In-House CMS · Azure</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Type</p>
              <p className="text-xs text-slate-700 leading-relaxed">Website Redesign<br />Multi-Brand Content Management</p>
            </div>
          </div>

          {/* Hero image */}
          <div className="mb-0 overflow-hidden rounded-2xl border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <Image
              src="/assets/images/sullivan.webp"
              alt="Sullivan Beauty website redesign"
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Teal accent divider */}
          <div className="h-[3px] rounded-b-sm bg-gradient-to-r from-teal-400 via-teal-600 to-transparent mb-12" />

          {/* Content */}
          <div className="space-y-12 text-sm md:text-base leading-relaxed text-slate-600">

            {/* Overview + CMS side by side */}
            <div className="grid md:grid-cols-2 gap-0 border border-slate-100 rounded-xl overflow-hidden">
              <div className="p-7 md:border-r border-slate-100">
                {/* <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-500 mb-2">01 / Overview</p> */}
                <h2 className="font-serif text-xl font-semibold text-slate-900 mb-3 leading-snug">
                  Project Overview
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">
                  While working at iBeAuthentic, I supported front-end development and content management across a portfolio of beauty and salon brands. Including full website redesigns, legacy code updates, and ongoing content management. Sullivan Beauty was one of several redesign projects I led as primary front-end developer, collaborating with designers and stakeholders to modernize the user experience.
                </p>
                
              </div>
              <div className="p-7 bg-slate-50/60">
                {/* <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-500 mb-2">03 / Build</p> */}
                <h2 className="font-serif text-xl font-semibold text-slate-900 mb-3 leading-snug">
                  CMS &amp; Front-End Implementation
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  I worked within both the front-end codebase and the organization's in-house CMS. Implementing HTML/CSS enhancements, refining page layouts for full redesigns, and handling day-to-day content updates via WYSIWYG editing for brands not undergoing a rebuild.
                </p>
              </div>
            </div>

            {/* Design & Front-End Approach */}
            <div>
              {/* <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-500 mb-2">02 / Process</p> */}
              <h2 className="font-serif text-xl font-semibold text-slate-900 mb-5 leading-snug">
                Design &amp; Front-End Approach
              </h2>
              <ul className="space-y-3">
                {[
                  "Managed front-end development and content updates across 12 beauty and salon brand websites simultaneously, balancing multiple redesign timelines and content requests.",
                  "Led full website redesigns for six of those brands, translating updated design direction into clean, semantic HTML and SCSS.",
                  "Managed ongoing content updates via WYSIWYG editing for brands not undergoing a full redesign, ensuring accuracy and consistency across each site.",
                  "Used Azure for version control, branching and submitting front-end changes for review.",
                  "Built flexible promo areas and hero layouts to support changing marketing campaigns without layout breaks.",
                  "Focused on responsive behavior so key content blocks adapt gracefully across desktop, tablet, and mobile.",
                  "Used JavaScript for light interactivity, such as carousels and tabbed content sections.",
                  "Communicated directly with brand managers and company owners to scope redesigns and manage content requests.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-500 leading-relaxed">
                    <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Brands & Properties Managed */}
            <div>
              <h2 className="font-serif text-xl font-semibold text-slate-900 mb-5 leading-snug">
                Brands &amp; Properties Managed
              </h2>
              <div className="grid md:grid-cols-2 gap-0 border border-slate-100 rounded-xl overflow-hidden">
                <div className="p-7 md:border-r border-slate-100">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3">
                    Full Website Redesigns
                  </p>
                  <ul className="space-y-2">
                    {[
                      { name: "Sullivan Beauty", url: "https://www.sullivanbeauty.com/" },
                      { name: "Sweis", url: "https://www.sweisinc.com/" },
                      { name: "eBeauty Professional", url: "https://www.ebeautyprofessional.com/" },
                      { name: "Milbon", url: "https://www.milbon-usa.com/" },
                      { name: "Premier", url: "https://www.premierbeautysupply.com/" },
                      { name: "trubeauty Concepts", url: "https://www.trubeautyconcepts.com/" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-500 leading-relaxed">
                        <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                        <Link
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-teal-600 transition-colors underline underline-offset-2 decoration-slate-300 hover:decoration-teal-600"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-7 bg-slate-50/60">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3">
                    Content Management &amp; Legacy Code Updates
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Aloxxi",
                      "Eiss (home page redesign)",
                      "Keune",
                      "Loma",
                      "Neuma",
                      "Paramount",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-500 leading-relaxed">
                        <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Live site card */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-xl border border-slate-100 bg-slate-50 px-7 py-6">
              <p className="text-sm text-slate-500 max-w-md leading-relaxed">
                Explore the live Sullivan Beauty website. One of several full redesigns I led for iBeAuthentic's beauty and salon brand portfolio.
              </p>
              <a
                href="https://www.sullivanbeauty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-teal-600/30 hover:bg-teal-700 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Visit Sullivan Beauty
                <span className="text-sm leading-none">↗</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}