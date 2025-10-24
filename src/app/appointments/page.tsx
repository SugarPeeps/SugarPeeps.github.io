import React from "react";
import { Metadata } from "next";
import { Email } from "@/components/structure";
import Link from "next/link";
import { GlossGeniusSchedulingUrl } from "@/constants";

export const metadata: Metadata = {
	title: 'Appointments - Sugar Peeps',
};

export default function Page() {
	return (
		<main className="bg-white" id="scheduling">
			<p>
				We have a new and improved way to schedule your appointments! Use the "Book Now" button above or{" "}
				<Link href={GlossGeniusSchedulingUrl} target="_blank">click here</Link> to view services and schedule your next appointment.
			</p>
			<p>
				If you have any questions or need help with scheduling, please{" "}
				<Email>contact us</Email>.
			</p>
		</main>
	);
}
