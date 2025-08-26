"use client";
import React, { useEffect, useState } from "react";
import api from "@/lib/axios";
import ZoneCard from "../../components/ZoneCard/ZoneCard";
import { Zone } from "@/types/zones";
import { motion } from "framer-motion";

const skeletonArray = Array.from({ length: 4 });

const skeletonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

const cardsVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, duration: 0.3 },
  },
};

const ZonesPage = () => {
  const [zones, setZones] = useState<Zone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get<{ status: string; results: Zone[] }>("/exhibition/zones")
      .then((res) => {
        setZones(res.data.results || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load zones.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="flex flex-col gap-y-2">
      <h1 className="font-bold text-3xl mx-1">All Zones</h1>
      <h3 className="font-sans text-xl text-gray-500 tracking-tight leading-tight mx-1 mb-4">
        Click on a zone to explore stalls
      </h3>
      {loading ? (
        <motion.div
          variants={skeletonVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4 px-1">
          {skeletonArray.map((_, idx) => (
            <div
              key={idx}
              className="rounded-2xl h-[300px] bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden flex flex-col relative p-3 flex-1 animate-pulse">
              <div className="bg-white h-[128px] w-full rounded-lg mb-2" />
              <div className="h-6 bg-white rounded w-2/3 mb-2" />
              <div className="h-4 bg-white rounded w-full mb-2" />
              <div className="h-4 bg-white rounded w-1/2 mb-2" />
              <div className="h-5 bg-white rounded w-1/3" />
            </div>
          ))}
        </motion.div>
      ) : error ? (
        <div className="mx-1 text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-2 gap-4 px-1">
          {zones.map((zone) => (
            <motion.div key={zone.id} variants={cardsVariants}>
              <ZoneCard zone={zone} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ZonesPage;
