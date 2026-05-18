'use client';

export default function TVScreen() {
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-[15%] left-[20%]">
        <p className="opacity-80 text-[2vw] font-['PixelifySans']">Welcome to my online CV</p>
      </div>
            <div className="absolute top-[30%] left-[20%] right-[20%]">
              <p className="opacity-80 text-[1.5vw] font-['PixelifySans'] mb-4">
                Click the dials to the right to navigate through the different pages. <br />
              </p>
            </div>
    </div>
  );
}