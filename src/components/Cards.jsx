import React from 'react'

const theme = {
    cardContainer: 'cardcontainer h-[50vh] lg:w-1/2',
    card: 'card relative flex items-center justify-center rounded-xl w-full h-full',
    cardText: 'absolute lg:px-5 lg:py-1 md:text-sm sm:text-sm rounded-full lg:border-2 lg:left-5 bottom-10'
}

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-900 lg:flex items-center px-32 gap-5 rounded-tl-3xl rounded-tr-3xl border-b-2 border-zinc-700'>
            <div className={theme.cardContainer}>
                <div className={`${theme.card} gap-5 bg-[#004D43]`}>
                    <img className='lg:w-32 invert' src="img\logo\logo.svg" alt="" />
                    <p className={theme.cardText}>&copy; 2024</p>
                </div>
            </div>
            <div className={` ${theme.cardContainer} md:p-5 sm:p-5  flex gap-5`}>
                <div className={`${theme.card} bg-[#004D43]`}>
                    <img className='lg:w-32' src="img\social\clutch.svg" alt="" />
                    <p className={theme.cardText}>Rating</p>
                </div>
                <div className={`${theme.card} bg-[#212121]`}>
                    <img className='lg:w-32' src="img\social\thefutureacadmy.png" alt="" />
                    <p className={theme.cardText}>Verified</p>
                </div>
            </div>
        </div>
    )
}

export default Cards