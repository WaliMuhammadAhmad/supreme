import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
// import Login from './components/pages/Login'
// import UserHome from './components/pages/UserHome'
// import About from './components/pages/About'
import Approach from './components/pages/Approach';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      {/* <Login /> */}
      {/* <UserHome /> */}
      {/* <About /> */}
      <Approach />
    </div>
  )
}

export default App