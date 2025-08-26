import Image from "next/image";
import React from "react";

const IntroBanner = () => {
  return (
    <div className="w-full bg-red-100 h-[250px] rounded-3xl bg-[url(/images/backgrounds/main-card-bg.png)] bg-center text-white relative overflow-hidden">
      <div className="w-full h-full absolute bg-gradient-to-b from-[#000000]/0 to-[#000000]/60  backdrop-blur-[1px] flex justify-center items-center flex-col">
        <Image
          src="/images/logos/knight-emblem.svg"
          alt="Knight-Ro Logo"
          width={110}
          height={110}
          className="mb-4"
        />
        <h1 className="text-[28px] font-sans font-medium">Thurstan College</h1>
      </div>
    </div>
  );
};

export default IntroBanner;
