import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

function CustomBtn(props) {
  return (
    <div>
        <button className='w-fit flex gap-5 items-center px-[1vh] py-[1vh] rounded-full border-2 uppercase bg-black hover:invert'>
                {props.text}
                <div className="w-10 h-10 flex items-center justify-center border-[2px] rounded-full">
                    <span className='rotate-[45deg]'>
                        <FaArrowUpLong />
                    </span>
                </div>
            </button>
    </div>
  )
}

export default CustomBtn