import React from 'react';
import { 
  Globe, 
  Share2, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Train 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ACCENT_BLUE = "#113D72";
const BG_DARK = "#050505";
const BORDER_COLOR = "rgba(255,255,255,0.05)";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ["About Us", "Our Network", "Careers", "Newsroom"],
    Services: ["Train Booking", "Rail Passes", "Corporate Travel", "Group Bookings"],
    Support: ["Help Center", "Refund Policy", "Live Status", "Contact Us"],
  };

  return (
    <footer className="pt-24 pb-12 border-t" style={{ backgroundColor: BG_DARK, borderColor: BORDER_COLOR }}>
      <div className="max-w-7xl mx-auto px-8">
        
        {/* TOP SECTION: LOGO & NEWSLETTER */}
        <div className="grid lg:grid-cols-2 gap-20 mb-20 pb-20 border-b" style={{ borderColor: BORDER_COLOR }}>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg" style={{ backgroundColor: ACCENT_BLUE }}>
                <Train className="text-white w-6 h-6" />
              </div>
              <h2 className="text-white text-2xl font-black italic tracking-tighter uppercase">
                Velocity<span className="font-light italic opacity-50">Rail</span>
              </h2>
            </div>
            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm">
              Redefining global mobility through high-speed rail integration and seamless digital booking.
            </p>
          </div>

          <div className="relative">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Stay in the Loop</h4>
            <div className="flex items-center bg-white/[0.03] border rounded-full p-2 group transition-all focus-within:border-white/20" style={{ borderColor: BORDER_COLOR }}>
              <input 
                type="email" 
                placeholder="Enter your professional email" 
                className="bg-transparent border-none outline-none text-white px-6 w-full text-sm font-light"
              />
              <button className="p-4 rounded-full transition-all hover:scale-105 active:scale-95" style={{ backgroundColor: ACCENT_BLUE }}>
                <Send className="text-white w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-gray-600 mt-4 px-4 uppercase tracking-widest font-bold">No spam. Only strategic travel updates.</p>
          </div>
        </div>

        {/* MIDDLE SECTION: LINKS & CONTACT */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8" style={{ color: ACCENT_BLUE }}>{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium tracking-tight">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8" style={{ color: ACCENT_BLUE }}>Headquarters</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 opacity-50" />
                <span>122 Velocity Plaza, <br/> Financial District, NY</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-50" />
                <span>+1 (800) RAIL-FAST</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 opacity-50" />
                <span>ops@velocityrail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: SOCIAL & LEGAL */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t" style={{ borderColor: BORDER_COLOR }}>
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest mb-6 md:mb-0">
            © {currentYear} Velocity Rail Systems. All Rights Reserved.
          </p>

          <div className="flex items-center gap-8">
  <Globe className="w-4 h-4 text-gray-600 hover:text-white cursor-pointer transition-colors" />
  <MessageCircle className="w-4 h-4 text-gray-600 hover:text-white cursor-pointer transition-colors" />
  <Share2 className="w-4 h-4 text-gray-600 hover:text-white cursor-pointer transition-colors" />
  <Mail className="w-4 h-4 text-gray-600 hover:text-white cursor-pointer transition-colors" />
</div>
        </div>

      </div>
    </footer>
  );
}