import React from "react";
import { Metadata } from "next";
import { Container, H, P, List, Item, Space } from "../../components/structure";

export const metadata: Metadata = {
    title: "Policies - Sugar Peeps",
}


export default function Page() {
    return (
        <Container>
            <H>Sugar Peeps bookings are by appointment only</H>
            <P>Booking policies:</P>
            <List>
                <Item><strong>Cancellations</strong> made with less than 24 hours notice barring illness or extreme emergency will be charged full price for services booked.</Item>
                <Item><strong>No-shows</strong> will be charged full price for services booked.</Item>
                <Item><strong>Late arrivals</strong> may be required to reschedule or downgrade to a shorter service and will be charged full price for services booked.</Item>
                <Item>Please understand when you change your appointment with less than 24 hours notice that time has been set aside specifically for you. I cannot typically fill this time and must charge to remain a successful business.</Item>
            </List>
            <Space/>
            <P center>I appreciate YOU and your support of this little one woman business greatly!</P>
            <P center>Warmly, Genevieve of Sugar Peep</P>
        </Container>
    )
}
