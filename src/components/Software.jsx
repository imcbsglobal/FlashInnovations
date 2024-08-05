import React from 'react'
import techVideo from "../assets/tech-video3.mp4"
import blueShade from "../assets/blue-shade.png"
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
import another from "../assets/another.jpg"
import Footer from './Footer';


const Software = () => {
  return (
    <div className='backgroundVideo relative' data-scroll-container>
      <div className=''>
        <img src={blueShade} className=' absolute -z-10 w-full h-full object-cover opacity-50' alt="" />
        <video className=' absolute top-0 -z-10 opacity-15 mix-blend-multiply' autoPlay loop muted playsInline src={techVideo} style={{ width: '100%', height: '100%', objectFit:'cover' }}></video>
      </div>
      <section className='section mb-16'>
        <div>
          <div className=' text-center text-[42px] font-extrabold text-[hsl(0,0%,100%)] mb-5 TextStyle'>Pioneering Software Solutions for Enhanced Performance</div>
          <div className='text-center TextStylePara'>At Flash Innovations, we specialize in developing superior software solutions that drive business growth. 
          Our custom-designed, cutting-edge software enhances operational efficiency and supports sustainable development. 
          By seamlessly integrating with your existing systems, our solutions ensure optimal performance and streamlined operations. 
          Experience the advantages of increased productivity, optimized processes, and a competitive edge with our innovative technology. 
          Empower your business with our advanced software solutions for unparalleled success.
          </div>
        </div>
      </section>

      <section className=' section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
          <div className='text-[42px] font-extralight mb-5 text-center TitleText text-[#ffffff]'>Lorem ipsum dolor sit amet.</div>
          <div className='text-sm text-center text-[#ffffffe6] ParagraphText mb-7 md:max-w-[600px] lg:max-w-[700px] md:mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam ipsam soluta, officia voluptate, unde officiis ipsa eos est eligendi debitis corrupti commodi, ratione odio inventore eum obcaecati? Neque, iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quas eum alias suscipit illo recusandae nihil obcaecati quasi. Excepturi nemo beatae nisi earum recusandae blanditiis sunt ab ea doloribus fugit!</div>

          {/* Software List */}
          <div className=' grid grid-cols-1 place-items-center gap-5 md:grid-cols-2'>
            
            <div className=' w-full h-[300px] rounded-bl-[20%] rounded-tr-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
              <div className=''>
                <img src={task} className='h-auto w-[200px] drop-shadow-md' alt="" />
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </div>

            <div className=' w-full h-[300px] rounded-br-[20%] rounded-tl-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
              <div className=''>
                <img src={shade} className='h-auto w-[180px] drop-shadow-md' alt="" />
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </div>
          

          <div className=' w-full h-[300px] rounded-br-[20%] rounded-tl-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
              <div className=''>
                <img src={vtask} className='h-auto w-[280px] drop-shadow-md' alt="" />
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </div>


            <div className=' w-full h-[300px] rounded-bl-[20%] rounded-tr-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
              <div className=''>
                <img src={dine} className='h-auto w-[280px] drop-shadow-md' alt="" />
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </div>

            <div className=' w-full h-[300px] rounded-bl-[20%] rounded-tr-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
              <div className=''>
                <img src={clublogic} className='h-auto w-[250px] drop-shadow-md' alt="" />
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </div>


            <div className=' w-full h-[300px] rounded-br-[20%] rounded-tl-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
              <div className=''>
                <img src={magnet} className='h-auto w-[110px] drop-shadow-md' alt="" />
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </div>

            <div className=' w-full h-[300px] rounded-br-[20%] rounded-tl-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
              <div className=''>
                <img src={auric} className='h-auto w-[280px] drop-shadow-md' alt="" />
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </div>


            <div className=' w-full h-[300px] rounded-bl-[20%] rounded-tr-[20%] BorderDesignBox flex flex-col gap-5 justify-center items-start px-5 py-2 overflow-hidden'>
              <div className=''>
                <img src={startstay} className='h-auto w-[200px] drop-shadow-md' alt="" />
              </div>
              <div className='ParagraphText text-[#fff] text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam ea commodi odio facere, velit, porro minus dolorum rerum asperiores eveniet laborum laudantium optio molestiae. Reiciendis sed amet odit sunt?
              </div>
            </div>



          </div>
        </div>
      </section>

      <section className=' section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
          <div className='text-[42px] font-extralight mb-5 text-center TitleText text-[#ffffff]'>What Are The Types Of Development ?</div>
            <div className='text-sm text-center text-[#ffffffe6] ParagraphText mb-7 md:max-w-[600px] md:mx-auto lg:max-w-[700px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dignissimos ipsum repudiandae dolores culpa magnam sapiente quia nihil quos. Est architecto in iusto sit eos deleniti voluptates voluptatum unde quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa ipsum, obcaecati porro eum eligendi ut aut aliquam voluptatibus a vel animi vitae dolorum id eos nam voluptatum voluptate! Recusandae!</div>

            {/* List Of Development */}
            <div className=' grid place-items-center grid-cols-1 md:grid-cols-2 gap-5'>

              <div className=' w-full h-[300px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-full h-[300px] mix-blend-multiply'>
                    <img src={webDevelopment} className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>Web Design &
                      <span className=' block'>Development</span>
                    </div>
                    <div className=' text-white ParagraphText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error, voluptates labore, adipisci tenetur in temporibus, blanditiis ducimus eaque placeat quam mollitia. Quaerat odio ducimus dolores mollitia expedita quidem magni.</div>
                  </div>
              </div>

              <div className=' w-full h-[300px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-full h-[300px] mix-blend-multiply'>
                    <img src={softwareDevelopment} className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>Software
                      <span className=' block'>Development</span>
                    </div>
                    <div className=' text-white ParagraphText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error, voluptates labore, adipisci tenetur in temporibus, blanditiis ducimus eaque placeat quam mollitia. Quaerat odio ducimus dolores mollitia expedita quidem magni.</div>
                  </div>
              </div>


              <div className=' w-full h-[300px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-full h-[300px] mix-blend-multiply'>
                    <img src={IOsDevelopment} className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>Android & IOs
                      <span className=' block'>Development</span>
                    </div>
                    <div className=' text-white ParagraphText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error, voluptates labore, adipisci tenetur in temporibus, blanditiis ducimus eaque placeat quam mollitia. Quaerat odio ducimus dolores mollitia expedita quidem magni.</div>
                  </div>
              </div>

              <div className=' w-full h-[300px] bg-black rounded-3xl DarkBox relative'>
                  <div className='w-full h-[300px] mix-blend-multiply'>
                    <img src={webDevelopment} className=' w-full h-full object-cover rounded-3xl -z-10' alt="" />
                  </div>
                  <div className=' absolute px-5 top-5'>
                    <div className='DevelopmentTextStyle font-bold text-3xl drop-shadow-lg mb-5'>Web Design &
                      <span className=' block'>Development</span>
                    </div>
                    <div className=' text-white ParagraphText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error, voluptates labore, adipisci tenetur in temporibus, blanditiis ducimus eaque placeat quam mollitia. Quaerat odio ducimus dolores mollitia expedita quidem magni.</div>
                  </div>
              </div>

            </div>
        </div>
      </section>

      <section className='section'>
          <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
            <div className='text-[42px] font-extralight mb-5 text-center TitleText text-[#ffffff]'>How Flash Innovations <span className='block'>Software Services</span> <span className='block'>Set the Standard ?</span>
            </div>
            <div className='text-sm text-center text-[#ffffffe6] ParagraphText mb-7 md:max-w-[600px] lg:max-w-[700px] md:mx-auto'>Flash Innovations’ software development team is highly skilled and proficient, on par with many leading software development companies. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati minima sed praesentium porro aliquam labore delectus, tenetur saepe nam aperiam nemo veniam rerum voluptatem quaerat repudiandae enim. Expedita, odio.</div>

            {/* Standered List */}

            <div className=' grid place-items-center grid-cols-2 md:grid-cols-4'>

              <div className='w-[150px] h-[200px] p-5 hover-container'>
                <div className='w-full h-[50%] relative justify-center flex flex-col mb-2'>
                  <div className='text-white text-[42px] font-bold text-center z-10 outLineFont1'>01</div>
                  <div className='flex justify-center items-center'>
                    <div className='ParallelogramShape absolute bottom-1'></div>
                  </div>
                </div>
                <div className='text-white text-center'>Tailored Solutions for Every Client</div>
              </div>

                <div className=' w-[150px] h-[200px] p-5 hover-container'>
                  <div className='w-full h-[50%] relative justify-center flex flex-col mb-2'>
                      <div className=' text-white text-[42px] font-bold text-center z-10 outLineFont1'>02</div>
                      <div className='flex justify-center items-center'>
                        <div className='ParallelogramShape absolute bottom-1'></div>
                      </div>
                  </div>
                  <div className=' text-white text-center'>Dedicated Commitment to Excellence</div>
                </div>

                <div className=' w-[150px] h-[200px] p-5 hover-container'>
                  <div className='w-full h-[50%] relative justify-center flex flex-col mb-2'>
                      <div className=' text-white text-[42px] font-bold text-center z-10 outLineFont1'>03</div>
                      <div className='flex justify-center items-center'>
                        <div className='ParallelogramShape absolute bottom-1'></div>
                      </div>
                  </div>
                  <div className=' text-white text-center'>Authentic and Transparent Approach</div>
                </div>

                <div className=' w-[150px] h-[200px] p-5 hover-container'>
                  <div className='w-full h-[50%] relative justify-center flex flex-col mb-2'>
                      <div className=' text-white text-[42px] font-bold text-center z-10 outLineFont1'>04</div>
                      <div className='flex justify-center items-center'>
                        <div className='ParallelogramShape absolute bottom-1'></div>
                      </div>
                  </div>
                  <div className=' text-white text-center'>Efficient and Timely Deliveries</div>
                </div>

            </div>

          </div>
      </section>
      <section className='flex flex-col justify-center items-center bg-FooterBg bg-fixed bg-no-repeat bg-cover bg-center z-50'>
        <Footer/>
      </section>
    </div>
  )
}

export default Software
