"use client";

import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  return (
    <div className="p-5">
      <Image
      src="/banner-home-01.png"
      width={150}
      height={350}
      alt="Até 55% de desconto"
      className="h-auto w-full"
      sizes="100vw"
      />
      <div className="mt-8">
        
      <Categories/>
      </div>
    </div>
  );
}
