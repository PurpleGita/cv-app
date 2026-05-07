'use client';
import Image from "next/image";

export default function TVStatic() {
  return (
    <div className="w-full h-full relative absolute left-[-5%]">
                <Image
                  src="/TVStatic.jpg"
                  alt="TV Static"
                  fill
                  className="object-contain z-10 pointer-events-none"
                />
    </div>
  );
}
