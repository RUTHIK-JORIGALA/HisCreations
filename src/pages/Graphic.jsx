import React from 'react'
import './graphic.css';
import { Link } from 'react-router-dom';
const Graphic = () => {
  return (
    <div className=' bg-red-400 '>
      <div className=" h-36 bg-blue-400 relative rounded-b-3xl shadow-xl">
        <div className="bg-graphic">
          <div className='px-10 text-white pt-4'>
            <h1 className='text-5xl font-serif'>GRAPHIC</h1>
            <p className="pl-32 font-cursive text-5xl">Designing</p>
          </div>
          <div className=" h-60 w-60  bg-white rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  
          </div>
        </div>
      </div>

      {/* Plans */}
      <Link to="/pricing">
      <div className=' w-64 mx-auto py-8 bg-white text-center border flex items-center justify-center text-black text-3xl rounded-3xl'>
        PLANS
      </div>
      </Link>

      {/* Book a Call */}

        <p className='fixed top-96 -right-12 transform rotate-90 text-black bg-white px-6 py-3 rounded-b-3xl font-bold tracking-wide'>BOOK A CALL</p>
      
    </div>

  )
}

export default Graphic
