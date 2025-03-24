import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/pinup.png"
        alt="Sugar Peeps logo"
        width={240}
        height={126}
        priority={true}
      />
    </Link>
  );
}
