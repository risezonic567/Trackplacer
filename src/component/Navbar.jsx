import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Navbar() {
  const menu = [
    { name: "Home", link: "/" },
    { name: "Train Status", link: "/status" },
    { name: "Tickets", link: "/tickets" },
    { name: "Contact", link: "/contact" },
  ];

  const navRef = useRef(null);
  const menuItems = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {

    // Smooth navbar entrance (nothing hidden)
    gsap.fromTo(
      navRef.current,
      { y: -10 },
      {
        y: 0,
        duration: 1,
        ease: "power2.out"
      }
    );

    // Menu stagger polish
    gsap.fromTo(
      menuItems.current,
      { y: -6 },
      {
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out"
      }
    );

  }, []);

  const hoverButton = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.08,
      duration: 0.2
    });
  };

  const leaveButton = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.2
    });
  };

  return (
    <nav ref={navRef} className="fixed top-0 w-full z-50 px-6 py-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#011124] backdrop-blur-lg border border-white/50 px-8 py-3 rounded-2xl shadow-xl">

        {/* Logo */}
        <div className="flex items-center gap-2">

          <div className="w-40 h-12 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src="/logo/Track Placer Logo.jpg.jpeg"
              alt="logo"
              className="w-38 h-45 object-contain"
            />
          </div>

         

        </div>


        {/* Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-8 text-gray-200 font-medium">

            {menu.map((item, index) => (
              <li
                key={index}
                ref={(el) => (menuItems.current[index] = el)}
                className="relative group"
              >
                <a
                  href={item.link}
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  {item.name}
                </a>

                {/* animated underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

              </li>
            ))}

          </ul>
        </div>


        {/* Button */}
        <div className="hidden md:block">
          <button
            ref={buttonRef}
            onMouseEnter={hoverButton}
            onMouseLeave={leaveButton}
            className="bg-[#113D72] cursor-pointer hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-orange-500/20"
          >
            Book Now
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;