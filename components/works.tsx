'use client'
import { projects } from '@/data';
import { ArrowUpRight } from 'lucide-react';
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import AnimatedHeaderSection from './ui/animated-header-section';
import Marquee from './marquee';

const text = `A showcase of projects built 
              with dedication to drive meaningful results.`;
const marqueeItems = ["HIRE ME", "LET'S COLLABORATE", "GET IN TOUCH", "HIRE ME", "LET'S COLLABORATE", "GET IN TOUCH"];

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const previewRef = useRef<HTMLDivElement>(null);
  const moveX = useRef<gsap.QuickToFunc | null>(null);
  const moveY = useRef<gsap.QuickToFunc | null>(null);
  const mouse = useRef<{ x: number, y: number }>({ x: 0, y: 0 });

  useGSAP(() => {

    moveX.current = gsap.quickTo(previewRef.current, 'x', {
      duration: 1.5,
      ease: 'power3.out',
    })
    moveY.current = gsap.quickTo(previewRef.current, 'y', {
      duration: 2,
      ease: 'power3.out',
    })

    gsap.from('#project', {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: 'back.out',
      scrollTrigger: {
        trigger: '#project',
      },
    })
  })


  const handleMouseEnter = (index: number) => {
    if (window.innerWidth < 768) return
    setCurrentIndex(index);


    const el = overlayRefs.current[index];
    if (!el) return

    gsap.killTweensOf(el);
    gsap.fromTo(el, { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      duration: 0.15,
      ease: 'power2.out',
    })

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'power2.inOut',
    })
  }
  const handleMouseLeave = () => {
    if (window.innerWidth < 768) return
    setCurrentIndex(null);

    gsap.to(overlayRefs.current, {
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
      duration: 0.2,
      ease: 'power2.in',
    })

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: 'power2.inOut',
    })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current?.(mouse.current.x);
    moveY.current?.(mouse.current.y);
  }

  return (
    <>
      <section id="work" className="flex flex-col min-h-screen lg:mt-40 mt-10">
        <AnimatedHeaderSection
          subTitle={"Code meet passion."}
          title={"<Works />"}
          text={text}
          textColor={"text-black"}
          withScrollTrigger={true}
        />
        <div className='relative flex flex-col font-light' onMouseMove={handleMouseMove}>
          {projects.map((project, index: number) => (
            <div
              id='project'
              key={project.id}
              className='relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0'
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}>
              {/* overlay */}
              <div
                ref={(el) => { overlayRefs.current[index] = el }}
                className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
              />
              <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
                <h2 className='lg:text-[32px] text-[26px] leading-none'>{project.name}</h2>
                <ArrowUpRight className='md:size-6 size-5' />
              </div>
              <div className="w-full h-0.5 bg-black/80" />
              <div className='flex px-10 text-xs leading-loose uppercase translate-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12 flex-wrap md:flex-nowrap'>
                {project.frameworks.map((framework) => (
                  <p key={framework.id} className='text-black transition-colors duration-500 md:group-hover:text-white'>{framework.name}</p>
                ))}
              </div>
              {/* mobile preview image */}
              <div className='relative flex items-center justify-center px-10 md:hidden h-[400px]'>
                <Image src={project.bgImage} alt='bg-image' fill sizes='100vw' priority={false} className='object-cover rounded-md blur-sm' />
                <Image src={project.image} alt='image' width={1024} height={1024} className='absolute bg-center px-14 rounded-xl' />
              </div>
            </div>
          ))}
          {/* desktop Flaoting preview image */}
          <div ref={previewRef} className='fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[500px] md:block hidden opacity-0'>
            {currentIndex !== null && <Image src={projects[currentIndex].image} alt='preview' width={500} height={500} className='object-cover' />}
          </div>
        </div>
      </section>
    </>

  )
}

export default Works