import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

function Landingpage() {
    
    return (
        <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className="textstructure mt-40 px-20">
                {["We Create", "Eye-Opening", "Presentations"].map((text, index) => {
                    return (
                        <div className="masker">
                            <div className="w-fit flex items-end overflow-hidden">
                                {index === 1 && (
                                <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "8vw" }}
                                transition={{ease: "easeOut", duration: 1, delay: 0.5}}
                                className="mr-[.2vw] w-[8vw] rounded-md h-[5vw] relative bg-red-500"></motion.div>)}
                                <h1 key={index} className='flex items-center h-full uppercase text-[7vw] leading-[6vw] tracking-tighter font-bold'>
                                    {text}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="px-8 py-5 border-t-[1px] border-zinc-800 mt-32 flex justify-between align-center px-5 py-2">
                {["For public and private use", "We tell your story"].map((text, index) => (
                    <div className="masker">
                        <p key={index} className='text-lg tracking-tight leading-none'>
                            {text}
                        </p>
                    </div>
                ))}
                <div className="start flex item-center gap-1">
                    <button className='px-[1vw] py-[1vh] border-[1px] border-zinc-500 font-light text-sm uppercase rounded-full font-["Neue_Montreal"]'>Start the project</button>
                    <div className="w-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full">
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage