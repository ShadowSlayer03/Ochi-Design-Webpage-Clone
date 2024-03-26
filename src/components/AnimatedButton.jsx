import React from "react";
import { motion } from 'framer-motion';

function AnimatedButton({ isHovered, setIsHovered, text, bgBlack }) {
  return (
    <a
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex gap-6 items-center text-md lg:w-[28%] md:w-[53%] w-44 font-['Neue_Montreal'] uppercase pl-6 py-4 ${bgBlack=="true" ? "bg-[#212121] text-white": "bg-slate-200 text-black"} rounded-[30px] whitespace-nowrap`}
    >
      {text}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 2.8 : 1 }}
        transition={{ duration: 0.5 }}
        className={`dot h-3 w-3 ${bgBlack=="true" ? "bg-white" : "bg-black"} rounded-full flex items-center justify-center`}>
        {isHovered && (
          <motion.i
            style={{ scale: isHovered ? 1 / 2.8 : 1 }}
            className={`text-md z-20 ${bgBlack=="true" ? "text-black" : "text-white"} ri-arrow-right-up-line`}
          ></motion.i>
        )}
      </motion.div>
    </a>
  );
}

export default AnimatedButton;