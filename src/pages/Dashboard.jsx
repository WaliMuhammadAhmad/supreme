import React from 'react'
import Topbar from '../dashboard/Topbar'
import SideBar from '../dashboard/SideBar'

function Dashboard() {
    const person = {
        name: 'Wali Muhammad',
        img: 'img/social/founder.jpg'
    }
    
  return (
    <div className='h-screen bg-cover bg-[url("C:\Users\wali\Documents\Project\supreme\public\img\logo\logo.svg")]'>
        <Topbar {...person} />
        <SideBar />
    </div>
  )
}

export default Dashboard