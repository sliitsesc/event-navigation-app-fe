"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Map, QrCode, User } from "lucide-react";

export default function BottomNavBar() {
  const router = useRouter();
  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
      className="fixed bottom-4 left-1/2 z-50 h-[60px] -translate-x-1/2 w-[90vw] max-w-[400px] px-1 bg-[#C6DEFE]/40 text-[var(--foreground)] shadow-lg rounded-full flex items-center justify-between border border-gray-200/60 backdrop-blur-md backdrop-saturate-150 mx-auto">
      <button
        className="flex flex-col text-blue-900 items-center justify-center w-[100px] h-[50px] rounded-full hover:bg-gray-100 active:bg-gray-200 transition-all"
        aria-label="Home"
        onClick={() => router.push("/")}>
        <Home size={28} />
      </button>
      <button
        className="flex flex-col text-blue-900 items-center justify-center w-[100px] h-[50px] rounded-full hover:bg-gray-100 active:bg-gray-200 transition-all"
        aria-label="Map"
        onClick={() => router.push("/zones")}>
        <Map size={28} />
      </button>
      <button
        disabled
        className="flex flex-col text-blue-900 items-center justify-center w-[100px] h-[50px] rounded-full hover:bg-gray-100 active:bg-gray-200 transition-all"
        aria-label="Scan"
        onClick={() => router.push("/scan")}>
        <QrCode size={28} />
      </button>
    </motion.nav>
  );
}
