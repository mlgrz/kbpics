import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Karl Benedict Pics",
  description: "Karl Benedict Pics",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="yuyu-regular tiny-dots">
      <head></head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
