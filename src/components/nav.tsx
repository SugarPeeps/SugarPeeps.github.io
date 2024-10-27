"use client"

import React from "react";
import { usePathname } from "next/navigation";

const paths = {
    "/": "Home",
    "/sugar": "Sugar",
    "/about": "About Us",
    "/appointments": "Appointments",
    "/policies": "Policies",
}

type NavItemProps = {
    path: string;
    linkClassName: string;
    linkActiveClassName: string;
    children: React.ReactNode | React.ReactNode[];
}

const NavItem = ({ path, linkClassName, linkActiveClassName, children } : NavItemProps) : React.ReactNode => {
    const isActive = usePathname() === path;

    return (
      <li>
          {isActive ? (
            <a className={`${linkClassName} ${linkActiveClassName}`} href={path}>{children}</a>
          ) : (
            <a className={linkClassName} href={path}>{children}</a>
          )}
      </li>
    );
};

type NavProps = {
    className?: string,
    linkClassName?: string,
    linkActiveClassName?: string,
}

export default function Nav({ className, linkClassName, linkActiveClassName }: NavProps) {
    return (
      <ul className={className} role="navigation" aria-label="Main">
          {Object.entries(paths).map(([path, label]) => (
            <NavItem key={path} path={path} linkClassName={linkClassName} linkActiveClassName={linkActiveClassName}>{label}</NavItem>
          ))}
        </ul>
    )
}

