import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const AboutUs = () => {
  return (
    <div className='bg-red-400 pt-32'>
        <Header/>
        <Navbar/>
        <div className='w-4/5 mx-auto text-center'>
            
            <div className=' bg-white rounded-3xl p-4 text-3xl mt-4'>
                Welcome to @@@@@ - Where Imagination Meets Design! At
                @@@@@, we are passionate about transforming ideas into
                visually stunning realities. As one of the best graphic design
                studio, we specialize in creating captivating and innovative
                designs that elevate your brand and leave a lasting
                impression.
            </div>
            <h1 className='text-3xl text-white py-4 font-bold tracking-wide'>Our Story</h1>
            <div className='text-3xl '>
                @@@@@@@@@ has emerged as a creative powerhouse,
                driven by a team of talented and experienced graphic
                designers. With a shared commitment to excellence and a
                deep love for design, we have successfully brought
                countless visions to life, helping businesses and individuals
                stand out in a visually cluttered world.
            </div>
            <div className='bg-white text-3xl w-1/2 mx-auto py-4 rounded-3xl my-4'>
                wanna have a chat with us?
            </div>
        </div>
      <Footer/>
      <div className='py-4'>

      </div>
    </div>
  )
}

export default AboutUs
