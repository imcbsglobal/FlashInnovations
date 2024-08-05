import React from 'react';
import techVideo from "../assets/tech-video3.mp4";
import blueShade from "../assets/blue-shade.png";
import homeBannerVideo from "../assets/home-banner.mp4";
import banner from "../assets/banner-png.png";
import task from "../assets/task.png"
import shade from "../assets/shade.png"
import vtsak from '../assets/vtask.png'
import dine from "../assets/Dine.png"
import clublogic from "../assets/clublogic.png"
import magnet from "../assets/magnet.png"
import auric from "../assets/auric.png"
import starstay from "../assets/starstay.png"
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
import LogoSlider from './LogoSlider';
import Colleagues from "../assets/colleagues1.png"
import { TiTick } from "react-icons/ti";
import Footer from './Footer';
import contactImage from "../assets/contact-image.png"
import serviceImg from "../assets/colleagues2.png"
import {motion} from "framer-motion"


const Home = () => {
  const revealVariant = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between each child animation
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration:0.5, ease: 'backInOut' },
    },
  };
  return (
    <div data-scroll-container className=''>
      {/* Parallax Section */}
      <section className='relative min-h-screen w-full -z-10'>
        <div className='fixed inset-0 overflow-hidden'>
          <video
            className='w-full h-full object-cover opacity-50'
            autoPlay
            loop
            muted
            playsInline
            src={homeBannerVideo}
          ></video>
        </div>
        <div className='flex justify-center items-center h-full w-full fixed z-30'>
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={revealVariant}
            className='TextStyle text-[62px] font-bold text-[#fff] text-center md:text-[72px] lg:text-[152px] lg:leading-tight'>
              FLASH INNOVATIONS
            </motion.div>
            {/* Rotate Animation */}
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

            <div className=' flex justify-center items-center'>
              <div className='absolute bottom-0'>
                <img src={banner} className='drop-shadow-xl' alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Section */}
      <section className='relative min-h-screen w-full z-50 GlassNavbar rounded-t-3xl '>
        {/* <div className=''>
          <img src={blueShade} className='absolute -z-10 w-full h-full object-cover opacity-50' alt="blueShade" />
          <video className='absolute top-0 -z-10 opacity-15 mix-blend-multiply' autoPlay loop muted playsInline src={techVideo} style={{ width: '100%', height: '100%', objectFit:'cover' }}></video>
        </div> */}
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20 section'>
          <div className='flex justify-center items-center h-full'>
            <div className=' md:flex justify-center items-center gap-10 lg:max-w-[1200px] lg:mx-auto'>
              <div className='mb-10 md:w-[50%]'>
                <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                >
                  <motion.div
                  variants={itemVariants}
                  className='TitleText text-[#fff] text-[42px] pt-10 text-center mb-5'>About Us</motion.div>
                  <motion.div
                  variants={itemVariants}
                  className=' text-center ParagraphText text-[#fff] mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, nobis, consequatur esse quasi beatae saepe earum consectetur qui ab natus dolore odit nihil eius possimus laborum aliquid dolores voluptatibus quis.</motion.div>
                  <motion.div
                  variants={itemVariants}
                  className='text-center ParagraphText text-[#fff] mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, dolores veritatis maiores quia consequuntur eum dolore nemo molestias alias commodi tenetur voluptatum nesciunt rerum nam. Voluptates aliquid quo amet asperiores?
                  </motion.div>
                </motion.div>

                <div className=''>
                <ul className=' flex flex-col justify-center items-center gap-3'>
                  <motion.li
                  initial={{x:-100,opacity:0,scale:0}}
                  animate={{x:0,opacity:1,scale:1,transition:{duration:1,ease:'backInOut'}}}
                  >
                    <div className=' flex justify-center items-center gap-2 text-sm GlassBox p-5 rounded-xl bg-[#0091ff59]  text-[#ffffffe6] ParagraphText'>
                      <div className=' text-xl'><TiTick className=''/></div>
                      <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iusto.</div>
                    </div>
                  </motion.li>
                  <motion.li
                  initial={{x:-100,opacity:0,scale:0}}
                  animate={{x:0,opacity:1,scale:1,transition:{duration:1,ease:'backInOut'}}}
                  >
                    <div className=' flex justify-center items-center gap-2 text-sm GlassBox p-5 rounded-xl bg-[#0091ff59]  text-[#ffffffe6] ParagraphText'>
                      <div className=' text-xl'><TiTick className=''/></div>
                      <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iusto.</div>
                    </div>
                  </motion.li>
                  <motion.li
                  initial={{x:-100,opacity:0,scale:0}}
                  animate={{x:0,opacity:1,scale:1,transition:{duration:1,ease:'backInOut'}}}
                  >
                    <div className=' flex justify-center items-center gap-2 text-sm GlassBox p-5 rounded-xl bg-[#0091ff59]  text-[#ffffffe6] ParagraphText'>
                      <div className=' text-xl'><TiTick className=''/></div>
                      <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iusto.</div>
                    </div>
                  </motion.li>
                </ul>
                </div>
              </div>
              <div>
              <motion.div
              initial={{opacity:0,scale:0}}
              animate={{opacity:1,scale:1,transition:{duration:1,ease:'backInOut'}}}
              className='h-[300px] w-full  bg-white BlobDesign'>
                    <img src={Colleagues} className=' h-full w-full object-contain mix-blend-multiply drop-shadow-2xl' alt="" />
                    {/* <div className=' text-center font-bold mt-3 text-lg text-[#fff]'></div> */}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Section */}

        <section className='section'>
          <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
            {/* <div className=' flex justify-center'>
              <div className='BlobAnimation1 w-[150px] h-[170px] absolute -z-10 opacity-20'></div>
            </div> */}
              <motion.div
              initial="hidden"
              animate="visible"
              variants={revealVariant}
              className='TitleText text-[#fff] text-[42px] pt-10 text-center mb-5'>Software & Hardware Company</motion.div>
              <motion.div
              initial="hidden"
              animate="visible"
              variants={revealVariant}
              className='text-center ParagraphText text-[#fff] mb-10 lg:max-w-[900px] lg:mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse asperiores neque libero odio, quisquam voluptatem perferendis quia corrupti. Rerum voluptates, placeat deserunt tenetur repudiandae libero odio qui cupiditate harum enim?</motion.div>
              <div className='grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:grid-cols-4 mb-10'>
                <motion.div
                initial={{scale:0,opacity:0}}
                animate={{scale:1,opacity:1,transition:{duration:0.5,ease:'backInOut'}}}
                className=' flex justify-center items-center gap-2'>
                  <div className='text-[52px] font-bold outLineFont'>10+</div>
                  <div className='text-2xl text-[#fff]'>Years of <span className='block'>Experience</span></div>
                </motion.div>

                <motion.div
                initial={{scale:0,opacity:0}}
                animate={{scale:1,opacity:1,transition:{duration:0.5,ease:'backInOut'}}}
                className='flex justify-center items-center gap-2'>
                  <div className='text-[52px] font-bold outLineFont'>30+</div>
                  <div className='text-2xl text-[#fff]'>Skilled <span className='block'>Professionals</span></div>
                </motion.div>

                <motion.div
                initial={{scale:0,opacity:0}}
                animate={{scale:1,opacity:1,transition:{duration:0.5,ease:'backInOut'}}}
                className='flex justify-center items-center gap-2'>
                  <div className='text-[52px] font-bold outLineFont'>300+</div>
                  <div className='text-2xl text-[#fff]'>Projects<span className='block'>Worldwide</span></div>
                </motion.div>

                <motion.div
                initial={{scale:0,opacity:0}}
                animate={{scale:1,opacity:1,transition:{duration:0.5,ease:'backInOut'}}}
                className='flex justify-center items-center gap-2'>
                  <div className='text-[52px] font-bold outLineFont'>100%</div>
                  <div className='text-2xl text-[#fff]'>Customer<span className='block'>Satisfaction</span></div>
                </motion.div>

              </div>
              <div className=' grid grid-cols-2 place-items-center place-content-center w-full h-[300px] lg:h-[200px] rounded-3xl gap-5 p-5 GlassBox bg-[#0091ff59] lg:max-w-[900px] lg:mx-auto lg:grid-cols-4'>
                <motion.div
                initial={{y:-100,opacity:0}}
                animate={{y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}}}
                >
                  <img src={task} className='w-auto h-[50px] object-contain' alt="" />
                </motion.div>
                <motion.div
                initial={{y:-100,opacity:0}}
                animate={{y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}}}
                >
                  <img src={shade} className=' w-auto h-[45px]' alt="" />
                </motion.div>
                <motion.div
                initial={{y:-100,opacity:0}}
                animate={{y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}}}
                >
                  <img src={vtsak} className='w-auto h-[40px] object-contain' alt="" />
                </motion.div>
                <motion.div
                initial={{y:-100,opacity:0}}
                animate={{y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}}}
                >
                  <img src={dine} className='w-auto h-[40px]' alt="" />
                </motion.div>
                <motion.div
                initial={{y:-100,opacity:0}}
                animate={{y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}}}
                >
                  <img src={clublogic} className='w-auto h-[40px]' alt="" />
                </motion.div>
                <motion.div
                initial={{y:-100,opacity:0}}
                animate={{y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}}}
                >
                  <img src={magnet} className='w-auto h-[55px]' alt="" />
                </motion.div>
                <motion.div
                initial={{y:-100,opacity:0}}
                animate={{y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}}}
                >
                  <img src={auric} className='w-auto h-[50px]' alt="" />
                </motion.div>
                <motion.div
                initial={{y:-100,opacity:0}}
                animate={{y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}}}
                >
                  <img src={starstay} className='w-auto h-[38px]' alt="" />
                </motion.div>
              </div>
          </div>
        </section>
        

        {/* About Section */}

        <section className=' section'>
          <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
           <div className=' md:flex justify-center items-center gap-10'>
            <div className='mb-10'>
                <div className='TitleText text-[#fff] text-[42px] pt-10 text-center mb-5'>Our Services</div>
                <div className='text-center ParagraphText text-[#fff]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repudiandae dignissimos blanditiis illo molestiae consequuntur totam, nobis odio, tempore corporis cumque quae, a in? Optio eligendi officia fugiat quod explicabo.</div>
              </div>

              <div className='h-[300px] w-full  bg-white BlobDesign'>
                      <img src={serviceImg} className=' h-full w-full object-contain mix-blend-darken drop-shadow-2xl rounded-full' alt="" />
              </div>
           </div>

            {/* Services Lists */}
            <div className=' grid grid-cols-1 place-items-center place-content-center gap-10 mt-10 lg:grid-cols-2'>

              {/* First List */}
              <div className='grid grid-cols-2 place-items-center place-content-center gap-2 text-center'>

                <div className=' h-[100px] w-full rounded-bl-3xl rounded-tr-3xl GlassBox1 flex justify-center items-center'>
                  <div className=' p-5 text-[#fff]'>Inventory Softwares</div>
                </div>

                <div className=' h-[100px] w-full rounded-br-3xl rounded-tl-3xl GlassBox1 flex justify-center items-center'>
                  <div className=' p-5 text-[#fff]'>Custom Web Applications</div>
                </div>

                <div className=' h-[100px] w-full rounded-br-3xl rounded-tl-3xl GlassBox1 flex justify-center items-center'>
                  <div className=' p-5 text-[#fff]'>Mobile App Development</div>
                </div>

                <div className=' h-[100px] w-full rounded-bl-3xl rounded-tr-3xl GlassBox1 flex justify-center items-center'>
                  <div className=' p-5 text-[#fff]'>Graphic Designing</div>
                </div>

              </div>

              {/* Second List */}
              <div className='grid grid-cols-2 place-items-center place-content-center gap-2 text-center'>

              <div className=' h-[100px] w-full rounded-bl-3xl rounded-tr-3xl GlassBox1 flex justify-center items-center'>
                  <div className=' p-5 text-[#fff]'>Branding</div>
                </div>

                <div className=' h-[100px] w-full rounded-br-3xl rounded-tl-3xl GlassBox1 flex justify-center items-center'>
                  <div className=' p-5 text-[#fff]'>Digital Marketing</div>
                </div>

                <div className=' h-[100px] w-full rounded-br-3xl rounded-tl-3xl GlassBox1 flex justify-center items-center'>
                  <div className=' p-5 text-[#fff]'>E-Commerce</div>
                </div>

                <div className=' h-[100px] w-full rounded-bl-3xl rounded-tr-3xl GlassBox1 flex justify-center items-center'>
                  <div className=' p-5 text-[#fff]'>Whatsapp/SMS Marketing</div>
                </div>

              </div>

              
            </div>
            <div className=' flex justify-center items-center mt-10 lg:mt-16'>
                <button className='px-8 py-2 rounded-3xl GradientButton'>Know More</button>
              </div>
          </div>
        </section>

        <section className=' section'>
          <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
            <div className='TitleText text-[#fff] text-[42px] pt-10 text-center mb-5'>Our Hardware Solutions</div>
            <div className=' text-center ParagraphText text-[#fff] md:max-w-[600px] md:mx-auto lg:max-w-[700px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt inventore nemo neque laboriosam? Quo nesciunt necessitatibus maxime. Facilis repellat, animi quasi harum expedita iure facere quis officiis. Deserunt, repellendus vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quod sed at assumenda, perferendis dicta voluptatum omnis, unde quam porro ea. Quis veritatis culpa distinctio perspiciatis, eum numquam temporibus esse!
            </div>

            {/* Hardware Lists */}

            <div className=' grid grid-cols-2 place-items-center gap-5 mt-10 md:grid-cols-3 lg:grid-cols-4'>

              <div className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px]  bg-white BlobDesign'>
                    <img src={pos} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center font-bold text-lg text-[#fff] mt-3 '>POS</div>
                </div>
              </div>

              <div className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px]  bg-white BlobDesign'>
                    <img src={computer} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center font-bold mt-3 text-lg text-[#fff]'>Computers</div>
                </div>
              </div>

              <div className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px]  bg-white BlobDesign'>
                    <img src={barcodePrinter} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center font-bold mt-3 text-lg text-[#fff]'>Barcode Printer</div>
                </div>
              </div>

              <div className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px]  bg-white BlobDesign'>
                    <img src={printers} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>Printers</div>
                </div>
              </div>

              <div className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px]  bg-white BlobDesign'>
                    <img src={handBarcode} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>Hand Barcode Scanner</div>
                </div>
              </div>

              <div className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px]  bg-white BlobDesign'>
                    <img src={tableBarcode} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>Table Barcode Scanner</div>
                </div>
              </div>

              <div className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px]  bg-white BlobDesign'>
                    <img src={lables} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>Labels</div>
                </div>
              </div>

              <div className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px]  bg-white BlobDesign'>
                    <img src={cashDrawer} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>Cash Drawer</div>
                </div>
              </div>

              <div className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px]  bg-white BlobDesign'>
                    <img src={weighting} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>Weighting Scale</div>
                </div>
              </div>

              <div className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px]  bg-white BlobDesign'>
                    <img src={cctv} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>CCTV</div>
                </div>
              </div>

              <div className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px] bg-white BlobDesign'>
                    <img src={biometric} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>Biometric</div>
                </div>
              </div>

              <div className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px]  bg-white BlobDesign'>
                    <img src={networking} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>Networking</div>
                </div>
              </div>

            </div>
            <div className=' mt-10 flex justify-center items-center'>
                <button className='px-8 py-2 rounded-3xl GradientButton'>Know More</button>
              </div>
          </div>
        </section>

        <section className='section'>
          <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
              <div className='TitleText text-[#fff] text-[42px] pt-10 text-center mb-5'>Our Partners</div>
              <div className=' text-center ParagraphText text-[#fff]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, atque, totam corrupti eum dicta, reiciendis sint porro fugit sed enim expedita aliquam maxime nesciunt? Non eos hic corporis consequatur illo.</div>

              <div className='mt-10 lg:mt-16 overflow-hidden'>
                <LogoSlider/>
              </div>
          </div>
        </section>

        <section className='section'>
          <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
            <div className='md:flex justify-center items-center gap-10'>
              <div>
                  <div className='TitleText text-[#fff] text-[42px] pt-10 text-center mb-5'>Drop Us A Line</div>
                  <div className=' text-center ParagraphText text-[#fff] mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus perspiciatis modi iure soluta a, porro officiis tenetur quae tempore deserunt debitis, explicabo reiciendis vero dignissimos, asperiores dicta quisquam aliquam.
                  Fugit officiis sint numquam enim quia, distinctio commodi iure iusto voluptatem optio incidunt obcaecati itaque corporis mollitia rem odit vitae. Cupiditate, dolor. Iure voluptatum ratione distinctio nam cupiditate. Eligendi, at.</div>
                  <div className=' hidden md:flex justify-center items-center mt-10'>
                    <button className=' px-8 py-2 rounded-3xl GradientButton'>Contact Us</button>
                  </div>
              </div>

              

              <div className='h-[300px] w-full  bg-white BlobDesign'>
                    <img src={contactImage} className=' h-full w-full object-contain mix-blend-multiply drop-shadow-2xl' alt="" />
              </div>
              <div className=' flex md:hidden justify-center items-center mt-10'>
                <button className=' px-8 py-2 rounded-3xl GradientButton'>Contact Us</button>
              </div>
            </div>
          </div>  
        </section>

        <section className='flex flex-col justify-center items-center bg-FooterBg bg-fixed bg-no-repeat bg-cover bg-center z-50'>
        <Footer/>
      </section>

      </section>
      
    </div>
  );
};

export default Home;
