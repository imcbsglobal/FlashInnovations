import React from 'react'
import techVideo from "../assets/tech-video3.mp4"
import blueShade from "../assets/blue-shade.png"
import location from "../assets/location.png"
import phone from "../assets/phone.png"
import socialMedia from "../assets/social-media.png"
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className='backgroundVideo relative'>
      <div className=''>
        <img src={blueShade} className=' absolute -z-10 w-full h-full object-cover opacity-50' alt="" />
        <video className=' absolute top-0 -z-10 opacity-15 mix-blend-multiply' autoPlay loop muted playsInline src={techVideo} style={{ width: '100%', height: '100%', objectFit:'cover' }}></video>
      </div>
      <section className='section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
          <div className='text-center text-[42px] font-extrabold text-[hsl(0,0%,100%)] mb-5 TextStyle'>Harnessing Technology to Propel Your Business</div>
          <div className='text-center TextStylePara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi possimus consequatur laudantium quod adipisci, dolorum doloremque fuga nulla magnam tenetur dignissimos inventore nesciunt assumenda necessitatibus deserunt. Aperiam dolorum hic illum.</div>
        </div>
      </section>

      <section className='section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20 grid grid-cols-1 place-items-center text-center gap-10 lg:grid-cols-3'>
          <div className=' flex flex-col justify-center items-center gap-2 GlassBox rounded-xl w-full p-5  bg-[#00d0ff06]'>
            <div className=' text-lg font-bold text-white'>Email</div>
            <a href="mailto:innovationsflash@gmail.com"><div className=' text-[#fff]'>innovationsflash@gmail.com</div></a>
          </div>

          <div className=' flex flex-col justify-center items-center gap-2 GlassBox rounded-xl w-full p-5  bg-[#00d0ff06]'>
            <a href="tel:+91 8050695416"><div className=' text-[#fff] font-bold'>+91 8050695416</div></a>
            <a href="tel:+91 9995175602"><div className='text-[#fff] font-bold'>+91 9995175602</div></a>
          </div>

          <div className=' flex flex-col justify-center items-center gap-2 GlassBox rounded-xl w-full p-5  bg-[#00d0ff06]'>
            <div className=' text-[#fff]'>#677/21-22, 9th Cross, 4th Main, 4th Block, HBR Layout, 1st Stage, Bangalore - 560 043</div>
          </div>

        </div>
      </section>

      <section className='section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
          <div className='text-[42px] font-extralight mb-5 text-center TitleText text-[#ffffff]'>Our Offices</div>
          <div className='text-sm text-center text-[#ffffffe6] ParagraphText mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perferendis eaque provident tempore ipsum delectus perspiciatis consequuntur praesentium totam quibusdam numquam nesciunt voluptate voluptates, vero, non atque saepe porro veritatis.</div>

          <div className='grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:grid-cols-3'>

              <div className=' w-full h-[250px] bg-black rounded-3xl DarkBox relative flex justify-center items-start gap-10 p-5'>
                  <div className=' w-[20%]'>
                    <IoLocationOutline className=' text-[42px] text-[#00c8ff]'/>
                  </div>
                  <div>
                    <div className=' text-xl mb-5 text-white font-bold ContactHead'>Calicut</div>
                    <div className='text-white ParagraphText text-sm mb-5'>
                      Flash Innovations 1stFloor,
                      Smart Building Mannur Valavu,
                      Kadalundi,Kozhikode - 673328
                    </div>
                    <div className=' text-[#fff] font-semibold ContactHead'>+91 9847718664, +91 9656104131,
                    0495 2990804</div>
                  </div>
              </div>

              <div className=' w-full h-[250px] bg-black rounded-3xl DarkBox relative flex justify-center items-start gap-10 p-5'>
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
              </div>

              <div className=' w-full h-[250px] bg-black rounded-3xl DarkBox relative flex justify-center items-start gap-10 p-5'>
                  <div className=' w-[20%]'>
                    <IoLocationOutline className=' text-[42px] text-[#00c8ff]'/>
                  </div>
                  <div>
                    <div className=' text-xl mb-5 text-white font-bold'>Mangalore</div>
                    <div className='text-white ParagraphText text-sm mb-5'>
                    Flash Innovations, J.M. 3rd Cross Road, 
                    Santhegalli, Bunder
                    Mangalore - 1
                    </div>
                    <div className=' text-[#fff] ContactHead'>+91 +91 8050695804</div>
                  </div>
              </div>

          </div>
        </div>
      </section>

      <section className=' section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20 md:flex justify-center items-center gap-10'>
          <div className='md:w-[50%]'>
              <div className=' text-[42px] font-extralight mb-5 text-center TitleText text-[#ffffff]'>Get In Touch</div>
              <div className='text-sm text-center text-[#ffffffe6] ParagraphText mb-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet minus dicta perspiciatis eveniet ducimus consectetur obcaecati, doloremque laborum animi accusantium necessitatibus in nam quisquam rerum dolore? Labore quos ab possimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam velit, vel ab odit dolor sed voluptas harum praesentium illo, error expedita tempore molestias sit possimus nobis cum nam earum.</div>
          </div>

          <div className='md:w-[50%]'>
            <div className=' flex justify-center items-center'>
              <form action="" className=' flex flex-col gap-5 w-full'>
                <input type="text" placeholder='Enter Your Name' className=' p-5 InputDesign' required />
                <input type="email" placeholder='Enter Your E-Mail' className='InputDesign p-5' required/>
                <input type="number" placeholder='Enter Your Number'  className='InputDesign p-5' required/>
                <textarea name="" placeholder='Enter Your Message' required className=' resize-none InputDesign py-6 px-5' id=""></textarea>
                <div className='mx-auto'>
                <button className='GradientButton px-8 py-2'>Send</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0990033737753!2d77.62994107489406!3d13.029366987291342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17816064cf5f%3A0x7005a3bd5de774b9!2sFLASH%20INNOVATIONS!5e0!3m2!1sen!2sin!4v1722486040203!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </div>
  )
}

export default Contact
