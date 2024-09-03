import logo from "../assets/logo.png"
import { CgMenuRight } from "react-icons/cg";
import MobileNavbar from './MobileNavbar';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
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

    const location = useLocation()

    const getLinkClassName = (path) => {
        return location.pathname === path
            ? 'NavbarHover active-link'
            : 'NavbarHover';
    };

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
                <Link className={getLinkClassName("/")} to='/'><li className="cursor-pointer NavbarFont">Home</li></Link>
                <Link className={getLinkClassName("/about")} to='/about'><li className="cursor-pointer NavbarFont">About</li></Link>
                <Link className={getLinkClassName("/Software")} to='/Software'><li className="cursor-pointer NavbarFont">Softwares</li></Link>
                <Link className={getLinkClassName("/hardwares")} to='/hardwares'><li className="cursor-pointer NavbarFont">Hardwares</li></Link>
                <Link className={getLinkClassName("/services")} to='/services'><li className="cursor-pointer NavbarFont">Services</li></Link>
                <Link className={getLinkClassName("/clients")} to='/clients'><li className="cursor-pointer NavbarFont">Clients</li></Link>
                <Link className={getLinkClassName("/contact")} to='/contact'><li className="cursor-pointer NavbarFont">Contact</li></Link>
            </ul>
        </div>
        <div className="hidden md:flex justify-start items-start flex-col gap-1">
            <a href="tel:+91 8050695416">
                <div className=" flex justify-center items-center gap-2">
                    {/* Icon */}
                    <div className="text-[#2075bb]"><FaPhoneAlt/></div>
                    <div className="font-semibold">+91 8050695416</div>
                </div>
            </a>
            <a href="mailto:innovationsflash@gmail.com">
                <div className="flex justify-center items-center gap-2">
                    {/* Icon */}
                    <div className="text-[#2075bb]"><MdEmail/></div>
                    <div className="font-semibold">innovationsflash@gmail.com</div>
                </div>
            </a>
        </div>
        <div className="md:hidden">
            <CgMenuRight className='text-2xl font-bold text-[#2075bb] cursor-pointer drop-shadow-sm' onClick={() => setMenuOpen(true)} />
        </div>
    </nav>
</header>
  )
}

export default Navbar
