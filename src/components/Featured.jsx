import React from 'react'
import Slides from './Slides'

class Content {
    constructor(title, img) {
      this.title = title;
      this.img = img;
    }
  }

const slides5 = new Content("morph", "img/slides/language.png")
const slides6 = new Content("zoom", "img/slides/zoom.png")

function Featured() {

    return (
        <div className='lg:py-20 md:py-10 sm:py-10 rounded-tl-3xl rounded-tr-3xl'>
            <div className='w-full lg:px-20 md:px-10 sm:px-5 border-b-[1px] border-zinc-700 lg:pb-20 md:pb-10 sm:pb-5 '>
                <h1 className='lg:text-7xl sm:text-3xl capitalize font-display tracking-tight'>Featured Projects</h1>
            </div>
            <Slides {...slides5} />
            <Slides {...slides6} />
        </div>
    )
}

export default Featured