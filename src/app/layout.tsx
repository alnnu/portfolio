import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Alnnu",
  description: "Portfolio de alnnu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="latin">
      <body className="mx-64">
        <Header/>
        {children}
      </body>
    </html>
  );
}
