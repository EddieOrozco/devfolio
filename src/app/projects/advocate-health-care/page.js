import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Advocate Health Care – Case Study",
  description:
    "Component-based CMS pages for a large healthcare system using COD10 and Sitecore.",
};

export default function AdvocateCaseStudy() {
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
            <span className="text-slate-600">Advocate Health Care</span>
          </div>

          {/* Title block */}
          <div className="mb-10">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-600">
              Case Study
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Advocate Health Care — CMS Content Operations
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-500 max-w-2xl leading-relaxed">
              Large-scale healthcare landing pages built using reusable CMS components within Sitecore ecosystems.
            </p>
          </div>

          {/* Meta strip */}
          <div className="mb-10 grid grid-cols-3 divide-x divide-slate-100 border border-slate-100 rounded-xl overflow-hidden bg-slate-50">
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Role</p>
              <p className="text-xs text-slate-700 leading-relaxed">Content Management<br />Digital Consumer Experience <br />Web Publishing</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Tech</p>
              <p className="text-xs text-slate-700 leading-relaxed">Sitecore · Crownpeak<br />HTML · CSS<br /> Siteinprove</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Type</p>
              <p className="text-xs text-slate-700 leading-relaxed">Sitecore CMS<br />Content Operations</p>
            </div>
          </div>

          {/* Hero image */}
          <div className="mb-0 overflow-hidden rounded-2xl border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <Image
              src="/assets/images/aah.webp"
              alt="Advocate Health Care website"
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Teal accent divider */}
          <div className="h-[3px] rounded-b-sm bg-gradient-to-r from-teal-400 via-teal-600 to-transparent mb-12" />

          {/* Content */}
          <div className="space-y-12 text-sm md:text-base leading-relaxed text-slate-600">

            {/* Overview + Collaboration side by side */}
            <div className="grid md:grid-cols-2 gap-0 border border-slate-100 rounded-xl overflow-hidden">
              <div className="p-7 md:border-r border-slate-100">
                {/* <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-500 mb-2">01 / Overview</p> */}
                <h2 className="font-serif text-xl font-semibold text-slate-900 mb-3 leading-snug">
                  Project Overview
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">
                  Advocate Health and its affiliated healthcare brands. Including Advocate Aurora Health Care, Aurora Health Care, Advocate Children's, Aurora BayCare and Atrium Health. Required scalable, component-driven digital experiences across a shared CMS platform.
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  The project focused on implementing structured content using reusable components to ensure brand consistency, accessibility compliance, and efficient page assembly across multiple service lines and campaigns.
                </p>
              </div>
              <div className="p-7 bg-slate-50/60">
                {/* <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-500 mb-2">03 / Workflow</p> */}
                <h2 className="font-serif text-xl font-semibold text-slate-900 mb-3 leading-snug">
                  Collaboration &amp; Workflow
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Collaborated with cross-functional teams. Including designers, QA, project managers, and content stakeholders, to implement CMS experiences aligned with healthcare brand standards. Worked from structured documentation and wireframes to support campaign launches, ongoing content updates, and scalable digital experiences across multiple healthcare properties.
                </p>
              </div>
            </div>

            {/* Enterprise CMS Implementation */}
            <div>
              {/* <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-500 mb-2">02 / Process</p> */}
              <h2 className="font-serif text-xl font-semibold text-slate-900 mb-5 leading-snug">
                CMS Implementation & Content Operations
              </h2>
              <ul className="space-y-3">
                {[
                  "Supported the large-scale migration from Crownpeak to Sitecore CMS, helping transition structured content and reusable page components across four healthcare brands.",
                  "Built and maintained component-based CMS pages, translating wireframes, creative mockups, and business requirements into scalable, design-approved landing pages.",
                  "Managed ongoing content implementation, updates, and page assembly across Advocate Health Care, Aurora Health Care, Advocate Children's, and Aurora BayCare properties.",
                  "Handled ticket-based content requests through Workfront, including image updates, page publishing, and page sunsetting.",
                  "Managed URL redirects and converted PDF assets into web-accessible pages to maintain content accuracy and accessibility.",
                  "Used Siteinprove to regularly audit live CMS pages for content quality and accessibility issues, resolving flagged items to maintain compliance.",
                  "Coordinated with cross-functional teams, design, QA, marketing, and project stakeholders, to gather feedback and implement content revisions.",
                  "Supported campaign launches and production updates within a large, multi-brand healthcare environment.",
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
                Explore the Advocate Health digital experience, live and in production.
              </p>
              <a
                href="https://www.advocatehealth.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-teal-600/30 hover:bg-teal-700 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Visit Advocate Health
                <span className="text-sm leading-none">↗</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}