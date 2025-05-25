import React from "react";
import { Metadata } from "next";
import { Slide, Carousel } from "@/components/carousel";
import ParkingMapWidget from "@/components/parking-map-widget";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sugar Peeps – Be sweet to your skin!",
};

const slides: Slide[] = [
  { src: "/images/carousel/1.jpg", alt: "" },
  { src: "/images/carousel/2.jpg", alt: "" },
  { src: "/images/carousel/3.jpg", alt: "" },
  { src: "/images/carousel/4.png", alt: "" },
  { src: "/images/carousel/5.jpg", alt: "" },
];

export default function Page() {
  const showAnnouncement = true;

  return (
    <main>
      {showAnnouncement ?
        <React.Fragment>
          <Image src="/images/sp-els-announcement.png" alt="Sugar Peeps and Electric Lash Studio logos together" width={1080} height={1350} className="max-w-md w-full mx-auto" />
          <div className="bg-gray-100 p-4 rounded-lg mt-12">
            <p className="font-bold text-xl mt-4 mb-8">News fo' yous!</p>
            <p>Sugar Peeps has moved to Ballard Ave! AND, 🍒 on top SP will be teaming up with the fantabulous Adela of <Link href="https://www.electriclashstudio.biz/">Electric Lash Studio!</Link> ⚡️</p>
            <p>Our new digs are located in the Valhalla building smack in the schwanky heart of Ballard at 5306 Ballard Ave NW #211 💖</p>
            <p>Sugaring, lashes, and spray tans, oh my 😍…welcome to your sassy new one stop sweet shoppe! ✨</p>
            <p>Treat yo’self and come see us!</p>
            <ParkingMapWidget className="px-10" />
          </div>
        </React.Fragment> :
        <React.Fragment>
          <Carousel slides={slides} />
          <h2>Hello, hellooo!</h2>
          <p>We are so glad you&apos;re here.</p>
          <p>
            Sugar Peeps is a space that welcomes and celebrates{" "}
            <strong>EVERY BODY</strong>. Genevieve believes strongly that sugaring
            and all personal services should be affirming and positive experiences.
            She strives to be a master of her chosen esthetic specialties, and
            offers a wealth of information regarding her thoughtfully curated
            offerings. From the beginning it has been Sugar Peeps mission to provide
            ethical, quality, caring services with a focus on natural, eco-friendly
            products. When you become a Sugar Peeps&apos; peep rest assured you will
            be in skilled, caring, attentive hands.
          </p>
          <p>
            Scheduling is easy! Simply click the Book Now button above and select
            your desired sugar services. You&apos;ll be supporting a small woman
            owned business, our local economy, AND choosing a natural hair removal
            method that is sweet to the environment and your skin. Bonus: Dottie
            Grace, Genevieve&apos;s gorgeous little shop pup familiar happily comes
            to work every day as well and is always available for emotional puppy
            support. <em>Welcome to the sweet side of self care!</em>
          </p>
        </React.Fragment>
      }
    </main>
  );
}
