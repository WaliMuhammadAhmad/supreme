import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

function CustomBtn(props) {
  if (props.text !== null) {
    return (
      <button className='w-fit flex gap-2 items-center px-1 py-1 font-display text-sm rounded-full border-2 uppercase bg-black hover:invert'>
        {props.text}
        <div className="w-7 h-7 flex items-center justify-center border-[2px] rounded-full">
          <span className='rotate-[45deg]'>
            <FaArrowUpLong />
          </span>
        </div>
      </button>
    )
  } else {
    return null
  }
}

export default CustomBtn