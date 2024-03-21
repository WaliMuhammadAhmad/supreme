import React from 'react'
import Navbar from '../components/Navbar'
import Landingpage from '../components/Landingpage'
import Marquee from '../components/Marquee'
import Featured from '../components/Featured'
import Cards from '../components/Cards'
import Start from '../components/Start'
import Footer from '../components/Footer'
import EyesContainer from '../components/EyesContainer'

function UserHome() {

  let text = {
    title1: 'we create',
    title2: 'eye-opening',
    title3: 'presentations',
    url: 'img/eyeopening.jpg',
    subtitle: 'for public and private use',
    description: 'we tell your story',
  };

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar />
      <Landingpage {...text} />
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