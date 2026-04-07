import React from 'react';
import { Plane, Calendar, Users, MapPin, Search } from 'lucide-react'; // Icons for better UI

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[#04152A] flex items-center justify-center overflow-hidden pt-20">
      
      {/* 1. BACKGROUND IMAGE & OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/logo/Home page banner.jpg.jpeg" 
          alt="High Speed Rail" 
          className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04152A]/90 via-transparent to-[#04152A]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#04152A] via-transparent to-[#04152A]/60"></div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE: TEXT CONTENT */}
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[#C00817]"></div>
            <span className="text-blue-400 font-bold tracking-[0.3em] text-xs uppercase">Premium Motion</span>
          </div>

          <h1 className="text-5xl md:text-[100px] font-black text-white leading-[0.85] tracking-tighter italic uppercase">
            FAST.<br />
            <span className="text-transparent stroke-text">FORWARD.</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-md font-light leading-relaxed mx-auto lg:mx-0">
            Experience travel at the speed of thought. No boundaries, no delays—just pure, high-velocity motion.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
            <button className="bg-[#113D72] hover:bg-red-700 text-white px-8 py-3 rounded-full font-black tracking-widest transition-all duration-500 shadow-xl transform hover:-translate-y-1">
              <a href='tel:+18663250204'>CALL NOW</a>
            </button>
            <button className="group flex items-center gap-4 text-white font-bold tracking-widest text-sm transition-all hover:text-blue-400">
              <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-blue-400">
                <span className="ml-1 text-[10px]">▶</span>
              </div>
              DISCOVER
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: PREMIUM SEARCH BOX */}
        <div className="order-1 lg:order-2">
          <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
            
            <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
              <Search className="text-red-500 w-5 h-5" /> Book Your Journey
            </h2>

            <div className="space-y-4">
              {/* From/To */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="text-[10px] text-gray-400 uppercase font-bold ml-2">From</label>
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-blue-500 transition-all">
                    <MapPin className="w-4 h-4 text-blue-400 mr-2" />
                    <input type="text" placeholder="Origin" className="bg-transparent text-white outline-none w-full text-sm" />
                  </div>
                </div>
                <div className="relative">
                  <label className="text-[10px] text-gray-400 uppercase font-bold ml-2">To</label>
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-blue-500 transition-all">
                    <MapPin className="w-4 h-4 text-red-500 mr-2" />
                    <input type="text" placeholder="Destination" className="bg-transparent text-white outline-none w-full text-sm" />
                  </div>
                </div>
              </div>

              {/* Date & Guests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="text-[10px] text-gray-400 uppercase font-bold ml-2">Date</label>
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-blue-500 transition-all">
                    <Calendar className="w-4 h-4 text-blue-400 mr-2" />
                    <input type="date" className="bg-transparent text-white outline-none w-full text-sm invert" />
                  </div>
                </div>
                <div className="relative">
                  <label className="text-[10px] text-gray-400 uppercase font-bold ml-2">Travelers</label>
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-blue-500 transition-all">
                    <Users className="w-4 h-4 text-blue-400 mr-2" />
                    <select className="bg-transparent text-white outline-none w-full text-sm">
                      <option className="bg-[#04152A]">1 Adult</option>
                      <option className="bg-[#04152A]">2 Adults</option>
                      <option className="bg-[#04152A]">Family</option>
                    </select>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-xl shadow-lg shadow-blue-900/50 transition-all flex items-center justify-center gap-3 mt-4">
                <Search className="w-5 h-5" /> SEARCH FLIGHTS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM INFO BAR (Responsive Hidden on Mobile for clean look) */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 z-20">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-4 rounded-full grid grid-cols-4 gap-4">
          {[
            { label: "Max Speed", val: "420", unit: "km/h" },
            { label: "Connectivity", val: "Ultra 5G", unit: "" },
            { label: "Safety", val: "Level 5", unit: "" },
            { label: "Comfort", val: "Executive", unit: "" }
          ].map((item, i) => (
            <div key={i} className={`text-center ${i !== 0 ? 'border-l border-white/10' : ''}`}>
              <p className="text-[#C00817] text-[9px] font-black tracking-widest uppercase">{item.label}</p>
              <p className="text-white text-lg font-bold">{item.val} <span className="text-[10px] font-light text-gray-400">{item.unit}</span></p>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .stroke-text {
          -webkit-text-stroke: 1.5px white;
          color: transparent;
        }
        input::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.5;
        }
      `}} />
    </div>
  );
}

export default Hero;