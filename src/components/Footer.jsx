import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    

    
    <div className='w-2/3 mx-auto bg-white my-10 flex justify-around rounded-3xl p-6'>
        <div className=''>
            <p className='text-xl font-semibold'>Follow us @</p>
            <ul className='flex gap-4 mt-2'>
                <li>
                    <Link to=""><FaFacebookF className='text-xl' /></Link>
                </li>
                <li>
                    <Link to=""><FaInstagramSquare className='text-xl' /></Link>
                </li>
                <li>
                    <Link to=""><FaTwitter className='text-xl' /></Link>
                </li>
            </ul>

        </div>
        <div>
            <p>www.creativity@gmail.com</p>
        </div>
    </div>
    
  )
}

export default Footer
