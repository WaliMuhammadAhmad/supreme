import React from 'react'
import Navbar from '../Navbar'
import Landingpage from '../Landingpage'
import Marquee from '../Marquee'
import Featured from '../Featured'
import Cards from '../Cards'
import Start from '../Start'
import Footer from '../Footer'
import EyesContainer from '../EyesContainer'

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