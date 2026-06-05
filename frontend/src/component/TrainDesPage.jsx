import React from "react";
import { Percent, Clock, ShieldCheck, Train, MapPin, Ticket } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TrainDesPage() {

  const stats = [
    { number: "500K+", label: "Tickets Booked" },
    { number: "120+", label: "Train Routes" },
    { number: "50+", label: "Cities Covered" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <Ticket size={28} />,
      title: "Instant Ticket Booking",
      desc: "Search and reserve train tickets in seconds with our smart booking system."
    },
    {
      icon: <Percent size={28} />,
      title: "Best Fare Deals",
      desc: "Enjoy exclusive discounts and transparent pricing with no hidden charges."
    },
    {
      icon: <Clock size={28} />,
      title: "Real-Time Availability",
      desc: "Check seat availability and train schedules instantly for better planning."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure Payments",
      desc: "Your transactions are protected with industry-standard encryption."
    }
  ];

  const destinations = [
    {
      name: "Glacier National Park, Montana",
      img: "/images/Glacier National Park, Montana.jpg.jpeg",
    },
    {
      name: "Glenwood Springs, Colorado",
      img: "/images/Glenwood Springs, Colorado.jpg.jpeg",
    },
    {
      name: "Harper’s Ferry, West Virginia",
      img: "/images/Harper’s Ferry, West Virginia.jpg.jpeg",
    },
    {
      name: "New Orleans, Louisiana",
      img: "/images/New Orleans, Louisiana.jpg.jpeg",
    },
    {
      name: "Santa Barbara, California",
      img: "/images/Santa Barbara, California.jpg.jpeg",
    },
    {
      name: "New York City, New York",
      img: "/images/New York City, New York.jpg.jpeg",
    }
  ];

  return (
    <section className="bg-[#011124] text-white py-24">

      {/* HEADING */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto px-6"
      >

        <div className="flex items-center justify-center gap-2 text-[#113D72] mb-3">
          <Train size={20} />
          <span className="uppercase tracking-widest text-sm font-bold">
            TrackPlacer Platform
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Book Train Tickets <span className="text-[#113D72]">Across USA</span>
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Discover the easiest way to book train tickets. Compare routes,
          check seat availability, and enjoy comfortable journeys to
          India's most iconic destinations.
        </p>

      </motion.div>


      {/* FEATURES */}
      <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto mt-16 px-6 cursor-pointer">

        {features.map((f, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className="bg-[#C00817]  backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:border-[#C00817] transition-all"
          >

            <div className="flex justify-center mb-4 text-white">
              {f.icon}
            </div>

            <h3 className="font-semibold text-lg mb-2">
              {f.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {f.desc}
            </p>

          </motion.div>
        ))}


      </div>


      <section className="py-20  text-white">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

        {stats.map((stat, index) => (
          <div key={index}>

            <h3 className="text-4xl font-bold text-red-500">
              {stat.number}
            </h3>

            <p className="text-gray-400 mt-2">
              {stat.label}
            </p>

          </div>
        ))}

      </div>

    </section>


      {/* DESTINATION HEADING */}
      <div className="text-center mt-24 mb-14">

        <p className="uppercase tracking-[0.3em] text-2xl text-[#113D72] font-bold">
          Popular Routes
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
          Explore Top Train Destinations
        </h2>

      </div>


      {/* DESTINATION CARDS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">

        {destinations.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
          >

            <img
              src={item.img}
              
              className="h-full w-full object-cover transform group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t   to-transparent" />

            <div className="absolute bottom-6 left-6">

              <p className="text-[#C00817] text-xs tracking-widest uppercase font-bold">
                {item.info}
              </p>

              <h3 className="text-2xl font-bold flex items-center gap-2 mt-1">
                {/* <MapPin size={18} className="text-[#C00817]" /> */}
                {/* {item.name} */}
              </h3>

            </div>

          </motion.div>
        ))}

      </div>


      {/* CTA */}
      <div className="text-center mt-20">

        <Link
          to="tel:+18663250204"
          className="bg-[#113D72] hover:bg-red-700 px-10 py-4 rounded-full font-semibold shadow-lg transition hover:scale-105"
        >
          Enquire About Train Tickets
        </Link>

      </div>

    </section>
  );
}