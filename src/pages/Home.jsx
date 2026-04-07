import React from 'react'
import Hero from '../component/Hero'
import Features from '../component/Features'
import WhyChooseUs from '../component/WhyChooseUs'
import HowItWorks from '../component/HowItWorks'
import Testimonials from '../component/Testimonials'
import CTA from '../component/CTA'
// import TrainDestinationsPage from '../component/TrainDesPage'
import FAQ from '../component/FAQ'
import TrainDesPage from '../component/TrainDesPage'

function Home() {
  return (
    <div>
        <Hero/>
        {/* <Features/> */}
        
        <HowItWorks/>
        {/* <TrainDestinationsPage/> */}
        {/* <WhyChooseUs/>     // good design with mob */}
        
        <TrainDesPage/>
        <Testimonials/>
        
        <CTA/>
        <FAQ/>
        
    </div>
  )
}

export default Home