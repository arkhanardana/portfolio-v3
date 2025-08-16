'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedHeaderSection from './ui/animated-header-section';

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (imageRef.current) {
      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 50,
        rotate: -10
      });

      gsap.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        rotation: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.5
      });
    }
  }, []);

  return (
    <section className='flex flex-col justify-end min-h-screen pt-10'>
      <div className="flex flex-col items-center px-10 md:px-10">
        <div ref={imageRef} className="h-full w-full flex justify-center">
          <Image
            src="/me.webp"
            alt="Arkhan Ardana"
            width={300}
            height={300}
            className="rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
            priority
          />
        </div>
      </div>
      <AnimatedHeaderSection
        subTitle={`I'm a Fullstack Developer`}
        title={"Arkhan Ardana"}
        text={`Turning ideas into powerful digital products 
              through code and modern design.`}
        textColor={"text-black"}
      />
    </section>
  )
}

export default Hero