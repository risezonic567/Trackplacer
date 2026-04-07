import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
// import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import TrainRoutes from "./pages/TrainRoutes"

function App() {

  return (
    <>
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/train-routes" element={<TrainRoutes/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
