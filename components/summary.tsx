"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import Marquee from "./marquee";
gsap.registerPlugin(ScrollTrigger);

const marqueeItems = ["Innovation", "Precision", "Trust", "Collaboration", "Excellence"];

const Summary = () => {
  useGSAP(() => {
    gsap.to("#title-service-2", {
      xPercent: -20,
      scrollTrigger: {
        trigger: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 60,
      scrollTrigger: {
        trigger: "#title-service-3",
        scrub: true,
      },
    });
  });

  return (
    <>
      <section className="mt-20 mb-42 overflow-hidden font-light leading-snug text-center contact-text-responsive">
        <div id="title-service-2" className="flex items-center justify-center gap-3 translate-x-16">
          <p className="font-normal">Development</p>
          <div className="w-32 h-1 bg-gold" />
          <p className="italic">Backend</p>
        </div>
        <div
          id="title-service-3"
          className="flex items-center justify-center gap-3 -translate-x-48">
          <p>API</p>
          <div className="w-32 h-1 bg-gold" />
          <p className="italic">Frontend</p>
          <div className="w-32 h-1 bg-gold" />
          <p>Scalability</p>
        </div>
      </section>

      <Marquee
        items={marqueeItems}
        className="bg-black text-white"
        reverse={true}
        iconClassName="text-gold"
      />
    </>
  );
};

export default Summary;
