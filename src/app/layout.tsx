import React from "react";
import type { Viewport } from "next";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1.0,
}

import { Gabriela } from "next/font/google";
const gabriela = Gabriela({ weight: "400", subsets: ["latin"] });

import 'tailwindcss/tailwind.css';

import Header from "./header";
import Footer from "./footer";

export default function RootLayout({ 
    children 
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${gabriela.className} bg-blue`}>

            <Header/>

            {children}

            <Footer/>

        </body>
        </html>
    )
}

