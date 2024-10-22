import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

import "../reset.css";
import styles from './layout.module.scss';

export default function RootLayout({ 
    children 
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={styles.body}>
            <Header/>
            {children}
            <Footer/>
        </body>
        </html>
    )
}

