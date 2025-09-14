import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Product from './Components/Product'

function App() {
  

  return (
    <>
      <Navbar/>
      <Banner/>
      <Product/>
    </>
  )
}

export default App
