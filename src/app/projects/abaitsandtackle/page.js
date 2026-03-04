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
          <div className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-teal-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#projects" className="hover:text-teal-600">
              Projects
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">A-Baits &amp; Tackle</span>
          </div>

          {/* Title */}
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-teal-500">
              Case Study
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              A-Baits &amp; Tackle – E-commerce Concept Store
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl">
              A modern fishing gear storefront concept built with Next.js and
              Tailwind CSS, focused on clean product layouts, clear categories,
              and a smooth browsing experience for anglers.
            </p>

            {/* Meta row */}
            <div className="mt-6 grid gap-4 text-xs text-slate-600 sm:grid-cols-3">
              <div>
                <p className="font-semibold text-slate-900">Role</p>
                <p>Front-End Development · UI Design</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Tech</p>
                <p>React, Next.js, Tailwind CSS</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Type</p>
                <p>Freelance</p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="mb-12 overflow-hidden rounded-3xl border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
            <Image
              src="/assets/images/a-baits.webp"
              alt="A-Baits & Tackle storefront UI"
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content sections */}
          <div className="space-y-10 text-sm md:text-base leading-relaxed text-slate-700">
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Project Overview
              </h2>
              <p>
                A-Baits & Tackle is a product showcase website built for a fishing retailer to better display in-store inventory online. The objective was to design a focused, visually organized catalog experience that allows customers to browse gear by category including baits, rods, reels, and combo kits without overwhelming the user.
              </p>
              <p>
                The platform was built with scalable structure and responsive layouts to support future updates as inventory grows.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Front-End &amp; UI Approach
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Built with <span className="font-semibold">Next.js</span> for
                  fast, SPA-like navigation and simple deployment.
                </li>
                <li>
                  Used <span className="font-semibold">Tailwind CSS</span> to
                  rapidly iterate on layout, spacing, and a clean, modern visual
                  system.
                </li>
                <li>
                  Created reusable UI components for product cards, category
                  sections, and hero banners to keep the layout consistent.
                </li>
                <li>
                  Focused on strong typography and hierarchy so product info is
                  easy to scan.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                CMS &amp; Scalability Considerations
              </h2>
              <p>
                Although the current version functions as a product showcase, the front-end architecture was built with reusable, modular components that could integrate with a CMS or API-driven backend.
              </p>
              <p>
                Product grids and category layouts are structured to support dynamic data, ensuring the site can evolve as business needs grow.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Live Demo
              </h2>
              <p className="mb-3">
                You can explore the live version of the site here:
              </p>
              <a
                href="https://abaitsandtackle.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-teal-600 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-teal-600/40 hover:bg-teal-700"
              >
                Visit A-Baits &amp; Tackle
                {/* <span className="ml-2 text-sm leading-none">↗</span> */}
              </a>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

