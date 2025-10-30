import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Luminous Salon | Modern Hair Studio",
  description:
    "Experience luxury hair styling, precision cuts, and vibrant color artistry at Luminous Salon. Book an appointment with our award-winning stylists today.",
  openGraph: {
    title: "Luminous Salon | Modern Hair Studio",
    description:
      "Experience luxury hair styling, precision cuts, and vibrant color artistry at Luminous Salon.",
    url: "https://agentic-3d58b470.vercel.app",
    siteName: "Luminous Salon",
    locale: "en_US",
    type: "website"
  },
  metadataBase: new URL("https://agentic-3d58b470.vercel.app")
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="gradient-bg bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
