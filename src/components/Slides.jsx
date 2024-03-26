import { motion, useAnimation } from 'framer-motion'
import React from 'react'

const theme = {
    cardContainer: 'cardcontainer relative w-1/2 lg:h-[60vh] md:p-5 sm:p-2',
    cardText: 'absolute flex text-[#CDEA68] overflow-hidden top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter lg:text-8xl'
}

function Slides(props) {

    let title = props.title;

    const cards = [useAnimation(), useAnimation()]

    const handleHoverStart = (index) => {
        cards[index].start({ y: "0" })
    }

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }

    return (

        <div className='px-20 flex flex-col gap-5 justify-center items-center'>
            <div className='cards w-full lg:flex gap-10 mt-10'>
                <motion.div
                    onHoverStart={() => handleHoverStart(0)}
                    onHoverEnd={() => handleHoverEnd(0)}
                    className={theme.cardContainer}>
                    <h1 className={`right-0 translate-x-1/2 ${theme.cardText}`}>
                        {"Morph".split("").map((letter, index) => (
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={cards[0]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .1 }}
                                className='inline-block uppercase' key={index}>{letter}</motion.span>
                        ))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src={props.img} alt={props.title} />
                    </div>
                </motion.div>
                <motion.div
                    onHoverStart={() => handleHoverStart(1)}
                    onHoverEnd={() => handleHoverEnd(1)}
                    className={theme.cardContainer}>
                    <h1 className={`lg:left-0 lg:-translate-x-1/2 ${theme.cardText} `}>
                        {"Glow".split("").map((letter, index) => (
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={cards[1]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .1 }}
                                className='inline-block uppercase' key={index}>{letter}</motion.span>
                        ))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full bg-cover' src={props.img} alt={props.title} />
                    </div>
                </motion.div>
            </div>
        </div>

    )
}

export default Slides