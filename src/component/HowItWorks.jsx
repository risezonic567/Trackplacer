import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HowItWorks() {
  const componentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".track-line", {
        scrollTrigger: {
          trigger: ".velocity-timeline",
          start: "top center",
          end: "bottom center",
          scrub: 2,
        },
        height: "0%",
        ease: "none"
      });

      gsap.utils.toArray(".timeline-block").forEach((block) => {
        const image = block.querySelector(".image-container");
        const content = block.querySelector(".content-panel");

        gsap.from(image, {
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
          y: 60,
          opacity: 0,
        });

        gsap.from(content, {
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: block.classList.contains('even-row') ? 50 : -50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    }, componentRef);
    return () => ctx.revert();
  }, []);

  const timelineData = [
    { 
      num: "01", 
      title: "SEARCH YOUR ROUTE", 
      desc: "Navigate through our extensive high-speed rail network with precision. Select your origin, destination, and preferred departure window using our intuitive AI-driven scheduling engine. Explore real-time availability and dynamic routing options designed to get you to your terminal faster than ever before. Every connection is optimized for seamless transitions across major transit hubs worldwide.",
      img: "/images/SEARCH YOUR ROUTE.jpg.jpeg" 
    },
    { 
      num: "02", 
      title: "BOOK YOUR SEAT", 
      desc: "Secure your spot in our premium cabins with a single click. Our secure encryption protocols ensure your transaction is private and instantaneous. From ergonomic window views to collaborative workspaces, choose the environment that suits your travel style. Receive your digital biometric ticket instantly on your device, ready for the frictionless boarding experience that defines our modern service.",
      img: "/images/BOOK YOUR SEAT.jpg.jpeg" 
    },
    { 
      num: "03", 
      title: "ENJOY YOUR JOURNEY", 
      desc: "Step into a world of comfort as you glide across the landscape at record speeds. Our cabins are engineered for absolute silence and stability, allowing you to focus on work or deep relaxation. Enjoy high-speed connectivity, premium refreshments, and panoramic views from your seat. Experience the future of travel where the journey itself is just as rewarding as the destination you are heading towards.",
      img: "/images/ENJOY YOUR JOURNEY.jpg.jpeg" 
    }
  ];

  return (
    <section ref={componentRef} className="bg-[#011124] py-20 overflow-hidden relative">
      
      <div className="max-w-7xl mx-auto px-8 mb-10 text-center">
        <p className="text-[#113D72] font-black tracking-[0.5em] text-xs uppercase mb-4">The Process</p>
        <h2 className="text-white text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.9] uppercase">
          HOW WE <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>MOVE YOU.</span>
        </h2>
      </div>

      <div className="velocity-timeline relative max-w-7xl mx-auto px-6">
        
        {/* CENTER TRACK LINE */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-full bg-white/10 z-0 hidden lg:block"></div>
        <div className="track-line absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-[#113D72] via-blue-500 to-[#113D72] z-10 hidden lg:block shadow-[0_0_20px_#113D72]"></div>

        <div className="space-y-10">
          {timelineData.map((item, i) => (
            <div key={i} className={`timeline-block relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center ${i % 2 === 0 ? 'even-row' : 'odd-row'}`}>
              
              {/* IMAGE PANEL */}
              <div className={`image-container relative h-[450px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011124]/80 via-transparent to-transparent"></div>
              </div>

              {/* CENTER TRACK NODE */}
              <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-[#011124] border-4 border-[#113D72] rounded-full z-20 hidden lg:flex items-center justify-center">
                 <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>

              {/* CONTENT PANEL */}
              <div className={`content-panel ${i % 2 === 0 ? 'lg:order-2 lg:text-left' : 'lg:order-1 lg:text-right'}`}>
                <div className="space-y-6">
                   <span className="text-[#113D72] font-black text-7xl italic opacity-20 block">{item.num}</span>
                   <h3 className="text-white text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
                     {item.title}
                   </h3>
                   <p className={`text-gray-400 text-lg font-light leading-relaxed max-w-md ${i % 2 === 0 ? 'lg:ml-0 mr-auto' : 'lg:mr-0 ml-auto'} mx-auto`}>
                     {item.desc}
                   </p>
                   <div className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'} justify-center`}>
                    <button className="bg-[#113D72] group flex items-center gap-3 text-white font-bold tracking-widest text-xs uppercase border border-white/10 px-6 py-3 rounded-full hover:bg-orange-600 cursor-pointer transition-all">
                      <a href='tel:+18663250204'>Enquiry Now</a>
                      <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                   </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;