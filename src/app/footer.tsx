import React from "react";
import Nav from "../components/nav";
import MailTo from "../components/mailto";
import Phone from "../components/phone";
import Address from "../components/address";


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white">
            <div className="container px-10 md:px-40 pb-20 pt-10">
            <div>
                <Nav className="py-10" linkClassName="hover:text-red"/>
                <ul className="flex flex-col gap-6">
                    <li><MailTo/></li>
                    <li><Phone/></li>
                    <li><Address/></li>
                </ul>
            </div>
                {/* TODO: google maps embed */}
            </div>
            <div className="px-10 md:px-40 py-10 flex justify-end border-t-2 border-red">
                &copy; {currentYear} Sugar Peeps
            </div>
        </footer>
    )
}
