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
          <div className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-teal-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#projects" className="hover:text-teal-600">
              Projects
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">Sullivan Beauty</span>
          </div>

          {/* Title */}
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-teal-500">
              Case Study
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Sullivan Beauty – Full Website Redesign
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl">
              A full redesign for a professional beauty distributor, focused on
              modernizing the UI, improving content hierarchy, and laying the
              groundwork for reusable CMS-friendly layouts.
            </p>

            {/* Meta row */}
            <div className="mt-6 grid gap-4 text-xs text-slate-600 sm:grid-cols-3">
              <div>
                <p className="font-semibold text-slate-900">Role</p>
                <p>Front-End Development · UI Implementation</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Tech</p>
                <p>HTML, SCSS, JavaScript</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Type</p>
                <p>Website Redesign</p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="mb-12 overflow-hidden rounded-3xl border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
            <Image
              src="/assets/images/sullivan.webp"
              alt="Sullivan Beauty website redesign"
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
                While working at iBeAuthentic, I supported multiple beauty and salon brands by implementing front-end updates and managing structured content through the company’s in-house CMS. Sullivan Beauty represents one of several client sites where I contributed to layout refinements, content restructuring, and responsive improvements.
              </p>
              <p>
                Many of the brands shared similar challenges outdated layouts, dense content, and inconsistent mobile behavior which I addressed through a combination of HTML/CSS adjustments and CMS-driven page updates.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Design & Front-End Approach
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Translated updated design direction into clean, semantic{" "}
                  <span className="font-semibold">HTML</span> and{" "}
                  <span className="font-semibold">SCSS</span>.
                </li>
                <li>
                  Built flexible promo areas and hero layouts to support
                  changing marketing campaigns without layout breaks.
                </li>
                <li>
                  Focused on responsive behavior so key content blocks adapt
                  gracefully across desktop, tablet, and mobile.
                </li>
                <li>
                  Used <span className="font-semibold">JavaScript</span> for
                  light interactivity, such as carousels and tabbed content.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                CMS & Front-End Implementation
              </h2>
              <p>
                I collaborated within both the front-end codebase and the organization’s in-house CMS, implementing layout refinements in HTML/CSS while managing structured content updates to maintain scalable, consistent page builds across the site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Live Site
              </h2>
              <p className="mb-3">
                You can explore the live version of the redesign here:
              </p>
              <a
                href="https://www.sullivanbeauty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-teal-600 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-teal-600/40 hover:bg-teal-700"
              >
                Visit Sullivan Beauty
                {/* <span className="ml-2 text-sm leading-none">↗</span> */}
              </a>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}