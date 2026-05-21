'use client';

import React, { useState } from 'react';
import Image from "next/image";
import CRTEffect from 'vault66-crt-effect';
import "vault66-crt-effect/dist/vault66-crt-effect.css";
import TVScreen from './components/TVScreen';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page4 from './components/page4';
import Page3 from './components/page3';
import TVStatic from './components/TVStatic';

export default function Home() {
  const [polaroidImage, setPolaroidImage] = useState('/PolaroidLuna1.png');
  const [currentPage, setCurrentPage] = useState('tvscreen');

  const navigateWithStatic = (nextPage:any, polaroid:any) => {
  setCurrentPage('static');

  setTimeout(() => {
    setCurrentPage(nextPage);
    setPolaroidImage(polaroid);
  }, 300);
};

  
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center p-2">
      <div
        className="relative w-full max-w-15xl max-h-[100vh]"
        style={{ aspectRatio: '1920 / 1012' }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden ">
          <div className="absolute inset-[10%] min-h-0 min-w-0">
            <CRTEffect 
              enabled={true}
              sweepDuration={5}
              sweepThickness={20}
              scanlineOpacity={0.1}
              theme="blue"
              enableScanlines={true}
              scanlineThickness={4}
              enableSweep={true}
              enableGlow={false}
              enableEdgeGlow={true}
              edgeGlowColor="rgba(64, 10, 134, 0.9)"
              edgeGlowSize={70}
              enableFlicker={false}
              enableGlitch={false}
              glitchIntensity={0.4}
              glitchSpeed={9}
            >
              {currentPage === 'tvscreen' && <TVScreen />}
              {currentPage === 'page1' && <Page1 />}
              {currentPage === 'page2' && (
                <Page2 setPolaroidImage={setPolaroidImage} />
              )}
              {currentPage === 'page3' && <Page3 />}
              {currentPage === 'page4' && <Page4 />}
              {currentPage === 'static' && <TVStatic/>}
            </CRTEffect>
          </div>
        </div>



        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/TvSketchAgain.png"
              alt="TV"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <Image
          src={polaroidImage}
          alt="Polaroid image yaaa"
          fill
          className="object-contain z-10 pointer-events-none"
          priority
        />

<div className="absolute inset-0 z-20 pointer-events-none">
  <div className="relative w-full h-full">

    {/* Button 1 */}
    <button
      className="absolute cursor-pointer pointer-events-auto -translate-x-1/2 -translate-y-1/2"
      style={{ top: '32%', left: '86%', width: '6%', height: '11%' }}
      onClick={() => navigateWithStatic('page1', '/PolaroidLuna2.png')}
    >
      <Image
        src="/ProfileButton.png"
        alt="button1"
        fill
        draggable={false}
        className="pointer-events-none"
      />
    </button>

    {/* Button 2 */}
    <button
      className="absolute cursor-pointer pointer-events-auto -translate-x-1/2 -translate-y-1/2"
      style={{ top: '45%', left: '86%', width: '6%', height: '11%' }}
      onClick={() => navigateWithStatic('page2', '/PolaroidGithub.png')}
      >
      <Image
        src="/buttonGithub.png"
        alt="button2"
        fill
        draggable={false}
        className="pointer-events-none"
      />
    </button>

    {/* Button 3 */}
    <button
      className="absolute cursor-pointer pointer-events-auto -translate-x-1/2 -translate-y-1/2"
      style={{ top: '58%', left: '86%', width: '6%', height: '11%' }}
      onClick={() => navigateWithStatic('page3', '/SkillsPolaroid.png')}
    >
      <Image
        src="/brainIcon.png"
        alt="button3"
        fill
        draggable={false}
        className="pointer-events-none"
      />
    </button>

    {/* Button 4 */}
    <button
      className="absolute cursor-pointer pointer-events-auto -translate-x-1/2 -translate-y-1/2"
      style={{ top: '71%', left: '86%', width: '6%', height: '11%' }}
      onClick={() => navigateWithStatic('page4', '/GPTPolaroid.png')}
    >
      <Image
        src="/AIButton.png"
        alt="button4"
        fill
        draggable={false}
        className="pointer-events-none"
      />
    </button>

  </div>
</div>


      </div>
    </div>
  );
}