"use client";
import { Tent } from "lucide-react";
import React from "react";

const NoStallsCard = () => (
  <div className="flex flex-col items-center justify-center bg-blue-50 rounded-2xl p-8 min-h-[220px] w-full shadow">
    <Tent className="text-blue-300 mb-4" size={64} />
    <h3 className="text-2xl font-semibold text-gray-700 mb-2">
      No Stalls Found
    </h3>
    <p className="text-gray-500 text-center text-xl max-w-xs">
      Sorry, the zone you checked does not have any stalls added. Please check
      back later.
    </p>
  </div>
);

export default NoStallsCard;
