import React from 'react';
import { ContactEmail } from '../constants';

type MailtoProps = {
    children?: React.ReactNode
}

export default function Mailto({ children }: MailtoProps) {
    return (
        <a href={`mailto:${ContactEmail}`}>
            { children ? children : ContactEmail }
        </a>
    )
}
