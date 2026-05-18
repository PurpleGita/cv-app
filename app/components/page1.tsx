'use client';

export default function Page1() {
  return (
    <div className="w-full h-full relative">
      {/* Title */}
      <div className="absolute top-[15%] left-[20%]">
        <p className="opacity-80 text-[2vw] font-['PixelifySans']">Who am i?</p>
      </div>

      {/* Left side text blocks */}
      <div className="absolute top-[30%] left-[20%] right-[19%]">
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans'] mb-4">Hey there! my name is Luna</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">I am a passionate and now after five years a newly educated developer. I am hardworking and always eager to learn new things. 
          I live in Hvidovre with my girlfriend. I spent my free time playing video games and board games, i also enjoy working on my own board games and video games.
          <br />
          from 2021-2026 i took an education called Data tekniker med speciale  i programmering
          <br />
          from 2017-2020 i took a Gymnasie education with a focus on science and technology at HTX Sukkertoppen.
          </p>
      </div>

      {/* Right side text blocks 
      <div className="absolute top-[30%] right-[20%]">
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans'] mb-4">paragraf 3 <br></br> ssssssssssss</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">paragraf 4 ssssssssssss</p>
      </div>*/}
    </div>
  );
}
