import type { Metadata } from "next";
import { Lexend, Lora } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Medela Concertedly",
  description: "Publication-grade institutional web application for Nutritional Biochemistry and Behavioral Psychology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} ${lora.variable} antialiased overflow-x-hidden`} suppressHydrationWarning>
      <body className="flex flex-col md:flex-row h-screen overflow-x-hidden md:overflow-hidden" suppressHydrationWarning>
        {/* Dynamic Sidebar */}
        <Sidebar />

        {/* scrollable main content canvas */}
        <main suppressHydrationWarning className="w-full md:w-4/5 h-full overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
