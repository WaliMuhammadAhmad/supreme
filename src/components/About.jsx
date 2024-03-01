import React from 'react'

function About() {
    return (
        <div className='w-full p-[10vh] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='text-[3vw] leading-[3.5vw] text-[Neue Montreal] tracking-tight'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa tempore cumque maiores minus quam quae, voluptate aperiam impedit odit, illo perspiciatis molestiae porro harum? Pariatur ea repellat voluptatum consectetur ea repellat voluptatum consecteturea repellat aspernatur!
            </h1>
            <div className="w-full flex gap-5 border-t-[0.1vh] pt-[12vh] mt-[10vh] border-[#A1B562]">
                <div className='w-1/2 '>
                <h1 className=' text-[5vw]'>Our apporach :</h1>
                <button className='flex gap-10 items-center px-[2vh] py-[2vh] bg-zinc-900 mt-[2vh] rounded-full text-white uppercase'>Read More
                    <div className='w-2 h-2 bg-white rounded-full'></div>
                </button>
                </div>
                <div className='w-1/2 h-[70vh] rounded-3xl bg-[#A1B562]'></div>
            </div>
        </div>
    )
}

export default About