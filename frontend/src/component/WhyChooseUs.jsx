import React from 'react';
import { Smartphone, Bell, Ticket, ShieldCheck, Apple, Play } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="bg-[#050505] py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Phone Mockup Simulation */}
        <div className="relative order-2 lg:order-1 flex justify-center">
          <div className="relative w-72 h-[580px] bg-[#0a0a0a] rounded-[3rem] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden shadow-blue-500/10">
            {/* Screen Content Simulation */}
            <div className="p-6 pt-12 space-y-6">
              <div className="h-4 w-20 bg-blue-500/20 rounded-full"></div>
              <div className="space-y-3">
                <div className="h-32 w-full bg-gradient-to-br from-blue-600 to-[#113D72] rounded-3xl p-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Active Trip</span>
                    <Smartphone className="w-4 h-4 text-white/40" />
                  </div>
                  <div className="mt-4 text-white font-black italic text-xl tracking-tighter">NYC → DC</div>
                  <div className="text-[10px] text-white/80 mt-1">DEPARTING IN 45 MIN</div>
                </div>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 w-full bg-white/5 rounded-2xl border border-white/5 flex items-center px-4 gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="h-2 w-24 bg-white/10 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -right-4 top-1/4 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl hidden md:block">
            <div className="flex items-center gap-3">
              <div className="bg-green-500/20 p-2 rounded-xl">
                <ShieldCheck className="text-green-500 w-5 h-5" />
              </div>
              <div>
                <p className="text-white text-xs font-bold uppercase tracking-tight">Verified Ticket</p>
                <p className="text-gray-500 text-[10px]">Biometric Encrypted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2 space-y-8">
          <div className="space-y-4">
            <h4 className="text-blue-500 font-black tracking-[0.4em] text-[10px] uppercase italic">The TrackPlacer App</h4>
            <h2 className="text-white text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9]">
              YOUR TERMINAL <br/> <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>IN YOUR POCKET.</span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg">
            Manage your journey with our state-of-the-art mobile interface. From contactless boarding to real-time track updates across the US rail network.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <Bell className="text-blue-500 w-6 h-6 shrink-0" />
              <div>
                <h5 className="text-white font-bold text-sm uppercase tracking-wide">Live Alerts</h5>
                <p className="text-gray-500 text-xs mt-1">Instant gate change and delay notifications.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Ticket className="text-blue-500 w-6 h-6 shrink-0" />
              <div>
                <h5 className="text-white font-bold text-sm uppercase tracking-wide">Smart Booking</h5>
                <p className="text-gray-500 text-xs mt-1">One-tap rebooking and loyalty points.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black uppercase text-xs hover:bg-blue-500 hover:text-white transition-all">
              <Apple className="w-5 h-5 fill-current" /> App Store
            </button>
            <button className="flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs hover:bg-white/10 transition-all">
              <Play className="w-5 h-5 fill-current" /> Google Play
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}