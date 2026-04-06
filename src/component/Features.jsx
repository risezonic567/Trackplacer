import React from "react";

const features = [
  {
    title: "Real-Time Train Tracking",
    desc: "Monitor train movement with live GPS updates and arrival predictions.",
  },
  {
    title: "Lightning Fast Booking",
    desc: "Secure your seat in seconds with our optimized booking engine.",
  },
  {
    title: "Smart Route Suggestions",
    desc: "AI powered route recommendations to save travel time.",
  },
  {
    title: "Secure Payment Gateway",
    desc: "Multiple safe payment options with full encryption.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#020B1A] text-white py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold">
            Built for Modern Rail Travel
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Velocity Rail simplifies train journeys with technology that
            makes booking, tracking and traveling effortless.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {features.map((feature, i) => (
            <div
              key={i}
              className="group border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-xl hover:border-[#C00817] transition"
            >

              <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#C00817]">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}