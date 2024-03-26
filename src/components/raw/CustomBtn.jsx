import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function CustomBtn(props) {
  if (props.btnText !== null) {
    return (
      <Link to={props.btnLink} className='btn'>
        <button className='w-fit flex gap-2 items-center px-1 py-1 font-display font-light text-white rounded-full border-2 uppercase bg-black hover:invert'>
        {props.btnText}
        <div className="w-7 h-7 flex items-center justify-center border-[2px] rounded-full">
          <span className='rotate-[45deg]'>
            <FaArrowUpLong />
          </span>
        </div>
      </button>
      </Link>
    )
  } else {
    return null
  }
}

export default CustomBtn