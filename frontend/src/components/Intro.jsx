import React from 'react'
import { Link } from 'react-router-dom'

function Intro() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.09" className='w-full p-[10vh] bg-[#CDEA68] font-display rounded-tl-3xl rounded-tr-3xl text-black'>
            <p className='text-[3vw] leading-[3.5vw] tracking-tight text-justify'>
                <b className='capitalize  underline hover:no-underline'>our mission</b> is simple: to create visually stunning PowerPoint slides that leave a lasting impression on your audience. With our innovative approach, we infuse each slide with captivating 3D effects, dynamic animations, and smooth transitions, ensuring your message is delivered with maximum impact. Trust Supreme to transform your ideas into extraordinary slide presentations. We are not just a presentation service;
                <b className='uppercase underline hover:no-underline'>We are Supreme</b>
            </p>
            <div className="w-full lg:flex gap-5 border-t-[0.1vh] border-zinc-900 pt-[12vh] mt-[10vh] justify-around">
                <div className='w-1/2 '>
                    <h1 className='text-[5vw] capitalize tracking-tight'>Our apporach :</h1>
                    <Link to='/approach'>
                        <button className='btn flex gap-10 items-center bg-zinc-900 mt-[2vh] rounded-full text-white font-light uppercase hover:invert'>Read More
                            <div className='w-2 h-2 bg-white rounded-full'>
                            </div>
                        </button>
                    </Link>
                </div>
                <img className='size-2/5 rounded-xl md:mt-2 sm:mt-2' src="img\asserts\discover.svg" alt="Discover the Approach" />
            </div>
        </div>
    )
}

export default Intro