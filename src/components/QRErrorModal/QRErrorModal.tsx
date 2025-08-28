import React from "react";

interface QRErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

const QRErrorModal: React.FC<QRErrorModalProps> = ({
  isOpen,
  onClose,
  message = "Invalid QR code",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-lg">
        <div className="flex flex-col items-center text-center">
          <div className="text-5xl mb-4">😥</div>
          <h2 className="text-2xl font-bold text-red-700 mb-2">
            Invalid QR Code
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Please try again, or contact the App Team
          </p>
          <button
            onClick={onClose}
            className="px-6 py-3 text-2xl bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition">
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRErrorModal;
