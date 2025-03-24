import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies - Sugar Peeps",
};

export default function Page() {
  return (
    <main>
      <h2>Sugar Peeps bookings are by appointment only</h2>
      <p>Booking policies:</p>
      <ul>
        <li>
          <strong>Cancellations</strong> made with less than 24 hours notice
          barring illness or extreme emergency will be charged full price for
          services booked.
        </li>
        <li>
          <strong>No-shows</strong> will be charged full price for services
          booked.
        </li>
        <li>
          <strong>Late arrivals</strong> may be required to reschedule or
          downgrade to a shorter service and will be charged full price for
          services booked.
        </li>
        <li>
          Please understand when you change your appointment with less than 24
          hours notice that time has been set aside specifically for you. I
          cannot typically fill this time and must charge to remain a successful
          business.
        </li>
      </ul>
      <p className="text-center pt-6">
        I appreciate YOU and your support of this little one woman business
        greatly!
      </p>
      <p className="text-center">Warmly, Genevieve of Sugar Peep</p>
    </main>
  );
}
