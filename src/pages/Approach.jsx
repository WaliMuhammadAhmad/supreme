import React from 'react'
import Navbar from '../components/Navbar'
import CardContainer from '../components/CardContainer'
import Featured from '../components/Featured'
import Founder from '../components/Founder'
import Meet from '../components/Meet'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

function Approach() {
  return (
    <div>
      <Navbar />
      <CardContainer />
      <Founder />
      <Meet />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default Approach