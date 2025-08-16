import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Lanyard from "@/components/ui/lanyard";

const Content = () => {
  return (
    <div className='bg-[#e5e5e0] py-8 px-12 h-full w-full flex flex-col justify-between'>
      <Section1 />
      <Section2 />
    </div>
  )
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  )
}

const Section2 = () => {
  return (
    <div className='flex justify-between items-end'>
      <h1 className='text-[9vw] leading-[0.8] mt-10 tracking-tighter'>Arkhan Ardana</h1>
      <p>© Copyright {new Date().getFullYear()}</p>
    </div>
  )
}

const Nav = () => {
  return (
    <div className='flex shrink-0 gap-20'>
      <div className='flex flex-col gap-2'>
        <h1 className='mb-2 capitalize text-black text-3xl font-semibold'>Navigation</h1>
        {["home", "about", "work", "contact"].map((section, index) => (
          <ScrollLink
            key={index}
            to={section}
            smooth={true}
            duration={2000}
            offset={0}
            className='transition-all duration-300 cursor-pointer hover:text-black/60 capitalize'
          >
            <p className='text-xl tracking-wider'>{section.charAt(0).toUpperCase() + section.slice(1)}</p>
          </ScrollLink>
        ))}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <div
      className='relative h-[700px] hidden lg:block'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className='relative h-[calc(100vh+700px)] -top-[100vh]'>
        <div className='h-[700px] sticky top-[calc(100vh-700px)]'>
          <Content />
        </div>
        <div className="absolute left-96 w-full h-fit hidden lg:block z-50">
          <Lanyard position={[0, 0, 16]} gravity={[0, -30, 0]} />
        </div>
      </div>
    </div>
  )
}
