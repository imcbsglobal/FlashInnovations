import React, { useRef, useEffect } from 'react';
import task from "../assets/task.png"
import shade from "../assets/shade.png"
import vtsak from '../assets/vtask.png'
import dine from "../assets/Dine.png"
import clublogic from "../assets/clublogic.png"
import magnet from "../assets/magnet.png"
import auric from "../assets/auric.png"
import starstay from "../assets/starstay.png"
import LogoSlider from './LogoSlider';
import { TiTick } from "react-icons/ti";
import Footer from './Footer';
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import intro from "../assets/intro.mp4"
import homeSection from "../assets/home-section.jpg"
import aboutCompany from "../assets/about-company.jpg"
import companyServices from "../assets/company-services.jpg"
import customerSupport from "../assets/customer-support1.jpg"
import { Link } from "react-router-dom"
import hardware1 from "../assets/hard1.png"
import hardware2 from "../assets/hard2.png"
import hardware3 from "../assets/hard3.png"
import hardware4 from "../assets/hard4.png"
import otherservice1 from "../assets/otherservice1.png"
import otherservice2 from "../assets/otherservice2.png"
import otherservice4 from "../assets/otherservice4.png"
import otherservice5 from "../assets/otherservice5.png"
import otherservice6 from "../assets/otherservice6.png"
import otherservice7 from "../assets/otherservice7.png"
import otherservice8 from "../assets/otherservice8.png"
import otherservice9 from "../assets/otherservice9.png"
import otherservice10 from "../assets/otherservice10.png"
import otherservice11 from "../assets/otherservice11.png"
import otherservice13 from "../assets/otherservice13.png"
import NetWorking from "../assets/networkingpng.png"

const Home = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  

  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();
  const { ref: ref4, inView: inView4 } = useInView();
  const { ref: ref5, inView: inView5 } = useInView();
  const { ref: ref6, inView: inView6 } = useInView();
  const { ref: ref7, inView: inView7 } = useInView();
  const { ref: ref8, inView: inView8 } = useInView();
  const { ref: ref9, inView: inView9 } = useInView();
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
  const { ref: ref33, inView: inView33 } = useInView({ triggerOnce: true });
  const { ref: ref34, inView: inView34 } = useInView({ triggerOnce: true });
  const { ref: ref35, inView: inView35 } = useInView({ triggerOnce: true });
  const { ref: ref36, inView: inView36 } = useInView({ triggerOnce: true });
  const { ref: ref37, inView: inView37 } = useInView({ triggerOnce: true });
  const { ref: ref38, inView: inView38 } = useInView({ triggerOnce: true });
  const { ref: ref39, inView: inView39 } = useInView({ triggerOnce: true });
  const { ref: ref40, inView: inView40 } = useInView({ triggerOnce: true });
  const { ref: ref41, inView: inView41 } = useInView({ triggerOnce: true });
  const { ref: ref42, inView: inView42 } = useInView({ triggerOnce: true });
  const { ref: ref43, inView: inView43 } = useInView({ triggerOnce: true });
  const { ref: ref44, inView: inView44 } = useInView({ triggerOnce: true });
  const { ref: ref45, inView: inView45 } = useInView({ triggerOnce: true });
  const { ref: ref46, inView: inView46 } = useInView({ triggerOnce: true });
  const { ref: ref47, inView: inView47 } = useInView({ triggerOnce: true });
  const { ref: ref48, inView: inView48 } = useInView({ triggerOnce: true });
  const { ref: ref49, inView: inView49 } = useInView({ triggerOnce: true });
  const { ref: ref50, inView: inView50 } = useInView({ triggerOnce: true });
  const { ref: ref51, inView: inView51 } = useInView({ triggerOnce: true });
  const { ref: ref52, inView: inView52 } = useInView({ triggerOnce: true });
  const { ref: ref53, inView: inView53 } = useInView({ triggerOnce: true });
  const { ref: ref54, inView: inView54 } = useInView({ triggerOnce: true });
  const { ref: ref55, inView: inView55 } = useInView({ triggerOnce: true });
  const { ref: ref56, inView: inView56 } = useInView({ triggerOnce: true });
  const { ref: ref57, inView: inView57 } = useInView({ triggerOnce: true });
  const { ref: ref58, inView: inView58 } = useInView({ triggerOnce: true });
  const { ref: ref59, inView: inView59 } = useInView({ triggerOnce: true });
  const { ref: ref60, inView: inView60 } = useInView({ triggerOnce: true });
  const { ref: ref61, inView: inView61 } = useInView({ triggerOnce: true });
  const { ref: ref62, inView: inView62 } = useInView({ triggerOnce: true });
  const { ref: ref63, inView: inView63 } = useInView({ triggerOnce: true });
  const { ref: ref64, inView: inView64 } = useInView({ triggerOnce: true });

