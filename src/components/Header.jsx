import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
    <div className='absolute w-64 h-64 bg-white rounded-full left-1/2 -top-1 transform -translate-x-1/2 -translate-y-1/2 flex items-end justify-center cursor-pointer'>
        <Link to="home" className='pb-10 cursor-pointer font-bold text-xl'>Cup</Link>
        {/* <p className='pb-10 text-xl cursor-pointer'>Hello</p> */}
    </div>
  )
}

export default Header
