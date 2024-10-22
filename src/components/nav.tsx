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

type NavProps = {
    className?: string,
    linkClassName?: string,
    linkActiveClassName?: string,
}

export default function Nav({ className, linkClassName, linkActiveClassName }: NavProps) {
    return (
        <ul className={className}>
        {Object.entries(paths).map(([path, label]) => {
            return (
                <li key={label}>
                    <a className={linkClassName + (usePathname() === path ? ` ${linkActiveClassName}` : "")} href={path}>{label}</a>
                </li>
            )
        })}
        </ul>
    )
}

