"use client";
import { useState } from "react";
import { Scanner, useDevices } from "@yudiel/react-qr-scanner";
import { SwitchCamera } from "lucide-react";

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
  const deviceId = devices[deviceIndex]?.deviceId;

  const handleScan = (result: { rawValue: string }[] | null) => {
    if (result && result.length > 0 && !disabled) {
      console.log(result[0].rawValue);
      handleQRSubmit(result[0].rawValue);
    }
  };

  const handleSwitchCamera = () => {
    if (!disabled) {
      setDeviceIndex((prev) =>
        devices.length ? (prev + 1) % devices.length : 0
      );
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-center w-full h-full">
      <button
        onClick={handleSwitchCamera}
        className={`flex items-center gap-2 px-4 py-2 mb-6 rounded-full font-semibold shadow transition ${
          disabled || devices.length < 2
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-blue-200 text-blue-900 hover:bg-blue-300"
        }`}
        disabled={disabled || devices.length < 2}
        title="Switch Camera">
        <SwitchCamera className="text-xl" />
        Switch Camera
      </button>
      <Scanner
        paused={disabled}
        onScan={handleScan}
        constraints={{ deviceId }}
      />
    </div>
  );
};

export default QRScanner;
