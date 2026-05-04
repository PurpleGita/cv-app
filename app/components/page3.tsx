'use client';

export default function Page3() {
  return (
    <div className="w-full h-full relative">
      {/* Title */}
      <div className="absolute top-[15%] left-[20%]">
        <p className="opacity-80 text-[2vw] font-['PixelifySans']">What can i do?</p>
      </div>

      {/* Left side text blocks */}
      <div className="absolute top-[30%] left-[20%]">
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans'] mb-4">paragraf 1</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">paragraf 2</p>
      </div>

      {/* Right side text blocks */}
      <div className="absolute top-[30%] right-[20%]">
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans'] mb-4">paragraf 3 <br></br> ssssssssssss</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">paragraf 4 ssssssssssss</p>
      </div>
    </div>
  );
}
