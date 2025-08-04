import React from 'react'
import logo from "../assets/logo-white.png"
import { IoCallSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <section className='Waves relative z-[997]'>
        <div className=' w-full h-[30%]'>
            <div className='wave wave1'></div>
            <div className='wave wave2'></div>
            <div className='wave wave3'></div>
            <div className='wave wave4'></div>
        </div>
        <div className='WaveFooter w-full h-[100%] mt-[-360px] md:mt-[-162px] lg:mt-[-75px] bg-[#2075bb] z-[997] relative'>
            <div className='grid grid-cols-1 place-items-center place-content-center gap-10 px-6 md:grid-cols-2 lg:grid-cols-4 md:place-content-start lg:max-w-[1200px] md:mx-auto md:place-items-center'>
                <div className='flex flex-col justify-center items-center text-center gap-2'>
                    <div className=' w-auto h-[80px] mt-10'>
                        <img src={logo} className=' w-full h-full object-cover drop-shadow-2xl' alt="" />
                    </div>
                    <div className=' text-sm text-[#ffffff] '>
                        103,First Floor POLYVISTA CLINIC, 9th Cross Road,4th Main, HBR Layout, !st Stage Hennur Bangalore-560043
                    </div>
                    <div className='text-white'>Customer Care Number</div>
                    <a href="tel:+91 8050695416">
                        <div className=' flex justify-center items-center gap-2'>
                            <div className='text-xl text-[#ffffffe9]'><IoCallSharp/></div>
                            <div className=' font-semibold text-white'>+91 8050695416</div>
                        </div>
                         <div className=' flex justify-center items-center gap-2'>
                            <div className='text-xl text-[#ffffffe9]'><IoCallSharp/></div>
                            <div className=' font-semibold text-white'>+91 9995175602</div>
                        </div>
                    </a>
                    <div className=' flex items-center justify-center gap-2'>
                        <div className=' bg-[#000000e9] p-1 rounded-full text-[#fff] shadow-lg'>
                            <FaFacebook className=''/>
                        </div>
                        <div className='bg-[#000000e9] p-1 rounded-full text-[#fff] shadow-lg'>
                            <RiInstagramFill/>
                        </div>
                        <div className='bg-[#000000e9] p-1 rounded-full text-[#fff] shadow-lg'>
                            <RiWhatsappFill/>
                        </div>
                    </div>
                </div>

                {/* Software Service */}
                <div className=' z-[999]'>
                <div className=' font-bold text-[#ffffffe9] text-xl text-center mb-5'>Our Services</div>
                    <ul className='flex flex-col justify-center items-center gap-2 font-semibold text-[#ffffff]'>
                        <li>Inventory Softwares</li>
                        <li>Custom Web Application</li>
                        <li>Mobile App Development</li>
                        <li>Graphic Designing</li>
                        <li>Branding</li>
                        <li>Digital Marketing</li>
                        <li>E-Commerce</li>
                        <li>Whatsapp / SMS Marketing</li>
                        <li>Inventory Softwares</li>
                    </ul>
                </div>

                {/* Hardware Service */}
                <div className=' relative z-[999]'>
                    <div className=' font-bold text-[#ffffffe9] text-xl mb-5'>Our Hardware Solutions</div>
                    <ul className='flex flex-col justify-center items-center gap-2 font-semibold text-[#ffffff]'>
                        <li>POS</li>
                        <li>Computers</li>
                        <li>Printers</li>
                        <li>Scanners</li>
                        <li>Cash Drawer</li>
                        <li>Labels</li>
                        <li>Networking</li>
                        <li>Biometric</li>
                        <li>CCTV</li>
                        <li>Weighting Scale</li>
                    </ul>
                </div>

                <div className=' relative z-[999]'>
                    <div className=' font-bold text-[#ffffffe9] text-xl mb-5'>Our Company</div>
                    <ul className='flex flex-col justify-center items-center gap-2 font-semibold text-[#ffffff]'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Software</li>
                        <li>Services</li>
                        <li>Clients</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

            </div>
        </div>

        {/* Bottom Tight */}
        {/* <div className=' absolute w-full h-[300px] bg-[#ffffff] bottom-0 left-0 -z-10'></div> */}
        <div className=' absolute bottom-0 w-full h-[100px] bg-[#ffffff] m-0 p-0 flex justify-center items-center z-[999]'>
            <div className=' text-center flex justify-center items-center text-[#000] font-normal'>copyright©2024 <span className=' ml-1 font-semibold text-[#2075bb]'>Flash Innovations</span></div>
        </div>
    </section>
  )
}

export default Footer
