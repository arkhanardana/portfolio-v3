'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Lightformer } from '@react-three/drei';
import { Float } from '@react-three/drei';
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
    <section className='flex flex-col justify-end min-h-screen'>
      <div className="flex flex-col items-start px-10 md:px-20">
        <div ref={imageRef} className="h-full w-full">
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
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  )
}

export default Hero