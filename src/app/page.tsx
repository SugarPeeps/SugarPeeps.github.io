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
  const showAnnouncement = false;

  return (
    <main>
      {showAnnouncement ?
        <React.Fragment>
          <Image src="/images/sp-els-announcement.png" alt="Sugar Peeps and Electric Lash Studio logos together" width={1080} height={1350} className="max-w-md w-full mx-auto" />
          <div className="bg-gray-100 p-4 rounded-lg mt-12">
            <p className="font-bold text-xl mt-4 mb-8">Well 👋 You!</p>
            <p>Guess what?! Sugar Peeps has moved to Ballard Ave NW ...AND, 🍒 on top has teamed up with the fantabulous <Link href="https://www.electriclashstudio.biz/">Electric Lash Studio</Link>. ⚡️ We're excited to announce that BOTH Sugar Peeps and Electric Lash Studio service menus are now priced as listed. NO additional gratuity is necessary, cuz looove. 😍 </p>
            <p>Our new digs are located inside the Valhalla building smack in the schwanky heart of Ballard at 5306 Ballard Ave NW #211. The entry door with the call box is located immediately to the right of Anchored Ship Coffee. Sugaring, lashes, and spray tans, oh my! Come see us! 💖</p>
            <p>Welcome to your sassy new one stop sweet shoppe! ✨</p>
            <ParkingMapWidget className="px-10" />
          </div>
        </React.Fragment> :
        <React.Fragment>
          <Carousel slides={slides} />
          <h2>Hello, hellooo! So glad you&apos;re here!</h2>
          <p>
            You&apos;ve found Sugar Peeps... a space that welcomes and celebrates{" "}
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
            your desired sugar, luxe skin treatment, and/or custom airbrush spray tan services. You&apos;ll be supporting a small woman
            owned business, our local economy, AND choosing sustainable, eco-conscious, skin friendly services that are sweet to the environment and your skin. Bonus: Dottie
            Grace, Genevieve&apos;s gorgeous little shop pup comes
            to work every day as well. She's a shy mamacita who will likely clickedy clack around and give you the infamous dachshund side eye from her fluffy princess bed. However, occasionally she does decide to pass out a tiny nose boop or lick to an outstretched hand. Come around often enough and she's even been known to wiggle on over and coyly request scritches. Jussayin... 
            </p>
            <p>
              <em>Welcome to the sweet side of self care!</em>
            </p>
        </React.Fragment>
      }
    </main>
  );
}
