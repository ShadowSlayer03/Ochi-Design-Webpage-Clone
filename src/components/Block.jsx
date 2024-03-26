import React, { useState } from "react";
import { motion } from "framer-motion";

function Block({ blockDetails }) {
  const [hoverStates, setHoverStates] = useState({});
  const [name, setName] = useState("");

  const handleMouseEnter = (index) => {
    setHoverStates((prev) => ({ ...prev, [index]: true }));
    setName(blockDetails[index][0]);
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prev) => ({ ...prev, [index]: false }));
    setName("");
  };

  return (
    <div className="card-container px-12 mt-10 mb-24 flex lg:flex-row flex-col justify-center lg:gap-5 gap-40 relative">
      <div className="text-wrapper h-[8rem] overflow-hidden absolute lg:top-[50%] top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 pointer-events-none">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: name ? 0 : 100, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-9xl text-[#cdea68] font-['Founders_Grotesk']"
        >
          {name}
        </motion.h1>
      </div>

      {blockDetails.map((card, index) => (
        <div key={index} className="card">
          <h5 className='flex gap-2 items-center text-md font-["Neue_Montreal"]'>
            <div className="circle inline-block h-3 w-3 rounded-full bg-white"></div>
            {card[0]}
          </h5>
          <motion.div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            initial={{ scale: 1 }}
            animate={{ scale: hoverStates[index] ? 0.92 : 1 }}
            transition={{ duration: 0.8 }}
            className="mt-7 h-fit w-fit overflow-hidden inline-block rounded-lg"
          >
            <motion.img
              initial={{ scale: 1 }}
              animate={{ scale: hoverStates[index] ? 1.2 : 1 }}
              transition={{ duration: 0.8 }}
              src={`/images/${card[2]}`}
              alt={`${card[0]}_Project`}
            />
          </motion.div>
          <div className="works mt-5 flex lg:flex-row flex-col lg:items-center lg:gap-[0.7vw] gap-5 w-full">
            {card[1].map((work, index) => {
              return (
                <motion.button
                whileHover={{
                  scale: 1.05, 
                  backgroundColor: '#ffffff',
                  color: '#000000', 
                  transition: { duration: 0.3 },
                }}
                  className="text-sm text-white uppercase font-['Neue_Montreal'] rounded-3xl py-2 px-5 outline outline-1 outline-white"
                  key={index}
                >
                  {work}
                </motion.button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Block;
