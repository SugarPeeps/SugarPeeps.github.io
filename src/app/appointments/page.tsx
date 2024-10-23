import React from "react";
import { Metadata } from "next";
import { Container, P, Link, Email } from "../../components/structure";

export const metadata: Metadata = {
    title: "Appointments - Sugar Peeps",
}

export default function Page() {
    return (
        <Container>
            <P>Loyalty maintenance pricing discount of 15% will be applied at the time of your service when your last sugar was received at Sugar Peeps 6 weeks or less prior to your upkeep appointment. Huzzah for staying sweet!</P>
            <P>If you have any questions or need help with scheduling, please <Email>contact us</Email>.</P>
            <P><Link url="https://squareup.com/gift/15ZMSAP6R3TMB/order" newWindow={true}>Purchase a gift card</Link></P>
            {/* TODO: square scheduling widget */}
        </Container>
    )
}
