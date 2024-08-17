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
       <section className=' section relative overflow-hidden md:h-[600px] w-full'>
        {/* About Banner */}
        <div>
          <div className=' absolute top-0 w-full left-0 h-[600px]'>
            <img src={aboutBanner} className='w-full h-full object-cover absolute -z-10' alt="" />
            <img src={blackShade} className=' w-full h-full object-cover z-10 absolute ' alt="" />
          </div>
        </div>

        <div className=' flex justify-center items-center lg:max-w-[1200px] lg:mx-auto relative z-30'>
          <div className=' mb-20 md:absolute homeTitlePosition'>
            <motion.div
            ref={ref1}
            initial={{x:-100,opacity:0}}
            animate={inView1 ? {x:0,opacity:1,transition:{duration:.5,ease:"backInOut"}} : {}}
            className=' text-center text-[42px] font-extrabold text-[hsl(0,0%,100%)] mb-5 TextStyle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit</motion.div>
            <motion.div
            ref={ref2}
            initial={{x:-100,opacity:0}}
            animate={inView2 ? {x:0,opacity:1,transition:{duration:.5,ease:"backInOut"}} : {}}
            className=' text-center TextStylePara text-[#fff]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus non accusantium perferendis minus exercitationem rerum sit magnam nemo voluptatem natus. Perferendis placeat quia aliquam cupiditate ducimus laborum illo quos asperiores!</motion.div>
          </div>
        </div>
        {/* Bottom Image */}
        <div className=' absolute bottom-0 z-20 w-full left-0'>
          <img src={bottomImage} className='w-full h-full object-cover bottomImage' alt="" />
        </div>
      </section>

      <section>
        <div className='flex justify-center items-center'>
          <div className=' lg:mx-auto px-6'>
            <motion.div
            ref={ref3}
            initial={{x:-100,opacity:0}}
            animate={inView3 ? {x:0,opacity:1,transition:{duration:.5,ease:"backInOut"}} : {}}
            className='text-[42px] font-extralight mb-5 text-center TitleText text-[#ffffff]'>Our Clients</motion.div>
            <motion.div
            ref={ref4}
            initial={{x:-100,opacity:0}}
            animate={inView4 ? {x:0,opacity:1,transition:{duration:.5,ease:"backInOut",delay:.5}} : {}}
            className='text-sm text-center text-[#ffffffe6] ParagraphText mb-7 md:max-w-[600px] lg:max-w-[700px] md:mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat    blanditiis, labore porro voluptate voluptates a explicabo officiis eaque nostrum architecto nisi in ad dolores dignissimos voluptatem iste quia provident aut.Quas at possimus adipisci ducimus id tempore illum dignissimos, consequatur quidem nostrum doloribus, eum earum autem corporis. Molestias, laborum dignissimos iste eos, ipsum necessitatibus obcaecati maiores nobis aliquid, iure aut.
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
