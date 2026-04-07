import React from 'react';

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[#04152A] flex items-center justify-center overflow-hidden">
      
      {/* 1. THE HANDSOME BACKGROUND IMAGE */}
      {/* Replace the URL with a high-res shot of a modern bullet train or sleek tracks at night */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/logo/Home page banner.jpg.jpeg" 
          alt="High Speed Rail" 
          className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
        />
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04152A]/80 via-transparent to-[#04152A]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#04152A] via-transparent to-[#04152A]/40"></div>
      </div>

      {/* 2. THE MAIN CONTENT (Centered & Bold) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left w-full grid lg:grid-cols-2">
        
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[#C00817]"></div>
            <span className="text-blue-400 font-bold tracking-[0.3em] text-xs uppercase">Premium Motion</span>
          </div>

          <h1 className="text-7xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter italic">
            FAST.<br />
            <span className="text-transparent stroke-text">FORWARD.</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-md font-light leading-relaxed pt-4">
            Experience travel at the speed of thought. No boundaries, no delays—just pure, high-velocity motion.
          </p>

          <div className="flex flex-wrap gap-6 pt-1">
            <button className="bg-[#113D72] hover:bg-orange-600 hover:text-white text-white px-10  py-4 rounded-full font-black tracking-widest transition-all duration-500 shadow-2xl shadow-red-900/40 transform hover:-translate-y-1">
              GET STARTED
            </button>
            <button className="group flex items-center gap-4 text-white font-bold tracking-widest text-sm transition-all hover:text-blue-400">
              <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-blue-400 transition-colors">
                <span className="ml-1">▶</span>
              </div>
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>

      {/* 3. THE "HANDSOME" BOTTOM INFO BAR (Replaces Search Options) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 z-20 ">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-4 rounded-[2.5rem] grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-left space-y-1">
            <p className="text-[#C00817] text-[10px] font-black tracking-widest uppercase">Max Speed</p>
            <p className="text-white text-2xl font-bold">420 <span className="text-xs font-light text-gray-400">km/h</span></p>
          </div>
          <div className="text-left space-y-1 border-l border-white/10 pl-8">
            <p className="text-[#C00817] text-[10px] font-black tracking-widest uppercase">Connectivity</p>
            <p className="text-white text-2xl font-bold">Ultra 5G</p>
          </div>
          <div className="text-left space-y-1 border-l border-white/10 pl-8">
            <p className="text-[#C00817] text-[10px] font-black tracking-widest uppercase">Safety</p>
            <p className="text-white text-2xl font-bold">Level 5</p>
          </div>
          <div className="text-left space-y-1 border-l border-white/10 pl-8">
            <p className="text-[#C00817] text-[10px] font-black tracking-widest uppercase">Comfort</p>
            <p className="text-white text-2xl font-bold">Executive</p>
          </div>
        </div>
      </div>

      {/* CSS Styles for the 'Stroke' effect */}
      <style dangerouslySetInnerHTML={{__html: `
        .stroke-text {
          -webkit-text-stroke: 1.5px white;
          color: transparent;
        }
      `}} />
    </div>
  );
}

export default Hero;