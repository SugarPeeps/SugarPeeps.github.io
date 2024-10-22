import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sugar - Sugar Peeps",
}

export default function Page() {
    return (
        <div className="flex flex-col xl:flex-row container mx-auto">
            <div className="flex-none">
                <Image src="/images/mspeeps.jpg" alt="Ms Peeps" width={400} height={400} className="mx-auto pb-10"/>
                <Image src="/images/sugaring.jpg" alt="Sugaring" width={400} height={400} className="mx-auto pb-20"/>
            </div>
            <div>
                <h2 className="text-xl px-10 pb-8">So, sugaring... what IS it?</h2>
                <p className="px-10 pb-6 leading-8">Sugaring, my friends, is a sweet, gentle, natural form of hair removal. The ancient Egyptians were the OG sugar slingers and dang!… they were onto something. Sugaring paste consists simply of sugar, water, and lemon juice. It is cooked into various thicknesses of carmel-like consistency. In the hands of a skilled sugarist a beautiful gooey ball of sugar is applied to the skin, either at room temperature or *slightly warmed, roughly to body temperature. It is molded onto the skin opposite the direction of hair growth. The sugar then “melts” with the body temperature of the client and sugarist combined and seeps down into the hair follicle. With some slight of hand and a swish and a flick, VIOLA…. hair is cleanly removed by the root in the direction of the hair growth. I’m telling ya. It’s magic.</p>

                <h2 className="text-xl px-10 pt-10 pb-8">Sugar vs. wax... why?</h2>
                <p className="px-10 pb-6 leading-8">Sugar paste is completely natural, using only sugar, water, and lemon juice. It washes away completely, leaving absolutely no residue, with water alone. No chemicals, no muss, no fuss.</p>
                <p className="px-10 pb-6 leading-8">Sugar cannot adhere to moisture. This means it cannot cling to live skin cells. It will only gently exfoliate dead skin cells, leaving healthy skin intact. Waxing, even with the gentlest of waxes, will always remove a layer of live skin cells. Therefore with waxing your skin will always experience a certain degree of irritation. This is why many say sugaring is less painful than waxing. Sugar is far and away kinder to your skin than waxing and your healing time post-sugar will be greatly reduced versus healing post-wax.</p>
                <p className="px-10 pb-6 leading-8"><em>Let me note here:</em> You are removing the hair by the root. There will obviously be a “feel” to that. However, some ibuprofen, being well hydrated, and avoiding caffeine the day of your appointment can make a world of difference, AND… I <strong>promise</strong> you this feeling decreases with consistent sugaring every 4-6 weeks. Even your second sugar 4 weeks later will feel much easier than your first!</p>
                <p className="px-10 pb-6 leading-8">Sugar is never hot when applied, only warm. There is never a risk of getting burned with sugar like you can with wax. Sugar works solely with the body temperature of the client and the sugarist.</p>
                <p className="px-10 pb-6 leading-8">Sugar is naturally antibacterial. It is completely sanitary. A clean glove enters the sugar pot to grab your gorgeous ball of sugar and never enters the pot again. No double dipping or bacteria breeding here! When a ball of sugar has collected enough hair and dead skin cells your sugarist will invert her glove, toss that sugar away, don a new glove, and grab a fresh ball.</p>
                <p className="px-10 pb-6 leading-8">Sugar is eco friendly! There are no paper or fabric wax strips, no going back to the pot to apply line after line of wax, no chemical removers, application sticks, etc. Waste is greatly reduced and the sugar itself naturally and easily decomposes.</p>
                <p className="px-10 pb-6 leading-8">Because sugar is applied in the OPPOSITE direction of hair growth and removed IN the direction hair naturally grows it is much less likely to cause breakage. This means = less ingrowns. Can I get a heck yah?! By melting into the follicle and supporting the hair, rather than “shrink wrapping” the hair on the skin surface, sugar will consistently remove the full hair and root. Growth cycles are staggered and there will be hairs that are too short for removal. The sugar will simply leave them to grow. Never fear! These baby hairs are barely noticeable. With regular sugaring growth cycles will line up more frequently and smoother results will follow.</p>

                <h2 className="text-xl px-10 pt-10 pb-8">Are there times to avoid sugaring?</h2>
                <p className="px-10 pb-4 leading-8">Yes!</p>
                <ul className="ml-4 px-10 list-disc">
                    <li className="pb-4 leading-8">If you have an infectious or contagious disease.</li>
                    <li className="pb-4 leading-8">If you taking any type of steroid such as prednisone.</li>
                    <li className="pb-4 leading-8">If you are currently or have taken Accutane in the past 6 months or if you are currently using Retinols such as Retin A, Renova, Differin, Tretinoin, etc….. we cannot sugar the area in which you are using such medications but might be able to sugar other areas.</li>
                </ul>

                <h2 className="text-xl px-10 pt-10 pb-8">Day of Sugaring tips...</h2>
                <ul className="ml-4 px-10 list-disc">
                    <li className="pb-4 leading-8">Arrive at your appointment squeaky clean - no lotions, oils, deodorant, perfumes, etc.</li>
                    <li className="pb-4 leading-8">Avoid tanning beds or excessive sunning prior to sugaring - no sunburns.</li>
                    <li className="pb-4 leading-8">Exfoliate and moisturize your skin up until appointment time, but let it rest 24hrs before.</li>
                    <li className="pb-4 leading-8">If you are concerned about the “ouch factor” take Tylenol or ibuprofen 30 minutes prior to your appointment. Avoid caffeine and hydrate well that day.</li>
                </ul>

                <h2 className="text-xl px-10 pt-10 pb-8">Tell me more about sugar maintenance?</h2>
                <p className="px-10 pb-6 leading-8">Every BODY is unique, however, a typical sugaring maintenance should happen every 4-6 weeks. It will vary depending on the area of the body, hair denseness, growth cycles, etc.  Ms. Peeps will go over what might be best for your individual needs.</p>
                <p className="px-10 pb-6 leading-8">BONUS: Sugar Peeps offers maintenance sugar pricing for services scheduled every 6 weeks or less!</p>

                <h2 className="text-xl px-10 pt-10 pb-8">Post sugaring care...</h2>
                <p className="px-10 pb-6 leading-8">Your hair has been removed by the follicle. This follicle remains open for a period of time. This means excessive friction, sweat, dirt, deodorant, lotions or oils can irritate the skin or cause breakouts. Please, <em>avoid physical activity of allllll ze varieties for at least 24 hours after a sugaring treatment</em>. No touching the area, no working out, no jogging around Greenlake, no swimming, no hot tub, no tanning… I know. I’m a real bummer. 😉 Showering is fine. Just be kind to your skin for a day.</p>
                <p className="px-10 pb-6 leading-8">After 48 hours… make gentle exfoliating and moisturizing a part of your daily/every other day routine. This is <strong>essential</strong> for avoiding ingrowns and keeping your skin soft and smooth. Those fine-tipped new hairs need conditioned skin to grow up and through! Sugar Peeps is packed with exfoliating mitts, powders, pads, serums, lotions and balms galore. They are all largely organic and incredibly effective. Put down the razor, don’t even bother with the chemical depilatory cream, and pick up the spa mitt and lotion.</p>
                <p className="px-10 pb-6 leading-8">If you feel itchy post sugar, please let me know! Hives, small histamine bumps, or itching can occur (occasionally hair removal by the root can create a histamine reaction similar to a small bite or sting). If this occurs during your appointment hydrocortisone can ease the sensation. At home an antihistamine such as Benadryl can be taken. OR, treat yo’self! Take a nice Epsom salt or oatmeal bath. It can help soothe the area and give you a bit of zen.</p>
            </div>
        </div>
    )
}
