import React from "react";

import { ContactPhone } from "../constants";

export default function Phone() {
    return (
        <a href={`tel:${ContactPhone}`} className="hover:text-red">
            {ContactPhone}
        </a>
    )
}