// Parallax Effect

  useEffect(() => {
    let scrollPosition = 0;

    const handleScroll = () => {
      // Update scroll position
      scrollPosition = window.scrollY;
      
      // Use requestAnimationFrame for smoother updates
      requestAnimationFrame(() => {
        const title = document.getElementById('parallaxTitle');
        const title2 = document.getElementById('parallaxTitle2');
        const circle1 = document.querySelector('.ParentCircle');
        const circle2 = document.querySelector('.ParentCircle2');

        if (title) {
          title.style.transform = `translateX(-${scrollPosition * 0.3}px)`;
        }

        if (title2) {
          title2.style.transform = `translateX(${scrollPosition * 0.3}px)`;
        }

        if (circle1) {
          circle1.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
        }

        if (circle2) {
          circle2.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div  className=''>
      {/* Parallax Section */}
      <section className='relative min-h-screen w-full z-[997] overflow-hidden'>
       
      <div className='w-full h-screen flex justify-center items-center scroll-smooth'>
        <div className=' TextStyle flex flex-col justify-center items-center'>
            <div className=' text-[42px] mb-10 leading-[40px]  font-bold text-[#fff] text-center md:text-[72px] md:leading-[75px] lg:text-[72px] lg:leading-[70px] dlg:text-[100px] parallax-text dlg:leading-[100px] scroll-smooth'  id='parallaxTitle'>Shaping the Future  <span className='block'>Through Precision and Power</span> </div>
            <div id='parallaxTitle2' className='ParagraphText leading-normal text-center text-white mb-10 lg:w-[900px] mx-auto px-10 font-bold'>Shaping the Future Through Precision and Power, we provide innovative solutions that blend meticulous craftsmanship with advanced technology. Our commitment to excellence ensures your business achieves peak efficiency and remains competitive in an ever-evolving market.
            </div>
            <div className=' flex justify-center z-[999] relative'>
              <button className=' GradientButton px-8 py-2  cursor-pointer text-sm lg:text-[20px] lg:py-5' onClick={()=>document.getElementById('aboutsection').scrollIntoView({ behavior: 'smooth' })}>Discover More</button>
            </div>
        </div>
      </div>

      {/* Rotate Animation */}
      <div className=' relative z-30 mt-[-180px]   gap-10 hidden lg:block scroll-smooth'>
              <div className=' flex justify-between px-6 lg:px-56'>
              <div className=' flex justify-start items-center'>
                <div className='ParentCircle'>
                  <div className='ChildCirlce'></div>
                </div>
              </div>

              <div className=' flex justify-end items-center'>
                <div className='ParentCircle2'>
                  <div className='ChildCirlce2'></div>
                </div>
              </div>
              </div>
            </div>

        <div className='fixed inset-0 overflow-hidden -z-10'>
          <video
            className='w-full h-full object-cover opacity-50 mix-blend-multiply'
            autoPlay
            loop
            muted
            playsInline
            src={intro}
          ></video>
        </div>
        <div className='fixed inset-0 overflow-hidden -z-20'>
          <img src={homeSection} className=' w-full h-full object-cover mix-blend-multiply' alt="" />
        </div>
        <div className='flex justify-center items-center h-full w-full  '>
          <div>
            {/* <div
            className='TextStyle text-[62px]  font-bold text-[#fff] text-center md:text-[72px] lg:text-[152px] lg:leading-tight parallax-text ' id='parallaxTitle'>
              FLASH INNOVATIONS
            </div> */}
            {/* <div className=' px-6 text-center md:mx-auto md:w-[600px] lg:w-[800px] llg:w-[900px] dlg:w-[1000px] llg:text-[25px]'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem tenetur dolore sunt libero itaque tempore nisi accusantium, hic ad blanditiis eligendi laborum doloremque molestias nesciunt, expedita esse officia saepe sed!
              Sequi alias possimus voluptatibus architecto aliquam provident ut quis molestiae, dolorum adipisci eius? Explicabo voluptas animi dolorem enim blanditiis eius nostrum repudiandae, quasi adipisci dolores nesciunt praesentium, repellendus doloribus. Accusantium?
            </div> */}
            
            {/* <div className=' flex justify-center items-center'>
              <div className='absolute bottom-0'>
                <img src={homeImage} className='drop-shadow-xl' alt="banner" />
              </div>
            </div> */}
          </div>
          

        </div>
      </section>

      {/* Next Section */}
      <section className='relative min-h-screen w-full z-[998]  bg-[#fffffff1] rounded-t-3xl ' id='aboutsection'>
        {/* <div className=''>
          <img src={blueShade} className='absolute -z-10 w-full h-full object-cover opacity-50' alt="blueShade" />
          <video className='absolute top-0 -z-10 opacity-15 mix-blend-multiply' autoPlay loop muted playsInline src={techVideo} style={{ width: '100%', height: '100%', objectFit:'cover' }}></video>
        </div> */}
        <div className=' lg:mx-auto mb-10 section'>
          <div className='flex justify-center items-center h-full'>
            <div className=' md:flex justify-center items-center gap-10  lg:mx-auto'>
              <div className='mb-10 md:w-[50%]'>
                <motion.div
                
                >
                  <motion.div
                  ref={ref1}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView1 ? { x: 0, opacity: 1 } : { opacity: 0, x: -100 }}
                  transition={{ duration: 1, delay: 1, ease: "backInOut" }}
                  className='TitleText text-[#2075bb] text-[42px] pt-10 text-center mb-5 dlg:text-[78px]'>About Us</motion.div>
                  <motion.div
                  ref={ref2}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView2 ? { x: 0, opacity: 1 } : { opacity: 0, x: -100 }}
                  transition={{ duration: 1, delay: 1.2, ease: "backInOut" }}
                  // variants={itemVariants}
                  className=' text-center ParagraphText text-[#2a2828] mb-10 font-bold dlg:text-lg'>In the face of challenges, our resilience shines. We consistently deliver excellence, driven by a commitment to innovation and quality. Every task we undertake is a step toward achieving greatness, with an unwavering focus on surpassing expectations</motion.div>
                  <motion.div
                  // variants={itemVariants}
                  ref={ref3}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView3 ? { x: 0, opacity: 1 } : { opacity: 0, x: -100 }}
                  transition={{ duration: 1, delay: 1.5, ease: "backInOut" }}
                  className='text-center ParagraphText text-[#2a2828] mb-5 font-bold dlg:text-lg'>We transform obstacles into opportunities, ensuring that our impact is both lasting and significant. Our dedication to pushing boundaries and redefining standards is at the core of everything we do, making us a reliable partner in any endeavor.
                  </motion.div>
                </motion.div>

                <div className=''>
                <ul className=' flex flex-col justify-center items-center gap-3'>
                  <motion.li
                  ref={ref4}
                  initial={{x:-100,opacity:0,scale:0}}
                  animate={inView4 ? {x:0,opacity:1,scale:1,transition:{duration:1,ease:'backInOut',delay:.2}} : {}}
                  >
                    <div className=' flex justify-center items-center gap-2 text-sm GlassBox p-5 rounded-xl bg-[#2075bb]  text-[#ffffffe6] ParagraphText'>
                      <div className=' text-xl'><TiTick className=''/></div>
                      <div className='font-bold dlg:text-lg'>We drive progress with relentless creativity and forward-thinking solutions.</div>
                    </div>
                  </motion.li>
                  <motion.li
                  ref={ref5}
                  initial={{x:-100,opacity:0,scale:0}}
                  animate={inView5 ? {x:0,opacity:1,scale:1,transition:{duration:1,ease:'backInOut',delay:.5}} : {}}
                  >
                    <div className=' flex justify-center items-center gap-2 text-sm GlassBox p-5 rounded-xl bg-[#2075bb]  text-[#ffffffe6] ParagraphText'>
                      <div className=' text-xl'><TiTick className=''/></div>
                      <div className=' font-bold dlg:text-lg'>We deliver superior results through unwavering commitment and precision.</div>
                    </div>
                  </motion.li>
                  <motion.li
                  ref={ref6}
                  initial={{x:-100,opacity:0,scale:0}}
                  animate={inView6 ? {x:0,opacity:1,scale:1,transition:{duration:1,ease:'backInOut',delay:1}} : {}}
                  >
                    <div className=' flex justify-center items-center gap-2 text-sm GlassBox p-5 rounded-xl bg-[#2075bb]  text-[#ffffffe6] ParagraphText'>
                      <div className=' text-xl'><TiTick className=''/></div>
                      <div className='font-bold dlg:text-lg'>We uphold the highest standards, ensuring trust and reliability in all we do.</div>
                    </div>
                  </motion.li>
                </ul>
                </div>
              </div>
              <div>
              <motion.div
              ref={ref7}
              initial={{x:-100,opacity:0,scale:0}}
              animate={inView7 ? {x:0,opacity:1,scale:1,transition:{ease:'backInOut'}} : {}}
              className='h-[300px] w-full  lg:h-[500px] lg:w-[500px] dlg:w-[600px] dlg:h-[600px] BlobDesign2 bg-white'>
                    <img src={aboutCompany} className=' h-full w-full object-cover mix-blend-multiply drop-shadow-2xl BlobDesign' alt="" />
                    {/* <div className=' text-center font-bold mt-3 text-lg text-[#fff]'></div> */}
                </motion.div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:flex justify-center items-center md:gap-10 mt-5 lg:mt-0'>
                <motion.div
                ref={ref10}
                initial={{scale:0,opacity:0}}
                animate={inView10 ? {scale:1,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                className=' flex justify-center items-center gap-2'>
                  <div className='text-[52px] font-bold outLineFont dlg:text-[80px]'>10+</div>
                  <div className='text-2xl text-[#2a2828] dlg:text-[25px]'>Years of <span className='block'>Experience</span></div>
                </motion.div>

                <motion.div
                ref={ref11}
                initial={{scale:0,opacity:0}}
                animate={inView11 ? {scale:1,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                className='flex justify-center items-center gap-2'>
                  <div className='text-[52px] font-bold outLineFont dlg:text-[80px]'>30+</div>
                  <div className='text-2xl text-[#2a2828] dlg:text-[25px]'>Skilled <span className='block'>Professionals</span></div>
                </motion.div>

                <motion.div
                ref={ref12}
                initial={{scale:0,opacity:0}}
                animate={inView12 ? {scale:1,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                className='flex justify-center items-center gap-2'>
                  <div className='text-[52px] font-bold outLineFont dlg:text-[80px]'>100%</div>
                  <div className='text-2xl text-[#2a2828] dlg:text-[25px]'>Customer<span className='block'>Satisfaction</span></div>
                </motion.div>

                <motion.div
                ref={ref13}
                initial={{scale:0,opacity:0}}
                animate={inView13 ? {scale:1,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                className='flex justify-center items-center gap-2'>
                  <div className='text-[52px] font-bold outLineFont dlg:text-[80px]'>1000+</div>
                  <div className='text-2xl text-[#2a2828] dlg:text-[25px]'>Clients<span className='block'>World Wide</span></div>
                </motion.div>

              </div>
        </div>

        {/* Next Section */}

        <section className='section'>
          <div className=' lg:mx-auto mb-10'>
            {/* <div className=' flex justify-center'>
              <div className='BlobAnimation1 w-[150px] h-[170px] absolute -z-10 opacity-20'></div>
            </div> */}
              <motion.div
              ref={ref8}
              initial={{ x:-100,opacity:0}}
              animate={inView8 ? {x:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
              className='TitleText text-[#2075bb] text-[42px] pt-10 text-center mb-5 dlg:text-[78px]'>Software Solutions</motion.div>
              <motion.div
              ref={ref9}
              initial={{ x:-100,opacity:0}}
              animate={inView9 ? {x:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
              className='text-center ParagraphText text-[#2a2828] mb-10 lg:max-w-[900px] lg:mx-auto font-bold dlg:text-lg'>At Flash Innovations, we champion the forefront of technology with unwavering commitment and excellence. Our cutting-edge solutions and unmatched expertise redefine industry standards, driving transformative results across diverse sectors. With a strategic approach and relentless dedication, we empower businesses to excel and navigate challenges with confidence, ensuring exceptional performance and lasting impact.</motion.div>
              
              <div className=' grid grid-cols-2 place-items-center place-content-center w-full h-[300px] lg:h-[200px] rounded-3xl gap-5 p-5 GlassBox bg-[#ffffff] lg:w-[900px] dlg:w-[1400px] dlg:h-[300px]  lg:mx-auto lg:grid-cols-4'>
                <motion.div
                ref={ref14}
                initial={{y:-100,opacity:0}}
                animate={inView14 ? {y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                >
                  <img src={task} className='w-auto h-[50px] dlg:h-[80px] object-contain' alt="" />
                </motion.div>
                <motion.div
                ref={ref15}
                initial={{y:-100,opacity:0}}
                animate={inView15 ? {y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                >
                  <img src={shade} className=' w-auto h-[45px] dlg:h-[75px]' alt="" />
                </motion.div>
                <motion.div
                ref={ref16}
                initial={{y:-100,opacity:0}}
                animate={inView16 ? {y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                >
                  <img src={vtsak} className='w-auto h-[40px] dlg:h-[70px] object-contain' alt="" />
                </motion.div>
                <motion.div
                ref={ref17}
                initial={{y:-100,opacity:0}}
                animate={inView17 ? {y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                >
                  <img src={dine} className='w-auto h-[40px] dlg:h-[70px]' alt="" />
                </motion.div>
                <motion.div
                ref={ref18}
                initial={{y:-100,opacity:0}}
                animate={inView18 ? {y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                >
                  <img src={clublogic} className='w-auto h-[40px] dlg:h-[70px]' alt="" />
                </motion.div>
                <motion.div
                ref={ref19}
                initial={{y:-100,opacity:0}}
                animate={inView19 ? {y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                >
                  <img src={magnet} className='w-auto h-[55px] dlg:h-[90px]' alt="" />
                </motion.div>
                <motion.div
                ref={ref20}
                initial={{y:-100,opacity:0}}
                animate={inView20 ? {y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                >
                  <img src={auric} className='w-auto h-[50px] dlg:h-[75px]' alt="" />
                </motion.div>
                <motion.div
                ref={ref21}
                initial={{y:-100,opacity:0}}
                animate={inView21 ? {y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                >
                  <img src={starstay} className='w-auto h-[38px] dlg:h-[70px]' alt="" />
                </motion.div>
              </div>

              <div className=' flex justify-center items-center mt-10'>
                <Link to='/software'>
                  <button className='px-8 py-3 rounded-3xl GradientButton'>Know More</button>
                </Link>
              </div>
          </div>
        </section>

        {/* Hardware Solutions */}

        <section className=' section'>
          <div className='lg:max-w-[1200px] lg:mx-auto mb-10'>
            <div>
              <motion.div
              ref={ref50}
              initial={{x:-100,opacity:0}}
              animate={inView50 ? {x:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
              className='TitleText text-[#2075bb] text-[42px] pt-10 text-center mb-5 dlg:text-[100px]'>Hardware Solutions</motion.div>
              <motion.div
              ref={ref51}
              initial={{x:-100,opacity:0}}
              animate={inView51 ? {x:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
              className='text-center ParagraphText text-[#2a2828] mb-10 lg:max-w-[900px] lg:mx-auto font-bold dlg:text-lg'>Flash Innovations provides comprehensive Hardware Solutions designed to meet your business's unique needs. From supplying high-quality components to offering expert installation and maintenance services, we ensure that your infrastructure runs smoothly and efficiently. Whether you're upgrading existing systems or building new ones, our hardware solutions are reliable, scalable, and backed by dedicated support for optimal performance.</motion.div>
            </div>

            {/* Hardware List */}
            <div className='grid grid-cols-1 place-items-center md:grid-cols-2 gap-10 dlg:w-[1200px] mx-auto'>

                <motion.div
                ref={ref52}
                initial={{y:-100,opacity:1}}
                animate={inView52 ? {y:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
                className=' w-full h-[280px] lg:h-[250px] rounded-3xl BorderDesignBox px-5 md:px-10 py-2 md:py-10 relative'>
                  {/* <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0 -z-10'>
                    <img src={hard3} className='w-full h-full object-cover rounded-3xl opacity-45' alt="" />
                  </div> */}
                  {/* <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0 z-10'>
                    <img src={whiteShade} className='w-full h-full object-cover rounded-3xl' alt="" />
                  </div> */}
                <div className='flex justify-between items-center mb-2'>
                  <div className='text-[25px] mb-2 md:mb-5 font-bold relative z-20 leading-[30px] md:leading-normal'>Computer Hardware Sales & Services</div>
                  <div className='h-[80px]'>
                    <img src={otherservice13} className='w-full h-full object-contain' alt="" />
                  </div>
                </div>
                  <div className=' text-sm lg:text-base lg:font-medium relative z-20'>
                  Flash Innovations provides comprehensive Computer Hardware Sales & Services, including high-quality components and expert repairs. We ensure your systems operate efficiently and reliably with top-notch support.
                  </div>
                </motion.div>

                <motion.div
                ref={ref53}
                initial={{y:-100,opacity:1}}
                animate={inView53 ? {y:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
                className=' w-full h-[250px] llg:h-[250px] rounded-3xl BorderDesignBox px-5 md:px-8 py-5 md:py-10'>
                  {/* <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0'>
                    <img src={hard4} className='w-full h-full object-cover rounded-3xl opacity-45' alt="" />
                  </div>
                  <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0 z-10'>
                    <img src={whiteShade} className='w-full h-full object-cover rounded-3xl' alt="" />
                  </div> */}
                  <div className='flex justify-between items-center mb-2'>
                    <div className='text-[25px] mb-5 font-bold relative z-20 leading-[30px] md:leading-normal'>CCTV & Security</div>
                    <div className='h-[80px]'>
                      <img src={otherservice10} className='w-full h-full object-contain' alt="" />
                    </div>
                  </div>
                    <div className='text-sm lg:text-base lg:font-medium relative z-20'>
                      Flash Innovations offers top-notch CCTV & Security solutions, providing advanced surveillance systems and reliable protection for your premises. Our expert services ensure comprehensive security and peace of mind.
                    </div>
                </motion.div>

                <motion.div
                ref={ref54}
                initial={{y:-100,opacity:1}}
                animate={inView54 ? {y:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
                className=' w-full h-[250px] llg:h-[250px] rounded-3xl BorderDesignBox px-5 md:px-8 py-5 md:py-10'>
                  {/* <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0'>
                    <img src={hard1} className='w-full h-full object-cover rounded-3xl opacity-45' alt="" />
                  </div>
                  <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0 z-10'>
                    <img src={whiteShade} className='w-full h-full object-cover rounded-3xl' alt="" />
                  </div> */}
                  <div className='flex justify-between items-center mb-2'>
                    <div className='text-[25px] mb-5 font-bold relative z-20 leading-[30px]'>Scanners & Printers</div>
                    <div className='h-[80px]'>
                      <img src={otherservice9} className='w-full h-full' alt="" />
                    </div>
                  </div>
                  <div className='text-sm lg:text-base lg:font-medium relative z-20'>
                    Flash Innovations provides high-quality Scanners & Printers, offering reliable performance and advanced features to meet all your document management needs. Trust us for efficient and durable solutions.
                  </div>
                </motion.div>

                <motion.div
                ref={ref55}
                initial={{y:-100,opacity:1}}
                animate={inView55 ? {y:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
                className=' w-full h-[250px] llg:h-[250px] rounded-3xl BorderDesignBox px-5 md:px-8 py-5 md:py-10'>
                  {/* <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0'>
                    <img src={hard2} className='w-full h-full object-cover rounded-3xl opacity-45' alt="" />
                  </div>
                  <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0 z-10'>
                    <img src={whiteShade} className='w-full h-full object-cover rounded-3xl' alt="" />
                  </div> */}
                  <div className=' flex justify-between items-center mb-2'>
                    <div className='text-[25px] mb-5 font-bold relative z-20'>Networking</div>
                    <div className='h-[80px]'>
                      <img src={NetWorking} className='w-full h-full' alt="" />
                    </div>
                  </div>
                  <div className='text-sm lg:text-base lg:font-medium relative z-20'>
                    Flash Innovations delivers expert Networking solutions, ensuring seamless connectivity and robust performance for your business. Our services include design, installation, and support for all your network needs.
                  </div>
                </motion.div>

            </div>

            <motion.div
            ref={ref56}
            initial={{x:-100,opacity:1}}
            animate={inView56 ? {x:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
            className=' flex justify-center items-center mx-auto mt-10'>
              <Link to='/hardwares'>
                <button className='px-8 py-3 rounded-3xl GradientButton'>Know More</button>
              </Link>
            </motion.div>
          </div>
        </section>
        

        {/* Other Services Section */}

        <section className=' section'>
          <div className='lg:max-w-[1200px] lg:mx-auto mb-10'>
           <div className=' md:flex justify-center items-center gap-10'>
            <div className='mb-10'>
                <motion.div
                ref={ref22}
                initial={{x:-100,opacity:0}}
                animate={inView22 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:1}} : {}}
                className='TitleText text-[#2075bb] text-[42px] pt-10 text-center mb-5 dlg:text-[100px]'>Other Services
                </motion.div>
                <motion.div
                 ref={ref23}
                 initial={{x:-100,opacity:0}}
                 animate={inView23 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:1}} : {}}
                className='text-center ParagraphText text-[#2a2828] font-bold dlg:text-lg'>At Flash Innovations, we offer a full range of tailored solutions, including cutting-edge software, dynamic web and mobile applications, impactful branding, strategic digital marketing, and engaging design services, all crafted to elevate your business.</motion.div>
              </div>

              <motion.div
               ref={ref24}
               initial={{scale:0,opacity:0}}
               animate={inView24 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className='h-[300px] w-full  dlg:h-[400px] bg-white BlobDesign2 mb-10'>
                      <img src={companyServices} className=' h-full w-full object-cover mix-blend-darken drop-shadow-2xl rounded-full BlobDesign' alt="" />
              </motion.div>
           </div>

            {/* Other Services Lists */}
            
              <div className=' grid grid-cols-1 place-items-center md:grid-cols-2 llg:w-[1200px] mx-auto gap-10'>

                <motion.div
                ref={ref26}
                initial={{y:-100,opacity:0}}
                animate={inView26 ? {y:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
                className=' w-full h-[250px] llg:h-[250px] rounded-3xl BorderDesignBox px-5 md:px-8 py-5 md:py-10 relative'>
                  {/* <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0'>
                    <img src={clientsBanner} className='w-full h-full object-cover rounded-3xl opacity-45' alt="" />
                  </div>
                  <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0 z-10'>
                    <img src={whiteShade} className='w-full h-full object-cover rounded-3xl' alt="" />
                  </div> */}
                  <div className='flex justify-between items-center mb-2'>
                    <div className='text-[25px] mb-5 font-bold relative z-20 leading-[30px] md:leading-normal'>Digital Marketing</div>
                    <div className='h-[80px]'>
                      <img src={otherservice1} className='w-full h-full' alt="" />
                    </div>
                  </div>
                  <div className='text-sm lg:text-base lg:font-medium relative z-20'>
                  Flash Innovations offers strategic Digital Marketing services to boost your online presence. From SEO to social media campaigns, we help your business reach and engage the right audience effectively.
                  </div>
                </motion.div>

                <motion.div
                ref={ref27}
                initial={{y:-100,opacity:0}}
                animate={inView27 ? {y:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
                className='w-full h-[250px] llg:h-[250px] rounded-3xl BorderDesignBox px-5 md:px-8 md:py-10 py-5 relative'>
                  {/* <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0'>
                    <img src={other4} className='w-full h-full object-cover rounded-3xl opacity-45' alt="" />
                  </div>
                  <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0 z-10'>
                    <img src={whiteShade} className='w-full h-full object-cover rounded-3xl' alt="" />
                  </div> */}
                  <div className='flex justify-between items-center mb-2'>
                    <div className='text-[25px] mb-5 font-bold md:leading-[40px] leading-[30px] relative z-20'>Graphic Designing</div>
                    <div className='h-[80px]'>
                      <img src={otherservice2} className='w-full h-full' alt="" />
                    </div>
                  </div>
                  <div className=' text-sm lg:text-base lg:font-medium relative z-20'>
                  Flash Innovations provides creative Graphic Designing services, crafting visually stunning designs that elevate your brand. From logos to marketing materials, we deliver impactful visuals that capture attention.
                  </div>
                </motion.div>

                <motion.div
                ref={ref28}
                initial={{y:-100,opacity:0}}
                animate={inView28 ? {y:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
                 className=' w-full h-[250px] llg:h-[250px] rounded-3xl BorderDesignBox px-5 md:px-8 py-2 lg:py-10 relative'>
                  {/* <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0'>
                    <img src={other5} className='w-full h-full object-cover rounded-3xl opacity-45' alt="" />
                  </div>
                  <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0 z-10'>
                    <img src={whiteShade} className='w-full h-full object-cover rounded-3xl' alt="" />
                  </div> */}
                  <div className='flex justify-between items-center mb-2'>
                    <div className='text-[25px] mb-5 font-bold relative z-20 leading-[30px] md:leading-normal'>Website & Web Applications</div>
                    <div className='h-[80px]'>
                      <img src={otherservice2} className='w-full h-full' alt="" />
                    </div>
                  </div>
                  <div className='text-sm lg:text-base lg:font-medium relative z-20'>
                  Flash Innovations specializes in designing and developing websites and web applications that are dynamic, responsive, and user-friendly. We create solutions that enhance your online presence and deliver a seamless digital experience.
                  </div>
                </motion.div>


                <motion.div
                ref={ref28}
                initial={{y:-100,opacity:0}}
                animate={inView28 ? {y:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
                 className=' w-full h-[250px] llg:h-[250px] rounded-3xl BorderDesignBox px-5 md:px-8 py-5 md:py-10 relative'>
                  {/* <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0'>
                    <img src={other3} className='w-full h-full object-cover rounded-3xl opacity-45' alt="" />
                  </div>
                  <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0 z-10'>
                    <img src={whiteShade} className='w-full h-full object-cover rounded-3xl' alt="" />
                  </div> */}
                  <div className='flex justify-between items-center mb-2'>
                    <div className='text-[25px] mb-5 font-bold relative z-20 leading-[30px] md:leading-normal'>Mobile Applications</div>
                    <div className='h-[80px]'>
                      <img src={otherservice4} className='w-full h-full' alt="" />
                    </div>
                  </div>
                  <div className='text-sm lg:text-base lg:font-medium relative z-20'>
                  Flash Innovations develops custom mobile applications that are intuitive, fast, and tailored to your business needs. Our apps deliver a smooth user experience across both iOS and Android platforms.
                  </div>
                </motion.div>


                <motion.div
                ref={ref28}
                initial={{y:-100,opacity:0}}
                animate={inView28 ? {y:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
                 className=' w-full h-[250px] llg:h-[250px] rounded-3xl BorderDesignBox px-5 md:px-8 py-5 md:py-10 relative'>
                  {/* <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0'>
                    <img src={other2} className='w-full h-full object-cover rounded-3xl opacity-30' alt="" />
                  </div>
                  <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0 z-45'>
                    <img src={whiteShade} className='w-full h-full object-cover rounded-3xl' alt="" />
                  </div> */}
                  <div className='flex justify-between mb-2 items-center'>
                    <div className='text-[25px] mb-5 font-bold relative z-20'>Branding</div>
                    <div className='h-[80px]'>
                      <img src={otherservice5} className='w-full h-full' alt="" />
                    </div>
                  </div>
                  <div className='text-sm lg:text-base lg:font-medium relative z-20'>
                  Flash Innovations specializes in creative Graphic Designing, delivering impactful visuals that elevate your brand. Our designs capture attention and communicate your message with clarity and style.
                  </div>
                </motion.div>


                <motion.div
                ref={ref29}
                initial={{y:-100,opacity:0}}
                animate={inView29 ? {y:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
                className=' w-full h-[280px] llg:h-[250px] rounded-3xl BorderDesignBox px-5 md:px-10 py-5 lg:py-10 relative'>
                  {/* <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0'>
                    <img src={other8} className='w-full h-full object-cover rounded-3xl opacity-45' alt="" />
                  </div>
                  <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0 z-45'>
                    <img src={whiteShade} className='w-full h-full object-cover rounded-3xl' alt="" />
                  </div> */}
                  <div className='flex justify-between items-center mb-2'>
                    <div className='text-[25px] mb-5 font-bold relative z-20 leading-[30px] md:leading-normal'>Whatsapp / SMS Marketing</div>
                    <div className='h-[80px]'>
                      <img src={otherservice6} className='w-full h-full' alt="" />
                    </div>
                  </div>
                  <div className='text-sm lg:text-base lg:font-medium relative z-20'>
                  Flash Innovations provides effective WhatsApp & SMS Marketing solutions, enabling direct and personalized communication with your audience. Our services help you reach customers quickly and efficiently.
                  </div>
                </motion.div>


                <motion.div
                ref={ref30}
                initial={{y:-100,opacity:0}}
                animate={inView30 ? {y:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
                className=' w-full h-[250px] llg:h-[250px] rounded-3xl BorderDesignBox px-5 md:px-10 py-5 md:py-10 relative'>
                  {/* <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0'>
                    <img src={other1} className='w-full h-full object-cover rounded-3xl opacity-45' alt="" />
                  </div>
                  <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0 z-10'>
                    <img src={whiteShade} className='w-full h-full object-cover rounded-3xl' alt="" />
                  </div> */}
                  <div className='flex justify-between items-center mb-2'>
                    <div className='text-[25px] mb-5 font-bold relative z-20'>SEO</div>
                    <div className='h-[80px]'>
                      <img src={otherservice7} className='w-full h-full' alt="" />
                    </div>
                  </div>
                  <div className='text-sm lg:text-base lg:font-medium relative z-20'>
                  Flash Innovations offers expert SEO services to improve your website's visibility and ranking. We optimize your content and strategies to drive organic traffic and boost your online presence.
                  </div>
                </motion.div>


                <motion.div
                ref={ref31}
                initial={{y:-100,opacity:0}}
                animate={inView31 ? {y:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
                className=' w-full h-[250px] llg:h-[250px] rounded-3xl BorderDesignBox px-5 md:px-10 py-5 md:py-10 relative'>
                  {/* <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0'>
                    <img src={other6} className='w-full h-full object-cover rounded-3xl opacity-45' alt="" />
                  </div>
                  <div className='absolute h-[250px] w-full rounded-3xl top-0 left-0 z-10'>
                    <img src={whiteShade} className='w-full h-full object-cover rounded-3xl' alt="" />
                  </div> */}
                  <div className='flex justify-between items-center mb-2'>
                    <div className='text-[25px] mb-5 font-bold relative z-20'>E - Commerce</div>
                    <div className='h-[80px]'>
                      <img src={otherservice8} className='w-full h-full' alt="" />
                    </div>
                  </div>
                  <div className='text-sm lg:text-base lg:font-medium relative z-20'>
                  Flash Innovations delivers powerful E-Commerce solutions that help you build and grow your online store. From user-friendly design to secure payment integration, we ensure a seamless shopping experience for your customers.
                  </div>
                </motion.div>


              </div>

              <motion.div
              ref={ref56}
              initial={{x:-100,opacity:1}}
              animate={inView56 ? {x:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
              className=' flex justify-center items-center mt-10'>
                <Link to='/services'>
                  <button className='px-8 py-3 rounded-3xl GradientButton'>Know More</button>
                </Link>
            </motion.div>

          </div>
        </section>

        <section className=' section'>
          {/* <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
            <motion.div
            ref={ref34}
            initial={{x:-100,opacity:0}}
            animate={inView34 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
             className='TitleText text-[#2075bb] text-[42px] pt-10 text-center mb-5 dlg:text-[100px]'>Our Hardware Solutions
             </motion.div>
            <motion.div
            ref={ref35}
            initial={{x:-100,opacity:0}}
            animate={inView35 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
            className=' text-center ParagraphText text-[#2a2828] md:max-w-[600px] md:mx-auto lg:max-w-[700px] font-bold dlg:text-lg'>At Flash Innovations, our hardware solutions offer top-notch reliability and performance. We provide a diverse range of advanced components, including security systems and high-performance computing devices, all tailored to your needs. Our focus on quality and innovation ensures that our hardware enhances efficiency and supports your business’s growth, keeping you ahead in a rapidly evolving technological landscape.
            </motion.div> */}

            {/* Hardware Lists */}

            {/* <motion.div
            ref={ref43}
            initial={{scale:0,opacity:0}}
            animate={inView43 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
            className=' mt-10 flex justify-center items-center lg:mt-28'>
                <button className='px-8 py-2 rounded-3xl GradientButton'>Know More</button>
              </motion.div> */}
          {/* </div> */}
        </section>

        <section className='section'>
          <div className='lg:max-w-[1200px] lg:mx-auto mb-5'>
              <motion.div
              ref={ref44}
              initial={{x:-100,opacity:0}}
              animate={inView44 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className='TitleText text-[#2075bb] text-[42px] pt-10 text-center mb-5 dlg:text-[100px]'>Our Partners
              </motion.div>
              <motion.div 
              ref={ref45}
              initial={{x:-100,opacity:0}}
              animate={inView45 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className=' text-center ParagraphText text-[#2a2828] lg:px-56 font-bold dlg:text-lg'>At Flash Innovations, we value our strategic partnerships with industry-leading companies and technology providers. These collaborations enable us to deliver cutting-edge solutions and exceptional service to our clients. By working closely with our partners, we ensure access to the latest innovations and resources, driving success and enhancing the value we bring to your business.
              </motion.div>

              <div className='mt-10 lg:mt-16 overflow-hidden'>
                <LogoSlider/>
              </div>
          </div>
        </section>

        <section className='section'>
          <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
            <div className='md:flex justify-center items-center gap-10'>
              <div className=''>
                  <motion.div
                  ref={ref46}
                  initial={{x:-100,opacity:0}}
                  animate={inView46 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
                  className='TitleText text-[#2075bb] text-[42px] pt-10 text-center mb-5'>Drop Us A Line</motion.div>
                  <motion.div
                  ref={ref47}
                  initial={{x:-100,opacity:0}}
                  animate={inView47 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
                  className=' text-center ParagraphText text-[#2a2828] mb-10 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus perspiciatis modi iure soluta a, porro officiis tenetur quae tempore deserunt debitis, explicabo reiciendis vero dignissimos, asperiores dicta quisquam aliquam.
                  Fugit officiis sint numquam enim quia, distinctio commodi iure iusto voluptatem optio incidunt obcaecati itaque corporis mollitia rem odit vitae. Cupiditate, dolor. Iure voluptatum ratione distinctio nam cupiditate. Eligendi, at.</motion.div>
                  <motion.div
                  ref={ref48}
                  initial={{x:-100,opacity:0}}
                  animate={inView48 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
                  className=' hidden md:flex justify-center items-center mt-10'>
                    <Link to='/contact'>
                      <button className=' px-8 py-2 rounded-3xl GradientButton'>Contact Us</button>
                    </Link>
                  </motion.div>
              </div>

              <motion.div 
              ref={ref49}
              initial={{scale:0,opacity:0}}
              animate={inView49 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className='h-[400px] w-full  bg-white BlobDesign2'>
                    <img src={customerSupport} className=' h-full w-full object-cover mix-blend-multiply drop-shadow-2xl BlobDesign' alt="" />
              </motion.div>
              <motion.div
              
              className=' flex md:hidden justify-center items-center mt-10'>
                   <Link to='/contact'>
                      <button className='px-8 py-3 rounded-3xl GradientButton'>Know More</button>
                   </Link>
                
              </motion.div>
            </div>
          </div>  
        </section>

        <motion.section
        className='flex flex-col justify-center items-center bg-FooterBg bg-fixed bg-no-repeat bg-cover bg-center z-[997]'>
        <Footer/>
      </motion.section>

      </section>
      
    </div>
  );
};

export default Home;
