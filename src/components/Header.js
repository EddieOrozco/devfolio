"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/#skills" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">

          {/* Brand */}
          <Link href="/" className="group flex items-center transition">
            <div className="relative h-14 w-44 sm:h-12 sm:w-32 lg:h-14 lg:w-40 overflow-hidden transition group-hover:opacity-80">
              <Image
                src="/assets/images/e-logo.png"
                alt="Eddie Orozco logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-slate-600 transition hover:text-slate-900"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-teal-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="mailto:eddieorozco231@gmail.com"
              className="ml-2 inline-flex items-center gap-1.5 rounded-lg bg-teal-600 px-5 py-2 text-sm font-medium text-white shadow-md shadow-teal-600/20 transition hover:bg-teal-700"
            >
              Let&apos;s Work Together
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-900"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="flex flex-col px-6 py-5 space-y-4 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-600 hover:text-slate-900 transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="mailto:eddieorozco231@gmail.com"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-teal-600 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-teal-700"
            >
              Let&apos;s Work Together
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}