import React from 'react'
import logo1 from "../assets/logos/logo1.png"
import logo2 from "../assets/logos/logo2.png"
import logo3 from "../assets/logos/logo3.png"
import logo4 from "../assets/logos/logo4.png"
import logo5 from "../assets/logos/logo5.png"
import logo6 from "../assets/logos/logo6.png"
import logo7 from "../assets/logos/logo7.png"
import logo8 from "../assets/logos/logo8.jpg"
import logo9 from "../assets/logos/logo9.jpeg"
import logo10 from "../assets/logos/logo10.png"
import logo11 from "../assets/logos/logo11.png"
import logo12 from "../assets/logos/logo12.png"
import logo13 from "../assets/logos/logo13.png"
import logo14 from "../assets/logos/logo14.png"
import logo15 from "../assets/logos/logo15.jpeg"
import logo16 from "../assets/logos/logo16.png"
import logo17 from "../assets/logos/logo17.png"
import logo18 from "../assets/logos/logo18.png"
import logo19 from "../assets/logos/logo19.jpeg"
import logo20 from "../assets/logos/logo20.png"
import logo21 from "../assets/logos/logo21.png"
import logo22 from "../assets/logos/logo22.jpeg"
import logo23 from "../assets/logos/logo23.jpeg"
import logo24 from "../assets/logos/logo24.jpeg"
import logo25 from "../assets/logos/logo25.png"
import logo26 from "../assets/logos/logo26.png"
import logo27 from "../assets/logos/logo27.jpeg"
import logo28 from "../assets/logos/logo28.jpg"
import logo29 from "../assets/logos/logo29.jpeg"
import logo30 from "../assets/logos/logo30.jpg"
import logo31 from "../assets/logos/logo31.png"
import logo32 from "../assets/logos/logo32.png"
import logo33 from "../assets/logos/logo33.png"
import logo34 from "../assets/logos/logo34.png"
import logo35 from "../assets/logos/logo35.jpeg"
import logo36 from "../assets/logos/logo36.jpeg"
import logo37 from "../assets/logos/logo37.jpeg"
import logo38 from "../assets/logos/logo38.png"
import logo39 from "../assets/logos/logo39.jpeg"
import logo40 from "../assets/logos/logo40.png"
import logo41 from "../assets/logos/logo41.png"
import logo42 from "../assets/logos/logo42.png"
import logo43 from "../assets/logos/logo43.png"
import logo44 from "../assets/logos/logo44.png"
import logo45 from "../assets/logos/logo45.jpeg"
import logo46 from "../assets/logos/logo46.jpeg"
import logo47 from "../assets/logos/logo47.jpeg"
import logo48 from "../assets/logos/logo48.jpg"
import logo49 from "../assets/logos/logo49.png"
import logo50 from "../assets/logos/logo50.png"
import logo51 from "../assets/logos/logo51.png"
import logo52 from "../assets/logos/logo52.jpeg"
import logo53 from "../assets/logos/logo53.jpg"
import logo54 from "../assets/logos/logo54.png"
import logo55 from "../assets/logos/logo55.png"
import logo56 from "../assets/logos/logo56.jpeg"
import logo57 from "../assets/logos/logo57.jpg"
import logo58 from "../assets/logos/logo58.jpg"
import logo59 from "../assets/logos/logo59.jpg"
import logo60 from "../assets/logos/logo60.jpeg"
import logo61 from "../assets/logos/logo61.png"
import logo62 from "../assets/logos/logo62.jpg"
import logo63 from "../assets/logos/logo63.jpg"
import logo64 from "../assets/logos/logo64.jpeg"
import logo65 from "../assets/logos/logo65.png"
import logo66 from "../assets/logos/logo66.png"
import logo67 from "../assets/logos/logo67.jpg"
import { inView, motion } from "framer-motion"
import { useInView } from "react-intersection-observer";




const ClientsLogos = () => {

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });

    const logos = [
        logo1,logo43,logo49,logo30,logo66,logo17,logo11,logo59,logo57,logo24,logo25,logo18,logo34,logo15,logo61,logo62,logo21,logo47,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo12,logo13,logo14,logo16,logo19,logo20,logo22,logo23,logo25,logo26,logo27,logo28,logo29,logo31,logo32,logo33,logo35,logo36,logo37,logo38,logo39,logo40,logo41,logo42,logo44,logo45,logo46,logo48,logo50,logo51,logo52,logo53,logo54,logo55,logo56,logo58,logo60,logo63,logo64,logo65,logo67
    ]
    
    return (
      <div>
        <div className='grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4 gap-10 llg:grid-cols-4'>
          {logos.map((item, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ y: -100, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'backInOut' } } : {}}
                className='w-full h-[200px] llg:w-[300px] rounded-3xl GlassNavbar1 bg-[#fff]'
              >
                <img src={item} className='w-full h-full object-contain rounded-3xl' alt={`logo-${index}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    )
  }

export default ClientsLogos
