import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero';
import Locations from '../../Components/Locations/Locations';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <section className='homeSection'>
      <Navbar />
      <Hero />
      <Locations />
      <Footer />
    </section>
  )
}

export default Home
