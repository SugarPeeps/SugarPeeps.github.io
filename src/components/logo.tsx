import React from "react";
import Image from "next/image";

export default function Logo() {
    return (
        <a href="/">
            <Image src="/images/pinup.png" alt="Sugar Peeps logo" width={240} height={126} priority={true} />
        </a>
    )
}
