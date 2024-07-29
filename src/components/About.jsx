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

const About = () => {
  return (
    <div className='backgroundVideo relative'>
      <div className=''>
        <img src={blueShade} className=' absolute -z-10 w-full h-full object-cover opacity-50' alt="" />
        <video className=' absolute top-0 -z-10 opacity-15 mix-blend-multiply' autoPlay loop muted playsInline src={techVideo} style={{ width: '100%', height: '100%', objectFit:'cover' }}></video>
      </div>
      <section className=' section'>
        <div className=' flex justify-center items-center lg:max-w-[1200px] lg:mx-auto'>
          <div className=' mb-10 mt-10'>
            <div className=' text-center text-[42px] font-extrabold text-[hsl(0,0%,100%)] mb-5 TextStyle'>Harnessing Technology to Propel Your Business</div>
            <div className=' text-center TextStylePara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus non accusantium perferendis minus exercitationem rerum sit magnam nemo voluptatem natus. Perferendis placeat quia aliquam cupiditate ducimus laborum illo quos asperiores!</div>
          </div>
        </div>
      </section>

      <section>
        <div className=' lg:max-w-[1200px] lg:mx-auto mb-20'>
          <div className=' grid place-items-center grid-cols-2 md:w-[50%]'>

            <div className=' flex flex-col justify-center items-center gap-5 pt-32'>
              <div className=' flex flex-col justify-center items-center gap-3 rounded-sm GlassBox1 w-[160px] h-[270px] text-center p-5 bg-white'>
                <div>
                  <img className='' src={exp} alt="" />
                </div>
                <div className='text-[#3c3a3a] text-3xl font-semibold'>10+</div>
                <div className=' text-[#625d5d]'>Year of <span className=' block'>Experience</span></div>
            </div>

              <div className=' flex flex-col justify-center items-center gap-3 rounded-sm GlassBox1 w-[160px] h-[270px] text-center p-5 bg-white'>
                <div>
                  <img className='' src={skill} alt="" />
                </div>
                <div className='text-[#3c3a3a] text-3xl font-semibold'>10+</div>
                <div className=' text-[#625d5d]'>Skilled<span className=' block'>Professionals</span></div>
            </div>
            </div>

            <div className=' flex flex-col justify-center items-center gap-5 mt-[-20px]'>
              <div className=' flex flex-col justify-center items-center gap-3 rounded-sm GlassBox1 w-[160px] h-[270px] text-center p-5 bg-white'>
                  <div>
                    <img className='' src={satisfaction} alt="" />
                  </div>
                  <div className='text-[#3c3a3a] text-3xl font-semibold'>100%</div>
                  <div className=' text-[#625d5d]'>Customer <span className=' block'>Satisfaction</span></div>
              </div>

              <div className=' flex flex-col justify-center items-center gap-3 rounded-sm GlassBox1 w-[160px] h-[270px] text-center p-5 bg-white'>
                  <div>
                    <img className='' src={project} alt="" />
                  </div>
                  <div className='text-[#3c3a3a] text-3xl font-semibold'>300+</div>
                  <div className=' text-[#625d5d]'>Projects<span className=' block'>Worldwide</span></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className=' section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
          <div className='text-[42px] font-bold mb-5 text-center TitleText text-[#ffffff]'>About Us</div>
          <div className='text-sm text-center text-[#ffffffe6] ParagraphText mb-7'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quisquam dolore aperiam accusamus vel adipisci molestiae assumenda facere illum voluptas beatae, ullam, reprehenderit minima iste repellat dolor aliquid deserunt quam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi accusantium hic esse veniam eius quos incidunt illum adipisci consequuntur aperiam perferendis sed sunt reprehenderit dolores, minima blanditiis maiores quisquam minus.
            <br /> <br />
            Natus eaque architecto perspiciatis error. Porro temporibus, aperiam pariatur impedit debitis illo blanditiis, repellat magni recusandae necessitatibus eveniet inventore voluptas iure unde numquam laudantium vitae! Beatae explicabo natus quaerat quae!
          </div>
          <div>
            <ul className=' flex flex-col justify-center items-center gap-3'>
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
          <div className='text-[42px] font-bold mb-5 text-center TitleText text-[#ffffff]'>
          A Successful & Innovative IT Company</div>
            <div>
              {/* Left */}
              <div className=' flex justify-center items-center gap-2 w-full h-[350px] mb-10'>
                {/* Inside-Left */}
                <div className=' w-[50%] h-full flex flex-col gap-2'>
                  <div className=' w-full h-[50%] bg-[#ffffff] rounded-xl'></div>
                  <div className=' w-full h-[50%] bg-[#fff] rounded-xl'></div>
                </div>
                {/* Inside-Right */}
                <div className=' w-[50%] h-full bg-[#ffffff] rounded-xl'></div>
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
          <div className='text-[42px] font-bold mb-5 text-center TitleText text-[#ffffff]'>Touch With Us</div>
          <div className='text-center ParagraphText text-sm text-white mb-10'>At Flash Innovations, we guarantee top-tier customer service. We understand the value of your time, and we pledge 
          to respond to all your inquiries promptly and efficiently. Your satisfaction is our priority, and we strive to provide 
          exceptional support for all your needs.</div>
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
          <div className='text-[42px] font-bold mb-5 text-center TitleText text-[#ffffff]'>Our Team</div>
          <div className='text-center ParagraphText text-sm text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus itaque quas dolor, sed eaque necessitatibus deserunt nulla dolore totam, aliquam cupiditate placeat porro, aliquid quo minima ab consequatur ad.</div>
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
    </div>
  )
}

export default About
