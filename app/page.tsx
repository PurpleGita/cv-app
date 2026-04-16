import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-dvh overflow-hidden flex items-center justify-center p-2">
      {/* TV Image Container */}
      <div className="relative w-full h-full max-w-15xl max-h-[100vh]">
        <Image
          src="/TvSketch.png"
          alt="Background image yaaa"
          fill
          className="object-contain"
          priority
        />
        
        {/* Content on top of image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Your content here</h1>
        </div>
      </div>
    </div>
  );
}