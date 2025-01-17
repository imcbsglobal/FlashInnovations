import React, { useEffect } from 'react'
import techVideo from "../assets/tech-video3.mp4"
import blueShade from "../assets/black-shade.png"
import task from "../assets/task.png"
import shade from "../assets/shade.png"
import vtask from "../assets/vtask.png"
import dine from "../assets/Dine.png"
import clublogic from "../assets/clublogic.png"
import magnet from "../assets/magnet.png"
import auric from "../assets/auric.png"
import startstay from "../assets/starstay.png"
import webDevelopment from "../assets/web-develop.jpg"
import softwareDevelopment from "../assets/software-develop.jpg"
import IOsDevelopment from "../assets/IOs-develop.jpg"
import Footer from './Footer';
import aboutBanner from "../assets/software-banner.jpeg"
import blackShade from "../assets/black-shade.png"
import bottomImage from "../assets/bottom-image.png"
import cloudSolutions from "../assets/cloud-solutions.jpeg"
import { inView, motion } from "framer-motion"
import { useInView } from "react-intersection-observer";



const Software = () => {

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
      {/* <div className=''>
        <img src={blueShade} className=' absolute -z-10 w-full h-full object-cover' alt="" />
        <video className=' absolute top-0 -z-10 opacity-15 mix-blend-multiply' autoPlay loop muted playsInline src={techVideo} style={{ width: '100%', height: '100%', objectFit:'cover' }}></video>
      </div> */}

        <section className='  relative overflow-hidden md:h-[600px] w-full '>
        {/* About Banner */}
        <div>
          <div className=' absolute top-0 w-full left-0 h-[600px] '>
            <img src={aboutBanner} className='w-full h-full object-cover absolute -z-10' alt="" />
            <img src={blackShade} className=' w-full h-full object-cover z-10 absolute ' alt="" />
          </div>
        </div>

        <div className=' flex justify-center items-center lg:max-w-[1200px] lg:mx-auto relative z-30 px-6 py-8 llg:py-0'>
          <div className=' mb-0 md:absolute homeTitlePosition'>
            <div className=' text-center text-[42px] font-extrabold text-[#ffffff] mb-5 TextStyle llg:text-[67px] llg:leading-[60px]'>Pioneering Software Solutions for Enhanced Performance</div>
            <div className=' text-center TextStylePara text-[#fff]'>At Flash Innovations, we pioneer software solutions designed to enhance your performance. Our innovative applications and systems are crafted to boost efficiency, streamline operations, and drive your business forward. With a focus on cutting-edge technology and tailored strategies, we ensure your software meets the highest standards and delivers exceptional results.</div>
          </div>
        </div>
        {/* Bottom Image */}
        {/* <div className=' absolute bottom-[20px] z-20 w-full left-0 bottomImage llg:z-[999] llg:bottom-[80px] dlg:bottom-[40px]'>
          <img src={bottomImage} className='w-full h-full object-cover' alt="" />
        </div> */}
      </section>

      <section className=' section mt-10'>
        <div className='lg:w-[1200px] dlg:w-[1400px] lg:mx-auto mb-20'>
          <motion.div
          ref={ref1}
          initial={{x:-100,opacity:0}}
          animate={inView1 ? {x:0,opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
          className='text-[42px] font-extralight mb-5 text-center TitleText text-[#2075bb] dlg:text-[80px]'>Innovative Software Solutions for Superior Performance</motion.div>
          <motion.div
          ref={ref2}
          initial={{x:-100,opacity:0}}
          animate={inView2 ? {x:0,opacity:1,transition:{duration:.7,ease:'backInOut',dedlay:.3}} : {}}
          className='text-sm text-center text-[#2a2828] ParagraphText mb-7 md:w-[600px] lg:w-[700px] md:mx-auto font-bold dlg: dlg:text-lg dlg:w-[1200px]'>At Flash Innovations, we specialize in crafting innovative software solutions designed to elevate your business’s performance. Our approach blends cutting-edge technology with deep industry insights to deliver tailored software that meets your specific needs. From streamlined operations to enhanced functionality, our solutions drive efficiency and growth, ensuring that your business remains competitive in today’s dynamic market. With a focus on quality and user experience, we transform complex challenges into seamless, effective solutions that power your success.</motion.div>

          {/* Software List */}
          
          <div className=' grid grid-cols-1 place-items-center gap-5 md:grid-cols-2'>
            
            <motion.div
            ref={ref3}
            initial={{scale:0,opacity:0,y:-30}}
            animate={inView3 ? {scale:1,opacity:1,y:0,transition:{duration:.7,ease:'backInOut',delay:.1}} : {}}
            className=' w-full h-[300px] bg-[#ffffff]  rounded-bl-[20%] rounded-tl-[20%] BorderDesignBox2 flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
              <div className=''>
                <img src={task} className='h-auto w-[200px] dlg:w-[300px] drop-shadow-md' alt="" />
              </div>
              <div className='ParagraphText text-[#2a2828] text-sm md:text-base font-bold'>
              TASK'OS is a robust Windows-based financial management tool that helps businesses track transactions, inventory, sales, and deliveries. It ensures product availability, creates detailed reports, and delivers real-time financial insights, all designed to streamline operations and support strategic decision-making.
              </div>
            </motion.div>

            <motion.div
            ref={ref4}
            initial={{scale:0,opacity:0,y:-30}}
            animate={inView4 ? {scale:1,opacity:1,y:0,transition:{duration:.7,ease:'backInOut',delay:.8}} : {}}
            className=' w-full h-[300px] rounded-br-[20%] bg-[#2075bb] rounded-r-[20%] BorderDesignBox2 flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
              <div className=''>
                <img src={shade} className='h-auto w-[180px] dlg:w-[300px] drop-shadow-md' alt="" />
              </div>
              <div className='ParagraphText text-[#2a2828] text-sm md:text-base font-bold'>
              Shade Hospital Management Software is an adaptable solution for healthcare facilities, providing essential tools for patient tracking, appointment coordination, billing, revenue oversight, and comprehensive reporting. It aims to simplify administrative tasks and enhance the quality of patient care.
              </div>
            </motion.div>
          

          <motion.div
          ref={ref5}
          initial={{scale:0,opacity:0,y:-30}}
          animate={inView5 ? {scale:1,opacity:1,y:0,transition:{duration:.3,ease:'backInOut',delay:.5}} : {}}
          className=' w-full h-[300px] rounded-br-[20%] rounded-tr-[20%] BorderDesignBox2 flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
              <div className=''>
                <img src={vtask} className='h-auto w-[280px] dlg:w-[350px] drop-shadow-md' alt="" />
              </div>
              <div className='ParagraphText text-[#2a2828] text-sm md:text-base font-bold'>
              VTASK is a Pharmacy Management software that automates inventory control, revenue tracking, and billing processes, serving both wholesale and retail sectors. It offers robust reporting and analytics, enhancing efficiency, accuracy, and overall patient safety.
              </div>
            </motion.div>


            <motion.div 
            ref={ref6}
            initial={{scale:0,opacity:0,y:-30}}
            animate={inView6 ? {scale:1,opacity:1,y:0,transition:{duration:.7,ease:'backInOut',delay:.8}} : {}}
            className=' w-full h-[300px] rounded-bl-[20%] rounded-tl-[20%] BorderDesignBox2 flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
              <div className=''>
                <img src={dine} className='h-auto w-[280px] dlg:w-[380px] drop-shadow-md' alt="" />
              </div>
              <div className='ParagraphText text-[#2a2828] text-sm md:text-base font-bold'>
              DINE is a restaurant management software that simplifies ordering, billing, and payment processes. It integrates seamlessly with POS systems and Android platforms, and provides detailed reports and analytics on sales, inventory, and customer behavior.
              </div>
            </motion.div>

            <motion.div
            ref={ref7}
            initial={{scale:0,opacity:0,y:-30}}
            animate={inView7 ? {scale:1,opacity:1,y:0,transition:{duration:.7,ease:'backInOut',delay:.1}} : {}}
            className=' w-full h-[300px] rounded-bl-[20%] rounded-tl-[20%] BorderDesignBox2 flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
              <div className=''>
                <img src={clublogic} className='h-auto w-[250px] dlg:w-[350px] drop-shadow-md' alt="" />
              </div>
              <div className='ParagraphText text-[#2a2828] text-sm md:text-base font-bold'>
              STARSTAY is an intuitive hotel management software that enhances operations such as front-desk management, room bookings, billing, housekeeping, and reporting. It automates manual tasks and integrates with other systems to boost efficiency and streamline hotel management.
              </div>
            </motion.div>


            <motion.div
            ref={ref8}
            initial={{scale:0,opacity:0,y:-30}}
            animate={inView8 ? {scale:1,opacity:1,y:0,transition:{duration:.7,ease:'backInOut',delay:.3}} : {}}
            className=' w-full h-[300px] rounded-br-[20%] rounded-tr-[20%] BorderDesignBox2 flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
              <div className=''>
                <img src={magnet} className='h-auto w-[110px] dlg:w-[180px] drop-shadow-md' alt="" />
              </div>
              <div className='ParagraphText text-[#2a2828] text-sm md:text-base font-bold'>
              Magnet is a digital platform designed to streamline school operations and enhance data accuracy and communication. It simplifies managing student and teacher records, tracking attendance, and other administrative tasks, enabling schools to concentrate on delivering quality education.
              </div>
            </motion.div>

            <motion.div
            ref={ref9}
            initial={{scale:0,opacity:0,y:-30}}
            animate={inView9 ? {scale:1,opacity:1,y:0,transition:{duration:.7,ease:'backInOut',delay:.5}} : {}}
            className=' w-full h-[300px] rounded-br-[20%] rounded-tr-[20%] BorderDesignBox2 flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
              <div className=''>
                <img src={auric} className='h-auto w-[280px] dlg:w-[380px] drop-shadow-md' alt="" />
              </div>
              <div className='ParagraphText text-[#2a2828] text-sm md:text-base font-bold'>
              Auric is a software solution tailored for jewellery retailers, wholesalers, and manufacturers. It supports inventory management, customer tracking, sales, and accounting, with features such as barcoding, gemstone tracking, and product customization.
              </div>
            </motion.div>


            <motion.div 
            ref={ref10}
            initial={{scale:0,opacity:0,y:-30}}
            animate={inView10 ? {scale:1,opacity:1,y:0,transition:{duration:.7,ease:'backInOut',delay:.8}} : {}}
            className=' w-full h-[300px] rounded-bl-[20%] rounded-tl-[20%] BorderDesignBox2 flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
              <div className=''>
                <img src={startstay} className='h-auto w-[200px] dlg:w-[300px] drop-shadow-md' alt="" />
              </div>
              <div className='ParagraphText text-[#2a2828] text-sm md:text-base font-bold'>
              Club Logic is a software solution for fitness clubs and gyms that optimizes membership management, attendance tracking, scheduling, billing, and fee collection. It saves time and boosts customer satisfaction through streamlined operations and efficient management.
              </div>
            </motion.div>



          </div>
        </div>
      </section>

      <section className=' section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
          <motion.div
          ref={ref11}
          initial={{x:-100,opacity:0}}
          animate={inView11 ? {x:0,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
          className='text-[42px] font-extralight mb-5 text-center TitleText text-[#2075bb] dlg:text-[80px]'>What Are The Types Of Development ?</motion.div>
            <motion.div 
            ref={ref12}
            initial={{x:-100,opacity:0}}
            animate={inView12 ? {x:0,opacity:1,transition:{duration:1,ease:'backInOut',delay:.5}} : {}}
            className='text-sm text-center text-[#2a2828] ParagraphText mb-7 md:w-[600px] md:mx-auto lg:w-[700px] dlg:w-[900px] font-bold dlg:text-lg'>Development spans several key areas, each addressing unique needs and contributing to overall success. This includes creating applications to enhance functionality, building and managing websites for optimal user experiences, designing tools for mobile devices to ensure accessibility on the go, and developing complex systems to support organizational processes. Each area plays a crucial role in driving efficiency and performance across different platforms and technologies.</motion.div>

            {/* List Of Development */}
            <div className=' grid place-items-center grid-cols-1 md:grid-cols-2 gap-5'>

              <motion.div 
              ref={ref13}
              initial={{y:-100,opacity:0}}
              animate={inView13 ? {y:0,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
              className=' w-full h-[350px] llg:h-[300px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-full h-[350px] llg:h-[300px] mix-blend-multiply'>
                    <img src={webDevelopment} className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>Web Design &
                      <span className=' block'>Development</span>
                    </div>
                    <div className=' text-white ParagraphText font-bold'>Our web design and development services create visually stunning and highly functional websites tailored to your business needs. We focus on user experience, responsive design, and seamless functionality to ensure your online presence stands out and performs optimally across all devices.</div>
                  </div>
              </motion.div>

              <motion.div
              ref={ref14}
              initial={{y:-100,opacity:0}}
              animate={inView14 ? {y:0,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
              className=' w-full h-[350px] llg:h-[300px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-full h-[350px] llg:h-[300px] mix-blend-multiply'>
                    <img src={softwareDevelopment} className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>Software
                      <span className=' block'>Development</span>
                    </div>
                    <div className=' text-white ParagraphText font-bold'>We provide custom software development to address your specific business challenges. Our solutions are built to enhance efficiency, streamline processes, and drive growth, utilizing the latest technologies and best practices to deliver robust and scalable software.</div>
                  </div>
              </motion.div>


              <motion.div
              ref={ref15}
              initial={{y:-100,opacity:0}}
              animate={inView15 ? {y:0,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
              className=' w-full h-[350px] llg:h-[300px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-full h-[350px] llg:h-[300px] mix-blend-multiply'>
                    <img src={IOsDevelopment} className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>Android & IOs
                      <span className=' block'>Development</span>
                    </div>
                    <div className=' text-white ParagraphText font-bold'>Our mobile app development services cater to both Android and iOS platforms, creating intuitive and feature-rich applications. We ensure that your apps offer a seamless user experience, leveraging the latest technologies to engage users and meet your business goals.</div>
                  </div>
              </motion.div>

              <motion.div
              ref={ref16}
              initial={{y:-100,opacity:0}}
              animate={inView16 ? {y:0,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
              className=' w-full h-[350px] llg:h-[300px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-full h-[350px] llg:h-[300px] mix-blend-multiply'>
                    <img src={cloudSolutions} className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>Cloud 
                      <span className=' block'>Solutions</span>
                    </div>
                    <div className=' text-white ParagraphText font-bold'>Our cloud solutions offer scalable and flexible infrastructure to meet your evolving needs. From cloud storage and computing to managed services, we provide secure and efficient solutions that enhance collaboration, improve accessibility, and drive innovation for your business.
                    </div>
                  </div>
              </motion.div>

            </div>
        </div>
      </section>

      <section className='section'>
          <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
            <motion.div
            ref={ref17}
            initial={{x:-100,opacity:0}}
            animate={inView ? {x:0,opacity:1,transition:{duration:.5,ease:'backInOut'}} : {}}
            className='text-[42px] font-extralight mb-5 text-center TitleText text-[#2075bb] dlg:text-[80px]'>How Flash Innovations <span className='block'>Software Services</span> <span className='block'>Set the Standard ?</span>
            </motion.div>
            <motion.div
            ref={ref18}
            initial={{y:-100,opacity:0}}
            animate={inView18 ? {y:0,opacity:1,transition:{duration:.7,ease:'backInOut',delay:.5}} : {}}
            className='text-sm text-center text-[#2a2828] ParagraphText mb-7 md:w-[600px] lg:w-[700px] md:mx-auto font-bold dlg:w-[900px] dlg:text-lg'>Flash Innovations’ software development team is highly skilled and proficient, on par with many leading software development companies. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati minima sed praesentium porro aliquam labore delectus, tenetur saepe nam aperiam nemo veniam rerum voluptatem quaerat repudiandae enim. Expedita, odio.</motion.div>

            {/* Standered List */}

            <div className=' grid place-items-center grid-cols-2 md:grid-cols-4'>

              <div className='w-[150px] h-[200px] p-5 hover-container'>
                <div className='w-full h-[50%] relative justify-center flex flex-col mb-2'>
                  <div className='text-[#2075bb] text-[42px] font-bold text-center z-10 outLineFont1'>01</div>
                  <div className='flex justify-center items-center'>
                    <div className='ParallelogramShape absolute bottom-1'></div>
                  </div>
                </div>
                <div className='text-[#2a2828] text-center'>Tailored Solutions for Every Client</div>
              </div>

                <div className=' w-[150px] h-[200px] p-5 hover-container'>
                  <div className='w-full h-[50%] relative justify-center flex flex-col mb-2'>
                      <div className=' text-[#2075bb] text-[42px] font-bold text-center z-10 outLineFont1'>02</div>
                      <div className='flex justify-center items-center'>
                        <div className='ParallelogramShape absolute bottom-1'></div>
                      </div>
                  </div>
                  <div className=' text-[#2a2828] text-center'>Dedicated Commitment to Excellence</div>
                </div>

                <div className=' w-[150px] h-[200px] p-5 hover-container'>
                  <div className='w-full h-[50%] relative justify-center flex flex-col mb-2'>
                      <div className=' text-[#2075bb] text-[42px] font-bold text-center z-10 outLineFont1'>03</div>
                      <div className='flex justify-center items-center'>
                        <div className='ParallelogramShape absolute bottom-1'></div>
                      </div>
                  </div>
                  <div className=' text-[#2a2828] text-center'>Authentic and Transparent Approach</div>
                </div>

                <div className=' w-[150px] h-[200px] p-5 hover-container'>
                  <div className='w-full h-[50%] relative justify-center flex flex-col mb-2'>
                      <div className=' text-[#2075bb] text-[42px] font-bold text-center z-10 outLineFont1'>04</div>
                      <div className='flex justify-center items-center'>
                        <div className='ParallelogramShape absolute bottom-1'></div>
                      </div>
                  </div>
                  <div className=' text-[#2a2828] text-center'>Efficient and Timely Deliveries</div>
                </div>

            </div>

          </div>
      </section>
      <section className='flex flex-col justify-center items-center bg-FooterBg bg-fixed bg-no-repeat bg-cover bg-center z-[997]'>
        <Footer/>
      </section>
    </div>
  )
}

export default Software
