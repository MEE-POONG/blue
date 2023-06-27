import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';


const Navbar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'portfolio'
    },
    {
      id: 3,
      link: 'skills'
    },
    {
      id: 4,
      link: 'expectation'
    }
  ]

  return (
    <div className='flex  justify-around items-center w-full h-20
   px-4 te text-white bg-black fixed'>
      <div>
        <h1 className='text-8xl font-signature ml-2'>Night</h1>
      </div>

      <ul className='hidden md:flex'>
        
        {links.map(({id, link}) => (
        <li 
        key={id} className='px-4 cursor-pointer capitalize font-medium
        text-orange-500 hover:scale-105'>
          {link}
          </li>
        ))}


      </ul>

      <div onClick={() =>setNav(!nav)} className='cursor-pointer 
      r-4 z-10 text-orange-700 md:hidden'>
        {nav ?<FaTimes size={30} /> : <FaBars  size={30}/>}
      </div>

          {nav &&(

      <ul className='flex flex-col justify-center items-center 
      absolute top-0 left-0 w-full h-screen 
      bg-gradient-to-b from-orange-400 to-gray-500'>
        {links.map(({id, link}) => (
        <li 
        key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
          {link}
          </li>
        ))}
          
      </ul>
        )}
    </div>
  )
}

export default Navbar;


