"use client";

import React from "react";
import Nav from "../components/nav";
import { Email, Phone, Address } from "../components/structure";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-10 md:px-40 pb-20 pt-10">
        <div>
          <Nav className="py-10" linkClassName="hover:text-red"/>
          <ul className="flex flex-col gap-6">
            <li><Email noColor/></li>
            <li><Phone/></li>
            <li><Address/></li>
          </ul>
        </div>
        {/* TODO: google maps embed */}
      </div>
      <div className="px-10 py-10 border-t-2 border-red">
        <div className="container mx-auto flex justify-end">
          &copy; {currentYear} Sugar Peeps
        </div>
      </div>
    </footer>
  )
}
