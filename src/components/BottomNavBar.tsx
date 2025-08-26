"use client";
import React from "react";
import { motion } from "framer-motion";
import { Home, Map, User } from "lucide-react";

export default function BottomNavBar() {
  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
      className="fixed bottom-4 left-1/2 z-50 h-[60px] -translate-x-1/2 w-[90vw] max-w-[400px] px-1 bg-[#C6DEFE]/40 text-[var(--foreground)] shadow-lg rounded-full flex items-center justify-between border border-gray-200/60 backdrop-blur-md backdrop-saturate-150 mx-auto">
      <button
        className="flex flex-col items-center justify-center w-[100px] h-[50px] rounded-full hover:bg-gray-100 active:bg-gray-200 transition-all"
        aria-label="Home">
        <Home size={28} />
        {/* <span className="text-xs mt-1">Home</span> */}
      </button>
      <button
        className="flex flex-col items-center justify-center w-[100px] h-[50px] rounded-full hover:bg-gray-100 active:bg-gray-200 transition-all"
        aria-label="Map">
        <Map size={28} />
        {/* <span className="text-xs mt-1">Map</span> */}
      </button>
      <button
        className="flex flex-col items-center justify-center w-[100px] h-[50px] rounded-full hover:bg-gray-100 active:bg-gray-200 transition-all"
        aria-label="Profile">
        <User size={28} />
        {/* <span className="text-xs mt-1">Profile</span> */}
      </button>
    </motion.nav>
  );
}
