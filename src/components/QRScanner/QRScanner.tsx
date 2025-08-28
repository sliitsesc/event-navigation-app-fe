"use client";
import { useState } from "react";
import { Scanner, useDevices } from "@yudiel/react-qr-scanner";
import { SwitchCamera } from "lucide-react";

type QRScannerProps = {
  handleQRSubmit: (value: string) => void;
};

const QRScanner: React.FC<QRScannerProps> = ({ handleQRSubmit }) => {
  const devices = useDevices();
  const [deviceIndex, setDeviceIndex] = useState(0);
  const deviceId = devices[deviceIndex]?.deviceId;

  const handleScan = (result: { rawValue: string }[] | null) => {
    if (result && result.length > 0) {
      console.log(result[0].rawValue);
      handleQRSubmit(result[0].rawValue);
    }
  };

  const handleSwitchCamera = () => {
    setDeviceIndex((prev) =>
      devices.length ? (prev + 1) % devices.length : 0
    );
  };

  return (
    <div className="flex flex-col justify-center items-center text-center w-full h-full">
      <button
        onClick={handleSwitchCamera}
        className="flex items-center gap-2 px-4 py-2 mb-6 bg-blue-200 text-blue-900 rounded-full font-semibold shadow hover:bg-blue-300 transition"
        disabled={devices.length < 2}
        title="Switch Camera">
        <SwitchCamera className="text-xl" />
        Switch Camera
      </button>
      <Scanner paused={false} onScan={handleScan} constraints={{ deviceId }} />
    </div>
  );
};

export default QRScanner;
