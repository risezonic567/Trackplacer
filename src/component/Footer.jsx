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

  const footerLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Destinations", link: "/destination" },
    { name: "Contact", link: "/contact" },
    { name: "Train Routes", link: "/train-routes" },
  ];

  return (
    <footer className="relative pt-20 pb-12 overflow-hidden" style={{ backgroundColor: BG_DARK }}>
      {/* Top Border Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Column 1: Brand (Takes 5/12 space) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-block relative overflow-hidden h-16 rounded-xl border border-white/10 p-2 bg-white/[0.02]">
              <img 
                src={logo} 
                alt="Track Placer" 
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-sm">
              Engineering the next generation of transit. High-speed, low-carbon, and completely friction-less travel for the modern professional.
            </p>
            
          </div>

          {/* Column 2: Quick Links (Takes 3/12 space) */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-400">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.link} className="text-gray-500 hover:text-white hover:translate-x-2 inline-block transition-all text-base font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact (Takes 4/12 space) */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-400">Global HQ</h4>
            <div className="space-y-6">
              {/* <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-blue-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">
                  122 Velocity Plaza, Financial District,<br/> New York, NY 10004
                </span>
              </div> */}
              
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-blue-500">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+18663250204" className="text-gray-400 hover:text-white transition-colors text-sm font-bold">
                  +1 866-325-0204
                </a>
                
              </div>
              {/* Newsletter Integrated here for better layout */}
            <div className="relative max-w-sm">
               <input 
                  type="email" 
                  placeholder="Join our newsletter" 
                  className="bg-white/[0.03] border border-white/10 outline-none text-white pl-6 pr-14 py-4 rounded-2xl w-full text-sm focus:border-blue-500/50 transition-all"
                />
                <button className="absolute right-2 top-2 p-2.5 rounded-xl transition-all bg-[#113D72] hover:brightness-125">
                  <ArrowRight className="text-white w-4 h-4" />
                </button>
            </div>

              {/* <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-blue-500">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-gray-400 text-sm">info@trackplacer.com</span>
              </div> */}
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest">
              © {currentYear} TRACK PLACER SYSTEMS
            </p>
            <div className="hidden sm:flex gap-6">
              <Link to="#" className="text-gray-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy</Link>
              <Link to="#" className="text-gray-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Terms</Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[Globe, MessageCircle, Share2, Mail].map((Icon, idx) => (
              <div key={idx} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 cursor-pointer transition-all text-gray-500 hover:text-blue-400">
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}