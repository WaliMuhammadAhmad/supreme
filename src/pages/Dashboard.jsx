import React from 'react'
import Topbar from '../dashboard/Topbar'
import SideBar from '../dashboard/SideBar'

function Dashboard() {
    const person = {
        name: 'Wali Muhammad',
        img: 'img/social/founder.jpg'
    }
    
  return (
    <div className='h-screen bg-gradient-to-b from-lime-400 via-teal-700 to-teal-900'>
        <Topbar {...person} />
        <SideBar />
    </div>
  )
}

export default Dashboard