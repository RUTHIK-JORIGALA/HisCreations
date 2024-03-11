import React from 'react'
import './graphic.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
const Graphic = () => {
  return (
    <div className=' bg-red-400  pt-36'>
      {/* <div className=" h-36 bg-blue-400 relative rounded-b-3xl shadow-xl">
        <div className="bg-graphic">
          <div className='px-10 text-white pt-4'>
            <h1 className='text-5xl font-serif'>GRAPHIC</h1>
            <p className="pl-32 font-cursive text-5xl">Designing</p>
          </div>
          <div className=" h-60 w-60  bg-white rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  
          </div>
        </div>
      </div> */}
      <Header/>
      <Navbar/>
      
      <div className='w-4/5 mx-auto py-14 text-4xl text-center leading-relaxed'>
        Whether you're a startup looking for a fresh identity or an established business seeking a design refresh, we're here to bring
         <span className='text-white'> your VISION to LIFE</span>
      </div>
      <div className='bg-blue-400 w-4/5 mx-auto relative h-56 rounded-large  '>
        <div className='bg-white w-full absolute h-52 rounded-3xl flex justify-center items-center '>
          <p className='text-6xl font-bold'>Graphic Designing</p>
        </div>
      </div>
      <div className='bg-white w-1/3 mx-auto h-52 flex flex-col justify-center items-center mb-6 rounded-b-3xl'>
        <h1 className='text-6xl font-semibold'>Amazon</h1>
        <p className='text-[2rem] font-semibold'>Listing Services</p>
      </div>

      <div className='my-6'>
        <div className='bg-blue-400 w-1/3 rounded-r-3xl py-3'>
          <p className='text-right text-3xl pr-4'>Product Listings:</p>
        </div>
        <ul className='w-3/5 mx-auto py-4'>
          <li className='text-2xl'>Well-optimized Amazon listings improve search rankings, making it easier for potential customers to find your  products.
            We call it <span className='font-bold'>Increased Visibility</span>
          </li>
        </ul>
      </div>
      

      {/* Plans */}
      <Link to="/pricing" >
        <div className='w-3/5 mx-auto  py-8 bg-white text-center border flex items-center justify-center text-black text-3xl rounded-3xl'>
          Check which plan suits you better
        </div>
      </Link>




      {/* Book a Call */}
        <p className='fixed top-96 -right-12 transform rotate-90 text-black bg-white px-6 py-3 rounded-b-3xl font-bold tracking-wide z-50'>BOOK A CALL</p>
      
    </div>

  )
}

export default Graphic
