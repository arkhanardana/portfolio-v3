'use client'
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link as ScrollLink } from 'react-scroll';
import { socials } from "@/data";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLDivElement | null)[]>([]);
  const topLineRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const bottomLineRef = useRef<HTMLDivElement>(null);

  const tl = useRef<gsap.core.Timeline>(null);
  const iconTl = useRef<gsap.core.Timeline>(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 })
    gsap.set([linksRef.current, contactRef.current], { autoAlpha: 0, x: -20 })

    tl.current = gsap.timeline({ paused: true })
      .to(navRef.current, { xPercent: 0, duration: 1, ease: "power3.inOut", })
      .to(linksRef.current, { autoAlpha: 1, x: 0, stagger: 0.1, duration: 1, ease: "power2.inOut" }, "<")
      .to(contactRef.current, { autoAlpha: 1, x: 0, duration: 0.5, ease: "power2.out" }, "<+0.2")

    iconTl.current = gsap.timeline({ paused: true })
      .to(topLineRef.current, { rotate: 45, y: 3.3, duration: 0.3, ease: "power2.inOut", })
      .to(bottomLineRef.current, { rotate: -45, y: -3.3, duration: 0.3, ease: "power2.inOut", }, "<")
  }, [])

  const toggleMenu = () => {
    if (isOpen) {
      tl.current?.reverse()
      iconTl.current?.reverse()
    } else {
      tl.current?.play()
      iconTl.current?.play()
    }
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        const menuButton = document.querySelector('.menu-button');
        if (menuButton && !menuButton.contains(event.target as Node)) {
          if (isOpen) {
            tl.current?.reverse()
            iconTl.current?.reverse()
            setIsOpen(false)
          }
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <nav ref={navRef} className='fixed z-50 flex flex-col justify-between w-full h-full px-10 capita bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2'>
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
          {["home", "about", "work", "contact"].map((section, index) => (
            <div key={index} ref={(el) => { linksRef.current[index] = el }}>
              <ScrollLink className='transition-all duration-300 cursor-pointer hover:text-white' to={section} smooth offset={0} duration={2000}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            </div>
          ))}
        </div>
        <div ref={contactRef} className='flex flex-col flex-wrap justify-between gap-8 md:flex-row'>
          <div className='font-light'>
            <p className='tracking-wider text-white/50'>E-mail</p>
            <p className='text-xl tracking-widest lowercase text-pretty'>
              arkhanardanaok123@gmail.com
            </p>
          </div>
          <div className='font-light'>
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className='flex flex-col flex-wrap md:flex-row gap-x-2'>
              {socials.map((social, index) => (
                <Link key={index} href={social.href} target='_blank' className='text-sm leading-loose tracking-widest uppercase transition-colors duration-300 hover:text-white'>
                  {`{ ${social.name} }`}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div className='menu-button fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-4 lg:right-10'
        onClick={toggleMenu}>
        <span ref={topLineRef} className='block w-8 h-0.5 bg-white rounded-full origin-center'></span>
        <span ref={bottomLineRef} className='block w-8 h-0.5 bg-white rounded-full origin-center'></span>
      </div >
    </>
  );
};

export default Navbar;
