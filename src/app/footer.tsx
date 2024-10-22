import React from "react";
import Nav from "../components/nav";
import MailTo from "../components/mailto";
import Phone from "../components/phone";
import Address from "../components/address";


export default function Footer() {
    return (
        <footer>
        <Nav />
        <ul>
            <li><MailTo/></li>
            <li><Phone/></li>
            <li><Address/></li>
        </ul>
        {/* TODO: google maps embed */}
        </footer>
    )
}
