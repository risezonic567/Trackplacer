import React from "react";

export default function CTA() {
  return (
    <section className="py-28 bg-gradient-to-r from-[#020B1A] to-[#0a1f3d] text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Your Journey Begins with Track Placer
        </h2>

        <p className="text-gray-400 mb-10">
          Experience faster booking, real-time updates, and smarter
          railway travel across the country.
        </p>

        <button className="bg-[#113D72] hover:bg-red-700 px-10 py-4 rounded-full font-semibold text-lg transition shadow-lg hover:shadow-red-500/30">
          <a href="tel:+18663250204">Contact Now</a>
        </button>

      </div>

    </section>
  );
}