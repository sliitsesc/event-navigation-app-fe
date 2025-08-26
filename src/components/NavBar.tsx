"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NavBar() {
  const router = useRouter();
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="fixed top-4 left-1/2 z-50 h-[60px] -translate-x-1/2 w-[calc(100vw-16px)] max-w-[400px] px-1 bg-[#C6DEFE]/40 text-[var(--foreground)] shadow-lg rounded-full flex items-center border border-gray-200/60 backdrop-blur-md backdrop-saturate-150">
      <div className="flex items-center justify-start w-[60px]">
        <button
          aria-label="Back"
          onClick={() => router.back()}
          className="flex items-center justify-center rounded-full hover:bg-gray-100 transition p-2">
          <ArrowLeft size={36} />
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <span className="font-sans font-medium text-2xl tracking-tight">
          Knight-Ro
        </span>
      </div>
      <div className="flex items-center justify-end w-[60px]"></div>
    </motion.nav>
  );
}
