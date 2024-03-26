import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-[2vw] py-[2vh] font-display text-white flex justify-between align-center backdrop-blur-sm'>
      <div className="logo">
        <a className='invert flex lg:w-[10vw] md:w-15 sm:w-14' href="/">
          <img className='lg:hidden size-7 md:hidden sm:block' src="img\logo\logo.svg" alt="" />
          <img className='lg:block md:hidden sm:hidden' src="img\logo\supreme.svg" alt="" />
        </a>
      </div>
      <div className="links flex gap-10 justify-center items center">
      {[
        ['Services', '/services'],
        ['Our Work', '/work'],
        ['About Us', '/about'],
        ['Get Started', '/signup'],
      ].map(([title, url]) => (
        <Link to={url} className="lg:text-lg md:text-md capitalize font-light">{title}</Link>
      ))}
      </div>
    </div>
  )
}

export default Navbar