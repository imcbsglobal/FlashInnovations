import React from 'react'
import logo1 from "../assets/logos/logo1.png"
import logo2 from "../assets/logos/logo1.png"
import logo3 from "../assets/logos/logo1.png"
import logo4 from "../assets/logos/logo1.png"
import logo5 from "../assets/logos/logo1.png"
import logo6 from "../assets/logos/logo1.png"
import logo7 from "../assets/logos/logo1.png"
import logo8 from "../assets/logos/logo1.png"
import logo9 from "../assets/logos/logo1.png"
import logo10 from "../assets/logos/logo1.png"
import logo11 from "../assets/logos/logo1.png"
import logo12 from "../assets/logos/logo1.png"
import logo13 from "../assets/logos/logo1.png"
import logo14 from "../assets/logos/logo1.png"
import logo15 from "../assets/logos/logo1.png"
import logo16 from "../assets/logos/logo1.png"
import logo17 from "../assets/logos/logo1.png"
import logo18 from "../assets/logos/logo1.png"
import logo19 from "../assets/logos/logo1.png"
import logo20 from "../assets/logos/logo1.png"
import logo21 from "../assets/logos/logo1.png"
import logo22 from "../assets/logos/logo1.png"
import logo23 from "../assets/logos/logo1.png"
import logo24 from "../assets/logos/logo1.png"
import logo25 from "../assets/logos/logo1.png"
import logo26 from "../assets/logos/logo1.png"
import logo27 from "../assets/logos/logo1.png"
import logo28 from "../assets/logos/logo1.png"
import logo29 from "../assets/logos/logo1.png"
import logo30 from "../assets/logos/logo1.png"
import logo31 from "../assets/logos/logo1.png"
import logo32 from "../assets/logos/logo1.png"
import logo33 from "../assets/logos/logo1.png"
import logo34 from "../assets/logos/logo1.png"
import logo35 from "../assets/logos/logo1.png"
import logo36 from "../assets/logos/logo1.png"
import logo37 from "../assets/logos/logo1.png"
import logo38 from "../assets/logos/logo1.png"
import logo39 from "../assets/logos/logo1.png"
import logo40 from "../assets/logos/logo1.png"
import logo41 from "../assets/logos/logo1.png"
import logo42 from "../assets/logos/logo1.png"
import logo43 from "../assets/logos/logo1.png"
import logo44 from "../assets/logos/logo1.png"
import logo45 from "../assets/logos/logo1.png"
import logo46 from "../assets/logos/logo1.png"
import logo47 from "../assets/logos/logo1.png"
import logo48 from "../assets/logos/logo1.png"
import logo49 from "../assets/logos/logo1.png"
import logo50 from "../assets/logos/logo1.png"
import logo51 from "../assets/logos/logo1.png"
import logo52 from "../assets/logos/logo1.png"
import logo53 from "../assets/logos/logo1.png"
import logo54 from "../assets/logos/logo1.png"
import logo55 from "../assets/logos/logo1.png"
import logo56 from "../assets/logos/logo1.png"
import logo57 from "../assets/logos/logo1.png"
import logo58 from "../assets/logos/logo1.png"
import logo59 from "../assets/logos/logo1.png"
import logo60 from "../assets/logos/logo1.png"
import logo61 from "../assets/logos/logo1.png"
import logo62 from "../assets/logos/logo1.png"
import logo63 from "../assets/logos/logo1.png"
import logo64 from "../assets/logos/logo1.png"
import logo65 from "../assets/logos/logo1.png"
import logo66 from "../assets/logos/logo1.png"
import logo67 from "../assets/logos/logo1.png"




const ClientsLogos = () => {
    const logos = [
        logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13,logo14,logo15,logo16,logo17,logo18,logo19,logo20,logo21,logo22,logo23,logo24,logo25,logo25,logo26,logo27,logo28,logo29,logo30,logo31,logo32,logo33,logo34,logo35,logo36,logo37,logo38,logo39,logo40,logo41,logo42,logo43,logo44,logo45,logo46,logo47,logo48,logo49,logo50,logo51,logo52,logo53,logo54,logo55,logo56,logo57,logo58,logo59,logo60,logo61,logo62,logo63,logo64,logo65,logo66,logo67
    ]
  return (
    <div>
      <div className=' grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4 gap-10 llg:grid-cols-6 '>

        {logos.map((item)=>(
            <div className=' w-full h-[200px] llg:w-[150px] rounded-3xl GlassNavbar1'>
                <img src={item.logos} className='w-full h-full object-cover rounded-3xl' alt="" />
            </div>
        ))}

    </div>
    </div>
  )
}

export default ClientsLogos
