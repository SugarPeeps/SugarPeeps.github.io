"use client";

import React from "react";
import Logo from "./logo";
import { Address, Phone } from "../components/structure";
import { FacebookUrl, InstagramUrl, NavLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Facebook, Instagram } from "react-feather";

export default function Header() {
  return (
    <div>
      <HeaderContents />
      <Nav />
    </div>
  );
}

function Nav(): JSX.Element {
  const activePath = usePathname();

  return (
    <nav className="bg-blue-dark py-6 md:py-4 px-10 md:px-20">
      <ul className="flex flex-col md:flex-row justify-start items-center md:items-start gap-6 md:gap-10 container mx-auto">
        {NavLinks.map(({ label, path }) => (
          <li key={path}>
            <Link
              href={path}
              className={`hover:text-red uppercase text-white text-lg ${activePath === path ? "border-b-2 border-red" : ""}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function HeaderContents(): JSX.Element {
  return (
    <header className="bg-blue flex flex-col items-center">
      <div className="flex flex-col container md:flex-row gap-10 justify-between items-center md:items-start py-10">
        <Logo />
        <Address />
        <div className="contact">
          <Phone />
          <p>Appointment Only</p>
        </div>
        <ul className="flex flex-row gap-2">
          <li>
            <Link href={InstagramUrl} target="_blank">
              <Instagram />
            </Link>
          </li>
          <li>
            <Link href={FacebookUrl} target="_blank">
              <Facebook />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
