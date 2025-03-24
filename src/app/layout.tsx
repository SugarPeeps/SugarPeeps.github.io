import React from "react";
import type { Viewport } from "next";
import "@/app/global.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Gabriela } from "next/font/google";
import BookNowHeader from "@/components/book-now-header";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const gabriela = Gabriela({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <body className={`${gabriela.className} bg-blue`}>
        <BookNowHeader />
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
