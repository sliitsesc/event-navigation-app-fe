import React from "react";

const HeaderCardSkeleton = () => {
  return (
    <div className="w-full h-[250px] rounded-3xl bg-gray-200 animate-pulse mb-4 relative overflow-hidden">
      <div className="w-full h-full absolute bg-gradient-to-b from-[#000000]/10 to-70% to-[#000000]/70 flex justify-end flex-col p-6">
        <div className="h-10 w-1/3 bg-white rounded-md mb-2" />
        <div className="h-6 w-2/3 bg-white rounded-md mb-2" />
        <div className="h-6 w-1/2 bg-white rounded-md" />
      </div>
    </div>
  );
};

export default HeaderCardSkeleton;
