import React, { useState, useEffect } from "react";

function Eyes() {
  const [clicked,setClicked] = useState(false);
  const [rotate, setRotate] = useState(0);
  const [changes, setChanges] = useState({
    offsetX: 0,
    offsetY: 0,
  });

  function handleClick(e){
      if(clicked) setClicked(false);
      else setClicked(true);
  }

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
    <div className="eyes lg:inline-block md:inline-block hidden w-full h-screen overflow-hidden my-48">
      <div onClick={handleClick} data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("/images/Top-Viewbbcbv-1-1440x921.jpg")]'>
      {clicked? <video onClick={handleClick} className="z-50" src="/images/Main-HQ-1.mp4" autoPlay muted loop></video> : ""}
        <div className="absolute flex gap-10 top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]">

          {clicked? "":<div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div
              style={{
                transform: `translate(${changes.offsetX}px,${changes.offsetY}px)`,
              }}
              className="relative w-[60%] h-[60%] flex items-center justify-center bg-zinc-900 rounded-full"
            >
              <h3 className="text-white uppercase font-['Neue_Montreal']">PLAY</h3>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5"
              >
                <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>}
          {clicked?"":<div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div
              style={{
                transform: `translate(${changes.offsetX}px,${changes.offsetY}px)`,
              }}
              className="relative w-[60%] h-[60%] flex items-center justify-center bg-zinc-900 rounded-full"
            >
              <h3 className="text-white uppercase font-['Neue_Montreal']">PLAY</h3>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5"
              >
                <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Eyes;
