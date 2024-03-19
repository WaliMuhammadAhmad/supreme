import React from 'react'
import Navbar from '../Navbar'
import Intro from '../Intro'
import Cards from '../Cards'
import Start from '../Start'
import Footer from '../Footer'
// import Landingpage from '../Landingpage'

function About() {

  let text = {
    title1: 'we are',
    title2: 'supreme',
    title3: 'through design',
    url: 'https://www.google.com',
    subtitle: 'About us:',
    description: 'Almost everything that needs to be communicated is better shown than explained.',
  };

  return (
    <div>
      <Navbar />
      <div className='w-full h-screen bg-red-500'>

      </div>
      {/* <Landingpage prop={text} /> */}
      <Intro props='about' />
      <div className='w-full h-screen bg-red-500'>

      </div>
      <Start />
      <Cards />
      <Footer />
    </div>
  )
}

export default About