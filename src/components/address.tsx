import React from "react";

import { ContactAddress, ContactAddress2, ContactCity } from "../constants";

export default function Address() {
    return (
        <address>
            <a href={`https://google.com/maps/?q=${ContactAddress}`} target="_blank">
                {ContactAddress}<br/>
                {ContactAddress2}<br/>
                {ContactCity}
            </a>
        </address>
    )
}
