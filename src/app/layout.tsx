import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luis Yucef | Mechatronic Engineer",
  description:
    "Personal portfolio of Luis Yucef Julio Mendez Carazas — Mechatronic Engineer specializing in robotics, embedded systems, and intelligent automation.",
  keywords: [
    "Mechatronic Engineer",
    "Robotics",
    "Embedded Systems",
    "Automation",
    "Luis Yucef",
  ],
  authors: [{ name: "Luis Yucef Julio Mendez Carazas" }],
  openGraph: {
    title: "Luis Yucef | Mechatronic Engineer",
    description:
      "Personal portfolio of Luis Yucef Julio Mendez Carazas — Mechatronic Engineer specializing in robotics, embedded systems, and intelligent automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0f1e] text-slate-200`}
      >
        {children}
      </body>
    </html>
  );
}
