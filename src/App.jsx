import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
// import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import TrainRoutes from "./pages/TrainRoutes"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsAndConditions from "./pages/TermsAndConditions"
// import AboutUs from "./component/AboutUs"

function App() {

  return (
    <>
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/train-routes" element={<TrainRoutes/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms-conditions" element={<TermsAndConditions/>}/>
        {/* <Route path="/about" element={<AboutUs/>}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
