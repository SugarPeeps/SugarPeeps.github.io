import React from "react";
import Image from "next/image";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Sugar Peeps – Be sweet to your skin!",
}

export default function Page() {
    return (
        <div>
        <Image src="/images/mspeeps2.jpg" alt="Ms Peeps" width={500} height={500} />
        <h2 className="text-xl">Hello, hellooo!</h2>
        <p>We are so glad you're here.</p>
        <p>Sugar Peeps is a space that welcomes and celebrates <strong>EVERY BODY</strong>. Genevieve believes strongly that sugaring and all personal services should be affirming and positive experiences. She strives to be a master of her chosen esthetic specialties, and offers a wealth of information regarding her thoughtfully curated offerings. From the beginning it has been Sugar Peeps mission to provide ethical, quality, caring services with a focus on natural, eco-friendly products. When you become a Sugar Peeps' peep rest assured you will be in skilled, caring, attentive hands.</p>
        <p>Scheduling is easy! Simply click the Book Now button above and select your desired sugar services. You'll be supporting a small woman owned business, our local economy, AND choosing a natural hair removal method that is sweet to the environment and your skin. Bonus: Dottie Grace, Genevieve's gorgeous little shop pup familiar happily comes to work every day as well and is always available for emotional puppy support. <em>Welcome to the sweet side of self care!</em></p>
        {/* TODO: instagram embed */}
        </div>
    )
}
