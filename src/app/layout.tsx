import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Luis Mendez | Mechatronic Engineer",
  description:
    "Portafolio personal de Luis Mendez — Ingeniero Mecatrónico especializado en robótica, sistemas embebidos y automatización inteligente.",
  keywords: [
    "Mechatronic Engineer",
    "Ingeniero Mecatrónico",
    "Robotics",
    "Embedded Systems",
    "Luis Mendez",
    "FPGA",
    "AI",
  ],
  authors: [{ name: "Luis Yucef Julio Mendez Carazas" }],
  openGraph: {
    title: "Luis Mendez | Mechatronic Engineer",
    description:
      "Portafolio personal de Luis Mendez — Ingeniero Mecatrónico especializado en robótica, sistemas embebidos y automatización inteligente.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
