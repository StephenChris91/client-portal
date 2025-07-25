// components/landing/SolutionCards.tsx
import { Button } from "../../button";
const features = [
  {
    title: "Contact Management",
    desc: "Store and organize all of your customer and prospect information in one place.",
    icon: "📇",
  },
  {
    title: "Lead Management",
    desc: "Track and manage leads from initial contact to closing the deal.",
    icon: "📞",
  },
  {
    title: "Customer Support",
    desc: "Track interactions, resolve issues, and provide exceptional support.",
    icon: "💬",
  },
  {
    title: "Reporting",
    desc: "Get valuable insights on team and customer performance.",
    icon: "📊",
  },
];

export default function SolutionCards() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="uppercase text-sm text-gray-400 mb-1">The Solution</h2>
      <h3 className="text-2xl font-bold text-gray-900 mb-10">
        Manage your <span className="font-bold text-cyan-700">gigs</span>{" "}
        seamlessly and process many interactions{" "}
        <span className="font-bold text-cyan-700">easily</span>{" "}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="bg-white border shadow-sm p-6 rounded-xl text-left"
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h4 className="font-semibold text-lg">{f.title}</h4>
            <p className="text-gray-500 text-sm mt-1">{f.desc}</p>
          </div>
        ))}
      </div>

      <Button className="mt-10 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 font-normal rounded-sm">
        Get Started
      </Button>
    </section>
  );
}
