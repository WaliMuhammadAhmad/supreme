import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function SideBar() {
    const SideBarItems = ['Stats', 'Project', 'Page3', 'Profile'];
    return (
        <div className='w-full flex gap-10 font-display px-10 py-5 backdrop-blur-sm'>
            <div className='flex flex-col gap-10 text-5xl py-10 w-[15vw] border-2 rounded-xl items-center'>
                {SideBarItems.map((item, index) => (
                    <NavLink to={`/dashboard/${item}`} key={index} className={({ isActive }) => { return isActive ? 'text-6xl' : '' }}>
                        {item}
                    </NavLink>
                ))}
            </div>
            <div className='w-[85vw] h-[80vh] border-2 backdrop-blur-sm rounded-xl'>
                <div className='p-1'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default SideBar