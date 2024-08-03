import logo from "../assets/logo.png"
import { CgMenuRight } from "react-icons/cg";
import MobileNavbar from './MobileNavbar';
import React, { useState, useEffect } from 'react';


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState(false)

    useEffect(() => {
        const scrollActive = () => {
            setActive(window.scrollY > 20);
        };
        window.addEventListener("scroll", scrollActive);
        return () => window.removeEventListener('scroll', scrollActive);
    }, []);

    const menuOPenHandler = () => {
        setMenuOpen(!menuOpen)
    }

  return (

    <header className={`GlassNavbar fixed top-0 left-0 w-full py-2 z-[999] transition-all duration-300 ${active ? ' shadow-lg' : 'bg-[#ffffff42]'}`}>
    <div className="z-50">
        {menuOpen && <MobileNavbar setMenuOpen={setMenuOpen} />}
    </div>
    <nav className='flex justify-between items-center section z-50'>
        <div>
            <img src={logo} className='w-[150px] drop-shadow-sm' alt="" />
        </div>
        <div className='hidden md:flex'>
            <ul className="flex justify-center gap-5 items-center font-semibold text-[#2d3eff]">
                <li className="cursor-pointer NavbarFont">Home</li>
                <li className="cursor-pointer NavbarFont">About</li>
                <li className="cursor-pointer NavbarFont">Software</li>
                <li className="cursor-pointer NavbarFont">Services</li>
                <li className="cursor-pointer NavbarFont">Clients</li>
                <li className="cursor-pointer NavbarFont">Contact</li>
            </ul>
        </div>
        <div className="md:hidden">
            <CgMenuRight className='text-2xl font-bold text-[#0d00ff] cursor-pointer drop-shadow-sm' onClick={() => setMenuOpen(true)} />
        </div>
    </nav>
</header>
  )
}

export default Navbar
