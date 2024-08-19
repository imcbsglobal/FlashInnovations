import React from 'react'
import techVideo from "../assets/tech-video3.mp4"
import blueShade from "../assets/blue-shade.png"
import pos from "../assets/pos.png"
import computer from "../assets/computer.png"
import barcodePrinter from "../assets/barcode-printer.png"
import printers from "../assets/printer.png"
import handBarcode from "../assets/hand-barcode-scanner.png"
import tableBarcode from "../assets/table-barcode-scanner.png"
import lables from "../assets/labels.png"
import cashDrawer from "../assets/cash-drawer.png"
import weighting from "../assets/weight-scale.png"
import cctv from "../assets/cctv.png"
import biometric from "../assets/biometric.png"
import networking from "../assets/networkingpng.png"
import Footer from './Footer';
import aboutBanner from "../assets/hardware-banner.jpeg"
import blackShade from "../assets/black-shade.png"
import bottomImage from "../assets/bottom-image.png"
import { inView, motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import ComputingHardaware from "../assets/computing-hardware.jpg"
import AdvancedSecurity from "../assets/advanced-security.jpeg"
import efficientStorage from "../assets/efficient-storage.jpg"
import reliableNetwork from "../assets/reliable-equipment.jpg"
import customizable from "../assets/customizable.jpg"
import integratedHardware from "../assets/Integrated-hardware.jpg"


const Services = () => {

  
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true });
  const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: true });
  const { ref: ref8, inView: inView8 } = useInView({ triggerOnce: true });
  const { ref: ref9, inView: inView9 } = useInView({ triggerOnce: true });
  const { ref: ref10, inView: inView10 } = useInView({ triggerOnce: true });
  const { ref: ref11, inView: inView11 } = useInView({ triggerOnce: true });
  const { ref: ref12, inView: inView12 } = useInView({ triggerOnce: true });
  const { ref: ref13, inView: inView13 } = useInView({ triggerOnce: true });
  const { ref: ref14, inView: inView14 } = useInView({ triggerOnce: true });
  const { ref: ref15, inView: inView15 } = useInView({ triggerOnce: true });
  const { ref: ref16, inView: inView16 } = useInView({ triggerOnce: true });
  const { ref: ref17, inView: inView17 } = useInView({ triggerOnce: true });
  const { ref: ref18, inView: inView18 } = useInView({ triggerOnce: true });
  const { ref: ref19, inView: inView19 } = useInView({ triggerOnce: true });
  const { ref: ref20, inView: inView20 } = useInView({ triggerOnce: true });
  const { ref: ref21, inView: inView21 } = useInView({ triggerOnce: true });
  const { ref: ref22, inView: inView22 } = useInView({ triggerOnce: true });
  const { ref: ref23, inView: inView23 } = useInView({ triggerOnce: true });
  const { ref: ref24, inView: inView24 } = useInView({ triggerOnce: true });
  const { ref: ref25, inView: inView25 } = useInView({ triggerOnce: true });
  const { ref: ref26, inView: inView26 } = useInView({ triggerOnce: true });
  const { ref: ref27, inView: inView27 } = useInView({ triggerOnce: true });
  const { ref: ref28, inView: inView28 } = useInView({ triggerOnce: true });
  const { ref: ref29, inView: inView29 } = useInView({ triggerOnce: true });
  const { ref: ref30, inView: inView30 } = useInView({ triggerOnce: true });
  const { ref: ref31, inView: inView31 } = useInView({ triggerOnce: true });
  const { ref: ref32, inView: inView32 } = useInView({ triggerOnce: true });
  return (
    <div className='backgroundVideo relative mt-[80px]'>
      <div className=''>
        <img src={blueShade} className=' absolute -z-10 w-full h-full object-cover opacity-50' alt="" />
        <video className=' absolute top-0 -z-10 opacity-15 mix-blend-multiply' autoPlay loop muted playsInline src={techVideo} style={{ width: '100%', height: '100%', objectFit:'cover' }}></video>
      </div>

       <section className=' relative overflow-hidden md:h-[600px] w-full llg:h-[800px]'>
        {/* About Banner */}
        <div>
          <div className=' absolute top-0 w-full left-0 h-[600px] '>
            <img src={aboutBanner} className='w-full h-full object-cover absolute -z-10' alt="" />
            <img src={blackShade} className=' w-full h-full object-cover z-10 absolute ' alt="" />
          </div>
        </div>

        <div className=' flex justify-center items-center lg:max-w-[1200px] lg:mx-auto relative z-30 px-6 py-8 llg:py-0'>
          <div className=' mb-20 md:absolute homeTitlePosition'>
            <div className=' text-center text-[42px] font-extrabold text-[hsl(0,0%,100%)] mb-5 TextStyle llg:text-[67px] llg:leading-[60px]'>High-Performance Hardware Solutions for Your Needs</div>
            <div className=' text-center TextStylePara text-[#fff]'>At Flash Innovations, we deliver high-performance hardware solutions tailored to meet your specific needs. Our advanced components and systems are designed to enhance efficiency and reliability, ensuring optimal results for your business. With a focus on quality and innovation, we provide hardware that supports seamless operations and drives your success. Trust us to equip you with the technology necessary for peak performance and sustainable growth.</div>
          </div>
        </div>
        {/* Bottom Image */}
        <div className=' absolute bottom-[20px] z-20 w-full left-0 bottomImage llg:z-[999] llg:bottom-[80px] dlg:bottom-[40px]'>
          <img src={bottomImage} className='w-full h-full object-cover' alt="" />
        </div>
      </section>

      <section className=' section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
            <motion.div
            ref={ref1}
            initial={{x:-100,opacity:0}}
            animate={inView1 ? {x:0,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
            className=' text-[42px] font-extralight mb-5 text-center TitleText text-[#ffffff]'>Advanced Hardware Solutions for <span className='lg:block'>Optimal Performance</span> </motion.div>
            <motion.div
            ref={ref2}
            initial={{x:-100,opacity:0}}
            animate={inView2 ? {x:0,opacity:1,transition:{duration:.7,ease:'backInOut',delay:.5}} : {}}
            className='text-sm text-center text-[#ffffffe6] ParagraphText mb-7 md:max-w-[600px] md:mx-auto lg:max-w-[700px]'>At Flash Innovations, we offer advanced hardware solutions designed to deliver optimal performance and reliability. Our range includes cutting-edge components and systems tailored to meet diverse needs, from high-performance computing to robust security setups. We focus on providing durable and efficient hardware that enhances your operations and supports your business growth. With a commitment to quality and innovation, we ensure that our solutions keep you ahead in a fast-evolving technological landscape.</motion.div>
        </div>

        {/* Hardware List */}

        <div className=' grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:max-w-[1200px] lg:mx-auto '>

        <motion.div
        ref={ref3}
        initial={{scale:0,opacity:0}}
        animate={inView3 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
        className=' w-full h-[300px] rounded-bl-[20%] rounded-tr-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
              <div className=' flex justify-center gap-10 items-center'>
                <div className=''>
                  <img src={pos} className='w-auto h-[100px] drop-shadow-md' alt="" />
                </div>
                <div className=' text-xl font-bold text-white'>POS System</div>
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </motion.div>

            <motion.div
            ref={ref4}
            initial={{scale:0,opacity:0}}
            animate={inView4 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
            className=' w-full h-[300px] rounded-br-[20%] rounded-tl-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
            <div className=' flex justify-center gap-10 items-center'>
                <div className=''>
                  <img src={computer} className='w-auto h-[100px] drop-shadow-md' alt="" />
                </div>
                <div className=' text-xl font-bold text-white'>Computers</div>
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </motion.div>

            <motion.div
            ref={ref5}
            initial={{scale:0,opacity:0}}
            animate={inView5 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
            className=' w-full h-[300px] rounded-br-[20%] rounded-tl-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
            <div className=' flex justify-center gap-10 items-center'>
                <div className=''>
                  <img src={barcodePrinter} className='w-auto h-[100px] drop-shadow-md' alt="" />
                </div>
                <div className=' text-xl font-bold text-white'>Barcode Printer</div>
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </motion.div>

            <motion.div
            ref={ref6}
            initial={{scale:0,opacity:0}}
            animate={inView6 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
            className=' w-full h-[300px] rounded-bl-[20%] rounded-tr-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
            <div className=' flex justify-center gap-10 items-center'>
                <div className=''>
                  <img src={printers} className='w-auto h-[100px] drop-shadow-md' alt="" />
                </div>
                <div className=' text-xl font-bold text-white'>Printers</div>
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </motion.div>

            <motion.div
            ref={ref7}
            initial={{scale:0,opacity:0}}
            animate={inView7 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
            className=' w-full h-[300px] rounded-bl-[20%] rounded-tr-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
            <div className=' flex justify-center gap-10 items-center'>
                <div className=''>
                  <img src={handBarcode} className='w-auto h-[100px] drop-shadow-md' alt="" />
                </div>
                <div className=' text-xl font-bold text-white'>Hand Barcode Scanner</div>
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </motion.div>

            <motion.div
            ref={ref8}
            initial={{scale:0,opacity:0}}
            animate={inView8 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
            className=' w-full h-[300px] rounded-br-[20%] rounded-tl-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
            <div className=' flex justify-center gap-10 items-center'>
                <div className=''>
                  <img src={tableBarcode} className='w-auto h-[100px] drop-shadow-md' alt="" />
                </div>
                <div className=' text-xl font-bold text-white'>Table Barcode Scanner</div>
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </motion.div>

            <motion.div
            ref={ref9}
            initial={{scale:0,opacity:0}}
            animate={inView9 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
            className=' w-full h-[300px] rounded-br-[20%] rounded-tl-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
            <div className=' flex justify-center gap-10 items-center'>
                <div className=''>
                  <img src={lables} className='w-auto h-[100px] drop-shadow-md' alt="" />
                </div>
                <div className=' text-xl font-bold text-white'>Labels</div>
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </motion.div>



            <motion.div
            ref={ref10}
            initial={{scale:0,opacity:0}}
            animate={inView10 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
            className=' w-full h-[300px] rounded-bl-[20%] rounded-tr-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
            <div className=' flex justify-center gap-10 items-center'>
                <div className=''>
                  <img src={cashDrawer} className='w-auto h-[100px] drop-shadow-md' alt="" />
                </div>
                <div className=' text-xl font-bold text-white'>Cash Drawer</div>
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </motion.div>

            <motion.div
            ref={ref11}
            initial={{scale:0,opacity:0}}
            animate={inView11 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
            className=' w-full h-[300px] rounded-bl-[20%] rounded-tr-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
            <div className=' flex justify-center gap-10 items-center'>
                <div className=''>
                  <img src={weighting} className='w-auto h-[100px] drop-shadow-md' alt="" />
                </div>
                <div className=' text-xl font-bold text-white'>Weighting Scale</div>
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </motion.div>


            <motion.div 
            ref={ref12}
            initial={{scale:0,opacity:0}}
            animate={inView12 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
            className=' w-full h-[300px] rounded-br-[20%] rounded-tl-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
            <div className=' flex justify-center gap-10 items-center'>
                <div className=''>
                  <img src={cctv} className='w-auto h-[100px] drop-shadow-md' alt="" />
                </div>
                <div className=' text-xl font-bold text-white'>CCTV</div>
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </motion.div>


            <motion.div
            ref={ref13}
            initial={{scale:0,opacity:0}}
            animate={inView13 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
            className=' w-full h-[300px] rounded-br-[20%] rounded-tl-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
            <div className=' flex justify-center gap-10 items-center'>
                <div className=''>
                  <img src={biometric} className='w-auto h-[100px] drop-shadow-md' alt="" />
                </div>
                <div className=' text-xl font-bold text-white'>Biometric</div>
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </motion.div>


            <motion.div
            ref={ref14}
            initial={{scale:0,opacity:0}}
            animate={inView14 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
            className=' w-full h-[300px] rounded-bl-[20%] rounded-tr-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
            <div className=' flex justify-center gap-10 items-center'>
                <div className=''>
                  <img src={networking} className='w-auto h-[100px] drop-shadow-md' alt="" />
                </div>
                <div className=' text-xl font-bold text-white'>Networking</div>
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </motion.div>

        </div>
      </section>

      <section className='section md:mt-10'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
          <motion.div
          ref={ref14}
          initial={{x:-100,opacity:0}}
          animate={inView14 ? {x:0,opacity:1,transition:{duration:.5,ease:"backInOut"}} : {}}
          className='text-[42px] font-extralight mb-5 text-center TitleText text-[#ffffff]'>What Are The Types of Hardware Solutions?</motion.div>
          <motion.div
          ref={ref15}
          initial={{x:-100,opacity:0}}
          animate={inView15 ? {x:0,opacity:1,transition:{duration:.5,ease:"backInOut",delay:.7}} : {}}
          className='text-sm text-center text-[#ffffffe6] ParagraphText mb-7 md:max-w-[600px] md:mx-auto lg:max-w-[700px]'>Hardware solutions come in various types, each designed to address specific needs and enhance functionality. These include components for computing power, such as processors and memory, security systems to protect and monitor your infrastructure, and peripherals like printers and storage devices that support daily operations. Each type plays a crucial role in ensuring your technology setup is efficient, reliable, and tailored to your business requirements. Understanding these options helps you choose the right hardware to optimize performance and support your organizational goals.
          </motion.div>

          <div className=' grid place-items-center grid-cols-1 md:grid-cols-2 gap-5'>

              <motion.div
              ref={ref16}
              initial={{scale:0,opacity:0}}
              animate={inView16 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
              className=' w-full h-[350px] llg:h-[280px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-full h-[350px] llg:h-[280px] mix-blend-multiply'>
                    <img src={ComputingHardaware} className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>High-Performance 
                      <span className=' block'>Computing Hardware</span>
                    </div>
                    <div className=' text-white ParagraphText'>Our high-performance computing hardware delivers speed and efficiency for demanding tasks, providing reliable servers, workstations, and processing units for seamless operation.</div>
                  </div>
              </motion.div>

              <motion.div
              ref={ref17}
              initial={{scale:0,opacity:0}}
              animate={inView17 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
              className=' w-full h-[350px] llg:h-[280px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-full h-[350px] llg:h-[280px] mix-blend-multiply'>
                    <img src={AdvancedSecurity} className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>Advanced 
                      <span className=' block'>Security Systems</span>
                    </div>
                    <div className=' text-white ParagraphText'>Secure your business with our advanced security systems, including cutting-edge surveillance cameras and sophisticated alarms, designed to protect your assets and ensure operational safety.</div>
                  </div>
              </motion.div>


              <motion.div
              ref={ref18}
              initial={{scale:0,opacity:0}}
              animate={inView18 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
              className=' w-full h-[350px] llg:h-[280px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-full h-[350px] llg:h-[280px] mix-blend-multiply'>
                    <img src={efficientStorage} className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>Efficient 
                      <span className=' block'>Storage Solutions</span>
                    </div>
                    <div className=' text-white ParagraphText'>Enhance your data management with our efficient storage solutions, featuring high-capacity drives and scalable network systems for secure, high-performance, and reliable data access.</div>
                  </div>
              </motion.div>

              <motion.div
              ref={ref19}
              initial={{scale:0,opacity:0}}
              animate={inView19 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
              className=' w-full h-[350px] llg:h-[280px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-full h-[350px] llg:h-[280px] mix-blend-multiply'>
                    <img src={reliableNetwork} className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>Reliable 
                      <span className=' block'>Network Equipment</span>
                    </div>
                    <div className=' text-white ParagraphText'>Achieve reliable connectivity with our network equipment, including routers, switches, and access points, designed for stable, high-speed connections and minimal downtime.</div>
                  </div>
              </motion.div>

              <motion.div
              ref={ref21}
              initial={{scale:0,opacity:0}}
              animate={inView21 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
              className=' w-full h-[350px] llg:h-[280px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-fullh-[350px] llg:h-[280px] mix-blend-multiply'>
                    <img src={customizable} className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>Customizable Peripherals 
                      <span className=' block'>and Accessories</span>
                    </div>
                    <div className=' text-white ParagraphText'>Upgrade your workspace with our customizable peripherals and accessories, including ergonomic keyboards, mice, printers, and docking stations, tailored to enhance productivity and meet your specific needs.</div>
                  </div>
              </motion.div>

              <motion.div
              ref={ref22}
              initial={{scale:0,opacity:0}}
              animate={inView22 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
              className=' w-full h-[350px] llg:h-[280px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-full h-[350px] llg:h-[280px] mix-blend-multiply'>
                    <img src={integratedHardware} className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>Integrated 
                      <span className=' block'>Hardware Systems </span>
                    </div>
                    <div className=' text-white ParagraphText'>Streamline your operations with our integrated hardware systems, offering cohesive solutions that ensure compatibility and efficiency for both complex and simple setups, tailored to your business needs.</div>
                  </div>
              </motion.div>

            </div>
        </div>
      </section>

      <section className='flex flex-col justify-center items-center bg-FooterBg bg-fixed bg-no-repeat bg-cover bg-center z-50'>
        <Footer/>
      </section>
    </div>
  )
}

export default Services
