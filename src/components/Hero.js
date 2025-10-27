import Image from 'next/image';

// Hero is static/presentational — keep as a server component for smaller client bundle
export default function Hero() {
    return (
    <section id="home" className="min-h-[80vh] flex items-center px-4 relative overflow-hidden bg-white lg:pt-20 pt-12 pb-20" aria-labelledby="hero-heading">
      {/* subtle background shapes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-cyan-50 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-teal-50 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #0ea5e9 2px, transparent 2px), radial-gradient(circle at 70% 60%, #14b8a6 2px, transparent 2px)",
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0, 30px 30px",
        }} />
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: copy */}
        <div className="text-center lg:text-left space-y-6">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-teal-400" />
            <span className="text-xs tracking-[0.3em] text-teal-600 uppercase">Web Developer</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-teal-400" />
          </div>

          <h1 id="hero-heading" className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Hi, I&apos;m Eddie
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-xl mx-auto lg:mx-0">
          I build <span className="font-semibold text-teal-600">clean, responsive</span>, and <span className="font-semibold text-cyan-600">user-friendly websites</span> with modern front-end tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <a
              href="#portfolio"
              aria-label="View portfolio projects"
              className="inline-flex items-center gap-3 rounded-xl bg-teal-500 text-white px-6 py-3 font-semibold shadow-sm hover:bg-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 group"
            >
              <span>View Projects</span>
              <svg className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div className="flex justify-center items-center">
          <div className="relative w-[500px] h-[600px] md:w-[600px] md:h-[600px]">
            <Image
              src="/assets/images/home-page-img3.webp"
              alt="Eddie - Web Developer"
              width={800}
              height={800}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}