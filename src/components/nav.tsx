"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { Menu } from "react-feather";

export default function Nav(props: React.ComponentProps<"nav">): JSX.Element {
  const activePath = usePathname();

  const { className, ...otherProps } = props;

  return (
    <nav
      className={`${className} bg-blue-dark py-6 md:py-4 px-10 md:px-20`}
      {...otherProps}
    >
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
