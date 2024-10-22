import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Policies - Sugar Peeps",
}


export default function Page() {
    return (
        <div className="container mx-auto">
            <h2 className="text-xl px-10 pb-10">Sugar Peeps bookings are by appointment only</h2>
            <h3 className="px-10 pb-8">Booking policies:</h3>
            <ul className="ml-4 px-10 list-disc">
                <li className="pb-4 leading-8"><strong>Cancellations</strong> made with less than 24 hours notice barring illness or extreme emergency will be charged full price for services booked.</li>
                <li className="pb-4 leading-8"><strong>No-shows</strong> will be charged full price for services booked.</li>
                <li className="pb-4 leading-8"><strong>Late arrivals</strong> may be required to reschedule or downgrade to a shorter service and will be charged full price for services booked.</li>
                <li className="pb-4 leading-8 italic">Please understand when you change your appointment with less than 24 hours notice that time has been set aside specifically for you. I cannot typically fill this time and must charge to remain a successful business.</li>
            </ul>
            <div className="flex flex-col items-center pt-10">
                <p className="px-10 pb-6 leading-8 text-center">I appreciate YOU and your support of this little one woman business greatly!</p>
                <p className="px-10 pb-6 leading-8 text-center">Warmly, Genevieve of Sugar Peep</p>
            </div>
        </div>
    )
}
