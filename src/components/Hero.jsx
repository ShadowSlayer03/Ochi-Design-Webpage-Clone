import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-800 text-white pt-2">
      <div className="text-structure mt-32 lg:px-20 lg:pb-20 px-10 pb-10 ">
        <div className='lg:h-28 h-5 masker font-["Founders_Grotesk"] '>
          <h1 className="leading-none uppercase lg:text-9xl text-6xl">We Create</h1>
        </div>
        <div className='lg:h-[8rem] h-[6rem] masker flex items-end gap-2 font-["Founders_Grotesk"]'>
          <motion.img
            initial={{width: 0, opacity: 0}}
            animate={{width: 140, opacity: 1}}
            transition={{duration: 1, ease: [0.76,0,0.24,1]}}
            src="/images/content-image01.jpg"
            className="rounded-lg lg:h-[5.5rem] lg:w-40 lg:mr-5 lg:inline-block md:inline-block hidden mb-4"
            alt="box"
          />
          <h1 className="leading-none uppercase lg:text-9xl text-6xl">Eye-Opening</h1>
        </div>
        <div className='lg:h-28 h-14 masker flex items-end font-["Founders_Grotesk"]'>
          <h1 className="leading-none uppercase lg:text-9xl text-6xl">Presentations</h1>
        </div>
      </div>
      <hr />
      <div className='w-full flex lg:flex-row flex-col lg:gap-2 gap-5 justify-between px-14 pt-6 font-["Neue_Montreal"]'>
        <h2 className="text-lg">For public and private companies</h2>
        <h2 className="text-lg">From the first pitch to IPO</h2>
        <div className="flex gap-1 cursor-pointer">
          <div
            id="start"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="uppercase border border-white rounded-3xl px-3 py-1 hover:text-black hover:bg-white"
          >
            <h2 className="lg:text-md text-sm whitespace-nowrap">Start the Project</h2>
          </div>
          <div className="uppercase border border-white rounded-full px-2 py-1 h-8 w-8 relative">
            {isHovered ? (
              <>
                <div
                  id="circle"
                  className="bg-white h-8 w-8 rounded-full absolute top-[0%] left-[0%] transition-all duration-300"
                ></div>
                <i className="text-md z-20 text-black ri-arrow-right-up-line absolute"></i>
              </>
            ) : (
              <>
                <div
                  id="circle"
                  className="bg-white h-0 w-0 rounded-full absolute top-[50%] left-[50%]"
                ></div>
                <i className="text-md ri-arrow-right-up-line absolute"></i>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
