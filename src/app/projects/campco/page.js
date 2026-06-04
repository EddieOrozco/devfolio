import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "CampCo Outdoors – Case Study",
  description:
    "Built a Shopify storefront with Klaviyo integration, featuring product collections, custom UI sections, and an embedded email signup form for lead capture and marketing automation.",
};

export default function CampcoCaseStudy() {
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
            <span className="text-slate-600">CampCo Outdoors</span>
          </div>

          {/* Title block */}
          <div className="mb-10">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-600">
              Case Study
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              CampCo Outdoors – Shopify Storefront &amp; Klaviyo Integration
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-500 max-w-2xl leading-relaxed">
              Built a Shopify storefront with Klaviyo integration, featuring product collections, custom UI sections, and an embedded email signup form for lead capture and marketing automation.
            </p>
          </div>

          {/* Meta strip */}
          <div className="mb-10 grid grid-cols-3 divide-x divide-slate-100 border border-slate-100 rounded-xl overflow-hidden bg-slate-50">
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Role</p>
              <p className="text-xs text-slate-700 leading-relaxed">Front-End Development<br />Shopify · Email Marketing</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Tech</p>
              <p className="text-xs text-slate-700 leading-relaxed">Shopify · Klaviyo<br />Custom HTML Emails</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1.5">Type</p>
              <p className="text-xs text-slate-700 leading-relaxed">Freelance</p>
            </div>
          </div>

          {/* Hero image */}
          <div className="mb-0 overflow-hidden rounded-2xl border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <Image
              src="/assets/images/campco-outdoors.webp"
              alt="CampCo Outdoors Shopify storefront"
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
                  CampCo Outdoors is a Shopify eCommerce storefront created to showcase responsive front-end development, Shopify theme customization, and Klaviyo marketing integration workflows. It was designed as a hands-on demonstration of combining Shopify storefront development with real-world MarTech implementation.
                </p>
              </div>
              <div className="p-7 bg-slate-50/60">
                {/* <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-500 mb-2">03 / Build</p> */}
                <h2 className="font-serif text-xl font-semibold text-slate-900 mb-3 leading-snug">
                  Implementation
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Built using Shopify's theme architecture with modular sections and dynamic collections for scalable content management. Integrated Klaviyo by embedding a signup form via Liquid and implementing a popup form for lead capture, connecting the storefront to email marketing workflows.
                </p>
              </div>
            </div>

            {/* Shopify & Email Automation */}
            <div>
              {/* <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-500 mb-2">02 / Process</p> */}
              <h2 className="font-serif text-xl font-semibold text-slate-900 mb-5 leading-snug">
                Shopify Implementation &amp; Email Automation
              </h2>
              <ul className="space-y-3">
                {[
                  "Designed and built a responsive Shopify storefront with a focus on clean UI and conversion-focused user experience.",
                  "Structured product collections and navigation to support a streamlined shopping journey.",
                  "Integrated Klaviyo to capture user data and support email marketing automation workflows.",
                  "Implemented embedded signup forms and popup forms to improve lead capture.",
                  "Built a basic welcome flow to introduce the brand and engage new subscribers.",
                  "Used AI-assisted tools to help generate email content variations and campaign ideas during campaign creation.",
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
              <div>
                <p className="text-sm text-slate-500 max-w-md leading-relaxed">
                  Explore the live CampCo Outdoors Shopify storefront — a fully built eCommerce store with Klaviyo marketing integration.
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Password: <span className="font-semibold text-slate-600">password23</span>
                </p>
              </div>
              <a
                href="https://campcooutdoors.myshopify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-teal-600/30 hover:bg-teal-700 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Visit CampCo Outdoors
                <span className="text-sm leading-none">↗</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}