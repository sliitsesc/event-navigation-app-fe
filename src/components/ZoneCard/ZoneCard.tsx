import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Stall, Zone } from "@/types/zones";
import { useRouter } from "next/navigation";

const placeholderImg = "/images/placeholder.png";

const ZoneCard = ({ zone }: { zone: Zone }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/zones/${zone.id}`);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-2xl h-[300px] bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden flex flex-col relative p-3 flex-1 cursor-pointer"
      onClick={handleClick}>
      <Image
        src={zone.imageUrl || placeholderImg}
        alt={zone.zoneName}
        width={300}
        height={120}
        className="object-cover h-[128px] w-full rounded-lg mb-2"
      />
      <h2 className="font-bold text-2xl mb-1">{zone.zoneName}</h2>
      {zone?.description && (
        <p className="text-lg text-gray-600 mb-2 leading-tight">
          {zone.description}
        </p>
      )}
      <span className="text-lg text-gray-400">{zone.stalls.length} stalls</span>
    </motion.div>
  );
};

export default ZoneCard;
