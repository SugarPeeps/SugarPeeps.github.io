"use client";

import React from "react";
import Logo from "./logo";
import { Address, Phone } from "../components/structure";
import { FacebookUrl, InstagramUrl, NavLinks } from "@/constants";
import Link from "next/link";
import { Facebook, Instagram } from "react-feather";

export default function Header(
  props: React.ComponentProps<"header">,
): JSX.Element {
  const { className, ...otherProps } = props;

  return (
    <header
      className={`${className} bg-blue flex flex-col items-center`}
      {...otherProps}
    >
      <div className="flex flex-col container md:flex-row gap-10 justify-between items-center md:items-start py-10">
        <Logo />
        <Address className="text-center md:text-left" />
        <div className="text-center md:text-left">
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
