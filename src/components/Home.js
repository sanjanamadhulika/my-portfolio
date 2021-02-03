import React from "react";
//import image from "../background1.jpg"
import image from "../background2.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} alt="Keyboard image" className="absolute object-cover w-full h-full opacity-70" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-red-400 font-bold cursive leading-none lg:leading-snug home-name">
                    Hello. I'm Sanjana
                </h1>
            </section>
        </main>
    )
}