import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

function Slides() {

    const cards = [useAnimation(), useAnimation()]

    const handleHoverStart = (index) => {
        cards[index].start({ y: "0" })
    }

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }

    return (
        <div className='px-20 flex flex-col gap-5 justify-center items-center'>
            <h1 className='text-5xl pt-10 font-["Founders_Grotesk_X_Condensed"] underline decoration-lime-300 hover:no-underline'>Case Studies</h1>
            <div className='cards w-full flex gap-10 mt-10'>
                <motion.div
                    onHoverStart={() => handleHoverStart(0)}
                    onHoverEnd={() => handleHoverEnd(0)}
                    className='cardcontainer relative w-1/2 h-[75vh]'>
                    <h1 className='absolute flex text-[#CDEA68] overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                        {"GPT-4".split("").map((letter, index) => (
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={cards[0]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                                className='inline-block' key={index}>{letter}
                            </motion.span>
                        ))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="\img\cards\GPT4.png" alt="" />
                    </div>
                </motion.div>
                <motion.div
                    onHoverStart={() => handleHoverStart(1)}
                    onHoverEnd={() => handleHoverEnd(1)}
                    className='cardcontainer relative w-1/2 h-[75vh]'>
                    <h1 className='absolute flex text-[#CDEA68] overflow-hidden left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                        {"TRAWA".split("").map((letter, index) => (
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={cards[1]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                                className='inline-block' key={index}>{letter}</motion.span>
                        ))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="\img\cards\trawa.jpg" alt="" />
                    </div>
                </motion.div>
            </div>
            <button className='px-[1vw] py-[1vh] bg-zinc-900 border-[1px] border-zinc-500 flex gap-5 items-center font-light text-sm uppercase rounded-full font-["Neue_Montreal"] hover:invert'>
                See More
                <div className="w-[2vw] h-[2vw] flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
                    <span className='rotate-[45deg]'>
                        <FaArrowUpLong />
                    </span>
                </div>
            </button>
        </div>

    )
}

export default Slides