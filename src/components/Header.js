"use client";

import { useEffect, useState } from "react";
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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500 text-white text-sm font-semibold transition group-hover:scale-105">
              EO
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-semibold text-slate-900">
                Eddie Orozco
              </span>
              <span className="block text-xs text-slate-500">
                Front-End Developer
              </span>
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
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-teal-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/#contact"
              className="ml-4 rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
            >
              Let’s Work Together
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="flex flex-col px-6 py-4 space-y-4 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-600 hover:text-slate-900"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-slate-900 px-5 py-2 text-center text-white font-medium"
            >
              Let’s Work Together
            </a>
          </div>
        </div>
      )}
    </header>
  );
}