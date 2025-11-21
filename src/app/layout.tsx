import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diletta Robuschi - Director",
  description: "Visual storytelling for commercials, music videos, and film",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={inter.className}>
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
