import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

function SwipBtn(props) {

  if (props.text === 'sign in') {
    return (
      <button className='w-fit flex gap-5 items-center px-1 py-1 font-display text-sm  rounded-full border-2 border-zinc-900 uppercase' onClick={props.toggleForm}>
        {props.text}
        <div className="w-[2vw] h-[2vw] flex items-center justify-center border-2 border-zinc-900 rounded-full">
          <span className='rotate-[90deg]'>
            <FaArrowUpLong />
          </span>
        </div>
      </button>
    )
  } else if (props.text === 'sign up') {
    return (
      <button className='w-fit flex gap-5 items-center px-1 py-1 font-display text-sm  rounded-full border-2 border-zinc-900 uppercase' onClick={props.toggleForm}>
        {props.text}
        <div className="w-[2vw] h-[2vw] flex items-center justify-center border-2 border-zinc-900 rounded-full">
          <span className='rotate-[90deg]'>
            <FaArrowUpLong />
          </span>
        </div>
      </button>
    )
  } else {
    <button className='w-fit flex gap-5 items-center px-[1vh] py-[1vh] font-display text-sm  rounded-full border-1 uppercase bg-black hover:invert' onClick={props.toggleForm}>
      {props.text}
      <div className="w-[2vw] h-[2vw] flex items-center justify-center border-[2px] rounded-full">
        <span>
          <FaArrowUpLong />
        </span>
      </div>
    </button>
  }
}

export default SwipBtn