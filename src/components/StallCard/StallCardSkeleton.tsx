import React from "react";

const StallCardSkeleton = () => {
  return (
    <div className="rounded-2xl w-full bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden flex flex-row relative p-3 mb-3 animate-pulse">
      <div className="bg-white h-[100px] w-[100px] rounded-lg mr-4" />
      <div className="flex-1">
        <div className="h-6 bg-white rounded w-1/2 mb-2" />
        <div className="h-4 bg-white rounded w-3/4 mb-1" />
        <div className="h-4 bg-white rounded w-1/2 mb-1" />
      </div>
    </div>
  );
};

export default StallCardSkeleton;
