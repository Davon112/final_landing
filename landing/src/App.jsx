import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Info from './components/Info/Info'
import Footer from './components/Footer/Footer'
import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Footer />
      <Hero />
      <Info />
    </div>
  )
}

export default App