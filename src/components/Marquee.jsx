import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full py-10 bg-[#004D43] rounded-t-3xl">
      <div className='h-[20vw] border-t-2 border-b-2 border-zinc-300 font-["Founders_Grotesk"] text-[22vw] w-full flex items-center overflow-hidden uppercase leading-none whitespace-nowrap'>
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration:15}} className="pr-20">We are Ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration:15}} className="pr-20">We are Ochi</motion.h1>
        <motion.h1 initial={{x:-5}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration:15}} className="pr-20">We are Ochi</motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
