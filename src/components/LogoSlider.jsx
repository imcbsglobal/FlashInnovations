import React from 'react'
import impact from "../assets/impact.png"
import posi from "../assets/posi.png"
import honey from "../assets/honey.png"
import rug from "../assets/rugtek.png"
import adler from "../assets/adler.png"
import tsc from "../assets/tsc.png"
import tvs from "../assets/tvs.png"
import epson from "../assets/epson.png"
import restol from "../assets/retsol.png"
import zebra from "../assets/zebra.png"
import imin from "../assets/imin.png"
import hik from "../assets/hik.png"
import dell from "../assets/dell.png"
import hp from "../assets/hp.png"
import acer from "../assets/acer.png"
import lenovo from "../assets/lenovo.png"
import asus from "../assets/asus.png"
import canon from "../assets/canon.png"
import wd from "../assets/wd.png"
import seagate from "../assets/seagate.png"
import toshibha from "../assets/toshiba.png"
import {motion} from "framer-motion"

const LogoSlider = () => {
    const logos = [
        { id: 1, src: impact},
        { id: 2, src: posi},
        { id: 3, src: honey},
        { id: 4, src: rug},
        { id: 5, src: adler},
        { id: 6, src: tsc},
        { id: 7, src: tvs},
        { id: 8, src: epson},
        { id: 9, src: restol},
        { id: 10, src: zebra},
        { id: 11, src: imin},
        { id: 12, src: hik},
        { id: 13, src: dell},
        { id: 14, src: hp},
        { id: 15, src: acer},
        { id: 16, src: lenovo},
        { id: 16, src: asus},
        { id: 16, src: canon},
        { id: 16, src: wd},
        { id: 16, src: seagate},
        { id: 16, src: toshibha},

    ];
    const animationVariants = {
        animate: {
            x: ['0%', '-100%'],
            transition: {
                x: {
                    duration: logos.length * 2, // Adjust speed based on the number of logos
                    ease: 'linear',
                    repeat: Infinity,
                },
            },
        },
    };
  return (
    <div className='logo-slider'>
        <motion.div
         className="logo-slider md:gap-[40px] lg:gap-[60px]" variants={animationVariants} animate="animate"
        >
            {logos.map((logo)=>(
                <motion.img
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                key={logo.id}
                src={logo.src} className='logo' alt="" />
            ))}
        </motion.div>
    </div>
  )
}


export default LogoSlider
