import React from 'react'
import Hero from '../component/Hero'
import Features from '../component/Features'
import WhyChooseUs from '../component/WhyChooseUs'
import HowItWorks from '../component/HowItWorks'
import Testimonials from '../component/Testimonials'
import CTA from '../component/CTA'

function Home() {
  return (
    <div>
        <Hero/>
        {/* <Features/> */}
        {/* <WhyChooseUs/> */}
        <HowItWorks/>
        <Testimonials/>
        <CTA/>
    </div>
  )
}

export default Home