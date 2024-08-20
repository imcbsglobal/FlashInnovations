import React from 'react'
import Footer from './Footer';
import aboutBanner from "../assets/clients-banner.jpeg"
import blackShade from "../assets/black-shade.png"
import bottomImage from "../assets/bottom-image.png"
import techVideo from "../assets/tech-video3.mp4"
import blueShade from "../assets/blue-shade.png"
import ClientsLogos from './ClientsLogos';
import { inView, motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

const Clients = () => {

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true });

  return (
    <div className='backgroundVideo relative mt-[80px]'>
      <div className=''>
        <img src={blueShade} className=' absolute -z-10 w-full h-full object-cover opacity-50' alt="" />
        <video className=' absolute top-0 -z-10 opacity-15 mix-blend-multiply' autoPlay loop muted playsInline src={techVideo} style={{ width: '100%', height: '100%', objectFit:'cover' }}></video>
      </div>
       <section className='  relative overflow-hidden md:h-[600px] w-full llg:h-[800px]'>
        {/* About Banner */}
        <div>
          <div className=' absolute top-0 w-full left-0 h-[600px] '>
            <img src={aboutBanner} className='w-full h-full object-cover absolute -z-10' alt="" />
            <img src={blackShade} className=' w-full h-full object-cover z-10 absolute ' alt="" />
          </div>
        </div>

        <div className=' flex justify-center items-center lg:max-w-[1200px] lg:mx-auto relative z-30 px-6 py-8'>
          <div className=' mb-0 md:absolute homeTitlePosition'>
            <motion.div
            
            className=' text-center text-[42px] font-extrabold text-[hsl(0,0%,100%)] mb-5 TextStyle llg:text-[67px] llg:leading-[60px]'>Empowering Success Through Strategic Client Partnerships</motion.div>
            <motion.div
            
            className=' text-center TextStylePara text-[#fff]'>At Flash Innovations, we drive success through strong client partnerships. Our tailored solutions and dedicated service help clients achieve their goals and enhance performance, reflecting our commitment to their growth and success.
            </motion.div>
          </div>
        </div>
        {/* Bottom Image */}
        {/* <div className=' absolute bottom-[20px] z-20 w-full left-0 bottomImage llg:z-[999] llg:bottom-[80px] dlg:bottom-[40px]'>
          <img src={bottomImage} className='w-full h-full object-cover bottomImage llg:bottom-[-10px]' alt="" />
        </div> */}
      </section>

      <section>
        <div className='flex justify-center items-center mb-20'>
          <div className=' lg:mx-auto px-6'>
            <motion.div
            ref={ref3}
            initial={{x:-100,opacity:0}}
            animate={inView3 ? {x:0,opacity:1,transition:{duration:.5,ease:"backInOut"}} : {}}
            className='text-[42px] font-extralight mb-5 text-center TitleText text-[#ffffff] dlg:text-[100px]'>Our Clients</motion.div>
            <motion.div
            ref={ref4}
            initial={{x:-100,opacity:0}}
            animate={inView4 ? {x:0,opacity:1,transition:{duration:.5,ease:"backInOut",delay:.5}} : {}}
            className='text-sm text-center text-[#ffffffe6] ParagraphText mb-7 md:w-[600px] lg:w-[700px] md:mx-auto font-bold dlg:text-lg dlg:w-[900px]'>At Flash Innovations, we take pride in partnering with a diverse range of clients who trust us to deliver exceptional solutions. Our client base spans various industries, reflecting our ability to adapt and meet unique needs with precision. From large enterprises to dynamic startups, we are dedicated to understanding each client’s specific goals and providing tailored services that drive success. Our collaborative approach and commitment to excellence ensure that every project contributes to our clients’ growth and achievement.
            </motion.div>
            {/* Clients Lists */}
            <ClientsLogos/>
          </div>
        </div>
      </section>

      <section className='flex flex-col justify-center items-center bg-FooterBg bg-fixed bg-no-repeat bg-cover bg-center z-50'>
        <Footer/>
      </section>
    </div>
  )
}

export default Clients
