import React from "react";
import { Metadata } from "next";
import { ContactEmail } from "../../constants";

export const metadata: Metadata = {
    title: "Appointments - Sugar Peeps",
}


export default function Page() {
    return (
        <div>
            <p>Loyalty maintenance pricing discount of 15% will be applied at the time of your service when your last sugar was received at Sugar Peeps 6 weeks or less prior to your upkeep appointment. Huzzah for staying sweet!</p>
            <p>If you have any questions or need help with scheduling, please <a href={`mailto:${ContactEmail}`}>contact us</a>.</p>
            <a href="https://squareup.com/gift/15ZMSAP6R3TMB/order">Purchase a gift card</a>
            {/* TODO: square scheduling widget */}
        </div>
    )
}
