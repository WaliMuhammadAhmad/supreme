import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

function Landingpage(props) {
    // console.log(props.title1)
    return (
        <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className="textstructure mt-40 px-20">
                {/* <h1 className='text-white'>{props.title1}</h1> */}
                {[props.title1, props.title2, props.title3].map((text, index) => {
                    return (
                        <div className="masker">
                            <div className="w-fit flex items-end overflow-hidden">
                                {index === 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "8vw" }}
                                        transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
                                        >
                                            <img className='mr-[.2vw] w-[8vw] rounded-md h-[5vw]' src={props.url} alt="" />
                                        </motion.div>)}
                                <h1 key={index} className='flex items-center h-full uppercase text-[7vw] leading-[6vw] tracking-tighter font-bold'>
                                    {text}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="px-8 py-5 border-t-[1px] border-zinc-800 mt-32 flex justify-between content-baseline">
                {[props.subtitle, props.description].map((text, index) => (
                    <div className="masker">
                        <p key={index} className='text-lg tracking-tight leading-none'>
                            {text}
                        </p>
                    </div>
                ))}
                <button className='px-[1vw] py-[1vh] bg-zinc-900 border-[1px] border-zinc-500 flex gap-5 items-center font-light text-sm uppercase rounded-full font-["Neue_Montreal"] hover:invert'>
                    Start the project
                    <div className="w-[1.75vw] h-[1.75vw] flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Landingpage