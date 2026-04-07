import React from 'react';
import { Globe, Share2, MessageCircle, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "/logo/Track Placer Logo Png.png";

const ACCENT_BLUE = "#113D72";
const ACCENT_LIGHT = "#3b82f6";
const BG_DARK = "#050505";
const BORDER_COLOR = "rgba(255,255,255,0.08)";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ["About Us", "Our Network", "Careers", "Newsroom"],
    Services: ["Train Booking", "Rail Passes", "Corporate Travel", "Group Bookings"],
    Support: ["Help Center", "Refund Policy", "Live Status", "Contact Us"],
  };

  return (
    <footer className="relative pt-10 pb-12 overflow-hidden" style={{ backgroundColor: BG_DARK }}>
      {/* Decorative Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* TOP SECTION: BRAND & NEWSLETTER */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          <div className="max-w-md">
            {/* BRAND LOGO INTEGRATION */}
            <div className="flex items-center gap-4 mb-8 group cursor-pointer">
              <div className="relative overflow-hidden h-18 flex text-center items-center rounded-xl border border-white/10  p-1 transition-all group-hover:border-blue-500/50">
                <img 
                  src={logo} 
                  alt="Track Placer Logo" 
                  className="h-18 w-auto object-contain object-center transition-all duration-500 group-hover:scale-110 ggroup-hover:grayscale-0"
                />
              </div>
              
            </div>
            
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Engineering the next generation of transit. High-speed, low-carbon, and completely friction-less travel for the modern professional.
            </p>
          </div>

          <div className="w-full lg:max-w-md">
            <div className="p-8 rounded-3xl border backdrop-blur-sm bg-white/[0.02]" style={{ borderColor: BORDER_COLOR }}>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-4">Priority Updates</h4>
              <div className="relative flex items-center">
                <input 
                  type="email" 
                  placeholder="Professional Email" 
                  className="bg-white/[0.05] border-none outline-none text-white pl-6 pr-16 py-4 rounded-full w-full text-sm font-light focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
                <button className="absolute right-1.5 p-3 rounded-full transition-all hover:brightness-125 active:scale-95" style={{ backgroundColor: ACCENT_BLUE }}>
                  <ArrowRight className="text-white w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-gray-500 mt-4 uppercase tracking-widest font-medium opacity-60">Join 10k+ frequent travelers.</p>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em]" style={{ color: ACCENT_LIGHT }}>{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-gray-500 hover:text-white hover:translate-x-1 inline-block transition-all text-sm font-medium">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em]" style={{ color: ACCENT_LIGHT }}>Global HQ</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-4 group">
                <MapPin className="w-5 h-5 text-blue-500/50 shrink-0 group-hover:text-blue-400 transition-colors" />
                <span className="leading-snug">122 Velocity Plaza, Financial District, New York, NY 10004</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="w-5 h-5 text-blue-500/50 shrink-0 group-hover:text-blue-400 transition-colors" />
                <span>+18663250204</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="w-5 h-5 text-blue-500/50 shrink-0 group-hover:text-blue-400 transition-colors" />
                <span>info@trackplacer.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: LEGAL & SOCIALS */}
        <div className="pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-8" style={{ borderColor: BORDER_COLOR }}>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 order-2 md:order-1">
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
              © {currentYear} Track Placer Systems
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-gray-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy</Link>
              <Link to="#" className="text-gray-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Terms</Link>
            </div>
          </div>

          <div className="flex items-center gap-6 order-1 md:order-2">
            {[Globe, MessageCircle, Share2, Mail].map((Icon, idx) => (
              <div key={idx} className="p-2 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/[0.02] cursor-pointer transition-all text-gray-500 hover:text-white">
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}