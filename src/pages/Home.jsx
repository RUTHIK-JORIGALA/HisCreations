import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  
  // console.log(location.pathname);
  return (
    <div className='bg-red-300  pt-36 ' >
        <div className='absolute w-64 h-64 bg-white rounded-full left-1/2 -top-1 transform -translate-x-1/2 -translate-y-1/2'>

        </div>
        {/* <div className='bg-white h-14 w-3/5 mx-auto rounded-full shadow-xl flex justify-center items-center px-12 '>
            <ul className='w-full flex justify-between '>
                <li><NavLink to="/" className="font-bold text-xl bg-blue-400 px-4 py-2 rounded-full tracking-wider"> Home</NavLink></li>
                <li><NavLink to="/" className="font-bold text-xl tracking-wider "> Services</NavLink></li>
                <li><NavLink to="/" className="font-bold text-xl tracking-wider"> Abous us</NavLink></li>
                <li><NavLink to="/" className="font-bold text-xl tracking-wider"> Contact</NavLink></li>
            </ul>
        </div>   */}

        <Navbar />

        <div className='w-3/4 mx-auto my-20 flex justify-evenly text-white text-5xl font-semibold'>
          <span>Crafting</span> - 
          <span>Innovative</span> - 
          <span>Elevate</span>
        </div>

        <div className='w-4/5 bg-slate-100 mx-auto rounded-3xl p-6'>
          <p className='text-3xl text-center leading-10'>Welcome to our vibrant and innovative graphic design platform, where creativity knows no bonds! Discover a world where visuals come to life, and your ideas take center stage. Whether you're a seasoned designer or a budding creative spirit, our website is your go-to destination for all things graphic design. 
          </p>
        </div>

        <div className='w-4/5 h-96 py-10 mx-auto flex justify-between gap-14'>
          <div className='bg-white flex-1 rounded-3xl flex justify-between items-center p-6'>
            <p className='text-3xl text-center'>with your DIY route, it became clear that your current brand isn't doing you any favors. Time to switch to professionals like us</p>
          </div>
          <div className='flex-1'>
              Say Goodbye to DIY
          </div>
        </div>

        <div className='w-4/5 h-96 py-10 mx-auto flex justify-between gap-14'>
          
          <div className='flex-1'>
              Say Goodbye to DIY
          </div>

          <div className='bg-white flex-1 rounded-3xl flex justify-between items-center p-6'>
            <p className='text-3xl text-center'>with your DIY route, it became clear that your current brand isn't doing you any favors. Time to switch to professionals like us</p>
          </div>  
        </div>

        <div className='w-4/5 h-96 py-10 mx-auto flex justify-between gap-14'>
          <div className='bg-white flex-1 rounded-3xl flex justify-between items-center p-6'>
            <p className='text-3xl text-center'>with your DIY route, it became clear that your current brand isn't doing you any favors. Time to switch to professionals like us</p>
          </div>
          <div className='flex-1'>
              Say Goodbye to DIY
          </div>
        </div>

        <div className='bg-white p-6 rounded-3xl w-1/3 mx-auto'>
          <p className='text-3xl text-center'>See how our MAGIC works</p>
        </div>

        <Footer/>
        <div className='py-1'>

        </div>
    </div>
  )
}

export default Home
