import Image from "next/image";

// components/landing/ProblemSection.tsx
export default function ProblemSection() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 py-20 px-6 max-w-6xl mx-auto">
      <Image
        src="/assets/saly.png"
        alt="Customer interactions"
        width={400}
        height={400}
        className="w-full max-w-md object-contain"
      />

      <div className="max-w-xl">
        <h2 className="text-sm uppercase text-gray-400 mb-2">The Problem</h2>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          The struggle of streamlining customer interactions
        </h3>
        <p className="text-gray-600">
          In today’s digital age, customers expect seamless and personalized
          experiences. However, businesses often struggle to manage interactions
          across multiple channels, leading to disjointed, inefficient, and
          frustrating communications.
        </p>
      </div>
    </section>
  );
}
