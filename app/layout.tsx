// eslint-disable-next-line import/no-unassigned-import,canonical/filename-match-exported
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  description: "Portfolio",
  title: "Sabine SUN",
};

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth text-zinc-600" lang="en">
      <body className={inter.className}>
        {children} <Analytics />
      </body>
    </html>
  );
}
