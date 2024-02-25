import React from 'react'

import { useState } from 'react';

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


  return (
    <nav className="w-3/5 mx-auto py-6 bg-white rounded-full px-6 ">

      <ul className="list-none flex justify-between items-center ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-semibold cursor-pointer text-3xl tracking-wide ${
              active === nav.title ? "bg-blue-400 rounded-3xl px-4 py-2 " : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar



