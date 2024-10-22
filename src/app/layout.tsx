import React from "react";

import Header from "../header/header";
import Footer from "../footer/footer";

import { Gabriela } from "next/font/google";
const gabriela = Gabriela({ weight: "400", subsets: ["latin"] });

import 'tailwindcss/tailwind.css';

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

