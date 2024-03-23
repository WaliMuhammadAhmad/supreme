import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Landingpage from '../components/Landingpage'
import Marquee from '../components/Marquee'
import Introduction from '../components/Introduction';
import Founder from '../components/Founder';
import Reviews from '../components/Reviews';

function About() {

  let text = {
    title1: 'eye-opening',
    title2: 'eye-catching',
    title3: 'presentations',
    url: 'img/asserts/ecatching.jpg',
    subtitle: 'why:',
    description: 'Almost everything that needs to be communicated is better shown than explained.',
    btnText: "start the project",
    scroll: -.3
  };

  return (
    <div className='text-white'>
      <Navbar />
      <Landingpage {...text} />
      <Marquee />
      <Introduction />
      <Founder />
      <Reviews />
      <Cards />
      <Footer />
    </div>
  )
}

export default About