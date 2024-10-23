"use client";

import React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

export type Slide = {
    src: string;
    alt: string;
}

export type CarouselProps = {
    slides: Slide[];
}

export function Carousel({ slides }: CarouselProps) {
    const [index, setIndex] = useState(0)

    const next = () => {
        setIndex((index + 1) % 5)
    }

    const prev = () => {
        setIndex((index + 4) % 5)
    }

    return (
        <div className="relative aspect-video overflow-hidden">
            <div>
                {slides && slides.map((slide, i) => (
                    <img key={i} src={slide.src} alt={slide.alt} 
                        className={`absolute h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${i == index ? "opacity-100" : "opacity-0"}`}/>
                ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white" onClick={prev}>
                    <ChevronLeft size={40}/>
                </button>
                <button className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white" onClick={next}>
                    <ChevronRight size={40}/>
                </button>
            </div>

            <div className="absolute inset-x-0 bottom-0 text-center">
                {slides && slides.map((_, i) => (
                    <button key={i} 
                        className={`w-2 h-2 mx-1 rounded-full bg-white/80 ${i == index ? "bg-white" : "bg-gray-800"}`} 
                        onClick={() => setIndex(i)}/>
                ))}
            </div>
        </div>
    )
}
