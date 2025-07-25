"use client";

import Image from "next/image";

export default function DashboardPreview() {
  return (
    <section className="w-full flex justify-center bg-[#f7fdff] py-16 px-4">
      <div className="relative w-full max-w-6xl aspect-[16/9] rounded-xl overflow-hidden shadow-2xl shadow-cyan-200">
        <Image
          src="/assets/dash.svg"
          alt="Portal dashboard"
          fill
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
