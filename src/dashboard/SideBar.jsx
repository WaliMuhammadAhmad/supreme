import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function SideBar() {
    const SideBarItems = ['Page1', 'Page2', 'Page3', 'Page4'];
    return (
        <div className='w-full flex gap-10 font-display text-5xl px-10 py-5 backdrop-blur-sm'>
            <div className='flex flex-col gap-10 font-display text-5xl py-10 w-[15vw] border-2 rounded-xl items-center'>
                {SideBarItems.map((item, index) => (
                    <NavLink to={`/dashboard/${item}`} key={index} className={({isActive}) => { return isActive ? 'text-6xl' : ''}}>
                        {item}
                    </NavLink>
                ))}
            </div>
            <div className='w-[85vw] h-[80vh] bg-teal-800 rounded-xl py-10'>
                <Outlet />
            </div>
        </div>
    )
}

export default SideBar