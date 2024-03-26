
import React, { useState, useEffect } from 'react';
import AnimatedButton from './AnimatedButton';

function StartProject() {
  const [rotate, setRotate] = useState(0);
  const [isHoveredFirst, setIsHoveredFirst] = useState(false);
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const [changes, setChanges] = useState({
    offsetX: 0,
    offsetY: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      let offX = deltaX * 0.05;
      let offY = deltaY * 0.05;

      setChanges({ offsetX: offX, offsetY: offY });
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className='relative pb-20 bg-fixed w-full lg:-mt-10 -mt-5 min-h-[110vh] text-[#212121] bg-[#cdea68] rounded-t-3xl flex flex-col gap-0 justify-center items-center'>
      <div className="eyes hidden absolute lg:flex gap-10 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-zinc-100">
          <div
            style={{
              transform: `translate(${changes.offsetX}px,${changes.offsetY}px)`,
            }}
            className="relative w-[60%] h-[60%] bg-zinc-900 rounded-full"
          >
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-5"
            >
              <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-[10vw] h-[10vw] flex items-center justify-center rounded-full bg-zinc-100">
          <div
            style={{
              transform: `translate(${changes.offsetX}px,${changes.offsetY}px)`,
            }}
            className="relative w-[60%] h-[60%] flex items-center justify-center bg-zinc-900 rounded-full"
          >
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-5"
            >
              <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <h1 className='inline-block lg:text-[15.5vw] text-[20vw] mb-5 leading-[12vw] tracking-normal uppercase font-["Founders_Grotesk"]'>Ready</h1>
      <h1 className='inline-block lg:text-[15.5vw] text-[20vw] mb-5 leading-[12vw] tracking-normal uppercase font-["Founders_Grotesk"]'>To Start</h1>
      <h1 className='inline-block lg:text-[15.5vw] text-[20vw] mb-5 leading-[12vw] tracking-normal uppercase font-["Founders_Grotesk"]'>The Project?</h1>
      <div className='flex flex-col items-center lg:gap-[0.5vw] gap-7 text-md start-btns lg:w-[51%] w-[100%] mt-20'>
      <AnimatedButton text="Start a Project" isHovered={isHoveredFirst} setIsHovered={setIsHoveredFirst} bgBlack="true" />
      <h2>OR</h2>
      <AnimatedButton text="Send us an Email" isHovered={isHoveredSecond} setIsHovered={setIsHoveredSecond} bgBlack="false" />
      </div>
    </div>
  )
}

export default StartProject;