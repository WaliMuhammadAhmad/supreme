import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5 rounded-tl-3xl rounded-tr-3xl border-b-2 border-zinc-700'>
            <div className='cardcontainer h-[50vh] w-1/2'>
                <div className='card relative flex gap-5 items-center justify-center rounded-xl w-full h-full bg-[#004D43] flex items-center'>
                    <img className='w-32 invert' src="img\logo\logo.svg" alt="" />
                    <p className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy; 2024</p>
                </div>
            </div>
            <div className='cardcontainer h-[50vh] w-1/2 flex gap-5'>
                <div className='card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43] flex items-center'>
                    <img className='w-32' src="img\social\clutch.svg" alt="" />
                    <p className='absolute px-5 py-1 rounded-full border-2 left-5 bottom-10'>Rating</p>
                </div>
                <div className='card relative flex items-center justify-center rounded-xl w-full h-full bg-[#212121] flex items-center'>
                    <img className='w-32' src="img\social\thefutureacadmy.png" alt="" />
                    <p className='absolute px-5 py-1 rounded-full border-2 left-5 bottom-10'>Verified</p>
                </div>
            </div>
        </div>
    )
}

export default Cards