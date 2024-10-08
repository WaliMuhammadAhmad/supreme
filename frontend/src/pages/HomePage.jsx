import React from 'react'
import Navbar from '../components/Navbar'
import Landingpage from '../components/Landingpage'
import Marquee from '../components/Marquee'
import Featured from '../components/Featured'
import Cards from '../components/Cards'
import Start from '../components/Start'
import Footer from '../components/Footer'
import EyesContainer from '../components/EyesContainer'

function HomePage() {
  
  const storedUser = JSON.parse(localStorage.getItem('user'));

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let text = {
    title1: 'we create',
    title2: 'eye-opening',
    title3: 'presentations',
    url: 'img/asserts/eopening.jpg',
    subtitle: 'for public and private use',
    description: 'we tell your story',
    btnText: 'Start the project',
    btnLink: '/project',
    scroll: -0.3
  };

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar user={storedUser} />
      <Landingpage {...text} />
      <Marquee />
      <EyesContainer />
      <Featured />
      <Start />
      <Cards />
      <Footer />
    </div>
  )
}

export default HomePage