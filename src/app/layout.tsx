import React from "react";
import type { Viewport } from "next";
import "@/app/global.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Gabriela } from "next/font/google";
import BookNowHeader from "@/components/book-now-header";
import Nav from "@/components/nav";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const gabriela = Gabriela({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <body className={`${gabriela.className} bg-black`}>
        <BookNowHeader className="sticky top-0 z-50" />
        <Header />
        <Nav />

        <div className="bg-blue">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
