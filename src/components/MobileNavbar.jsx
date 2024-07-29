import React from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";

const MobileNavbar = ({setMenuOpen}) => {
  return (
    <div className=''>
      <nav>
        <div className='absolute top-5 right-10 cursor-pointer'>
            <IoCloseCircleSharp className=' cursor-pointer text-3xl text-[#070022]' onClick={() => setMenuOpen(false)}/>
        </div>
        <div className=' flex justify-center items-center gap-10'>
            <ul className='flex flex-col justify-center items-center gap-7 text-xl text-white font-semibold'>
                <li>Home</li>
                <li>About</li>
                <li>Software</li>
                <li>Services</li>
                <li>Clients</li>
                <li>Contact</li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default MobileNavbar
