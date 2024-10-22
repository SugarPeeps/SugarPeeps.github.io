import React from "react";
import Logo from "../components/logo";
import Address from "../components/address";
import Phone from "../components/phone";
import BookNow from "../components/booknow";
import Nav from "../components/nav";

import { Instagram, Facebook } from "../constants";

export default function Header() {
    return (
        <div>
            <div className="bg-black flex flex-row justify-around">
                <BookNow />
            </div>

            <header className="flex flex-row justify-around p-6">
                <Logo />
                <Address />
                <div className="contact">
                    <Phone />
                    <p>Appointment Only</p>
                </div>
                <ul className="social">
                    <li><a href={Instagram} target="_blank">Instagram</a></li>
                    <li><a href={Facebook} target="_blank">Facebook</a></li>
                </ul>
            </header>

            <nav className="bg-blue-dark text-white uppercase p-6 md:px-20 sm:px-10">
                <Nav className="flex flex-col md:flex-row justify-start gap-8"
                    linkClassName="hover:text-red"
                    linkActiveClassName="text-red"
                    />
            </nav>
        </div>
    )
}
