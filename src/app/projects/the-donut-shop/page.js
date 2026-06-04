import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Donut Shop – Case Study",
  description:
    "A front-end build for a local donut shop, focused on simple, friendly UI.",
};

export default function DonutShopCaseStudy() {
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
            <span className="text-slate-600">The Donut Shop</span>
          </div>

          {/* Title block */}
          <div className="mb-10">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-600">
              Case Study
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              The Donut Shop – Brand &amp; Front-End Build
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-500 max-w-2xl leading-relaxed">
              A responsive landing page built for a local donut shop, designed to showcase its brand personality while clearly presenting menu items and key business information.
            </p>
          </div>

          {/* Meta strip */}
          <div className="mb-10 grid grid-cols-3 divide-x divide-slate-100 border border-slate-100 rounded-xl overflow-hidden bg-slate-50">
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Role</p>
              <p className="text-xs text-slate-700 leading-relaxed">Front-End Development<br />Basic Branding</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Tech</p>
              <p className="text-xs text-slate-700 leading-relaxed">HTML · CSS</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Type</p>
              <p className="text-xs text-slate-700 leading-relaxed">Freelance</p>
            </div>
          </div>

          {/* Hero image */}
          <div className="mb-0 overflow-hidden rounded-2xl border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <Image
              src="/assets/images/dds.webp"
              alt="The Donut Shop landing page"
              width={1200}
              height={700}
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
                  The Donut Shop started as a small project to explore how a local business could present itself online with a simple, focused landing page. The goal was to make the brand feel playful and approachable while keeping the layout lightweight and easy to maintain.
                </p>
              </div>
              <div className="p-7 bg-slate-50/60">
                {/* <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-500 mb-2">03 / Build</p> */}
                <h2 className="font-serif text-xl font-semibold text-slate-900 mb-3 leading-snug">
                  Implementation
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  The site is built with clean HTML and CSS, focusing on maintainable structure and responsive behavior. The code is intentionally lightweight, making it easy to extend into a CMS or static site generator in the future.
                </p>
              </div>
            </div>

            {/* Design & Layout Choices */}
            <div>
              {/* <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-500 mb-2">02 / Process</p> */}
              <h2 className="font-serif text-xl font-semibold text-slate-900 mb-5 leading-snug">
                Design &amp; Layout Choices
              </h2>
              <ul className="space-y-3">
                {[
                  "Chose soft colors and friendly type to match the feel of a neighborhood donut shop.",
                  "Designed a visually engaging hero section with strong typography and playful imagery to immediately establish brand identity.",
                  "Used a straightforward layout to highlight key information such as menu items, store location, and operating hours without creating visual clutter.",
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
                Explore the live Donut Shop site — a lightweight, responsive landing page built to showcase a local brand's personality and menu.
              </p>
              <a
                href="https://www.thedonutshop.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-teal-600/30 hover:bg-teal-700 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Visit The Donut Shop
                <span className="text-sm leading-none">↗</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}