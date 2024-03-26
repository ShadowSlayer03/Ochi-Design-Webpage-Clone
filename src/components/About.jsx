import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1">
      <div className="top lg:h-[20vw] h-[25vw] w-full pb-3 -mt-5 relative rounded-t-3xl leading-none border-b-2 border-b-black border-opacity-50 bg-[#cdea68] flex flex-col justify-end lg:pb-14 px-5">
        <h2 className='lg:ml-16 text-black lg:text-[3.5vw] font-["Neue_Montreal"]'>
          Ochi is a strategic partner for fast-grow­ing tech
        </h2>
        <h2 className='lg:ml-16 text-black lg:text-[3.5vw] font-["Neue_Montreal"] mt-1'>
          businesses that need to raise funds, sell prod­ucts,
        </h2>
        <h2 className='lg:ml-16 text-black lg:text-[3.5vw] font-["Neue_Montreal"] mt-1'>
          ex­plain com­plex ideas, and hire great peo­ple.
        </h2>
      </div>
      <div className="middle min-h-[25vw] bg-[#cdea68] flex lg:flex-row flex-col w-full">
        <div className="left lg:w-[50%] px-16 py-7">
          <h4 className='font-["Neue_Montreal"] text-black text-lg text-md opacity-80'>
            What you can expect:
          </h4>
        </div>
        <div className="between lg:w-[20%] px-16 flex flex-col gap-10 py-7">
          <h4 className='font-["Neue_Montreal"] text-black text-lg text-justify opacity-80'>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </h4>
          <h4 className='font-["Neue_Montreal"] text-black text-lg text-justify opacity-80'>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </h4>
        </div>
        <div className="right lg:w-[30%] px-36 flex flex-col lg:justify-center mb-16">
          <h4 className='font-["Neue_Montreal"] text-black text-lg opacity-80 mt-12'>
            S:
          </h4>
          <ul className='font-["Neue_Montreal"] text-black text-lg opacity-80'>
            <li>Instagram</li>
            <li>Behance</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="bottom lg:h-[34vw] bg-[#cdea68] flex lg:flex-row flex-col border-t-2 border-t-black border-opacity-30">
        <div className="left w-[50%] px-16 py-7 flex flex-col gap-[2vw]">
          <h1 className='text-5xl mb-10 font-["Neue_Montreal"] text-black'>
            Our Approach:
          </h1>
          <AnimatedButton isHovered={isHovered} setIsHovered={setIsHovered} bgBlack="true" text="Read More"/>
        </div>
        <div className="right pb-10 lg:w-[50%] w-[87%]">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 0.9 : 1 }}
            transition={{ duration: 1 }}
            className="mt-7 ml-7 h-fit w-fit overflow-hidden inline-block rounded-lg"
          >
            <motion.img
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.2 : 1 }}
              transition={{ duration: 1 }}
              src="/images/Homepage-Photo-663x469.jpg"
              alt="photo of founders"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
