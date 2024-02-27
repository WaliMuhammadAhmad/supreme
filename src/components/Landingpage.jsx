import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

function Landingpage() {
    return (
        <div className='w-full h-screen bg-zinc-900 pt-1'>
            <div className="textstructure mt-40 px-20">
                {["We Create", "Eye-Opening", "Presentations"].map((text, index) => (
                    <div className="masker">
                        <h1 key={index} className='uppercase text-[7vw] leading-[6vw] tracking-tighter font-["SmB X-Cond Gtsk FoundersTest"] font-medium'>
                            {text}
                        </h1>
                    </div>
                ))}
            </div>
            <div className="px-5 py-4 border-t-[1px] border-zinc-800 mt-32 flex justify-between align-center px-5 py-2">
                {["For public and private use", "We tell your story"].map((text, index) => (
                    <div className="masker">
                        <p key={index} className='text-md font-light tracking-tight leading-none'>
                            {text}
                        </p>
                    </div>
                ))}
                <div className="start flex item-center gap-1">
                    <button className='px-1 py-1 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full'>Start the project</button>
                    <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full">
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