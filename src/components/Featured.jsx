import React,{useState} from "react";
import Block from "./Block";
import { fydeText, trawaText, viseText, premiumBlendText } from "../constants";
import AnimatedButton from "./AnimatedButton";

function Featured() {
  const [isHovered, setIsHovered] = useState(false);

  // Block 1
  const card1 = ["FYDE", fydeText, "Fyde_Illustration_Crypto_2-663x551.png"];
  const card2 = ["VISE", viseText, "Vise_front2-663x551.jpg"];
  const block1 = [card1, card2];
  console.log("Block1", block1);

  // Block 2
  const card3 = ["TRAWA", trawaText, "Trawa_Poster.jpg"];
  const card4 = ["PREMIUM BLEND", premiumBlendText, "Prem_Blend_Poster.png"];
  const block2 = [card3, card4];
  console.log("Block2", block2);

  return (
    <div className="w-full lg:py-12 py-40">
      <div className="w-full lg:px-20 px-16 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <Block blockDetails={block1} />
      <Block blockDetails={block2} />
      <div className="w-[61%] flex justify-end">
        <AnimatedButton isHovered={isHovered} setIsHovered={setIsHovered} bgBlack="false" text="Case Study"/>
      </div>
    </div>
  );
}

export default Featured;
