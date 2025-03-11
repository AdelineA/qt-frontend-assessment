"use client";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const noLayoutPage = ["/login", "/register"];

  return (
    <html lang="en">
      <body>
        {!noLayoutPage.includes(pathname) && <Navbar />}
        {children}
        {!noLayoutPage.includes(pathname) && <Footer />}
      </body>
    </html>
  );
}
