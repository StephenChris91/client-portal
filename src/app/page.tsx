// app/page.tsx

import HeroSection from "@/components/ui/sections/landing/HeroSection";
import DashboardPreview from "@/components/ui/sections/landing/DashboardPreview";
import ProblemSection from "@/components/ui/sections/landing/ProblemSection";
import SolutionCards from "@/components/ui/sections/landing/SolutionCards";
import FAQSection from "@/components/ui/sections/landing/FAQSection";
import Footer from "@/components/ui/sections/landing/Footer";
import Navbar from "@/components/ui/sections/landing/Navbar";

export default function LandingPage() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <DashboardPreview />
      <ProblemSection />
      <SolutionCards />
      <FAQSection />
      <Footer />
    </main>
  );
}
