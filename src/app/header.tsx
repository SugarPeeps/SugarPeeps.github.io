import React from "react";
import Image from "next/image";
import Nav from "../components/nav";

import Address from "../components/address";
import Phone from "../components/phone";

import { Instagram, Facebook } from "../constants";

export default function Header() {
    return (
        <div>
            <div className="">
                <a href="/appointments" className="">Book Now</a>
            </div>
            <div className="">
                <a href="/">
                    <Image src="/images/pinup.png" alt="Sugar Peeps logo" width={240} height={126} />
                </a>
                <Address />
                <div className="contact">
                    <Phone />
                    <p>Appointment Only</p>
                </div>
                <ul className="social">
                    <li><a href={Instagram} target="_blank">Instagram</a></li>
                    <li><a href={Facebook} target="_blank">Facebook</a></li>
                </ul>
            </div>
            <div className="">
                <Nav />
            </div>
        </div>
    )
}
