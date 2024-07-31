import React from 'react'
import techVideo from "../assets/tech-video3.mp4"
import blueShade from "../assets/blue-shade.png"
import location from "../assets/location.png"
import phone from "../assets/phone.png"
import socialMedia from "../assets/social-media.png"

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
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
          <div className='text-[42px] font-extralight mb-5 text-center TitleText text-[#ffffff]'>Our Office</div>
          <div className='text-sm text-center text-[#ffffffe6] ParagraphText mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perferendis eaque provident tempore ipsum delectus perspiciatis consequuntur praesentium totam quibusdam numquam nesciunt voluptate voluptates, vero, non atque saepe porro veritatis.</div>

          <div className='grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:grid-cols-3'>

              <div className=' w-full h-[250px] bg-black rounded-3xl DarkBox relative flex justify-center items-start gap-10 p-5'>
                  <div className=' w-[45%] h-full'>
                    <img src={location} className=' w-full drop-shadow-2xl' alt="" />
                  </div>
                  <div>
                    <div className=' text-xl mb-5 text-white font-bold'>Office Address</div>
                    <div className='text-white ParagraphText text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perspiciatis ab nam inventore omnis nesciunt iste, atque molestias, id minus quae assumenda aliquid et accusamus numquam debitis molestiae sunt! Facere!</div>
                  </div>
              </div>

              <div className=' w-full h-[250px] bg-black rounded-3xl DarkBox relative flex justify-center items-start gap-10 p-5'>
                  <div className=' w-[45%] h-full'>
                    <img src={phone} className=' w-full drop-shadow-2xl' alt="" />
                  </div>
                  <div>
                    <div className=' text-xl mb-5 text-white font-bold'>Phone & Emails</div>
                    <div className='text-white ParagraphText text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perspiciatis ab nam inventore omnis nesciunt iste, atque molestias, id minus quae assumenda aliquid et accusamus numquam debitis molestiae sunt! Facere!</div>
                  </div>
              </div>

              <div className=' w-full h-[250px] bg-black rounded-3xl DarkBox relative flex justify-center items-start gap-10 p-5'>
                  <div className=' w-[45%] h-full'>
                    <img src={socialMedia} className=' w-full drop-shadow-2xl' alt="" />
                  </div>
                  <div>
                    <div className=' text-xl mb-5 text-white font-bold'>Social Media</div>
                    <div className='text-white ParagraphText text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perspiciatis ab nam inventore omnis nesciunt iste, atque molestias, id minus quae assumenda aliquid et accusamus numquam debitis molestiae sunt! Facere!</div>
                  </div>
              </div>

          </div>
        </div>
      </section>

      <section>
        
      </section>
    </div>
  )
}

export default Contact
