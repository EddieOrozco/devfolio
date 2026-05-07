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
          <div className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-teal-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#projects" className="hover:text-teal-600">
              Projects
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">Advocate Health Care</span>
          </div>

          {/* Title */}
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-teal-500">
              Case Study
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Advocate Health Care – Component-Based CMS Pages
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl">
              Enterprise healthcare landing pages built using reusable CMS components within Sitecore and Crownpeak ecosystems.
            </p>

            {/* Meta row */}
            <div className="mt-6 grid gap-4 text-xs text-slate-600 sm:grid-cols-3">
              <div>
                <p className="font-semibold text-slate-900">Role</p>
                <p>Digital Consumer Experience Specialist · Content Management</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Tech</p>
                <p>Sitecore, Crownpeak, HTML, CSS</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Type</p>
                <p>Enterprise CMS Implementation</p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="mb-12 overflow-hidden rounded-3xl border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
            <Image
              src="/assets/images/aah.webp"
              alt="Advocate Health Care website"
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
                Advocate Health and its affiliated healthcare brands including Advocate Aurora Health Care, Aurora Health Care, Advocate Children’s, and Aurora BayCare required scalable, component-driven digital experiences across a shared enterprise CMS platform.</p>
              <p>
                The project focused on implementing structured content using reusable components to ensure brand consistency, accessibility compliance, and efficient page assembly across multiple service lines and campaigns.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Enterprise CMS Implementation
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Assisted in the enterprise-wide migration from Crownpeak to Sitecore CMS, supporting the transition of structured content and reusable page components across multiple healthcare brands.
                </li>
                <li>
                  Built and maintained component-based CMS pages using approved enterprise design systems, content documentation, and reusable content modules.
                </li>
                <li>
                  Translated wireframes, creative mockups, and business requirements into scalable CMS-driven landing pages and digital experiences.
                </li>
                <li>Managed content implementation and page updates across Advocate Health Care, Aurora Health Care, Advocate Children’s, and Aurora BayCare properties.</li>
                <li>Worked within structured enterprise CMS workflows to support scalable content management and efficient page assembly.</li>
                <li>Coordinated updates, QA feedback, and content revisions with cross-functional teams including design, QA, marketing, and project stakeholders.</li>
                <li>Supported ongoing website maintenance, campaign launches, and production updates within a large enterprise healthcare environment.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Collaboration & Workflow
              </h2>
              <p>
                Collaborated with cross-functional teams including designers, QA teams, project managers, and content stakeholders to implement enterprise CMS experiences aligned with healthcare brand standards. Worked from structured documentation and wireframes to support campaign launches, ongoing content updates, and scalable digital experiences across multiple healthcare properties.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Live Site
              </h2>
              <p className="mb-3">
                You can explore the Advocate Health digital experience here:
              </p>
              <a
                href="https://www.advocatehealth.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-teal-600 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-teal-600/40 hover:bg-teal-700"
              >
                Visit Advocate Health
                {/* <span className="ml-2 text-sm leading-none">↗</span> */}
              </a>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}