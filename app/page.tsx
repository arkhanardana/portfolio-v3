"use client"

import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Summary from "@/components/summary";
import { Cursor } from "@/components/ui/cursor";
import Progress from "@/components/ui/progress";
import Works from "@/components/works";
import Lenis from "lenis";
import ReactLenis from "lenis/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)

      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <Progress>
      <ReactLenis root className='tracking-wider'>
        <Cursor />
        <Navbar />
        <Hero />
        <Summary />
        <About />
        <Works />
        <Contact />
        <Footer />
      </ReactLenis>
    </Progress>
  );
}
