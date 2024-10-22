import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Policies - Sugar Peeps",
}


export default function Page() {
    return (
        <div>
            <h2>Sugar Peeps bookings are by appointment only</h2>
            <h3>Booking policies:</h3>
            <ul>
                <li><b>Cancellations</b> made with less than 24 hours notice barring illness or extreme emergency will be charged full price for services booked.</li>
                <li><b>No-shows</b> will be charged full price for services booked.</li>
                <li><b>Late arrivals</b> may be required to reschedule or downgrade to a shorter service and will be charged full price for services booked.</li>
                <li><i>Please understand when you change your appointment with less than 24 hours notice that time has been set aside specifically for you. I cannot typically fill this time and must charge to remain a successful business.</i></li>
            </ul>
            <div className="thankyou">
                <p>I appreciate YOU and your support of this little one woman business greatly!</p>
                <p>Warmly, Genevieve of Sugar Peep</p>
            </div>
        </div>
    )
}
