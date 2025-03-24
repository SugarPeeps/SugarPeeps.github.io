import React from "react";
import { Metadata } from "next";
import { Link, Email } from "@/components/structure";
import SquareAppointments from "@/components/square-appointments";

export const metadata: Metadata = {
  title: "Appointments - Sugar Peeps",
};

export default function Page() {
  return (
    <main className="bg-white">
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
          url="https://squareup.com/gift/15ZMSAP6R3TMB/order"
          newWindow={true}
        >
          Purchase a gift card
        </Link>
      </p>
      <SquareAppointments />
    </main>
  );
}
