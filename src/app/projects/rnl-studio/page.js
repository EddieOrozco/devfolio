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
          <div className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-teal-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#projects" className="hover:text-teal-600">
              Projects
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">R&L Studio</span>
          </div>

          {/* Title */}
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-teal-500">
              Case Study
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              R&L Studio – MarTech & Digital Experience Platform
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl">
              A modern marketing-focused website built to showcase front-end development, CMS solutions, email marketing, and automation workflows. Designed to position R&L Studio as a digital partner for growing brands through clean design, responsive development, and conversion-focused user experiences.
            </p>

            {/* Meta row */}
            <div className="mt-6 grid gap-4 text-xs text-slate-600 sm:grid-cols-3">
              <div>
                <p className="font-semibold text-slate-900">Role</p>
                <p>Front-End Development · Marketing Systems</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Tech</p>
                <p>WordPress, HubSpot, Gutenberg, Custom CSS</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Type</p>
                <p>Personal Brand / Freelance Project</p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="mb-12 overflow-hidden rounded-3xl border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
            <Image
              src="/assets/images/rnlstudio.jpg"
              alt="R&L Studio"
              width={1920}
              height={1800}
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
                R&L Studio was created as a modern digital studio website focused on showcasing front-end development, CMS solutions, and marketing systems for growing brands. The project was also designed as a hands-on demonstration of building and managing a marketing-focused website using WordPress, Gutenberg, HubSpot integrations, and custom CSS enhancements.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Development & Marketing Workflow
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Built the website in WordPress using the Gutenberg block editor, creating reusable content sections and responsive page layouts that are easy to manage and update.
                </li>
                {/* <li>
                  Customized the front-end experience with custom CSS to extend default WordPress styling and create a more polished, agency-style design system.
                </li> */}
                <li>
                  Structured service pages and landing sections to clearly communicate web development, CMS management, SEO, and marketing-focused solutions.
                </li>
                <li>
                  Implemented responsive layouts and spacing adjustments to ensure the website performs consistently across desktop, tablet, and mobile devices.
                </li>
                <li>
                  Embedded HubSpot forms throughout the website to capture client inquiries and connect submissions directly into HubSpot’s CRM system.
                </li>
                <li>Configured HubSpot form workflows and email notifications to improve lead management and streamline communication from submitted inquiries.</li>
                <li>Focused on conversion-driven design by building strong call-to-action sections, clear navigation, and user-focused content structure throughout the site.</li>
                {/* <li>Managed branding consistency across typography, spacing, colors, and layout components to create a cohesive digital experience aligned with the R&L Studio identity.</li> */}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Implementation
              </h2>
              <p>
                The website was built using WordPress with HubSpot integrations and custom CSS enhancements to create a scalable and easy-to-manage marketing website. The project focused heavily on content structure, lead generation, and building a professional user experience without relying on heavy frameworks or unnecessary complexity.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Live Site
              </h2>
              <p className="mb-3">
                You can explore the R&L Studio website here:
              </p>
              <a
                href="https://risenlaunchstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-teal-600 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-teal-600/40 hover:bg-teal-700"
              >
                Visit R&L Studio
                {/* <span className="ml-2 text-sm leading-none">↗</span> */}
              </a>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}