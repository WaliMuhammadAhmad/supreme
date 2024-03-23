import React from 'react'

function Topbar(props) {
  return (
    <div className="navbar w-full px-[1vw] py-[2vh] backdrop-blur-sm">
      <div className="flex-1">
        <a className='invert flex w-[10vw]' href="#">
          <img src="img\logo\supreme.svg" alt="" />
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt={props.name} src={props.img} />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 border-2 rounded-box w-[10vw] text-display backdrop-blur-lg">
            <li><a>Change View</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Topbar