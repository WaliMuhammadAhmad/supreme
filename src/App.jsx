import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
// import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
// import Login from './pages/Login'
// import HomePage from './pages/HomePage'
// import About from './pages/About'
// import Approach from './pages/Approach';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      {/* <Login /> */}
      {/* <HomePage /> */}
      {/* <About /> */}
      {/* <Approach /> */}
      <UserDashboard />
      {/* <AdminDashboard /> */}
    </div>
  )
}

export default App