import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "A-Baits & Tackle – Case Study",
  description:
    "A modern fishing gear storefront concept built with Next.js and Tailwind CSS.",
};

export default function ABaitsCaseStudy() {
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
            <span className="text-slate-600">A-Baits &amp; Tackle</span>
          </div>

          {/* Title block */}
          <div className="mb-10">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-600">
              Case Study
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              A-Baits &amp; Tackle – Front-End Build
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-500 max-w-2xl leading-relaxed">
              A modern fishing gear storefront built with Next JS, Tailwind, focused on clean product layouts, clear categories, and a smooth browsing experience for anglers.
            </p>
          </div>

          {/* Meta strip */}
          <div className="mb-10 grid grid-cols-3 divide-x divide-slate-100 border border-slate-100 rounded-xl overflow-hidden bg-slate-50">
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Role</p>
              <p className="text-xs text-slate-700 leading-relaxed">Front-End Development<br />UI Design</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Tech</p>
              <p className="text-xs text-slate-700 leading-relaxed">React · Next.js<br />Tailwind CSS</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Type</p>
              <p className="text-xs text-slate-700 leading-relaxed">Freelance <br /> Product Showcase Site</p>
            </div>
          </div>

          {/* Hero image */}
          <div className="mb-0 overflow-hidden rounded-2xl border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <Image
              src="/assets/images/a-baits.webp"
              alt="A-Baits & Tackle storefront UI"
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Teal accent divider */}
          <div className="h-[3px] rounded-b-sm bg-gradient-to-r from-teal-400 via-teal-600 to-transparent mb-12" />

          {/* Content */}
          <div className="space-y-12 text-sm md:text-base leading-relaxed text-slate-600">

            {/* Overview + Scalability side by side */}
            <div className="grid md:grid-cols-2 gap-0 border border-slate-100 rounded-xl overflow-hidden">
              <div className="p-7 md:border-r border-slate-100">
                {/* <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-500 mb-2">01 / Overview</p> */}
                <h2 className="font-serif text-xl font-semibold text-slate-900 mb-3 leading-snug">
                  Project Overview
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">
                  A-Baits & Tackle was a product showcase website built for an independently owned fishing and tackle retailer, designed to bring the in-store inventory online and help attract new customers. The site focused on a clean, organized catalog experience, allowing customers to browse gear by category, including baits, rods, reels, and combo kits, without overwhelming the user.
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  The platform was built with a scalable structure and responsive layouts to support future updates as inventory grew. The store has since closed as the owner moved into retirement. The site remains live here as a showcase of the original build.
                </p>
              </div>
              <div className="p-7 bg-slate-50/60">
                {/* <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-500 mb-2">03 / Scalability</p> */}
                <h2 className="font-serif text-xl font-semibold text-slate-900 mb-3 leading-snug">
                  CMS &amp; Scalability Considerations
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">
                  Although this version functioned as a straightforward product showcase, the front-end architecture was built with reusable, modular components designed to integrate with a CMS or API-driven backend if the business had needed to scale.
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Product grids and category layouts were structured to support dynamic data, demonstrating how the site could have evolved to support a growing inventory or a future e-commerce buildout.
                </p>
              </div>
            </div>

            {/* Front-End & UI Approach */}
            <div>
              {/* <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-500 mb-2">02 / Process</p> */}
              <h2 className="font-serif text-xl font-semibold text-slate-900 mb-5 leading-snug">
                Front-End &amp; UI Approach
              </h2>
              <ul className="space-y-3">
                {[
                  "Built with Next.js for fast, SPA-like navigation and simple deployment.",
                  "Used Tailwind CSS to rapidly iterate on layout, spacing, and a clean, modern visual system.",
                  "Created reusable UI components for product cards, category sections, and hero banners to keep the layout consistent.",
                  "Focused on strong typography and hierarchy so product info is easy to scan.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-500 leading-relaxed">
                    <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Live site card */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-xl border border-slate-100 bg-slate-50 px-7 py-6">
              <p className="text-sm text-slate-500 max-w-md leading-relaxed">
                Explore the A-Baits & Tackle site. A clean, responsive product showcase built with Next.js and Tailwind, kept live as an example of the original build.
              </p>
              <a
                href="https://abaitsandtackle.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-teal-600/30 hover:bg-teal-700 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Visit A-Baits &amp; Tackle
                <span className="text-sm leading-none">↗</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}