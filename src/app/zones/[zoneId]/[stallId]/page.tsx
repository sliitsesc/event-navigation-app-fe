"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/lib/axios";
import Image from "next/image";
import { Stall } from "@/types/zones";
import StallDetailSkeleton from "@/components/StallCard/StallDetailSkeleton";

const placeholderImg = "/images/placeholder.png";

const StallDetailPage = () => {
  const { stallId } = useParams();
  const [stall, setStall] = useState<Stall | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStall = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/exhibition/stalls/${stallId}`);
        const data = res.data as {
          status: string;
          results: Stall[];
        };
        setStall(data.results[0] || null);
      } catch {
        setStall(null);
      }
      setLoading(false);
    };
    if (stallId) fetchStall();
  }, [stallId]);

  if (loading) return <StallDetailSkeleton />;

  if (!stall) return <div className="text-gray-500">Stall not found.</div>;

  return (
    <div>
      <div className="rounded-2xl w-full bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden flex flex-col relative p-6 min-h-[220px] mb-6">
        <Image
          src={stall.image || placeholderImg}
          alt={stall.name}
          width={140}
          height={140}
          className="object-cover h-[300px] w-full rounded-lg mb-4"
        />
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="font-bold text-3xl mb-2 tracking-tight leading-tight">
            {stall.name}
          </h2>
          {stall.description && (
            <p className="text-lg text-gray-600 mb-2 leading-tight">
              {stall.description}
            </p>
          )}
          <div className="text-md font-semibold text-cyan-900 mb-2 py-1 px-3 bg-blue-200 w-min rounded-full">
            {stall.category}
          </div>
          {stall.organizer && (
            <div className="text-md text-gray-700 mb-1">
              Organized by: {stall.organizer}
            </div>
          )}
          <div className="text-sm text-gray-500">
            Floor: {stall.floorNumber} | Location: {stall.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StallDetailPage;
