import React from 'react';
import Image from 'next/image';
import Nav from '../nav/nav';
import { ContactPhone, ContactAddress, ContactAddress2, Instagram, Facebook } from '../constants';

import styles from './header.module.scss';

export default function Header() {
    return (
        <header>
            <div className={styles.topBar}>
                <a href="/appointments">Book Now</a>
            </div>
            <a href="/">
                <Image src="/images/pinup.png" alt="Sugar Peeps logo" width={100} height={100} />
            </a>
            <div className="location">
                <div className="address">{ContactAddress}</div>
                <p>{ContactAddress2}</p>
            </div>
            <div className="contact">
                <div className="phone">{ContactPhone}</div>
                <p>Appointment Only</p>
            </div>
            <ul className="social">
                <li><a href={Instagram} target="_blank">Instagram</a></li>
                <li><a href={Facebook} target="_blank">Facebook</a></li>
            </ul>
            <Nav />
        </header>
    )
}
