'use client'

import React from 'react';
import { usePathname } from 'next/navigation';

const paths = {
    '/': 'Home',
    '/sugar': 'Sugar',
    '/about': 'About Us',
    '/appointments': 'Appointments',
    '/policies': 'Policies',
}

export default function Nav() {
    return (
        <nav>
            <ul>
            {Object.entries(paths).map(([path, label]) => {
                return (
                    <li key={label}>
                    <a className={usePathname() === path ? 'active' : ''} href={path}>{label}</a>
                    </li>
                )
            })}
            </ul>
        </nav>
    )
}

