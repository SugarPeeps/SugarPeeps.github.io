import React from 'react';
import { Metadata } from 'next';
import { Email } from '@/components/structure';
import SquareAppointments from '@/components/square-appointments';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Appointments - Sugar Peeps',
};

export default function Page() {
  return (
    <main className="bg-white" id="scheduling">
      <p>
        If you have any questions or need help with scheduling, please{' '}
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
