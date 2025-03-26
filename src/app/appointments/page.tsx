import React from "react";
import { Metadata } from "next";
import { Email } from "@/components/structure";
import SquareAppointments from "@/components/square-appointments";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Appointments - Sugar Peeps",
};

export default function Page() {
  return (
    <main className="bg-white" id="scheduling">
      <p>
        Loyalty maintenance pricing discount of 15% will be applied at the time
        of your service when your last sugar was received at Sugar Peeps 6 weeks
        or less prior to your upkeep appointment. Huzzah for staying sweet!
      </p>
      <p>
        If you have any questions or need help with scheduling, please{" "}
        <Email>contact us</Email>.
      </p>
      <p>
        <Link
          href="https://squareup.com/gift/15ZMSAP6R3TMB/order"
          target="_blank"
        >
          Purchase a gift card
        </Link>
      </p>
      <SquareAppointments />
    </main>
  );
}
