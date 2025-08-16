'use client'
import React, { useRef } from 'react'
import { twMerge } from 'tailwind-merge';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedTextLines from './animated-text-lines';

type Props = {
  subTitle: string;
  title: string;
  text: string;
  textColor: string;
  withScrollTrigger?: boolean;
};

const AnimatedHeaderSection = ({ subTitle, title, text, textColor, withScrollTrigger = false }: Props) => {
  const contextRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const shouldSplitTitle = title.includes(" ");
  const titleParts = shouldSplitTitle ? title.split(" ") : [title];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger ? { trigger: contextRef.current } : undefined
    })

    tl.from(contextRef.current, {
      y: '50vh',
      duration: 1,
      ease: 'circ.out'
    })
    tl.from(headerRef.current, {
      opacity: 0,
      y: '200',
      duration: 1,
      ease: 'circ.out'
    }, '<+0.2')
  }, [])

  return (
    <div ref={contextRef}>
      <div>
        <div ref={headerRef} className='flex flex-col justify-center pt-4 gap-y-10'>
          <p className={twMerge('text-2xl font-normal tracking-tighter lg:ml-20 ml-12', textColor)}>{subTitle}</p>
          <div className='px-10'>
            <h1 className={twMerge('flex flex-col gap-y-8 banner-text-responsive sm:gap-16 md:block tracking-tighter lg:px-4', textColor)}>
              {titleParts.map((part, index) => (
                <span key={index}>{part} </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
      <div className={twMerge('relative px-10', textColor)}>
        <div className='absolute inset-x-0 border-t-2 top-8'></div>
        <div className='py-12 sm:py-16 text-end'>
          <AnimatedTextLines
            text={text}
            className={twMerge('font-light uppercase value-text-responsive', textColor)}
          />
        </div>
      </div>
    </div>
  )
}

export default AnimatedHeaderSection