"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QRScanner from "@/components/QRScanner/QRScanner";
import QRErrorModal from "@/components/QRErrorModal/QRErrorModal";
import { scanQRCode } from "@/lib/qrService";
import { isZone, isStall } from "@/types/zones";

const ScanPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [scannerKey, setScannerKey] = useState(0);
  const [errorModal, setErrorModal] = useState({
    isOpen: false,
    message: "Invalid QR code",
  });

  // Reset scanner when component mounts (when navigating back to scan page)
  useEffect(() => {
    setScannerKey((prev) => prev + 1);
  }, []);

  const handleQRSubmit = async (qrCodeValue: string) => {
    console.log("QR Data:", qrCodeValue);
    setIsLoading(true);

    try {
      const response = await scanQRCode(qrCodeValue);

      if (response.status === "successful" && response.results.length > 0) {
        const result = response.results[0];

        if (isZone(result)) {
          // Navigate to zone page
          router.push(`/zones/${result.id}`);
        } else if (isStall(result)) {
          // Navigate to stall page within its zone
          const zoneId = result.zone?.id;
          if (zoneId) {
            router.push(`/zones/${zoneId}/${result.id}`);
          } else {
            setErrorModal({
              isOpen: true,
              message: "Invalid QR code",
            });
          }
        } else {
          setErrorModal({
            isOpen: true,
            message: "Invalid QR code",
          });
        }
      } else {
        setErrorModal({
          isOpen: true,
          message: "Invalid QR code",
        });
      }
    } catch (error) {
      console.error("QR scan error:", error);
      setErrorModal({
        isOpen: true,
        message: "Invalid QR code",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const closeErrorModal = () => {
    setErrorModal({ ...errorModal, isOpen: false });
  };

  return (
    <div className="max-w-lg mx-auto py-10 px-4">
      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-md p-8 flex flex-col items-center h-full">
        <h1 className="text-3xl font-bold mb-2 text-blue-900">
          Scan a QR Code
        </h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Scan a QR code to explore exhibition zones and stalls.
        </p>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center text-center w-full h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-blue-700 font-semibold">Processing QR code...</p>
          </div>
        ) : (
          <QRScanner
            key={scannerKey}
            handleQRSubmit={handleQRSubmit}
            disabled={isLoading}
          />
        )}
      </div>

      <QRErrorModal
        isOpen={errorModal.isOpen}
        onClose={closeErrorModal}
        message={errorModal.message}
      />
    </div>
  );
};

export default ScanPage;
