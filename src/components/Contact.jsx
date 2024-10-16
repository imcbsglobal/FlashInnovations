import React, { useEffect } from 'react'
import techVideo from "../assets/tech-video3.mp4"
import blueShade from "../assets/black-shade.png"
import location from "../assets/location.png"
import phone from "../assets/phone.png"
import socialMedia from "../assets/social-media.png"
import { IoLocationOutline } from "react-icons/io5";
import Footer from './Footer';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import aboutBanner from "../assets/contact-banner.jpeg"
import blackShade from "../assets/black-shade.png"
import bottomImage from "../assets/bottom-image.png"
import { inView, motion } from "framer-motion"
import { useInView } from "react-intersection-observer";


const Contact = () => {

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

  return (
    <div className='backgroundVideo relative mt-[80px]'>
      {/* <div className=''>
        <img src={blueShade} className=' absolute -z-10 w-full h-full object-cover' alt="" />
        <video className=' absolute top-0 -z-10 opacity-15 mix-blend-multiply' autoPlay loop muted playsInline src={techVideo} style={{ width: '100%', height: '100%', objectFit:'cover' }}></video>
      </div> */}
      <section className='  relative overflow-hidden md:h-[600px] w-full'>
        {/* About Banner */}
        <div>
          <div className=' absolute top-0 w-full left-0 h-[600px]'>
            <img src={aboutBanner} className='w-full h-full object-cover absolute -z-10' alt="" />
            <img src={blackShade} className=' w-full h-full object-cover z-10 absolute ' alt="" />
          </div>
        </div>

        <div className=' flex justify-center items-center lg:max-w-[1200px] lg:mx-auto relative z-30 px-6 py-8'>
          <div className=' mb-20 md:absolute homeTitlePosition'>
            <div className=' text-center text-[42px] font-extrabold text-[hsl(0,0%,100%)] mb-5 TextStyle llg:text-[67px] llg:leading-[60px]'>Connecting You to Innovative Solutions</div>
            <div className=' text-center TextStylePara text-[#fff]'>At Flash Innovations, we make it easy for you to connect with us and access the innovative solutions you need. Our dedicated team is ready to assist with any inquiries, providing prompt and effective support to ensure your needs are met. Reach out to us to discuss how we can help drive your business forward with cutting-edge technology and personalized service.</div>
          </div>
        </div>
        {/* Bottom Image */}
        {/* <div className=' absolute bottom-[20px] z-20 w-full left-0 bottomImage llg:z-[999] llg:bottom-[80px] dlg:bottom-[40px]'>
          <img src={bottomImage} className='w-full h-full object-cover' alt="" />
        </div> */}
      </section>

      <section className='section mt-10'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20 grid grid-cols-1 place-items-center text-center gap-10 lg:grid-cols-3'>
          <motion.div
          ref={ref3}
          initial={ {y:-100,opacity:0}}
          animate={inView3 ? {y:0,opacity:1,transition:{duration:.8,ease:"backInOut"}} : {}}
          className=' flex flex-col justify-center items-center gap-2 GlassBox rounded-xl w-full p-5 h-[110px]  bg-[#2075bb] InputDesign'>
            <div className=' text-lg font-bold text-white flex justify-center items-center gap-3 ContactHead'><span><MdEmail/></span> Email</div>
            <a href="mailto:innovationsflash@gmail.com"><div className=' text-[#fff] ContactHead'>innovationsflash@gmail.com</div></a>
          </motion.div>

          <motion.div
          ref={ref4}
          initial={ {y:-100,opacity:0}}
          animate={inView4 ? {y:0,opacity:1,transition:{duration:.8,ease:"backInOut",delay:.3}} : {}}
          className=' flex flex-col justify-center items-center gap-2 h-[110px]  GlassBox rounded-xl w-full p-5  bg-[#2075bb] InputDesign'>
            <div className='text-lg font-bold text-white flex justify-center items-center gap-3 ContactHead'><span><FaPhoneAlt/></span> Phone</div>
            <div className='flex justify-center gap-2'>
              <a href="tel:+91 8050695416"><div className=' text-[#fff] font-bold ContactHead'>+91 8050695416</div></a>
              <a href="tel:+91 9995175602"><div className='text-[#fff] font-bold ContactHead'>+91 9995175602</div></a>
            </div>
          </motion.div>

          <motion.div
          ref={ref5}
          initial={ {y:-100,opacity:0}}
          animate={inView5 ? {y:0,opacity:1,transition:{duration:.8,ease:"backInOut",delay:.7}} : {}}
          className=' flex flex-col justify-center items-center h-[110px]  gap-2 GlassBox rounded-xl w-full p-5  bg-[#2075bb] InputDesign'>
            <div className='text-lg font-bold text-white flex justify-center items-center gap-3 ContactHead '><span><FaLocationArrow /></span> Address</div>
            <div className=' text-[#fff] '>#677/21-22, 9th Cross, 4th Main, 4th Block, HBR Layout, 1st Stage, Bangalore - 560 043</div>
          </motion.div>

        </div>
      </section>

      <section className='section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
          <motion.div
          ref={ref6}
          initial={{x:-100,opacity:0}}
          animate={inView6 ? {x:0,opacity:1,transition:{ease:"backInOut",duration:.8}} : {}}
          className='text-[42px] font-extralight mb-5 text-center TitleText text-[#2075bb] dlg:text-[80px]'>Our Offices</motion.div>
          <motion.div 
          ref={ref7}
          initial={{x:-100,opacity:0}}
          animate={inView7 ? {x:0,opacity:1,transition:{ease:"backInOut",duration:.8,delay:.7}} : {}}
          className='text-sm text-center text-[#2a2828] ParagraphText mb-7 md:w-[600px] lg:w-[700px] dlg:w-[900px] md:mx-auto font-bold dlg:text-lg'>At Flash Innovations, we are proud to have a robust network of offices to serve you better. Our main branch is located in Bengaluru, where we coordinate our core operations and strategic initiatives. Additionally, we have three other branches strategically placed to ensure comprehensive support and accessibility across various regions. Each office is equipped to provide local expertise and personalized service, ensuring that our clients receive consistent and high-quality support regardless of their location.</motion.div>

          <div className='grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:grid-cols-3'>

              <motion.div
              ref={ref8}
              initial={ {y:-100,opacity:0}}
              animate={inView8 ? {y:0,opacity:1,transition:{duration:.8,ease:"backInOut"}} : {}}
              className=' w-full h-[250px] md:h-[200px]  rounded-3xl bg-[#2075bb] InputDesign relative flex justify-center items-start gap-10 px-5 py-3'>
                  <div className=' w-[20%]'>
                    <IoLocationOutline className=' text-[42px] text-[#00c8ff]'/>
                  </div>
                  <div>
                    <div className=' text-xl mb-2 llg:mb-5 text-white font-bold ContactHead'>Calicut</div>
                    <div className='text-white ParagraphText text-sm mb-5 llg:mb-2'>
                      Flash Innovations 1stFloor,
                      Smart Building Mannur Valavu,
                      Kadalundi,Kozhikode - 673328
                    </div>
                    <div className=' text-[#fff] font-semibold ContactHead'>+91 9847718664,<br /> +91 9656104131,<br />
                    0495 2990804</div>
                  </div>
              </motion.div>

              <motion.div
              ref={ref9}
              initial={ {y:-100,opacity:0}}
              animate={inView9 ? {y:0,opacity:1,transition:{duration:.8,ease:"backInOut",delay:.3}} : {}}
              className=' w-full h-[200px]  rounded-3xl bg-[#2075bb] InputDesign relative flex justify-center items-start gap-10 p-5'>
                  <div className=' w-[20%]'>
                    <IoLocationOutline className=' text-[42px] text-[#00c8ff]'/>
                  </div>
                  <div>
                    <div className=' text-xl mb-5 text-white ContactHead'>Coimbatore</div>
                    <div className='text-white ParagraphText text-sm mb-5'>
                    Flash Innovations, Thudiyallur Road, 
                    Sharavanampatti
                    Coimbatore - 641049
                    </div>
                    <div className=' text-[#fff] ContactHead'>+91 8050379287</div>
                  </div>
              </motion.div>

              <motion.div
              ref={ref10}
              initial={ {y:-100,opacity:0}}
              animate={inView10 ? {y:0,opacity:1,transition:{duration:.8,ease:"backInOut",delay:.7}} : {}}
              className=' w-full h-[200px]  rounded-3xl bg-[#2075bb] InputDesign relative flex justify-center items-start gap-10 p-5'>
                  <div className=' w-[20%]'>
                    <IoLocationOutline className=' text-[42px] text-[#00c8ff]'/>
                  </div>
                  <div>
                    <div className=' text-xl mb-5 text-white font-bold ContactHead'>Mangalore</div>
                    <div className='text-white ParagraphText text-sm mb-5'>
                    Flash Innovations, J.M. 3rd Cross Road, 
                    Santhegalli, Bunder
                    Mangalore - 1
                    </div>
                    <div className=' text-[#fff] ContactHead'>+91 +91 8050695804</div>
                  </div>
              </motion.div>

          </div>
        </div>
      </section>

      <section className=' section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20 md:flex justify-center items-center gap-10'>
          <div className='md:w-[50%]'>
              <motion.div
              ref={ref11}
              initial={{x:-100,opacity:0}}
              animate={inView11 ? {x:0,opacity:1,transition:{ease:"backInOut",duration:.8}} : {}}
              className=' text-[42px] font-extralight mb-5 text-center TitleText text-[#2075bb] dlg:text-[80px]'>Get In Touch</motion.div>
              <motion.div
              ref={ref12}
              initial={{x:-100,opacity:0}}
              animate={inView12 ? {x:0,opacity:1,transition:{ease:"backInOut",duration:.8,delay:.3}} : {}}
              className='text-sm text-center text-[#2a2828] ParagraphText mb-7 font-bold dlg:text-lg'>We’d love to hear from you! Whether you have questions, need support, or want to explore how we can assist with your business needs, reaching out is simple. Contact us via phone, email, or our online form, and our responsive team will get back to you promptly. Your inquiries and feedback are important to us, and we’re here to ensure you receive the assistance and information you need to move forward.</motion.div>
          </div>

          <div className='md:w-[50%]'>
            <motion.div
            ref={ref13}
            initial={{x:-100,opacity:0}}
            animate={inView13 ? {x:0,opacity:1,transition:{ease:"backInOut",duration:.8}} : {}}
            className=' flex justify-center items-center'>
              <form action="" className=' flex flex-col gap-5 w-full'>
                <input type="text" placeholder='Enter Your Name' className=' p-5 InputDesign' required />
                <input type="email" placeholder='Enter Your E-Mail' className='InputDesign p-5' required/>
                <input type="number" placeholder='Enter Your Number'  className='InputDesign p-5' required/>
                <textarea name="" placeholder='Enter Your Message' required className=' resize-none InputDesign py-6 px-5' id=""></textarea>
                <div className='mx-auto'>
                <button className='GradientButton px-8 py-2'>Send</button>
                </div>

              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
      ref={ref14}
      initial={{height:0,opacity:0}}
      animate={inView14 ? {height:"auto",opacity:1,transition:{duration:.8,ease:"backInOut"}} : {}}
      className=' mb-10 lg:mb-20 section'>
        <div className=' flex justify-center items-center lg:max-w-[1200px] lg:mx-auto'>
          <div className=' h-[500px] md:h-[600px] w-full rounded-tr-[30%] rounded-bl-[30%] BorderDesignBox'>
            <iframe className=' w-full h-full object-cover rounded-tr-[30%] rounded-bl-[30%] p-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0990033737753!2d77.62994107489406!3d13.029366987291342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17816064cf5f%3A0x7005a3bd5de774b9!2sFLASH%20INNOVATIONS!5e0!3m2!1sen!2sin!4v1722486040203!5m2!1sen!2sin" width="100%" height="600px" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </motion.section>

      <section className='flex flex-col justify-center items-center bg-FooterBg bg-fixed bg-no-repeat bg-cover bg-center z-[997]'>
        <Footer/>
      </section>
    </div>
  )
}

export default Contact
