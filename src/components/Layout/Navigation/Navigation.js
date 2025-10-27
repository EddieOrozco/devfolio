"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(64);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  // Measure nav height for accurate scroll offset
  useEffect(() => {
    function measure() {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight || 64);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Close menu on outside click or Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setIsMenuOpen(false);
    }
    function onDown(e) {
      if (!menuRef.current) return;
      if (isMenuOpen && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [isMenuOpen]);

  // Smooth scroll handler for anchor links
  const handleSmoothScroll = (e, href) => {
    if (!href) return;
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
      setIsMenuOpen(false);
    } else {
      // For full page navigation ("/"), ensure mobile menu closes
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* translucent surface */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-slate-200" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3" aria-label="Homepage">
            <Image
              src="/assets/images/logo.webp"
              alt="Logo"
              width={52}
              height={52}
              className="object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              // use Link for internal route ("/"), anchor for hash to allow smooth scrolling
              if (item.href === "/") {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              }
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition font-medium"
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Mobile button */}
          <button
            className="lg:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`lg:hidden mt-2 rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden ${isMenuOpen ? "block" : "hidden"}`}
          aria-hidden={!isMenuOpen}
        >
          {navItems.map((item) => (
            item.href === "/" ? (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-slate-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="font-medium">{item.name}</div>
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-slate-50"
              >
                <div className="font-medium">{item.name}</div>
              </a>
            )
          ))}
        </div>
      </div>
    </nav>
  );
}