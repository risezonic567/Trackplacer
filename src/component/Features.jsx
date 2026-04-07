import React from 'react';
import { Clock, MapPin, ArrowRight, Zap } from 'lucide-react';

const routes = [
  {
    id: 1,
    from: "New York, NY",
    to: "Washington, D.C.",
    time: "2h 45m",
    price: "$89",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop",
    tag: "Most Popular"
  },
  {
    id: 2,
    from: "Los Angeles, CA",
    to: "San Francisco, CA",
    time: "3h 15m",
    price: "$124",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800&auto=format&fit=crop",
    tag: "High Speed"
  },
  {
    id: 3,
    from: "Chicago, IL",
    to: "Toronto, ON",
    time: "5h 20m",
    price: "$156",
    image: "https://images.unsplash.com/photo-1494522358652-f30e61a60313?q=80&w=800&auto=format&fit=crop",
    tag: "Cross Border"
  }
];

export default function Features() {
  return (
    <section className="bg-[#050505] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="text-blue-500 w-4 h-4 fill-blue-500" />
              <span className="text-blue-500 font-black tracking-[0.3em] text-[10px] uppercase">Direct Connections</span>
            </div>
            <h2 className="text-white text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
              POPULAR <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>ROUTES.</span>
            </h2>
          </div>
          <button className="group flex items-center gap-3 text-white font-bold tracking-widest text-xs uppercase border border-white/10 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all">
            View All Routes <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {routes.map((route) => (
            <div key={route.id} className="group relative bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500">
              
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={route.image} 
                  alt={route.to} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute top-6 left-6 bg-blue-600 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest">
                  {route.tag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Starting From</span>
                    <span className="text-white text-3xl font-black italic">{route.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-2xl border border-white/5">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-bold uppercase tracking-tighter">{route.time}</span>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full border border-blue-500"></div>
                    <span className="text-gray-300 font-medium">{route.from}</span>
                  </div>
                  <div className="w-px h-6 bg-gradient-to-b from-blue-500 to-transparent ml-[3px]"></div>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-blue-500 w-4 h-4" />
                    <span className="text-white font-bold text-lg">{route.to}</span>
                  </div>
                </div>

                <button className="w-full bg-white/5 group-hover:bg-blue-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] transition-all duration-300 flex items-center justify-center gap-2 border border-white/5 group-hover:border-blue-500">
                  Book Seat Now <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}