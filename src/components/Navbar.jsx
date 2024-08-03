import logo from "../assets/logo.png"
import { CgMenuRight } from "react-icons/cg";
import MobileNavbar from './MobileNavbar';
import React, { useState, useEffect } from 'react';


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const menuOPenHandler = () => {
        setMenuOpen(!menuOpen)
    }

  return (

      <header className='GlassNavbar py-2 rounded-b-3xl bg-[#ffffff42] z-50'>
        <div className=" z-50">
            {menuOpen && <MobileNavbar setMenuOpen = {setMenuOpen}/>}
        </div>
        <nav className=' flex justify-between items-center section z-50'>
            <div>
                <img src={logo} className=' w-[150px] drop-shadow-sm' alt="" />
            </div>
            <div className=' hidden md:flex'>
                <ul className=" flex justify-center gap-5 items-center font-semibold text-[#2d3eff]">
                    <li className=" cursor-pointer NavbarFont">Home</li>
                    <li className=" cursor-pointer NavbarFont">About</li>
                    <li className=" cursor-pointer NavbarFont">Software</li>
                    <li className=" cursor-pointer NavbarFont">Services</li>
                    <li className=" cursor-pointer NavbarFont">Clients</li>
                    <li className=" cursor-pointer NavbarFont">Contact</li>
                </ul>
            </div>
            <div className=" md:hidden">
                <CgMenuRight className=' text-2xl font-bold text-[#0d00ff] cursor-pointer drop-shadow-sm' onClick={setMenuOpen}/>
            </div>
        </nav>
      </header>
  )
}

export default Navbar
