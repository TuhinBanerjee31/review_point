import { useEffect } from 'react'
import './App.css'
import Nav from './components/Nav'
import Info from './components/Info'
import Review from './components/Review'
import Footer from './components/Footer'
import ReactGA from "react-ga4";

ReactGA.initialize("G-SLXWZ4FTTG");

function App() {

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname});
  }, [])

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
