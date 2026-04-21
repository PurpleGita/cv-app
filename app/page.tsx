'use client';

import React from 'react';
import Image from "next/image";
import CRTEffect from 'vault66-crt-effect';
import "vault66-crt-effect/dist/vault66-crt-effect.css";
import TVScreen from './components/TVScreen';

export default function Home() {
  return (
    <div className="relative w-full h-dvh overflow-hidden flex items-center justify-center p-2">
      <div
        className="relative w-full max-w-15xl max-h-[100vh]"
        style={{ aspectRatio: '1920 / 1012' }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
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

              <TVScreen />
            </CRTEffect>
          </div>
        </div>

        <Image
          src="/TvSketchAgain.png"
          alt="Background image yaaa"
          fill
          className="object-contain z-10"
          priority
        />
      </div>
    </div>
  );
}