import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const [pricing1active, setPricing1Active] = useState(true)
  const [pricing2active, setPricing2Active] = useState(false)
  const [pricing3active, setPricing3Active] = useState(false)

  const plan1 = () =>{
      setPricing1Active(true);
      setPricing2Active(false);
      setPricing3Active(false);
  }
  const plan2 = () =>{
      setPricing1Active(false);
      setPricing2Active(true);
      setPricing3Active(false);
  }
  const plan3 = () =>{
      setPricing1Active(false);
      setPricing2Active(false);
      setPricing3Active(true);
  }
  return (
    <div className='h-full bg-red-400 '>
      <div className=" h-36 bg-blue-300 relative rounded-b-3xl shadow-xl">
        <div className="bg-graphic">
          <div className='px-10 text-white pt-4'>
            <h1 className='text-5xl font-serif'>GRAPHIC</h1>
            <p className="pl-32 font-cursive text-5xl">Designing</p>
          </div>
          <div className=" h-60 w-60  bg-white rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  <Link className='' to="/"><img className='mt-36 ml-10 h-20 ' src='Images/logo.png' alt='logo'/></Link>
                
          </div>
        </div>
      </div>

      <div className='h-28 shadow-xl w-64 mx-auto bg-blue-300 rounded-b-large'>
        <div className=' bg-red-400 w-64 h-24 rounded-b-3xl flex justify-center items-center'>
          <p className='text-4xl text-white'>PLANS</p>
        </div>

      </div>

      {/* Pricing Plans */}

      <div className='p-12   flex '>
        <div className='flex gap-10 flex-col '>

          {
            pricing1active ?
            <div className='w-full bg-blue-300 pl-4 rounded-l-large  '>
              <div className='pl-4  h-32 bg-white rounded-l-3xl '>
              </div>
            </div> : 
            <div className='w-64 rounded-3xl  mr-24 hover:cursor-pointer ' onClick={plan1}>
              <div className=' h-32 bg-white rounded-3xl  '>
              </div>
            </div>
          }

          {
            pricing2active ?
            <div className='w-full bg-blue-300 pl-4 rounded-l-large  '>
              <div className='pl-4  h-32 bg-white rounded-l-3xl '>
              </div>
            </div> : 
            <div className='w-64 rounded-3xl mr-24 hover:cursor-pointer ' onClick={plan2}>
              <div className=' h-32 bg-white rounded-3xl '>
              </div>
            </div>
          }
          {
            pricing3active ?
            <div className={`w-full bg-blue-300 pl-4 rounded-l-large  `}>
              <div className='pl-4  h-32 bg-white rounded-l-3xl '>
              </div>
            </div> : 
            <div className='w-64 rounded-3xl hover:cursor-pointer ' onClick={plan3}>
              <div className=' h-32 bg-white rounded-3xl '>
              </div>
            </div>
          }

          

        </div>
        <div className={`bg-white w-full rounded-r-large  ${pricing2active ? 'rounded-l-3xl':''} ${pricing3active ? 'rounded-tl-large': ''} ${pricing1active ? 'rounded-bl-large': ''}`}>

        </div>
      </div>
      
    </div>
  )
}

export default Pricing
