import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {
  const accentColor = "#113D72";

  const reviews = [
    {
      name: "Arjun Sharma",
      role: "CEO, NexaCorp",
      text: "The silence inside the cabin at 400km/h is hauntingly beautiful. Velocity isn't just transport; it's a productivity sanctuary.",
      img: "https://i.pravatar.cc/150?u=arjun"
    },
    {
      name: "Sarah Jenkins",
      role: "Global Logistics Lead",
      text: "I booked my ticket in 3 taps. The interface is as fast as the trains themselves. Truly a masterpiece of engineering.",
      img: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Vikram Goel",
      role: "Tech Investor",
      text: "Finally, a service that respects time. The punctuality is surgical. It has completely redefined my urban mobility.",
      img: "https://i.pravatar.cc/150?u=vikram"
    }
  ];

  return (
    <section className="bg-white py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* ULTRA-MINIMAL HEADING */}
        <div className="">
          
         
        </div>

        {/* CLEAN SWIPER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="clean-testimonial-swiper !pb-20"
        >
          {reviews.map((rev, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col h-full border-t border-gray-100 pt-12">
                
                {/* Big Quote Icon - Subtle */}
                <span className="text-[#113D72] text-7xl font-serif leading-none mb-6 opacity-20">“</span>
                
                <p className="text-[#011124] text-2xl md:text-3xl font-light leading-relaxed mb-16 tracking-tight">
                  {rev.text}
                </p>

                <div className="flex items-center gap-6 mt-auto">
                  <div className="w-14 h-14 rounded-full overflow-hidden grayscale">
                    <img src={rev.img} alt={rev.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-[#011124] font-bold text-sm uppercase tracking-widest">{rev.name}</h4>
                    <p className="text-gray-400 text-[10px] font-medium tracking-[0.2em] uppercase mt-1">{rev.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-bullet { background: #000 !important; width: 6px; height: 6px; opacity: 0.1; }
        .swiper-pagination-bullet-active { background: #113D72 !important; width: 30px !important; border-radius: 4px !important; opacity: 1; }
      `}} />
    </section>
  );
}

export default Testimonials;