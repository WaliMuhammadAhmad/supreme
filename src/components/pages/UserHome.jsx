import React from 'react'
import Navbar from '../Navbar'
import Landingpage from '../Landingpage'
import Marquee from '../Marquee'
import Featured from '../Featured'
import Cards from '../Cards'
import Start from '../Start'
import Footer from '../Footer'
import EyesContainer from '../EyesContainer'
import LocomotiveScroll from 'locomotive-scroll';

function UserHome() {
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

export default UserHome