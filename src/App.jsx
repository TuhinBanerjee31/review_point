import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Info from './components/Info'
import Review from './components/Review'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-[#E9F1FA] font-Quicksand'>
    <Nav />
    <Info />
    <Review />
    <Footer />
    </div>
  )
}

export default App
