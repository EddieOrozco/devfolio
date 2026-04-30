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
          <div className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-teal-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#projects" className="hover:text-teal-600">
              Projects
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">CampCo Outdoors</span>
          </div>

          {/* Title */}
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-teal-500">
              Case Study
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              CampCo Outdoors – Shopify Storefront & Klaviyo Integration
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl">
              Built a Shopify storefront with Klaviyo integration, featuring product collections, custom UI sections, and an embedded email signup form for lead capture and marketing automation.
            </p>

            {/* Meta row */}
            <div className="mt-6 grid gap-4 text-xs text-slate-600 sm:grid-cols-3">
              <div>
                <p className="font-semibold text-slate-900">Role</p>
                <p>Email Marketing · Front-End Development</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Tech</p>
                <p>Shopify, Klaviyo</p>
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
              src="/assets/images/campco.webp"
              alt="CampCo Outdoors Shopify storefront"
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
                CampCo Outdoors is a Shopify eCommerce storefront for an outdoor brand, focusing on responsive UI, product collections, and streamlined navigation. Integrated Klaviyo to capture leads through an embedded signup form, supporting email marketing and automation workflows. This project demonstrates the ability to combine front-end development with real-world MarTech implementation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Shopify & Klaviyo 
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Designed and built a responsive Shopify storefront with a focus on clean UI and conversion-focused user experience 
                </li>
                <li>
                  Structured product collections and navigation to support a streamlined shopping journey
                </li>
                <li>
                  Integrated Klaviyo to capture user data and support email marketing automation workflows 
                </li>
                 <li>
                  Implemented embedded signup forms and popup forms to improve lead capture 
                </li>
                 <li>
                  Built a basic welcome flow to introduce the brand and engage new subscribers  
                </li>
                <li>
                  Used AI-assisted tools to generate email content variations and campaign ideas, improving workflow efficiency during campaign creation  
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Implementation
              </h2>
              <p>
                Built using Shopify’s theme architecture with modular sections and dynamic collections for scalable content management. Customized layout and styling within the theme to enhance the UI. Integrated Klaviyo by embedding a signup form via Liquid and implementing a popup form for lead capture, connecting the storefront to email marketing workflows.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Live Site
              </h2>
              <p className="mb-3">
                You can explore CampCo Outdoors site here:<br/>
                Use Password: <strong>password23</strong> 
              </p>
              <a
                href="https://campcooutdoors.myshopify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-teal-600 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-teal-600/40 hover:bg-teal-700"
              >
                Visit Campco Outdoors
                {/* <span className="ml-2 text-sm leading-none">↗</span> */}
              </a>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}