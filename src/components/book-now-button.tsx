import React from 'react';
import Link from 'next/link';
import { GlossGeniusSchedulingUrl } from '@/constants';

export default function BookNowButton(props: React.ComponentProps<'div'>) {
	let { className, ...otherProps } = props;

	className = `py-2 px-6 bg-red ${className ?? ''}`;

	return(
      <div className={className} {...otherProps}>
        <Link className="text-white no-underline hover:text-black" href={ GlossGeniusSchedulingUrl } target="_blank">
          Book Now
        </Link>
      </div>
	);
};

