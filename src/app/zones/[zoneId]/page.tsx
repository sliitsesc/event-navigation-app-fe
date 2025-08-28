"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/lib/axios";
import StallCard from "@/components/StallCard/StallCard";
import StallCardSkeleton from "@/components/StallCard/StallCardSkeleton";
import { Stall } from "@/types/zones";
import HeaderCard from "@/components/HeaderCard/HeaderCard";
import HeaderCardSkeleton from "@/components/HeaderCard/HeaderCardSkeleton";
import { Zone } from "@/types/zones";
import ErrorCard from "@/components/ErrorCard/ErrorCard";
import NoStallsCard from "@/components/StallCard/NoStallCard/NoStallCard";

const SingleZonePage = () => {
  const { zoneId } = useParams();
  const [zone, setZone] = useState<Zone | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchZone = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await api.get(`/exhibition/zones/${zoneId}`);
        const data = res.data as {
          status: string;
          results: [
            {
              id: number;
              zoneName: string;
              description?: string;
              imageUrl?: string;
              colorCode?: string;
              stalls: Stall[];
            }
          ];
        };
        const zoneData = data.results[0];
        if (zoneData) {
          setZone({
            ...zoneData,
            id: String(zoneData.id),
          });
        } else {
          setZone(null);
          setError(
            "No zone found for this ID. The zone might be lost in space!"
          );
        }
      } catch {
        setZone(null);
        setError("Failed to load zone.");
      }
      setLoading(false);
    };
    if (zoneId) fetchZone();
  }, [zoneId]);

  return (
    <>
      {error ? (
        <ErrorCard message={error} />
      ) : loading ? (
        <HeaderCardSkeleton />
      ) : (
        zone && (
          <HeaderCard
            zoneId={zone.id}
            title={zone.zoneName}
            description={zone.description}
            bgImage={zone.imageUrl}
            stallsCount={zone.stalls?.length}
          />
        )
      )}

      {error ? null : loading ? (
        <div className="w-full rounded-3xl animate-pulse mb-4 relative">
          <div className="h-8 w-2/3 bg-gray-200 rounded-md mb-2" />
          <div className="h-6 w-1/2 bg-gray-200 rounded-md" />
        </div>
      ) : (
        <>
          <h2 className="font-sans mb-1 font-semibold text-3xl ml-1">
            All Stalls in {zone?.zoneName}
          </h2>
          <p className="font-sans text-xl text-gray-500 tracking-tight leading-tight ml-1 mb-4">
            Tap on a stall to view more information
          </p>
        </>
      )}

      {error ? null : loading ? (
        <>
          {[...Array(5)].map((_, i) => (
            <StallCardSkeleton key={i} />
          ))}
        </>
      ) : zone && zone.stalls && zone.stalls.length > 0 ? (
        <div className="grid grid-cols-1 gap-y-3">
          {zone.stalls.map((stall: Stall) => (
            <StallCard key={stall.id} stall={stall} zoneId={zone.id} />
          ))}
        </div>
      ) : (
        <NoStallsCard />
      )}
    </>
  );
};

export default SingleZonePage;
