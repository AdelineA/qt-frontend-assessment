import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./../components/Navbar/index";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MyApp",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
