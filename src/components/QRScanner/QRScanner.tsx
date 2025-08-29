"use client";
import { useState, useEffect, useCallback } from "react";
import { Scanner, useDevices } from "@yudiel/react-qr-scanner";
import { SwitchCamera, RotateCcw } from "lucide-react";

type QRScannerProps = {
  handleQRSubmit: (value: string) => void;
  disabled?: boolean;
};

const QRScanner: React.FC<QRScannerProps> = ({
  handleQRSubmit,
  disabled = false,
}) => {
  const devices = useDevices();
  const [deviceIndex, setDeviceIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(true);
  const [hasScanned, setHasScanned] = useState(false);
  const deviceId = devices[deviceIndex]?.deviceId;

  // Reset scanning state when component mounts or when coming back from navigation
  useEffect(() => {
    setIsScanning(true);
    setHasScanned(false);
  }, []);

  // Reset scanning state when devices change (camera permissions granted)
  useEffect(() => {
    if (devices.length > 0 && !isScanning) {
      setIsScanning(true);
    }
  }, [devices.length, isScanning]);

  const handleScan = useCallback(
    (result: { rawValue: string }[] | null) => {
      if (result && result.length > 0 && !disabled && !hasScanned) {
        console.log(result[0].rawValue);
        setHasScanned(true);
        setIsScanning(false);
        handleQRSubmit(result[0].rawValue);
      }
    },
    [disabled, hasScanned, handleQRSubmit]
  );

  const handleSwitchCamera = () => {
    if (!disabled) {
      setDeviceIndex((prev) =>
        devices.length ? (prev + 1) % devices.length : 0
      );
      // Reset scanning state when switching cameras
      setHasScanned(false);
      setIsScanning(true);
    }
  };

  const handleRestartScanning = () => {
    if (!disabled) {
      setHasScanned(false);
      setIsScanning(true);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-center w-full h-full">
      <div className="flex gap-3 mb-6">
        <button
          onClick={handleSwitchCamera}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold shadow transition ${
            disabled || devices.length < 2
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-200 text-blue-900 hover:bg-blue-300"
          }`}
          disabled={disabled || devices.length < 2}
          title="Switch Camera">
          <SwitchCamera className="text-xl" />
        </button>
        <button
          onClick={handleRestartScanning}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold shadow transition ${
            disabled || hasScanned
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-green-200 text-green-900 hover:bg-green-300"
          }`}
          disabled={disabled || hasScanned}
          title="Restart Scanning">
          <RotateCcw className="text-xl" />
        </button>
      </div>
      <Scanner
        paused={disabled || !isScanning}
        onScan={handleScan}
        constraints={{ deviceId }}
        key={`scanner-${deviceIndex}-${devices.length}`} // Force remount when device changes
      />
    </div>
  );
};

export default QRScanner;
