"use client"

import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Summary from "@/components/summary";
import { Cursor } from "@/components/ui/cursor";
import Progress from "@/components/ui/progress";
import Works from "@/components/works";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    // <Progress>
    <ReactLenis root className='tracking-wider'>
      <Cursor />
      <Navbar />
      <Hero />
      <Summary />
      <About />
      <Works />
    </ReactLenis>
    // </Progress>
  );
}
