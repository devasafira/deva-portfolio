// page.js

"use client";
import React, { Suspense } from "react";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

const Page = () => {
  return (
    <main className="bg-black-100 overflow-hidden scroll-smooth">
      <Hero />
      <About />
      <Projects />
    </main>
  );
};

export default Page;
