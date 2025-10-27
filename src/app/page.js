"use client";

import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Portfolio from "../components/Portfolio";

export default function Home() {
    return (
      <main className="min-h-screen bg-white text-[#1F2937]">
        <Hero />
        <Skills />
        <About />
        <Portfolio />
      </main>
  );
}
