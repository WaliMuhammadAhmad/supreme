import React from 'react'
import Navbar from '../Navbar'
import Cards from '../Cards'
import Footer from '../Footer'
import Landingpage from '../Landingpage'
import Marquee from '../Marquee'
import Introduction from '../Introduction';
import Founder from '../Founder';
import Reviews from '../Reviews';

function About() {

  let text = {
    title1: 'eye-opening',
    title2: 'eye-catching',
    title3: 'presentations',
    url: 'img/ecatching.jpg',
    subtitle: 'why:',
    description: 'Almost everything that needs to be communicated is better shown than explained.',
  };

  return (
    <div>
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