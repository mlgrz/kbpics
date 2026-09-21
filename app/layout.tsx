import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNav from "./components/SideNav";
import localFont from "next/font/local";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KBPICS",
  description: "Karl Benedict Pics",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="yuyu-regular tiny-dots">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Yuyu&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SideNav />
        {children}
      </body>
    </html>
  );
}
