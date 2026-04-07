import React, { useEffect } from 'react'
import Hero from '../component/Hero'
// import Features from '../component/Features'
// import WhyChooseUs from '../component/WhyChooseUs'
import HowItWorks from '../component/HowItWorks'
import Testimonials from '../component/Testimonials'
import CTA from '../component/CTA'
// import TrainDestinationsPage from '../component/TrainDesPage'
import FAQ from '../component/FAQ'
import TrainDesPage from '../component/TrainDesPage'
import Navbar from '../component/Navbar'

function Home() {

  useEffect(() => {
      window.scroll(0, 0);
    });
  return (
    <div className='relative'>
      <Navbar/>
        {/* <Hero/> */}
        {/* <Features/> */}
        {/* <HowItWorks/> */}
        {/* <TrainDestinationsPage/> */}
        {/* <WhyChooseUs/>     // good design with mob */}
        {/* <TrainDesPage/> */}
        {/* <Testimonials/> */}
        {/* <CTA/> */}
        {/* <FAQ/> */}
      <section id="home"><Hero/></section>
      <section id="about"><HowItWorks/></section>
      <section id="destinations"><TrainDesPage/></section>
      <section id="testimonials"><Testimonials/></section>
      <section id="contact"><CTA/></section>
      <section id="faq"><FAQ/></section>
        
    </div>
  )
}

export default Home