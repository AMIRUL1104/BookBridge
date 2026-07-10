// src/app/page.tsx

import Categories from "./Categories";
import CTASection from "./CTASection";
import FAQ from "./FAQ";
import FeaturedBooks from "./FeaturedBooks";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";


export default function HomePage() {
  console.log("[HomePage] Parent Server Component Rendered Successfully.");
  
  return (
    <main className="min-h-screen bg-[#F5F7F8]">
      {/* 1. Hero Area */}
      <Hero />

      {/* 2. Featured Grid Area */}
      <FeaturedBooks />

      {/* 3. Steps Workflow Section */}
      <HowItWorks />

      {/* 4. Discipline Grid Selection */}
      <Categories />

      {/* 5. HeroUI Interactive Accordion */}
      <FAQ />

      {/* 6. Call To Action Footer Banner */}
      <CTASection />
    </main>
  );
}