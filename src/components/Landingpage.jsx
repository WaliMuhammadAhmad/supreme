import { motion } from 'framer-motion';
import React from 'react'
import CustomBtn from './raw/CustomBtn';

function Landingpage(props) {

    let btn = {
        btnText:props.btnText,
        btnLink:props.btnLink
    }

    return (
        <div data-scroll data-scroll-speed={props.scroll} className='w-full lg:h-screen md:h-full bg-zinc-900 pt-1 text-white'>
            <div className="textstructure mt-40 px-20">
                {[props.title1, props.title2, props.title3].map((text, index) => {
                    return (
                        <div className="masker" key={index}>
                            <div className="w-fit flex items-end overflow-hidden">
                                {index === 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "8vw" }}
                                        transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
                                    >
                                        <img className='mr-[.2vw] w-[8vw] rounded-lg h-[5vw] pr-1' src={props.url} alt="" />
                                    </motion.div>
                                )}
                                <h1 className='flex items-center h-full uppercase text-[7vw] leading-[6vw] tracking-tighter font-bold'>
                                    {text}
                                </h1>
                            </div>
                        </div>
                    );
                })}

            </div>
            <div className="px-8 py-5 border-t-[1px] border-zinc-800 mt-32 flex justify-between content-baseline">
                {[props.subtitle, props.description].map((text, index) => (
                    <div className="masker" key={index}>
                        <p key={index} className='lg:text-lg tracking-tight leading-none'>
                            {text}
                        </p>
                    </div>
                ))}
                <CustomBtn {...btn}/>
            </div>
        </div>
    )
}

export default Landingpage