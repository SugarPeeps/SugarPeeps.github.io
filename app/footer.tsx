import React from 'react';
import Nav from './nav';

export default function Footer() {
    return (
        <footer>
        <Nav />
        <ul>
            <li><a href="mailto:sugarpeepssugaring@gmail.com">sugarpeepssugaring@gmail.com</a></li>
        </ul>
        <ul>
            <li>(360) 421-8430</li>
        </ul>
        <ul>
            <li>
                1417 NW 54th St - Studio 432
                Inside StudioWorks Ballard
                Seattle, WA
            </li>
        </ul>
        {/* TODO: google maps embed */}
        </footer>
    )
}
