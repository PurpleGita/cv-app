'use client';

export default function Page3() {
  return (
    <div className="w-full h-full relative">
      {/* Title */}
      <div className="absolute top-[15%] left-[20%]">
        <p className="opacity-80 text-[2vw] font-['PixelifySans']">What can i do?</p>
      </div>

      {/* Left side text blocks */}
      <div className="absolute top-[30%] left-[20%] right-[20%]">
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans'] mb-4">I have worked with various technologies and frameworks during my five year long education and free time. Below are some of the different things i have experience with.</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">.NET Core and .NET API</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">.C# and C++</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">Unity</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">Android SDK</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">Python</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">SQL</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">Gamemaker 1 and 2</p>


      </div>

      {/* Right side text blocks */}
      <div className="absolute top-[50%] right-[25%]">
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">React and React Native</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">HTML, CSS, JavaScript</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">Angular</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">Blazor</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">Node.js</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">PySpark</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">Unit Tests</p>
      </div>
    </div>
  );
}
