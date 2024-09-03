import React, { useEffect } from 'react'
import aboutBanner from "../assets/services-banner.jpg"
import blackShade from "../assets/black-shade.png"
import digitalMarketing from "../assets/other-digital.jpg"
import GraphicDesign from "../assets/other-graphic.jpg"
import website from "../assets/other-web.jpg"
import mobileDev from "../assets/mobile-devel.jpg"
import Branding from "../assets/other-branding.jpg"
import sms from "../assets/other-sms.jpeg"
import SEO from "../assets/other-seo.jpg"
import Ecommerce from "../assets/ecommerce.jpg"
import Footer from './Footer'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"


const OtherServices = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
      },[])


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

  return (
    <div className='relative mt-[80px]'>
      <section className='  relative overflow-hidden md:h-[600px] w-full'>
        {/* About Banner */}
        <div>
          <div className=' absolute top-0 w-full left-0 h-[600px]'>
            <img src={aboutBanner} className='w-full h-full object-cover absolute -z-10' alt="" />
            <img src={blackShade} className=' w-full h-full object-cover z-10 absolute ' alt="" />
          </div>
        </div>

        <div className=' flex justify-center items-center lg:max-w-[1200px] lg:mx-auto relative z-30'>
          <div className=' mb-20 md:absolute homeTitlePosition'>
            <div className=' text-center text-[42px] font-extrabold text-[hsl(0,0%,100%)] mb-5 TextStyle pt-[50px] llg:text-[67px] llg:leading-[60px]'>Unlocking Business Potential Through Smart Innovation</div>
            <div className=' text-center TextStylePara text-[#fff] px-6'>At Flash Innovations, we specialize in delivering tailored, innovative solutions designed to elevate your business operations. With a focus on cutting-edge technology and strategic expertise, our dedicated team ensures that your business not only meets its goals but thrives in today’s ever-evolving digital landscape.</div>
          </div>
        </div>
        {/* Bottom Image */}
        {/* <div className=' absolute bottom-[20px] z-20 w-full left-0 bottomImage llg:z-[999] llg:bottom-[80px]'>
          <img src={bottomImage} className='w-full h-full object-cover' alt="" />
        </div> */}
      </section>

      <section className='section mt-10 llg:w-[1200px] mx-auto mb-20'>
          <div>
            <div>
              <motion.div
              ref={ref17}
              initial={{ x:-100,opacity:0}}
              animate={inView17 ? { x:0,opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
              className='text-[42px] font-extralight mb-5 text-center TitleText text-[#2075bb] dlg:text-[80px]'>Our Services</motion.div>
              <motion.div
              ref={ref18}
              initial={{ x:100,opacity:0}}
              animate={inView18 ? { x:0,opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
              className='text-sm text-center text-[#2a2828] ParagraphText mb-7 md:w-[600px] md:mx-auto lg:w-[700px] font-bold dlg:text-lg dlg:w-[900px]'>we are dedicated to transforming your vision into reality with our comprehensive range of services. From cutting-edge technology solutions to creative design and strategic marketing, we provide the expertise and tools necessary to drive your business forward. Explore how our tailored services can elevate your operations and achieve your goals.</motion.div>
            </div>

            {/* Services List */}
            <div className=' grid grid-cols-1 place-items-center gap-10 mx-auto llg:w-[1000px] dlg:w-[1200px]'>

              <div
              className=' md:flex justify-center items-center gap-10'>
                {/* Left */}
                <motion.div
                ref={ref1}
                initial={{ x:-100, opacity:0 }}
                animate={inView1 ? { x:0,opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
                className=' w-full h-[300px] rounded-tr-[20%] rounded-bl-[20%] lg:w-[50%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dlg:h-[350px]'>
                  <img src={digitalMarketing} className=' w-full h-full object-cover rounded-tr-[20%] rounded-bl-[20%]' alt="" />
                </motion.div>
                {/* Right */}
                <div
                ref={ref2}
                initial={{ x:100, opacity:0 }}
                animate={inView2 ? { x:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
                className='lg:w-[50%]'>
                  {/* Heading */}
                  <div className=' text-[32px] ServiceTitle mb-3 text-[#2075bb]'>Digital Marketing</div>
                  {/* Paragraph */}
                  <div
                  className='ParagraphText font-bold'>
                    Shaping the Future Through Precision and Power, our digital marketing solutions are designed to elevate your brand with targeted strategies and cutting-edge technology. By blending creativity and data-driven insights, we ensure your business connects with the right audience, driving growth and maximizing your online impact.
                  </div>
                </div>
              </div>

              <div
              className=' md:flex md:flex-row-reverse justify-center items-center gap-10'>
                {/* Left */}
                <motion.div
                ref={ref3}
                initial={{ x:-100, opacity:0}}
                animate={inView3 ? { x:0, opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
                className=' w-full h-[300px] rounded-tl-[20%] rounded-br-[20%] lg:w-[50%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dlg:h-[350px]'>
                  <img src={GraphicDesign} className=' w-full h-full object-cover rounded-tl-[20%] rounded-br-[20%]' alt="" />
                </motion.div>
                {/* Right */}
                <motion.div
                ref={ref4}
                initial={{ x:100, opacity:0}}
                animate={inView4 ? { x:0, opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
                className='lg:w-[50%]'>
                  {/* Heading */}
                  <div className=' text-[32px] ServiceTitle mb-3 text-[#2075bb]'>Graphic Designing</div>
                  {/* Paragraph */}
                  <div className='ParagraphText font-bold'>
                  Transforming Tomorrow Through Precision and Power, our graphic designing services bring your brand to life with impactful visuals and creative storytelling. We combine artistry with strategic design to deliver graphics that captivate your audience and strengthen your brand's identity.
                  </div>
                </motion.div>
              </div>

              <div className=' md:flex  justify-center items-center gap-10'>
                {/* Left */}
                <motion.div
                ref={ref5}
                initial={{ x:-100, opacity:0}}
                animate={inView5 ? { x:0, opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
                className=' w-full h-[300px] rounded-tr-[20%] rounded-bl-[20%] lg:w-[50%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dlg:h-[350px]'>
                  <img src={website} className=' w-full h-full object-cover rounded-tr-[20%] rounded-bl-[20%]' alt="" />
                </motion.div>
                {/* Right */}
                <motion.div
                ref={ref6}
                initial={{ x:100, opacity:0}}
                animate={inView6 ? { x:0, opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
                className='lg:w-[50%]'>
                  {/* Heading */}
                  <div className=' text-[32px] ServiceTitle mb-3 text-[#2075bb]'>Website & Web Applications</div>
                  {/* Paragraph */}
                  <div className='ParagraphText font-bold'>
                  Building Tomorrow with Precision and Power, our website and web application solutions enhance your digital presence. We deliver responsive, user-friendly designs that engage your audience and provide seamless functionality for business success.
                  </div>
                </motion.div>
              </div>

              <div className=' md:flex md:flex-row-reverse  justify-center items-center gap-10'>
                {/* Left */}
                <motion.div
                ref={ref7}
                initial={{ x:-100, opacity:0}}
                animate={inView7 ? { x:0, opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
                className=' w-full h-[300px] rounded-tl-[20%] rounded-br-[20%] lg:w-[50%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dlg:h-[350px]'>
                  <img src={mobileDev} className=' w-full h-full object-cover rounded-tl-[20%] rounded-br-[20%]' alt="" />
                </motion.div>
                {/* Right */}
                <motion.div
                ref={ref8}
                initial={{ x:100, opacity:0}}
                animate={inView8 ? { x:0, opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
                className='lg:w-[50%]'>
                  {/* Heading */}
                  <div className=' text-[32px] ServiceTitle mb-3 text-[#2075bb]'>Mobile Applications</div>
                  {/* Paragraph */}
                  <div className='ParagraphText font-bold'>
                  Crafting the Future with Precision and Power, our mobile application solutions are designed for seamless performance and user engagement. We create intuitive, high-performing apps that cater to your business needs across both iOS and Android platforms.
                  </div>
                </motion.div>
              </div>


              <div className=' md:flex   justify-center items-center gap-10'>
                {/* Left */}
                <motion.div
                ref={ref9}
                initial={{ x:-100, opacity:0}}
                animate={inView9 ? { x:0, opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
                className=' w-full h-[300px] rounded-tr-[20%] rounded-bl-[20%] lg:w-[50%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dlg:h-[350px]'>
                  <img src={Branding} className=' w-full h-full object-cover rounded-tr-[20%] rounded-bl-[20%]' alt="" />
                </motion.div>
                {/* Right */}
                <motion.div
                ref={ref10}
                initial={{ x:100, opacity:0}}
                animate={inView10 ? { x:0, opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
                className='lg:w-[50%]'>
                  {/* Heading */}
                  <div className=' text-[32px] ServiceTitle mb-3 text-[#2075bb]'>Branding</div>
                  {/* Paragraph */}
                  <div className='ParagraphText font-bold'>
                  Forging Ahead with Precision and Power, our branding solutions elevate your business with a distinctive identity. We craft compelling visuals and messaging that resonate with your audience, helping your brand stand out and leave a lasting impression.
                  </div>
                </motion.div>
              </div>

              <div className=' md:flex md:flex-row-reverse   justify-center items-center gap-10'>
                {/* Left */}
                <motion.div
                ref={ref11}
                initial={{ x:-100, opacity:0}}
                animate={inView11 ? { x:0, opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
                className=' w-full h-[300px] rounded-tl-[20%] rounded-br-[20%] lg:w-[50%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dlg:h-[350px]'>
                  <img src={sms} className=' w-full h-full object-cover rounded-tl-[20%] rounded-br-[20%]' alt="" />
                </motion.div>
                {/* Right */}
                <motion.div
                ref={ref12}
                initial={{ x:100, opacity:0}}
                animate={inView12 ? { x:0, opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
                className='lg:w-[50%]'>
                  {/* Heading */}
                  <div className=' text-[32px] ServiceTitle mb-3 text-[#2075bb]'>Whatsapp / SMS Marketing</div>
                  {/* Paragraph */}
                  <div className='ParagraphText font-bold'>
                  Driving Growth with Precision and Power, our WhatsApp and SMS marketing solutions offer direct, effective communication with your audience. We create personalized campaigns that engage customers instantly, boosting engagement and driving results for your business.
                  </div>
                </motion.div>
              </div>


              <div className=' md:flex   justify-center items-center gap-10'>
                {/* Left */}
                <motion.div
                ref={ref13}
                initial={{ x:-100, opacity:0}}
                animate={inView13 ? { x:0, opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
                className=' w-full h-[300px] rounded-tr-[20%] rounded-bl-[20%] lg:w-[50%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dlg:h-[350px]'>
                  <img src={SEO} className=' w-full h-full object-cover rounded-tr-[20%] rounded-bl-[20%]' alt="" />
                </motion.div>
                {/* Right */}
                <motion.div
                ref={ref14}
                initial={{ x:100, opacity:0}}
                animate={inView14 ? { x:0, opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
                className='lg:w-[50%]'>
                  {/* Heading */}
                  <div className=' text-[32px] ServiceTitle mb-3 text-[#2075bb]'>SEO</div>
                  {/* Paragraph */}
                  <div className='ParagraphText font-bold'>
                  Unlocking Success with Precision and Power, our SEO services are designed to enhance your online visibility. We implement tailored strategies that improve your search rankings, attract organic traffic, and help your business thrive in the digital landscape.
                  </div>
                </motion.div>
              </div>



              <div className=' md:flex md:flex-row-reverse   justify-center items-center gap-10'>
                {/* Left */}
                <motion.div
                ref={ref15}
                initial={{ x:-100, opacity:0}}
                animate={inView15 ? { x:0, opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
                className=' w-full h-[300px] rounded-tl-[20%] rounded-br-[20%] lg:w-[50%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dlg:h-[350px]'>
                  <img src={Ecommerce} className=' w-full h-full object-cover rounded-tl-[20%] rounded-br-[20%]' alt="" />
                </motion.div>
                {/* Right */}
                <motion.div
                ref={ref16}
                initial={{ x:100, opacity:0}}
                animate={inView16 ? { x:0, opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
                className='lg:w-[50%]'>
                  {/* Heading */}
                  <div className=' text-[32px] ServiceTitle mb-3 text-[#2075bb]'>E-Commerce</div>
                  {/* Paragraph */}
                  <div className='ParagraphText font-bold'>
                  Empowering Business with Precision and Power, our E-Commerce solutions help you build and grow a successful online store. We deliver seamless user experiences, secure payment integrations, and the tools needed to drive sales and foster customer loyalty.
                  </div>
                </motion.div>
              </div>


            </div>

          </div>
      </section>

      <section>
        <Footer/>
      </section>

    </div>
  )
}

export default OtherServices
