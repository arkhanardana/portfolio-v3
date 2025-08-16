"use client"

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Summary from "@/components/summary";
import { Cursor } from "@/components/ui/cursor";
import Progress from "@/components/ui/progress";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    // <Progress>
    <ReactLenis root className='tracking-wider'>
      <Cursor />
      <Navbar />
      <Hero />
      <Summary />
    </ReactLenis>
    // </Progress>
  );
}
