import React from 'react'
import techVideo from "../assets/tech-video3.mp4"
import blueShade from "../assets/blue-shade.png"
const Home = () => {
  return (
    <div className=' backgroundVideo relative'>
      <div className=''>
        <img src={blueShade} className=' absolute -z-10 w-full h-full object-cover opacity-50' alt="" />
      <video className=' absolute top-0 -z-10 opacity-15 mix-blend-multiply' autoPlay loop muted playsInline src={techVideo} style={{ width: '100%', height: '100%', objectFit:'cover' }}></video>
      </div>
      <section className=' section'>
          <div className=' flex justify-center items-center h-[500px] mx-auto'>
            <div>
            <div className=' text-center text-[42px] font-extrabold text-[hsl(0,0%,100%)] mb-5 TextStyle'>Lorem ipsum dolor sit amet consectetur adipisicing</div>
            <div className=' text-center text-sm mb-10 TextStylePara'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam accusantium odio atque a totam repellendus, corporis obcaecati ducimus animi optio eius ut impedit eligendi molestiae eos laboriosam! Qui, quis sequi!</div>
            <div className=' flex justify-center items-center'>
              <button className=' px-8 py-2 shadow-md GradientButton'>Get Started</button>
            </div>
            </div>
          </div>
      </section>

      <section className='section'>
        <div>
          <div className=' text-[42px] font-bold mb-5 text-center TitleText'>About Us</div>
          <div className=' text-sm GlassBox p-5 rounded-xl bg-[#0091ff59] text-center text-[#ffffffe6] ParagraphText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus repellat ipsam! Inventore illum modi animi quisquam impedit odio officia dolor nostrum ea provident architecto vero obcaecati eum, atque ex!</div>
        </div>
      </section>
    </div>
  )
}

export default Home
