import logo from "../assets/logo.png"
import { CgMenuRight } from "react-icons/cg";
import MobileNavbar from './MobileNavbar';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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

    <header className={`GlassNavbar fixed top-0 left-0 w-full py-2 z-[999] rounded-b-3xl transition-all duration-300 ${active ? ' shadow-lg bg-[white]' : 'bg-[#ffffff]'}`}>
    <div className="z-50">
        {menuOpen && <MobileNavbar setMenuOpen={setMenuOpen} />}
    </div>
    <nav className='flex justify-between items-center section z-50 llg:w-[1200px]'>
        <div>
            <img src={logo} className='w-[150px] drop-shadow-sm' alt="" />
        </div>
        <div className='hidden md:flex md:gap-5'>
            <ul className="flex justify-center gap-5 items-center font-bold text-[#000000]">
                <li className="cursor-pointer NavbarFont"><Link to='/'>Home</Link></li>
                <li className="cursor-pointer NavbarFont"><Link to='/about'>About</Link></li>
                <li className="cursor-pointer NavbarFont"><Link to='/Software'>Softwares</Link></li>
                <li className="cursor-pointer NavbarFont"><Link to='/services'>Services</Link></li>
                <li className="cursor-pointer NavbarFont"><Link to='/clients'>Clients</Link></li>
                <li className="cursor-pointer NavbarFont"><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
        <div className="hidden md:flex justify-start items-start flex-col gap-1">
            <div className=" flex justify-center items-center gap-2">
                {/* Icon */}
                <div className="text-[#2075bb]"><FaPhoneAlt/></div>
                <div className="font-semibold">+91 9776556476879</div>
            </div>
            <div className="flex justify-center items-center gap-2">
                {/* Icon */}
                <div className="text-[#2075bb]"><MdEmail/></div>
                <div className="font-semibold">info@flashinnovations.in</div>
            </div>
        </div>
        <div className="md:hidden">
            <CgMenuRight className='text-2xl font-bold text-[#0d00ff] cursor-pointer drop-shadow-sm' onClick={() => setMenuOpen(true)} />
        </div>
    </nav>
</header>
  )
}

export default Navbar
