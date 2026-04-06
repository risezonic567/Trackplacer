import React from 'react'
import Hero from '../component/Hero'
import Features from '../component/Features'
import WhyChooseUs from '../component/WhyChooseUs'
import HowItWorks from '../component/HowItWorks'
import Testimonials from '../component/Testimonials'
import CTA from '../component/CTA'
import TrainDestinationsPage from '../component/TrainDesPage'
import FAQ from '../component/FAQ'

function Home() {
  return (
    <div>
        <Hero/>
        {/* <Features/> */}
        {/* <WhyChooseUs/> */}
        <HowItWorks/>
        {/* <TrainDestinationsPage/> */}
        
        <FAQ/>
        <Testimonials/>
        <CTA/>
    </div>
  )
}

export default Home