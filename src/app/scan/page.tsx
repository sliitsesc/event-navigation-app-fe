"use client";
import React from "react";
import QRScanner from "@/components/QRScanner/QRScanner";

const ScanPage = () => {
  return (
    <div className="max-w-lg mx-auto py-10 px-4">
      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-md p-8 flex flex-col items-center h-full">
        <h1 className="text-3xl font-bold mb-2 text-blue-900">
          Scan a QR Code
        </h1>
        <p className="text-lg text-gray-600 mb-6">Scan a QR code to explore.</p>
        <QRScanner handleQRSubmit={(value) => console.log("QR Data:", value)} />
      </div>
    </div>
  );
};

export default ScanPage;
