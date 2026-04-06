import React from "react";

const features = [
  {
    title: "Fast Booking",
    desc: "Book train tickets in seconds with our optimized booking system.",
  },
  {
    title: "Live Train Status",
    desc: "Track real time train location and arrival updates.",
  },
  {
    title: "Secure Payments",
    desc: "All transactions are encrypted and secure.",
  },
  {
    title: "24/7 Support",
    desc: "Our team is always ready to help you anytime.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#020B1A] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Velocity Rail
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 p-8 rounded-2xl backdrop-blur-lg hover:border-[#C00817] transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-300">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}