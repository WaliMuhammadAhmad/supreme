import React from 'react'
import Navbar from '../Navbar'
import Landingpage from '../Landingpage'

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
      <Landingpage prop={text} />
      
    </div>
  )
}

export default About