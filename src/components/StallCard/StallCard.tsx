import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Stall } from "@/types/zones";
import { truncateText } from "@/lib/utils";
import { useRouter } from "next/navigation";

const placeholderImg = "/images/placeholder.png";
const STALL_NAME_CHAR_LIMIT = 38;

interface StallCardProps {
  stall: Stall;
  zoneId: string;
}

const StallCard = ({ stall, zoneId }: StallCardProps) => {
  console.log("image", stall?.image);
  const router = useRouter();
  const handleClick = () => {
    router.push(`/zones/${zoneId}/${stall.id}`);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-2xl w-full bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden flex flex-row relative p-3 cursor-pointer"
      onClick={handleClick}>
      <Image
        src={stall.image || placeholderImg}
        alt={stall.name}
        width={100}
        height={100}
        className="object-cover h-[100px] w-[100px] rounded-lg mr-4"
      />
      <div className="flex-1">
        <h2 className="font-bold text-xl mb-1 tracking-tight leading-tight">
          {truncateText(stall.name, STALL_NAME_CHAR_LIMIT)}
        </h2>
        {/* <p className="text-md text-gray-600 mb-1 leading-tight">
          {stall.organizer}
        </p> */}
        <div className="inline-flex">
          <div className="text-md mr-2 font-semibold text-cyan-900 -ml-0.5 mt-1 mb-1 leading-tight py-1 px-3 bg-blue-200 w-min rounded-full">
            {stall.category}
          </div>
          <div className="text-md font-semibold text-blue-500 -ml-0.5 mt-1 mb-1 leading-tight py-1 px-3 bg-white w-max rounded-full">
            {stall.location}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StallCard;
