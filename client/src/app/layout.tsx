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
    <html lang="en" className={`${lexend.variable} ${lora.variable} antialiased`}>
      <body className="flex h-screen overflow-hidden">
        {/* Dynamic Sidebar */}
        <Sidebar />

        {/* 80% scrollable main content canvas */}
        <main className="w-4/5 h-full overflow-y-auto bg-background">
          {children}
        </main>
      </body>
    </html>
  );
}
