import React from 'react'
import techVideo from "../assets/tech-video3.mp4"
import blueShade from "../assets/blue-shade.png"
import exp from "../assets/exp.png"
import skill from "../assets/skill.png"
import satisfaction from "../assets/satisfaction.png"
import project from "../assets/project.png"
import { TiTick } from "react-icons/ti";
import brushFrame from "../assets/brush-frame.png"
import team1 from "../assets/team1.jpg"
import team2 from "../assets/team2.jpg"
import team3 from "../assets/team3.jpg"
import team4 from "../assets/team4.jpg"
import team5 from "../assets/team5.jpg"
import team6 from "../assets/team6.jpg"
import Footer from './Footer';
import serviceImg from "../assets/colleagues2.png"
import company1 from "../assets/company1.jpg"
import company2 from "../assets/company2.jpg"
import company3 from "../assets/company3.jpg"
import aboutBanner from "../assets/about-banner.jpg"
import blackShade from "../assets/black-shade.png"
import redShade from "../assets/red-shade.png"
import bottomImage from "../assets/bottom-image.png"





const About = () => {
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
            <div className=' text-center text-[42px] font-extrabold text-[hsl(0,0%,100%)] mb-5 TextStyle pt-[50px]'>Harnessing Technology to Propel Your Business</div>
            <div className=' text-center TextStylePara text-[#fff]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus non accusantium perferendis minus exercitationem rerum sit magnam nemo voluptatem natus. Perferendis placeat quia aliquam cupiditate ducimus laborum illo quos asperiores!</div>
          </div>
        </div>
        {/* Bottom Image */}
        <div className=' absolute bottom-[20px] z-20 w-full left-0 bottomImage'>
          <img src={bottomImage} className='w-full h-full object-cover' alt="" />
        </div>
      </section>

      <section className=' section'>
        <div className=' lg:max-w-[1200px] lg:mx-auto mb-20'>
          <div className=' md:flex justify-center items-center gap-10'>
            <div className=' grid place-items-center grid-cols-2 md:w-[50%] mb-10 md:mb-0 gap-5 lg:gap-0 lg:w-[40%]'>

            <div className=' flex flex-col justify-center items-center gap-5 pt-32'>
              <div className=' flex flex-col justify-center items-center gap-3 rounded-sm GlassBox1 w-full h-[270px] text-center p-5 bg-white'>
                <div className='w-[80%] h-[50%]'>
                  <img className=' w-full h-full object-contain' src={exp} alt="" />
                </div>
                <div className='text-[#3c3a3a] text-3xl font-semibold'>10+</div>
                <div className=' text-[#625d5d]'>Year of <span className=' block'>Experience</span></div>
            </div>

              <div className=' flex flex-col justify-center items-center gap-3 rounded-sm GlassBox1 w-full h-[270px] text-center p-5 bg-white'>
                <div className='w-[80%] h-[50%]'>
                  <img className=' w-full h-full object-contain' src={skill} alt="" />
                </div>
                <div className='text-[#3c3a3a] text-3xl font-semibold'>10+</div>
                <div className=' text-[#625d5d]'>Skilled<span className=' block'>Professionals</span></div>
            </div>
            </div>

            <div className=' flex flex-col justify-center items-center gap-5 mt-[-20px]'>
              <div className=' flex flex-col justify-center items-center gap-3 rounded-sm GlassBox1 w-full h-[270px] text-center p-5 bg-white'>
                  <div className='w-[80%] h-[50%]'>
                    <img className=' w-full h-full object-contain' src={satisfaction} alt="" />
                  </div>
                  <div className='text-[#3c3a3a] text-3xl font-semibold'>100%</div>
                  <div className=' text-[#625d5d]'>Customer <span className=' block'>Satisfaction</span></div>
              </div>

              <div className=' flex flex-col justify-center items-center gap-3 rounded-sm GlassBox1 w-full h-[270px] text-center p-5 bg-white'>
                  <div className='w-[80%] h-[50%]'>
                    <img className='w-full h-full object-contain' src={project} alt="" />
                  </div>
                  <div className='text-[#3c3a3a] text-3xl font-semibold'>300+</div>
                  <div className=' text-[#625d5d]'>Projects<span className=' block'>Worldwide</span></div>
              </div>
            </div>
          </div>
          <div className='h-[300px] w-full lg:h-[500px]  rounded-tl-[20%] rounded-br-[20%] md:rounded-tl-[30%] md:rounded-br-[30%] BorderDesignBox md:w-[45%]'>
                      <img src={serviceImg} className=' h-full w-full object-contain mix-blend-darken drop-shadow-2xl rounded-tl-[10%] rounded-br-[10%] md:rounded-tl-[20%] md:rounded-br-[20%]' alt="" />
              </div>
          </div>
        </div>
      </section>

      <section className=' section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
          <div className=' grid grid-cols-1 place-items-center md:grid-cols-2 gap-10 md:mb-5 mb-10'>
            <div>
              <div className='text-[42px] mb-5 text-center TitleText text-[#ffffff]'>About Us</div>
              <div className='text-sm text-center text-[#ffffffe6] ParagraphText mb-7 md:mx-auto'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quisquam dolore aperiam accusamus vel adipisci molestiae assumenda facere illum voluptas beatae, ullam, reprehenderit minima iste repellat dolor aliquid deserunt quam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi accusantium hic esse veniam eius quos incidunt illum adipisci consequuntur aperiam perferendis sed sunt reprehenderit dolores, minima blanditiis maiores quisquam minus.
                <br /> <br />
                Natus eaque architecto perspiciatis error. Porro temporibus, aperiam pariatur impedit debitis illo blanditiis, repellat magni recusandae necessitatibus eveniet inventore voluptas iure unde numquam laudantium vitae! Beatae explicabo natus quaerat quae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui harum totam, molestiae dolores perferendis quidem incidunt omnis maiores eligendi consequuntur molestias porro ut nisi ipsum distinctio quisquam, mollitia modi doloribus.
              </div>
            </div>
            <div className='h-[300px] w-full lg:h-[500px] lg:w-[500px]  bg-white BlobDesign'>
                <img src={serviceImg} className=' h-full w-full object-contain mix-blend-darken drop-shadow-2xl rounded-full BlobDesign' alt="" />
            </div>
          </div>

          <div>
            <ul className=' grid grid-cols-1 place-items-center md:grid-cols-2 justify-center items-center gap-3'>
              <li>
                <div className=' flex justify-center items-center gap-2 text-sm GlassBox p-5 rounded-xl bg-[#0091ff59]  text-[#ffffffe6] ParagraphText'>
                  <div className=' text-xl'><TiTick className=''/></div>
                  <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iusto.</div>
                </div>
              </li>
              <li>
                <div className=' flex justify-center items-center gap-2 text-sm GlassBox p-5 rounded-xl bg-[#0091ff59]  text-[#ffffffe6] ParagraphText'>
                  <div className=' text-xl'><TiTick className=''/></div>
                  <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iusto.</div>
                </div>
              </li>
              <li>
                <div className=' flex justify-center items-center gap-2 text-sm GlassBox p-5 rounded-xl bg-[#0091ff59]  text-[#ffffffe6] ParagraphText'>
                  <div className=' text-xl'><TiTick className=''/></div>
                  <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iusto.</div>
                </div>
              </li>
              <li>
                <div className=' flex justify-center items-center gap-2 text-sm GlassBox p-5 rounded-xl bg-[#0091ff59]  text-[#ffffffe6] ParagraphText'>
                  <div className=' text-xl'><TiTick className=''/></div>
                  <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iusto.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className=' section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
          <div className='text-[42px] mb-5 text-center TitleText text-[#ffffff]'>
          A Successful & Innovative IT Company</div>
            <div className='grid grid-cols-1 place-items-center md:grid-cols-2 gap-10'>
              {/* Left */}
              <div className=' flex justify-center items-center gap-2 w-full h-[350px] mb-10'>
                {/* Inside-Left */}
                <div className=' w-[50%] h-full flex flex-col gap-2'>
                  <div className=' w-full h-[50%] rounded-xl DarkBox bg-black'>
                    <img src={company1} className=' w-full h-full object-cover rounded-xl mix-blend-multiply' alt="" />
                  </div>
                  <div className=' w-full h-[50%] rounded-xl DarkBox bg-black'>
                    <img src={company2} className='w-full h-full object-cover rounded-xl mix-blend-multiply' alt="" />
                  </div>
                </div>
                {/* Inside-Right */}
                <div className=' w-[50%] h-full rounded-xl DarkBox bg-black'>
                  <img src={company3} className='w-full h-full object-cover rounded-xl mix-blend-multiply' alt="" />
                </div>
              </div>
              {/* Right */}
              <div>
                <div className=' mb-5 text-[20px] font-bold text-white SubTitleStyle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quae.</div>
                <div className='text-start ParagraphText text-sm text-white mb-5'>At Flash Innovations, we pride ourselves on being at the forefront of technological advancements. 
                Our commitment to excellence drives us to deliver cutting-edge software and hardware solutions that transform businesses. 
                With a focus on innovation and a track record of success, we provide tailored technology solutions that empower 
                our clients to achieve their goals and stay ahead in a rapidly evolving digital landscape.
                </div>
                <div className=' flex flex-col justify-start items-baseline gap-5'>

                  <div className=' flex items-start gap-4'>
                    <div className=' p-2 bg-white rounded-lg text-[#08f]'><TiTick/></div>
                    <div>
                      <div className='mb-1 SmallTitleStyle font-bold text-white'>Excellence in Execution</div>
                      <div className=' text-sm ParagraphText text-white'>We achieve outstanding results through meticulous attention to detail and efficiency.
                      </div>
                    </div>
                  </div>

                  <div className=' flex items-center gap-4'>
                    <div className=' p-2 bg-white rounded-lg text-[#08f]'><TiTick/></div>
                    <div>
                      <div className='mb-1 SmallTitleStyle font-bold text-white'>Client-Centric Approach</div>
                      <div className=' text-sm ParagraphText text-white'>We offer innovative solutions that address current challenges and anticipate future needs.
                      </div>
                    </div>
                  </div>

                  <div className=' flex items-center gap-4'>
                    <div className=' p-2 bg-white rounded-lg text-[#08f]'><TiTick/></div>
                    <div>
                      <div className='mb-1 SmallTitleStyle font-bold text-white'>Forward-Thinking Solutions</div>
                      <div className=' text-sm ParagraphText text-white'>We tailor our services to your unique needs, ensuring a personalized and effective partnership.
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
        </div>
      </section>

      <section className=' section'>
        <div className=' lg:max-w-[1200px] lg:mx-auto mb-20'>
          <div className='text-[42px] mb-5 text-center TitleText text-[#ffffff]'>Touch With Us</div>
          <div className='text-center ParagraphText text-sm text-white mb-10 md:max-w-[600px] md:mx-auto'>At Flash Innovations, we guarantee top-tier customer service. We understand the value of your time, and we pledge 
          to respond to all your inquiries promptly and efficiently. Your satisfaction is our priority, and we strive to provide 
          exceptional support for all your needs. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam nobis, repudiandae, eaque quia, corporis aliquam recusandae dolorem porro numquam ipsam voluptates! Consequuntur quam beatae perspiciatis alias possimus dolor, iste deleniti?</div>
          <div className=' flex justify-center items-center gap-5'>
          <div>
            <button className=' px-8 py-2 GradientButton'>Contact Us</button>
          </div>
          <div></div>
        </div>
        </div>
      </section>


      <section className=' section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
          <div className='text-[42px] mb-5 text-center TitleText text-[#ffffff]'>Our Team</div>
          <div className='text-center ParagraphText text-sm text-white mb-10 md:max-w-[600px] md:mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus itaque quas dolor, sed eaque necessitatibus deserunt nulla dolore totam, aliquam cupiditate placeat porro, aliquid quo minima ab consequatur ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam molestias distinctio consequuntur voluptatem ea pariatur commodi porro quibusdam, consequatur quaerat rerum nisi aliquid a deserunt maxime perferendis corrupti. Laborum.</div>
          {/* Team Members List */}
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 relative'>

            <div className='w-[300px] h-[350px] rounded-xl GlassBox'>
              <div className=' w-[300px] h-[350px] GlassBox rounded-xl'>
                <img src={team1} className=' w-full h-full object-cover rounded-xl' alt="" />
              </div>
              <div className='flex flex-col gap-1 justify-center items-center absolute bottom-0 w-full GradientFrame rounded-b-xl'>
                <div className='  px-8 text-lg font-black '>Team Member Name</div>
                <div className='TeamDesignation'>Designation</div>
              </div>
            </div>

            <div className='w-[300px] h-[350px] rounded-xl GlassBox'>
              <div className=' w-[300px] h-[350px] GlassBox rounded-xl'>
                <img src={team2} className=' w-full h-full object-cover rounded-xl' alt="" />
              </div>
              <div className='flex flex-col gap-1 justify-center items-center absolute bottom-0 w-full GradientFrame rounded-b-xl'>
                <div className='  px-8 text-lg font-black '>Team Member Name</div>
                <div className='TeamDesignation'>Designation</div>
              </div>
            </div>

            <div className='w-[300px] h-[350px] rounded-xl GlassBox'>
              <div className=' w-[300px] h-[350px] GlassBox rounded-xl'>
                <img src={team3} className=' w-full h-full object-cover rounded-xl' alt="" />
              </div>
              <div className='flex flex-col gap-1 justify-center items-center absolute bottom-0 w-full GradientFrame rounded-b-xl'>
                <div className='  px-8 text-lg font-black '>Team Member Name</div>
                <div className='TeamDesignation'>Designation</div>
              </div>
            </div>

            <div className='w-[300px] h-[350px] rounded-xl GlassBox'>
              <div className=' w-[300px] h-[350px] GlassBox rounded-xl'>
                <img src={team4} className=' w-full h-full object-cover rounded-xl' alt="" />
              </div>
              <div className='flex flex-col gap-1 justify-center items-center absolute bottom-0 w-full GradientFrame rounded-b-xl'>
                <div className='  px-8 text-lg font-black '>Team Member Name</div>
                <div className='TeamDesignation'>Designation</div>
              </div>
            </div>

            <div className='w-[300px] h-[350px] rounded-xl GlassBox'>
              <div className=' w-[300px] h-[350px] GlassBox rounded-xl'>
                <img src={team5} className=' w-full h-full object-cover rounded-xl' alt="" />
              </div>
              <div className='flex flex-col gap-1 justify-center items-center absolute bottom-0 w-full GradientFrame rounded-b-xl'>
                <div className='  px-8 text-lg font-black '>Team Member Name</div>
                <div className='TeamDesignation'>Designation</div>
              </div>
            </div>

            <div className='w-[300px] h-[350px] rounded-xl GlassBox'>
              <div className=' w-[300px] h-[350px] GlassBox rounded-xl'>
                <img src={team6} className=' w-full h-full object-cover rounded-xl' alt="" />
              </div>
              <div className='flex flex-col gap-1 justify-center items-center absolute bottom-0 w-full GradientFrame rounded-b-xl'>
                <div className='  px-8 text-lg font-black '>Team Member Name</div>
                <div className='TeamDesignation'>Designation</div>
              </div>
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

export default About
