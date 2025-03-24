"use client";

import React from "react";
import { Email, Phone, Address } from "../components/structure";
import MapWidget from "../components/map-widget";
import { NavLinks } from "@/constants";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-10 pb-20 pt-6 md:pt-10">
        <div>
          <ul className="py-6">
            {NavLinks.map(({ label, path }) => (
              <li key={path} className="py-1">
                <Link href={path} className="hover:text-red">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-6">
            <li>
              <Email />
            </li>
            <li>
              <Phone />
            </li>
            <li>
              <Address />
            </li>
          </ul>
        </div>
        <div className="mt-14">
          <MapWidget />
        </div>
      </div>
      <div className="px-10 py-10 border-t-2 border-red">
        <div className="container mx-auto flex justify-end">
          &copy; {currentYear} Sugar Peeps
        </div>
      </div>
    </footer>
  );
}
