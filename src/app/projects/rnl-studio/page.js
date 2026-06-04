import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "R&L Studio – Case Study",
  description:
    "R&L Studio is a modern digital studio focused on front-end development, CMS solutions, email marketing, and marketing automation for growing brands.",
};

export default function RNLStudioCaseStudy() {
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
            <span className="text-slate-600">R&L Studio</span>
          </div>

          {/* Title block */}
          <div className="mb-10">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-600">
              Case Study
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              R&L Studio – MarTech &amp; Digital Experience Platform
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-500 max-w-2xl leading-relaxed">
              A modern marketing-focused website built to showcase front-end development, CMS solutions, email marketing, and automation workflows. Designed to position R&L Studio as a digital partner for growing brands.
            </p>
          </div>

          {/* Meta strip */}
          <div className="mb-10 grid grid-cols-3 divide-x divide-slate-100 border border-slate-100 rounded-xl overflow-hidden bg-slate-50">
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Role</p>
              <p className="text-xs text-slate-700 leading-relaxed">Front-End Development<br />Marketing Systems</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Tech</p>
              <p className="text-xs text-slate-700 leading-relaxed">WordPress · HubSpot<br />Gutenberg · Custom CSS</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Type</p>
              <p className="text-xs text-slate-700 leading-relaxed">Personal Brand<br />Freelance Project</p>
            </div>
          </div>

          {/* Hero image */}
          <div className="mb-0 overflow-hidden rounded-2xl border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <Image
              src="/assets/images/rnlstudio.jpg"
              alt="R&L Studio"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Teal accent divider */}
          <div className="h-[3px] rounded-b-sm bg-gradient-to-r from-teal-400 via-teal-600 to-transparent mb-12" />

          {/* Content */}
          <div className="space-y-12 text-sm md:text-base leading-relaxed text-slate-600">

            {/* Overview + Implementation side by side */}
            <div className="grid md:grid-cols-2 gap-0 border border-slate-100 rounded-xl overflow-hidden">
              <div className="p-7 md:border-r border-slate-100">
                {/* <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-500 mb-2">01 / Overview</p> */}
                <h2 className="font-serif text-xl font-semibold text-slate-900 mb-3 leading-snug">
                  Project Overview
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  R&L Studio was created as a modern digital studio website focused on showcasing front-end development, CMS solutions, and marketing systems for growing brands. The project was also designed as a hands-on demonstration of building and managing a marketing-focused website using WordPress, Gutenberg, HubSpot integrations, and custom CSS enhancements.
                </p>
              </div>
              <div className="p-7 bg-slate-50/60">
                {/* <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-500 mb-2">03 / Build</p> */}
                <h2 className="font-serif text-xl font-semibold text-slate-900 mb-3 leading-snug">
                  Implementation
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Built on WordPress with HubSpot integrations and custom CSS to create a scalable, easy-to-manage marketing website. The project focused on content structure, lead generation, and a professional user experience without heavy frameworks or unnecessary complexity.
                </p>
              </div>
            </div>

            {/* Workflow */}
            <div>
              {/* <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-500 mb-2">02 / Process</p> */}
              <h2 className="font-serif text-xl font-semibold text-slate-900 mb-5 leading-snug">
                Development &amp; Marketing Workflow
              </h2>
              <ul className="space-y-3">
                {[
                  "Built the website in WordPress using the Gutenberg block editor, creating reusable content sections and responsive page layouts that are easy to manage and update.",
                  "Structured service pages and landing sections to clearly communicate web development, CMS management, SEO, and marketing-focused solutions.",
                  "Implemented responsive layouts and spacing adjustments to ensure the website performs consistently across desktop, tablet, and mobile devices.",
                  "Embedded HubSpot forms throughout the website to capture client inquiries and connect submissions directly into HubSpot's CRM system.",
                  "Configured HubSpot form workflows and email notifications to improve lead management and streamline communication from submitted inquiries.",
                  "Focused on conversion-driven design by building strong call-to-action sections, clear navigation, and user-focused content structure throughout the site.",
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
                Explore the live R&L Studio website — a fully built, conversion-focused digital studio platform built on WordPress and HubSpot.
              </p>
              <a
                href="https://risenlaunchstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-teal-600/30 hover:bg-teal-700 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Visit R&L Studio
                <span className="text-sm leading-none">↗</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}