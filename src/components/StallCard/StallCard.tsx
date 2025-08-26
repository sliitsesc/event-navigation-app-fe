import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Stall } from "@/types/zones";
import { truncateText } from "@/lib/utils";

const placeholderImg = "/images/placeholder.png";
const STALL_NAME_CHAR_LIMIT = 38;

const StallCard = ({ stall }: { stall: Stall }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-2xl w-full bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden flex flex-row relative p-3">
      <Image
        src={stall.imageUrl || placeholderImg}
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
        <div className="text-md font-semibold text-cyan-900 -ml-0.5 mt-1 mb-1 leading-tight py-1 px-3 bg-blue-200 w-min rounded-full">
          {stall.category}
        </div>
      </div>
    </motion.div>
  );
};

export default StallCard;
