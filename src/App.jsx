import React from 'react'
// import Login from './components/pages/Login'
// import UserHome from './components/pages/UserHome'
import LocomotiveScroll from 'locomotive-scroll';
import About from './components/pages/About'

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      {/* <Login /> */}
      {/* <UserHome /> */}
      <About />
    </div>
  )
}

export default App