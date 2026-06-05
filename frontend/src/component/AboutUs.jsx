import React from "react";
import Navbar from "../component/Navbar";
import { motion } from "framer-motion";
import { Train, ShieldCheck, Zap, Users, MapPin } from "lucide-react";

export default function AboutUs() {

const features = [
{
icon: <Train size={32} />,
title: "Smart Train Tracking",
desc: "Real-time train tracking with accurate arrival times and route updates."
},
{
icon: <ShieldCheck size={32} />,
title: "Secure Booking",
desc: "Your train tickets and payment information are protected with enterprise security."
},
{
icon: <Zap size={32} />,
title: "Instant Booking",
desc: "Book train tickets within seconds with our optimized booking platform."
},
{
icon: <Users size={32} />,
title: "Trusted by Travelers",
desc: "Thousands of travelers trust our platform for seamless rail journeys."
}
]

return (
<>
<Navbar/>

<div className="bg-white">

{/* HERO SECTION */}

<section className="pt-36 pb-10 px-6 bg-gradient-to-b from-blue-50 to-white">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.7}}
>

<h1 className="text-5xl md:text-6xl font-extrabold text-[#E01926] leading-tight mb-6">

Redefining the <span className="text-[#257DDC]">Future</span> of

<br/>

Train Travel

</h1>

<p className="text-gray-600 text-lg mb-8 max-w-lg">

We build smart railway technology that makes train journeys faster,
easier and more reliable. Our platform connects travelers to real-time
train information and seamless ticket booking.

</p>

<div className="flex gap-4">

<a href="tel:+18663250204" className="bg-[#257DDC] cursor-pointer hover:bg-[#E01926] text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg">

Contact Us

</a>



</div>

</motion.div>

<div className="relative">

<img

src="/images/RedefiningtheFutureofTrainTravel.jpg.jpeg"

alt="train"

className="rounded-3xl shadow-2xl w-full h-full"

/>

<div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">

<h3 className="text-3xl font-bold text-[#E01926]">10K+</h3>

<p className="text-gray-500 text-sm">Daily Travelers</p>

</div>

</div>

</div>

</section>





{/* MISSION VISION */}

<section className="py-10 px-6">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">

<div className="bg-blue-50 p-12 rounded-3xl">

<h3 className="text-3xl font-bold text-[#257DDC] mb-4">

Our Mission

</h3>

<p className="text-gray-600 leading-relaxed">

Our mission is to simplify train travel by providing accurate train
information, easy ticket booking, and seamless journey planning for
millions of travelers.

</p>

</div>

<div className="bg-red-50 p-12 rounded-3xl">

<h3 className="text-3xl font-bold text-[#E01926] mb-4">

Our Vision

</h3>

<p className="text-gray-600 leading-relaxed">

We aim to become the most trusted global railway travel platform
connecting passengers to smarter, faster and more comfortable train
journeys.

</p>

</div>

</div>

</section>

{/* CTA */}

<section className="pb-28 px-6">

<div className="max-w-7xl mx-auto bg-[#257DDC] rounded-3xl py-20 text-center text-white">

<h2 className="text-4xl font-bold mb-6">

Start Your Smart Train Journey Today

</h2>

<p className="mb-8 text-white/90">

Track trains, discover routes and book tickets instantly.

</p>

<a href="tel:+18663250204" className="bg-white cursor-pointer shadow-2xl text-[#257DDC] px-10 py-4 rounded-xl font-bold hover:bg-[#E01926] hover:text-white transition">

Book Now

</a>

</div>

</section>

</div>

</>
)
}