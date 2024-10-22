import React from "react";

import { ContactAddress, ContactAddress2, ContactCity } from "../constants";

export default function Address() {
    return (
        <address className="not-italic">
            <a href={`https://google.com/maps/?q=${ContactAddress}`} target="_blank" className="hover:text-red">
                <div className="font-bold">{ContactAddress}</div>
                <div>{ContactAddress2}</div>
                <div>{ContactCity}</div>
            </a>
        </address>
    )
}
