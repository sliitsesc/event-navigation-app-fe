import IntroBanner from "../components/IntroBanner/IntroBanner";
import { Map, QrCode } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white items-center justify-items-center min-h-screen">
      <main className="max-w-[400px] w-[calc(100vw-18px)] mx-auto flex flex-col gap-y-3 pb-24">
        <IntroBanner />

        <div className="w-full bg-gradient-to-br from-green-50 to-80% to-green-200 rounded-3xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2 font-sans">
              Explore Stalls
            </h2>
            <p className="text-xl text-gray-600 mb-2 font-sans">
              Explore stalls and exhibits at the exhibition
            </p>
          </div>
          <Link
            className="flex flex-row font-sans justify-center items-center bg-green-400 rounded-full text-2xl font-medium p-4 w-full"
            href="/zones">
            <Map size={32} className="mr-3" />
            Explore Stalls
          </Link>
        </div>
        <div className="w-full bg-gradient-to-br from-yellow-50 to-80% to-yellow-200 rounded-3xl p-6 flex flex-col justify-between">
          {/* <div className="w-full bg-gradient-to-br bg-gray-100 rounded-3xl p-6 flex flex-col justify-between"> */}
          <div>
            <h2 className="text-2xl font-bold mb-2 font-sans">Scan QR Code</h2>
            <p className="text-xl font-sans text-gray-600 mb-2">
              Scan QR codes to learn more about exhibits
            </p>
          </div>
          <Link
            className="flex flex-row font-sans justify-center items-center bg-yellow-400 rounded-full text-2xl font-medium p-4 w-full"
            href="/scan">
            <QrCode size={32} className="mr-3" />
            Scan QR Code
          </Link>
        </div>
      </main>
    </div>
  );
}
