import React from 'react'
import Navbar from '../components/Navbar'
import CardContainer from '../components/CardContainer'
import Featured from '../components/Featured'
import Founder from '../components/Founder'
import Meet from '../components/Meet'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

function Approach() {

  let msg = {
    title: 'Founder’s Message',
    text: 'We are a team of professional designers and developers who are dedicated to creating beautiful and effective websites and presentations. We are passionate about our work and we love to turn our clients visions into reality. We are committed to providing the best possible service to our clients and we are always looking for new ways to improve our work. We are always looking for new challenges and we'
};

  return (
    <div>
      <Navbar />
      <CardContainer />
      <Founder {...msg} />
      <Meet />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default Approach