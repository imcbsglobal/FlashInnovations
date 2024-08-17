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
            <div className=' text-center text-[42px] font-extrabold text-[hsl(0,0%,100%)] mb-5 TextStyle'>Pioneering Hardware Solutions for Enhanced Performance</div>
            <div className=' text-center TextStylePara text-[#fff]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus non accusantium perferendis minus exercitationem rerum sit magnam nemo voluptatem natus. Perferendis placeat quia aliquam cupiditate ducimus laborum illo quos asperiores!</div>
          </div>
        </div>
        {/* Bottom Image */}
        <div className=' absolute bottom-0 z-20 w-full left-0 bottomImage'>
          <img src={bottomImage} className='w-full h-full object-cover' alt="" />
        </div>
      </section>

      <section className=' section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
            <motion.div
            ref={ref1}
            initial={{x:-100,opacity:0}}
            animate={inView1 ? {x:0,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
            className=' text-[42px] font-extralight mb-5 text-center TitleText text-[#ffffff]'>Lorem ipsum dolor sit amet.</motion.div>
            <motion.div
            ref={ref2}
            initial={{x:-100,opacity:0}}
            animate={inView2 ? {x:0,opacity:1,transition:{duration:.7,ease:'backInOut',delay:.5}} : {}}
            className='text-sm text-center text-[#ffffffe6] ParagraphText mb-7 md:max-w-[600px] md:mx-auto lg:max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad molestias consequatur impedit perspiciatis obcaecati dicta, repudiandae pariatur natus, esse sed, veniam a possimus tenetur? Cum aliquam ducimus architecto minus distinctio! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, ipsa rem. Aliquid officia voluptatem facilis, expedita culpa voluptatum accusantium sapiente? Sapiente dolores molestias repudiandae soluta optio veritatis eos iusto modi!</motion.div>
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
          className='text-[42px] font-extralight mb-5 text-center TitleText text-[#ffffff]'>What Are The Types Of Development ?</motion.div>
          <motion.div
          ref={ref15}
          initial={{x:-100,opacity:0}}
          animate={inView15 ? {x:0,opacity:1,transition:{duration:.5,ease:"backInOut",delay:.7}} : {}}
          className='text-sm text-center text-[#ffffffe6] ParagraphText mb-7 md:max-w-[600px] md:mx-auto lg:max-w-[700px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dignissimos ipsum repudiandae dolores culpa magnam sapiente quia nihil quos. Est architecto in iusto sit eos deleniti voluptates voluptatum unde quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsa, sequi magnam explicabo ipsum aperiam corrupti fugiat reiciendis rerum. Magnam quod natus molestiae inventore quaerat accusamus repellendus iure alias sed.
          </motion.div>

          <div className=' grid place-items-center grid-cols-1 md:grid-cols-2 gap-5'>

              <motion.div
              ref={ref16}
              initial={{scale:0,opacity:0}}
              animate={inView16 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
              className=' w-full h-[300px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-full h-[300px] mix-blend-multiply'>
                    <img src='' className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>Web Design &
                      <span className=' block'>Development</span>
                    </div>
                    <div className=' text-white ParagraphText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error, voluptates labore, adipisci tenetur in temporibus, blanditiis ducimus eaque placeat quam mollitia. Quaerat odio ducimus dolores mollitia expedita quidem magni.</div>
                  </div>
              </motion.div>

              <motion.div
              ref={ref17}
              initial={{scale:0,opacity:0}}
              animate={inView17 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
              className=' w-full h-[300px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-full h-[300px] mix-blend-multiply'>
                    <img src='' className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>Software
                      <span className=' block'>Development</span>
                    </div>
                    <div className=' text-white ParagraphText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error, voluptates labore, adipisci tenetur in temporibus, blanditiis ducimus eaque placeat quam mollitia. Quaerat odio ducimus dolores mollitia expedita quidem magni.</div>
                  </div>
              </motion.div>


              <motion.div
              ref={ref18}
              initial={{scale:0,opacity:0}}
              animate={inView18 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
              className=' w-full h-[300px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-full h-[300px] mix-blend-multiply'>
                    <img src='' className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>Android & IOs
                      <span className=' block'>Development</span>
                    </div>
                    <div className=' text-white ParagraphText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error, voluptates labore, adipisci tenetur in temporibus, blanditiis ducimus eaque placeat quam mollitia. Quaerat odio ducimus dolores mollitia expedita quidem magni.</div>
                  </div>
              </motion.div>

              <motion.div
              ref={ref19}
              initial={{scale:0,opacity:0}}
              animate={inView19 ? {scale:1,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
              className=' w-full h-[300px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-full h-[300px] mix-blend-multiply'>
                    <img src='' className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>Web Design &
                      <span className=' block'>Development</span>
                    </div>
                    <div className=' text-white ParagraphText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error, voluptates labore, adipisci tenetur in temporibus, blanditiis ducimus eaque placeat quam mollitia. Quaerat odio ducimus dolores mollitia expedita quidem magni.</div>
                  </div>
              </motion.div>

            </div>
        </div>
      </section>
      <motion.section
      ref={ref20}
      initial={{height:0,opacity:0}}
      animate={inView20 ? {height:'auto',opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
      className='flex flex-col justify-center items-center bg-FooterBg bg-fixed bg-no-repeat bg-cover bg-center z-50'>
        <Footer/>
      </motion.section>
    </div>
  )
}

export default Services
