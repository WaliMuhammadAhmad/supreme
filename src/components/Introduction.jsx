import React from 'react'

function Introduction() {
    return (
        <div className='w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.7" className='w-[90vw] h-[90vh] font-display flex justify-center items-center gap-10 rounded-xl'>
                <div className='container w-1/2 h-3/4 px-10 flex flex-col gap-10 justify-center align-center bg-[#004D43] rounded-xl'>
                    <h1 className='font-condensed underline text-5xl'>Our Goal</h1>
                    <p className='text-xl text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, fuga sequi non suscipit facilis, dicta aspernatur placeat voluptates veritatis corporis autem enim dolorem. Excepturi exercitationem voluptate esse adipisci possimus eligendi.</p>
                </div>
                <div className='container w-1/2 h-3/4 px-10 flex flex-col gap-10 justify-center align-center bg-[#004D43] rounded-xl'>
                    <h1 className='font-condensed underline text-5xl'>Our Goal</h1>
                    <p className='text-xl text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, fuga sequi non suscipit facilis, dicta aspernatur placeat voluptates veritatis corporis autem enim dolorem. Excepturi exercitationem voluptate esse adipisci possimus eligendi.</p>
                </div>
            </div>
        </div>
    )
}

export default Introduction