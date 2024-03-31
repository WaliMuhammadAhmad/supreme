import React from 'react'

function NotFound() {
  return (
    <div className='relative w-full h-screen flex flex-col justify-center items-center font-condensed bg-black'>
      <img src="img/asserts/ghost.gif" alt="" />
      <div className="absolute bottom-0 text-center">
        <h1 className='text-5xl'>404</h1>
        <h2 className='text-2xl'>Page Not Found</h2>
      </div>
    </div>

  )
}

export default NotFound