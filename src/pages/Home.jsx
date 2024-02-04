import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='bg-red-400  relative overflow-hidden '>
        <div className=" h-60 w-60  bg-white rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <Link className='' to="/"><img className='mt-36 ml-10 h-20 ' src='Images/logo.png' alt='logo'/></Link>
        </div>
        <div className='h-48'></div>

        <div className=''>
            <div className='bg-blue-400 h-96 w-5/12 pt-8 rounded-large mx-auto'>
                <div className='bg-white h-full pt-16 pl-12 rounded-3xl'>
                    <h1 className='text-5xl font-serif'>GRAPHIC</h1>
                    <p className="pl-32 font-cursive text-5xl">Designing</p>
                </div>
            </div>

            
            <div className='bg-blue-400 h-96 w-4/12 pt-8 rounded-large absolute top-1/2 -left-32'>
                <div className='bg-white h-full pt-16 pl-12 rounded-3xl'>
                    <h1 className='text-5xl font-serif'>GRAPHIC</h1>
                    <p className="pl-32 font-cursive text-5xl">Designing</p>
                </div>
            </div>
            <div className='bg-blue-400 h-96 w-4/12 pt-8 rounded-large absolute top-1/2 -right-32'>
                <div className='bg-white h-full pt-16 pl-12 rounded-3xl'>
                    <h1 className='text-5xl font-serif'>GRAPHIC</h1>
                    <p className="pl-32 font-cursive text-5xl">Designing</p>
                </div>
            </div>
            
        </div>
        <div className='h-64'>

        </div>
      
    </div>
  )
}

export default Home
