import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import BottomNavBar from "../components/BottomNavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Knight-Ro Exhibition 2025",
  description: "Event Navigation App for Knight-Ro Exhibition 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        <div className="w-full min-h-screen bg-[var(--background)] text-[var(--foreground)] shadow-md rounded-2xl md:mx-auto md:max-w-[430px] pt-24">
          {children}
        </div>
        <BottomNavBar />
      </body>
    </html>
  );
}
