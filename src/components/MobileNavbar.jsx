import React from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const MobileNavbar = ({setMenuOpen}) => {
  return (
    <motion.div 
    initial={{opacity:0,height:0}}
    animate={{height:'auto',opacity:1,transition:{duration:1,ease:'circInOut'}}}
    exit={{height:0,opacity:1,transition:{duration:1,ease:"circInOut"}}}
    className=''>
      <nav>
        <div className='absolute top-5 right-10 cursor-pointer'>
            <IoCloseCircleSharp className=' cursor-pointer text-3xl text-[#2075bb]' onClick={() => setMenuOpen(false)}/>
        </div>
        <div className=' flex justify-center items-center gap-10'>
            <ul className='flex flex-col justify-center items-center gap-7 text-xl text-[#2075bb] font-bold  MobileNavbarFont p-8'>
                <motion.li
                initial={{ x:-100,opacity:0 }}
                animate={{x:0,opacity:1,transition:{duration:1,ease:'backInOut'}}}
                ><Link to='/' onClick={()=>setMenuOpen(false)}>Home</Link></motion.li>
                <motion.li
                initial={{ x:-100,opacity:0 }}
                animate={{x:0,opacity:1,transition:{duration:1,ease:'backInOut',delay:.2}}}
                ><Link to='/about' onClick={()=>setMenuOpen(false)}>About</Link></motion.li>
                <motion.li
                initial={{ x:-100,opacity:0 }}
                animate={{x:0,opacity:1,transition:{duration:1,ease:'backInOut',delay:.4}}}
                ><Link to='/software' onClick={()=>setMenuOpen(false)}>Software</Link></motion.li>
                <motion.li
                initial={{ x:-100,opacity:0 }}
                animate={{x:0,opacity:1,transition:{duration:1,ease:'backInOut',delay:.6}}}
                ><Link to='/hardwares' onClick={()=>setMenuOpen(false)}>Hardwares</Link></motion.li>
                <motion.li
                initial={{ x:-100,opacity:0 }}
                animate={{x:0,opacity:1,transition:{duration:1,ease:'backInOut',delay:.8}}}
                ><Link to='/services' onClick={()=>setMenuOpen(false)}>Services</Link></motion.li>
                <motion.li
                initial={{ x:-100,opacity:0 }}
                animate={{x:0,opacity:1,transition:{duration:1,ease:'backInOut',delay:.9}}}
                ><Link to='/clients' onClick={()=>setMenuOpen(false)}>Clients</Link></motion.li>
                <motion.li
                initial={{ x:-100,opacity:0 }}
                animate={{x:0,opacity:1,transition:{duration:1,ease:'backInOut',delay:1}}}
                ><Link to='/contact' onClick={()=>setMenuOpen(false)}>Contact</Link></motion.li>
            </ul>
        </div>
      </nav>
    </motion.div>
  )
}

export default MobileNavbar
