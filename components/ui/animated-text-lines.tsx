'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  text: string;
  className: string;
}

const AnimatedTextLines = ({ text, className }: Props) => {
  const lines = text.split("\n").filter((line) => line.trim() !== "");
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
    if (lineRefs.current.length > 0) {
      gsap.from(lineRefs.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'back.out',
        scrollTrigger: {
          trigger: containerRef.current
        }
      })
    }
  })

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span ref={(el) => { lineRefs.current[index] = el }} key={index} className='block leading-relaxed tracking-tighter text-pretty'>
          {line}
        </span>
      ))}
    </div>
  )
}

export default AnimatedTextLines