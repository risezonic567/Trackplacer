import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Phone, Menu, X } from "lucide-react"; // Icons add kiye
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Ye import karein

// GSAP Plugin Register karein
gsap.registerPlugin(ScrollToPlugin);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  
  const menu = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Destinations", link: "#destinations" },
    { name: "Contact", link: "#contact" },
  ];

  const navRef = useRef(null);
  const menuItems = useRef([]);
  const buttonRef = useRef(null);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);

    if (target) {
      // Agar Home page par hain toh GSAP se scroll karo
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: `#${id}`, offsetY: 80 }, // Offset taaki navbar ke niche na dabe
        ease: "power3.inOut",
      });
      setIsOpen(false); // Mobile menu band karne ke liye
    } else {
      // Agar user kisi aur page par hai (e.g. /train-routes), toh Home par bhejo
      window.location.href = `/#${id}`;
    }
  };

  useEffect(() => {
    // Navbar entrance
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Menu stagger
    gsap.fromTo(
      menuItems.current,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  const hoverButton = (e) => {
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 });
  };

  const leaveButton = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
  };

  return (
    <nav ref={navRef} className="fixed top-0 w-full z-[100] px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#011124]/90 backdrop-blur-lg border border-white/20 px-6 md:px-8 py-3 rounded-2xl shadow-xl">
        
        {/* Logo - Kept untouched as requested */}
        <div className="flex items-center">
          <div className="w-32 md:w-40 h-10 md:h-12 flex items-center justify-center overflow-hidden">
            <img
              src="/logo/Track Placer Logo Png.png"
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex gap-8 text-gray-200 font-medium text-sm uppercase tracking-wider">
            {menu.map((item, index) => (
              <li
                key={index}
                ref={(el) => (menuItems.current[index] = el)}
                className="relative group"
              >
                <a
                  href={item.link}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Button with Icon */}
        <div className="hidden md:flex items-center">
          <button
            ref={buttonRef}
            onMouseEnter={hoverButton}
            onMouseLeave={leaveButton}
            className="bg-[#113D72] flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-blue-500/20 border border-white/10"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <a href="tel:+18663250204">+18663250204</a>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex items-center gap-4">
           {/* Mobile Phone Icon (Visible on small screens) */}
           <a href="tel:+18663250204" className="md:hidden bg-blue-600 p-2 rounded-full">
              <Phone className="w-4 h-4 text-white" />
           </a>
           <button onClick={() => setIsOpen(!isOpen)} className="text-white">
             {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
           </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-24 left-6 right-6 bg-[#011124] border border-white/10 rounded-3xl p-8 transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col gap-6 text-center">
          {menu.map((item, index) => (
            <li key={index}>
              <a 
                href={item.link} 
                className="text-white text-xl font-bold uppercase tracking-tighter"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="pt-4 border-t border-white/5">
             <a href="tel:+18663250204">
              <button className="w-full bg-[#2273CB] hover:bg-[#D71926] text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                +18663250204
             </button>
             </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;