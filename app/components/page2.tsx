'use client';

import { useState } from "react";

export default function Page2({ setPolaroidImage }: { setPolaroidImage: (image: string) => void }) {
    const [currentProject, setCurrentProject] = useState('Hover over the names to see some of the projects i have done');
    
    
  return (
    <div className="w-full h-full relative">
      {/* Title */}
      <div className="absolute top-[15%] left-[20%]">
        <p className="opacity-80 text-[2vw] font-['PixelifySans']">What have i done?</p>
      </div>
      <div className="absolute top-[20%] left-[20%] right-[17%]">
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">
            {currentProject}
        </p>
      </div>

      {/* Left side text blocks */}
      <div className="absolute top-[50%] left-[20%] ">
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans'] mb-4 cursor-pointer pointer-events-auto " 
              onMouseEnter={() => {
                setCurrentProject('Mauve-Step, a turn based video game where you dodge the enemies attacks by matching a ryhtem by tapping your charcters, made in Unity, and connected to a react website displaying highscores via a selfmade API. Click to view youtube video demonstration.');
                setPolaroidImage('/Polaroid1.png');
         }}> 
            
        Mauve-Step </p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">paragraf 2</p>
      </div>

      {/* Right side text blocks */}
      <div className="absolute top-[50%] right-[20%]">
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans'] mb-4">paragraf 3 <br></br> ssssssssssss</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">paragraf 4 ssssssssssss</p>
      </div>
    </div>
  );
}
