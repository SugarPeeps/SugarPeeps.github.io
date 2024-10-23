"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

export type Slide = {
    src: string;
    alt: string;
}

export type CarouselProps = {
    slides: Slide[];
    intervalMs?: number;
}

export function Carousel({ slides, intervalMs = 5000 }: CarouselProps) {
    const [index, setIndex] = useState(0)

    const next = () => {
        setIndex((index + 1) % 5)
    }

    const prev = () => {
        setIndex((index + 4) % 5)
    }

    useEffect(() => {
        const interval = setInterval(next, intervalMs)
        return () => clearInterval(interval)
    })

    return (
        <div className="relative aspect-video overflow-hidden">
            <div>
                {slides && slides.map((slide, i) => (
                    <img key={i} src={slide.src} alt={slide.alt} 
                        className={`absolute h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${i == index ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-500`}/>
                ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button className="opacity-30 text-blue-dark hover:text-red hover:opacity-50" onClick={prev}>
                    <ChevronLeft size={40}/>
                </button>
                <button className="opacity-30 text-blue-dark hover:text-red hover:opacity-50" onClick={next}>
                    <ChevronRight size={40}/>
                </button>
            </div>

            <div className="absolute inset-x-0 bottom-0 text-center">
                {slides && slides.map((_, i) => (
                    <button key={i} 
                        className={`w-2 h-2 mx-1 rounded-full ${i == index ? "bg-red bg-opacity-50" : "bg-blue-dark bg-opacity-30"}`} 
                        onClick={() => setIndex(i)}/>
                ))}
            </div>
        </div>
    )
}
