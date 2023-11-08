import Image from "next/image";
import React from "react";
import flappyBike from "/assets/images/FlappyBike_Red.png";

export default function LoadingBike() {
  return (
    <div className="relative z-10 flex w-full max-w-xl flex-col items-center justify-center px-5">
      <Image
        src={flappyBike}
        alt="FlappyBike_Red"
        className="w-full max-w-[380px] h-auto object-cover mb-6"
      />
      <span className="text-3xl font-bold">Loading ...</span>
    </div>
  );
}
