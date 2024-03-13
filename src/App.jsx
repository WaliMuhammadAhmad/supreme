import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Start from './components/Start'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import EyesContainer from './components/EyesContainer'

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar />
      <Landingpage />
      <Marquee />
      <EyesContainer />
      <Featured />
      <Start />
      <Cards />
      <Footer />
    </div>
  )
}

export default App