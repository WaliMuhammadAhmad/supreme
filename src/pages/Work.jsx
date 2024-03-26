import React from 'react'
import Slides from '../components/Slides'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

class Content {
  constructor(title, img) {
    this.title = title;
    this.img = img;
  }
}

const slides1 = new Content("glow", "img/slides/glow.png")
const slides2 = new Content("circles", "img/slides/circles.png")
const slides3 = new Content("zoom", "img/slides/zoom.png")
const slides4 = new Content("sketch", "img/slides/bean.png")
const slides5 = new Content("morph", "img/slides/language.png")
const slides6 = new Content("vise", "img/slides/vise.jpg")


const slidesArray = [slides1, slides2, slides3, slides4, slides5, slides6];

const renderContent = () => {
  return slidesArray.map((content, index) => (
    <div className='p-1 '>
      <Slides key={index} title={content.title} img={content.img} />
    </div>
    ));
};

function Work() {
  return (
    <div className='w-full'>
      <Navbar />
      <div className='py-20'>
      <h1 className='p-10 font-display font-bold lg:text-6xl text-center'>Our Work</h1>
      {renderContent()}
      </div>
      <Cards />
      <Footer />
    </div>
  )
}

export default Work