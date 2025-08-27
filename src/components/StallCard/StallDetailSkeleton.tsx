import React from "react";

const StallDetailSkeleton = () => (
  <div className="rounded-2xl w-full bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden flex flex-row relative p-6 animate-pulse min-h-[220px] mb-6">
    <div className="bg-gray-200 h-[140px] w-[140px] rounded-lg mr-6" />
    <div className="flex-1 flex flex-col justify-center">
      <div className="h-8 bg-gray-200 rounded w-2/3 mb-3" />
      <div className="h-5 bg-gray-200 rounded w-1/2 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  </div>
);

export default StallDetailSkeleton;
