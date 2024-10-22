import React from "react";

import { ContactPhone } from "../constants";

export default function Phone() {
    return (
        <a href={`tel:${ContactPhone}`}>
            {ContactPhone}
        </a>
    )
}
