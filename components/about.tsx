'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useRef } from 'react'
import AnimatedHeaderSection from './ui/animated-header-section';
import AnimatedTextLines from './ui/animated-text-lines';


const text = `Passionate about clean architecture
              I build scalable, high-performance solutions
              from prototype to production`;

const aboutText = `Currently attending SMK Negeri 2 Yogyakarta as a 13th - grade student majoring in Sistem Informasi
                Jaringan dan Aplikasi (SIJA), which focuses on building, managing, and securing computer networks, as
                well as developing software applications. Proficient in frontend technologies such as HTML, CSS, React, Next.js, and Tailwind CSS for creating
                responsive user interfaces, and backend technologies like Node.js, Hono.js, Next.js server actions for building servers and
                APIs, with MySQL and PostgreSQL for database management. I am passionate about creating user-friendly and efficient web applications, and I always excited to
                learn and grow in my field.`;

const About = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.to('#about', {
      scale: 0.95,
      scrollTrigger: {
        trigger: '#about',
        start: 'bottom 80%',
        end: 'bottom 20%',
        scrub: true,
        markers: false,
      },
      ease: 'power1.inOut',
    })
    gsap.set(imgRef.current, { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' })
    gsap.to(imgRef.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 0.7,
      ease: 'power4.out',
      scrollTrigger: { trigger: imgRef.current }
    })
  })
  return (
    <section id='about' className='min-h-screen bg-[#e5e5e0] lg:mt-40 mt-10'>
      <AnimatedHeaderSection
        subTitle={"Code. Build. Impact."}
        title={"<About Me />"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className='flex flex-col items-center justify-between gap-16 px-10 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60'>
        <Image ref={imgRef} src={"/me.webp"} alt="man" width={500} height={500} className='w-md rounded-3xl grayscale hover:grayscale-0 transition-all duration-300' />
        <AnimatedTextLines text={aboutText} className='w-full text-black' />
      </div>
    </section>
  )
}

export default About