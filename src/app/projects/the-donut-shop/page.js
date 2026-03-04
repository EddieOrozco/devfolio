import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Donut Shop – Case Study",
  description:
    "A playful brand and front-end build for a donut shop concept, focused on simple, friendly UI.",
};

export default function DonutShopCaseStudy() {
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
            <span className="text-slate-700">The Donut Shop</span>
          </div>

          {/* Title */}
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-teal-500">
              Case Study
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              The Donut Shop – Brand & Front-End Build
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl">
              A responsive landing page built for a local donut shop, designed to showcase its brand personality while clearly presenting menu items and key business information.
            </p>

            {/* Meta row */}
            <div className="mt-6 grid gap-4 text-xs text-slate-600 sm:grid-cols-3">
              <div>
                <p className="font-semibold text-slate-900">Role</p>
                <p>Front-End Development · Basic Branding</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Tech</p>
                <p>HTML, CSS</p>
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
              src="/assets/images/dds.webp"
              alt="The Donut Shop landing page"
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
                The Donut Shop started as a small project to explore how a local
                business could present itself online with a simple, focused
                landing page. The goal was to make the brand feel playful and
                approachable while keeping the layout lightweight and easy to
                maintain.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Design & Layout Choices
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Chose soft colors and friendly type to match the feel of a
                  neighborhood donut shop.
                </li>
                <li>
                  Designed a visually engaging hero section with strong typography and playful imagery to immediately establish brand identity.
                </li>
                <li>
                  Used a straightforward layout to highlight key information such as menu items, store location, and operating hours without creating visual clutter.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Implementation
              </h2>
              <p>
                The site is built with clean <span className="font-semibold">HTML</span> and{" "}
                <span className="font-semibold">CSS</span>, focusing on
                maintainable structure and responsive behavior. The code is
                intentionally lightweight, making it easy to extend into a CMS
                or static site generator in the future.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Live Site
              </h2>
              <p className="mb-3">
                You can explore The Donut Shop site here:
              </p>
              <a
                href="https://www.thedonutshop.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-teal-600 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-teal-600/40 hover:bg-teal-700"
              >
                Visit The Donut Shop
                {/* <span className="ml-2 text-sm leading-none">↗</span> */}
              </a>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}