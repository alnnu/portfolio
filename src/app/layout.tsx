import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Alnnu",
  description: "Portfolio do alnnu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="latin">
      <body className="lg:mx-64 mx-5">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
