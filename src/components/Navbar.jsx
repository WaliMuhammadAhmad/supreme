import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-[2vw] py-[3vh] font-["Neue_Montreal"] flex justify-between align-center backdrop-blur-sm'>
      <div className="logo">
        <a className='invert flex' href="#">
          <img src="img\logo\suprem.svg" alt="" />
          <img src="img\logo\E.svg" alt="" />
        </a>
      </div>
      <div className="links flex gap-10 justify-center items center">
        {['Services', 'Our work', 'About us', 'Insights', 'Contact us'].map((link, index) => (
          <a href="#" key={index} className={`text-lg capitalize font-light ${index === 4 && "ml-[10vw]"} `}>{link}</a>
        ))}
      </div>
    </div>
  )
}

export default Navbar