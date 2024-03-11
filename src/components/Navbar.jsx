import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [active, setActive] = useState("Home");
  
  const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "aboutus",
      title: "About Us",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const handleActive = (event, title) =>{
    event.preventDefault()
    setActive(title)
  }

  console.log(active)

  return (
    <nav className="w-3/5 mx-auto py-1 bg-white rounded-full px-6 ">

      <ul className="list-none flex justify-between items-center ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins h-12 font-semibold cursor-pointer text-3xl tracking-wide flex items-center ${
              active === nav.title ? "bg-blue-400 transition ease-in-out duration-700 rounded-3xl px-4 " : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={(event) => handleActive(event,nav.title)}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
            {/* <Link to={`/${nav.id}`} >{nav.title}</Link> */}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar



