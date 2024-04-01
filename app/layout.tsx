// eslint-disable-next-line canonical/filename-match-exported,import/no-unassigned-import
import "./globals.css";
import Navbar from "../components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { type Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  description: "Generated by create next app",
  title: "Create Next App",
};

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} grid min-h-screen grid-rows-[auto_1fr_auto] p-10`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
