import React from "react";

const ErrorCard = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-red-50 border border-red-200 rounded-2xl p-6 my-6 shadow-sm">
      <div className="text-5xl mb-2">😵‍💫</div>
      <h2 className="text-2xl font-bold text-red-700 mb-2">
        Oops! Something went wrong...
      </h2>
      <p className="text-lg text-red-600 mb-2">{message}</p>
      <div className="text-sm text-gray-500">
        Try refreshing, or come back later. The server might be on a coffee
        break ☕️
      </div>
    </div>
  );
};

export default ErrorCard;
