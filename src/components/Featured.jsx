import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {

    const cards = [useAnimation(), useAnimation()]

    const handleHoverStart = (index) => {
        cards[index].start({y:"0"})
    }

    const handleHoverEnd = (index) => {
        cards[index].start({y:"100%"})
    }

    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-10 mt-10'>
                    <motion.div 
                    onHoverStart={()=>handleHoverStart(0)} 
                    onHoverEnd={()=>handleHoverEnd(0)}
                    className='cardcontainer relative w-1/2 h-[75vh]'>
                        <h1 className='absolute flex text-[#CDEA68] overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                            {"GPT-4".split("").map((letter, index) => (
                                <motion.span 
                                initial={{y: "100%"}}
                                animate={cards[0]}
                                transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                                className='inline-block' key={index}>{letter}</motion.span>
                            ))}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="\img\cards\GPT4.png" alt="" />
                        </div>
                    </motion.div>
                    <motion.div 
                    onHoverStart={()=>handleHoverStart(1)} 
                    onHoverEnd={()=>handleHoverEnd(1)}
                    className='cardcontainer relative w-1/2 h-[75vh]'>
                        <h1 className='absolute flex text-[#CDEA68] overflow-hidden left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                            {"TRAWA".split("").map((letter, index) => (
                                <motion.span 
                                initial={{y: "100%"}}
                                animate={cards[1]}
                                transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                                className='inline-block' key={index}>{letter}</motion.span>
                            ))}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="\img\cards\trawa.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Featured