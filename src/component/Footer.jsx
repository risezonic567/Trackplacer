import React from "react";
import { Link } from "react-router-dom"; // Navigation ke liye Link yahan se aana chahiye
// import { Link as LucideLink } from 'lucide-react'; // Agar lucide icon chaiye to aise karein

function Footer() {
  const menu = [
    { name: "Train Routes", path: "/train-routes" },
    { name:"Privacy Policy", path: "/privacy-policy"},
    { name: "Terms Conditions", path: "/terms-conditions" },
    { name: "24/7 Support", path: "tel:+18663250204" },
  ];

  const footerTag = [
    { name:"Privacy Policy", path: "/privacy-policy"},
    { name:"Terms Condition", path: "/terms-conditions"},
  ]

  return (
    <footer className="w-full bg-[#113D72] text-white font-sans border-t-2 border-blue-600">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          <div className="space-y-6">
            <Link to='/'>
              <div className="flex items-center gap-2 pb-3">
              <img
                src="/logo/Track Placer Logo Png.png"
                alt="Track Placer Logo"
                className="h-14 w-auto rounded-sm border-blue-500/30 shadow-lg shadow-blue-500/10"
              />
            </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Track Placer is your trusted partner for reliable rail information
              and ticket booking assistance. With quick, hassle-free navigation
              and 24/7 support, your next journey is just one call away.
            </p>
            <div className="flex flex-col gap-2 text-[12px] font-bold uppercase tracking-widest text-blue-400">
              <span>• Across All Major Routes</span>
              <span>• Available 24/7 | Privacy Focused</span>
            </div>
          </div>

          <div className="lg:pl-12">
            <h1 className="text-lg font-black uppercase tracking-widest mb-6 border-b-2 border-blue-600 inline-block">
              Our Services
            </h1>
            <ul className="space-y-4">
              {menu.map((item, i) => (
                <Link 
                
                  key={i}
                  to={item.path}
                  className="text-[10px] text-blue-500 text-xl font-black uppercase tracking-tighter flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span className="text-white opacity-20">•</span> {item.name}
                </Link>
              ))}
            </ul>
          </div>

          <div className="bg-blue-600/5 p-8 rounded-2xl border border-blue-500/20 shadow-inner">
            <h1 className="text-lg font-black uppercase tracking-widest mb-6 text-white">
              Contact Us
            </h1>
            <div className="flex flex-col space-y-4">
              <span className="text-blue-400 text-xs font-black uppercase tracking-tighter">
                Call for Instant Assistance
              </span>
              <a
                href="tel:+18663250204"
                className="text-2xl md:text-2xl font-black text-white hover:text-blue-500 transition-colors tracking-tighter"
              >
                (866)325-0204
              </a>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase">
                <span className="h-2 w-2 rounded-full bg-[#D71926] animate-pulse" />
                Available 24/7
              </div>
            </div>
            <p className="mt-6 text-xs text-slate-400 leading-relaxed italic">
              "No forms to fill out, no waiting - just call and we'll take care
              of everything!"
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-widest leading-loose">
              © {new Date().getFullYear()} Track Placer. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {footerTag .map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="text-[10px] text-slate-500 hover:text-white font-black uppercase tracking-tighter flex items-center gap-2 transition-colors"
              >
                <span className="text-white opacity-20">•</span> {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
