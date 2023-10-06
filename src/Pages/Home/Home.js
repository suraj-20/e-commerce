import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero';
import Locations from '../../Components/Locations/Locations';

const Home = () => {
  return (
    <section className='homeSection'>
      <Navbar />
      <Hero />
      <Locations />
    </section>
  )
}

export default Home
