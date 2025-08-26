import { truncateText } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  zoneId: string;
  bgImage?: string;
  title: string;
  description?: string;
  stallsCount?: number;
};

const HeaderCard = ({ bgImage, title, description }: Props) => {
  return (
    <div
      className={`w-full bg-blue-50 h-[250px] rounded-3xl bg-center text-white relative overflow-hidden mb-4`}>
      <Image
        src={bgImage || "/images/placeholder.png"}
        width={400}
        height={300}
        alt="zone image"
        className="w-full h-full absolute"
      />
      <div className="w-full h-full absolute bg-gradient-to-b from-[#000000]/10 to-70% to-[#070020]/70 flex justify-end flex-col p-6">
        <h1 className="text-[36px] font-sans font-bold">
          {truncateText(title, 15)}
        </h1>
        <p className="text-[22px] font-sans font-normal leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeaderCard;
