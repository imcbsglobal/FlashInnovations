import React from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const MobileNavbar = ({setMenuOpen}) => {
  return (
    <div className=''>
      <nav>
        <div className='absolute top-5 right-10 cursor-pointer'>
            <IoCloseCircleSharp className=' cursor-pointer text-3xl text-[#070022]' onClick={() => setMenuOpen(false)}/>
        </div>
        <div className=' flex justify-center items-center gap-10'>
            <ul className='flex flex-col justify-center items-center gap-7 text-xl text-[#171717]  NavbarFont p-8'>
                <li><Link to='/' onClick={()=>setMenuOpen(false)}>Home</Link></li>
                <li><Link to='/about' onClick={()=>setMenuOpen(false)}>About</Link></li>
                <li><Link to='/software' onClick={()=>setMenuOpen(false)}>Software</Link></li>
                <li><Link to='/services' onClick={()=>setMenuOpen(false)}>Services</Link></li>
                <li><Link to='/clients' onClick={()=>setMenuOpen(false)}>Clients</Link></li>
                <li><Link to='/contact' onClick={()=>setMenuOpen(false)}>Contact</Link></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default MobileNavbar
