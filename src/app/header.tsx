import React from "react";
import Nav from "../components/nav";
import { Button, Logo, Address, Phone, Link } from "../components/structure";

import { Instagram, Facebook } from "../constants";

export default function Header() {
    return (
        <div>
            <div className="bg-black flex flex-row justify-around">
                <Button href="/appointments">Book Now</Button>
            </div>

            <header className="flex flex-col md:flex-row gap-10 justify-around items-center md:items-start p-6 container mx-auto">
                <Logo />
                <Address />
                <div className="contact">
                    <Phone />
                    <p>Appointment Only</p>
                </div>
                <ul className="flex flex-row md:flex-col gap-4 md:gap-0">
                    <li><Link url={Instagram} newWindow noColor>Instagram</Link></li>
                    <li><Link url={Facebook} newWindow noColor>Facebook</Link></li>
                </ul>
            </header>

            <nav className="bg-blue-dark py-10 md:py-6 px-10 md:px-20 mb-14">
                <Nav className="flex flex-col md:flex-row justify-start items-center md:items-start gap-8 container mx-auto"
                    linkClassName="hover:text-red uppercase text-white"
                    linkActiveClassName="border-b-2 border-red"
                    />
            </nav>
        </div>
    )
}
