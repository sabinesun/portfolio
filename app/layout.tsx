// eslint-disable-next-line import/no-unassigned-import
import "./globals.css";
import Navbar from "../components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { type Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  description: "Portfolio of Sabine SUN, Front-End Developer",
  title: "Sabine SUN",
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
        className={`${inter.className} grid min-h-screen grid-rows-[auto_1fr_auto]`}
      >
        <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#D8E5F2B3_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_75%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#ffffff25_1px,transparent_1px)]" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <Navbar />
          {children} <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
