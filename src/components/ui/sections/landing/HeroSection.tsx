// components/landing/HeroSection.tsx
"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full py-20 text-center px-4 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold">
        Increase productivity with
        <br />
        <span className="text-cyan-600">simplified Customer relationship</span>
      </h1>
      <p className="max-w-2xl mx-auto mt-4 text-gray-500 text-lg">
        With seamless integrations, power analytics, and advanced workflow
        management, Portal helps you grow your business sustainably.
      </p>
      <Button className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-sm">
        Get Started
      </Button>
    </section>
  );
}
