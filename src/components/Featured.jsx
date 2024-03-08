import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
        </div>
        <div className='px-20'>
            <div className='cards w-full flex gap-10 mt-10'>
                <div className='cardcontainer relative w-1/2 h-[75vh]'>
                    <h1 className='absolute left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none -mb-10 text-[#CDEA68] font-["Founders_Grotesk_X_Condensed"] text-8xl font-semibold'>
                    {"PYDE".split("").map((letter, index) => (
                        <span key={index}>{letter}</span>
                    ))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="\img\cards\GPT4.png" alt="" />
                    </div>
                </div>
                <div className='cardcontainer relative w-1/2 h-[75vh]'>
                <h1 className='absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none -mb-10 text-[#CDEA68] font-["Founders_Grotesk_X_Condensed"] text-8xl font-semibold'>
                    {"VISE".split("").map((letter, index) => (
                        <span key={index}>{letter}</span>
                    ))}
                </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="\img\cards\trawa.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured