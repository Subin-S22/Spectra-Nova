'use client'

import { Context } from '@/lib/context/Provider';
import Link from 'next/link'
import Image from 'next/image'
import { useContext, useState } from 'react';

const navigationPages = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contactus' }
];

export default function Navbar() {
  const store = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);

  return <div className="flex justify-between p-4 sm:p-8 sticky top-0 bg-black z-10">
    <div className='flex justify-center items-center gap-4'>
      <div className="md:hidden rotate-90 text-text-color" onClick={() => setIsOpen(!isOpen)}>|||</div>
      <Image src={'/images/Rectangle.png'} width={60} height={60} alt="Brain" />
      <div>
        <Link href={'/'} className="text-2xl">
          <Image src={'/images/Spectra.svg'} width={130} height={120} alt="Spectro Nova" />
        </Link>
        <div className="text-[8px] text-right text-text-color">SOFTWARE TECHNOLOGIES</div>
      </div>
    </div>

    {/* mobile */}
    <div className={`transition duration-500 ease-in-out block md:hidden w-[60%] backdrop-blur  absolute bg-black left-0 top-0 shadow-md min-h-screen z-10 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="w-full text-right p-4 text-text-color text-semibold text-base" onClick={() => setIsOpen(!isOpen)}>x</div>
      <ul className="flex flex-col gap-8 ">
        {navigationPages.map((page, index) => {
          return <li
            key={`${page.name}-${index}`}
            onClick={() => { store?.actions.setCurrentPage(page.href); setIsOpen(false) }}
            className="p-2 px-4 border border-black border-b-white w-full text-text-color"
          >
            <Link
              href={page.href}
            >
              {page.name}
            </Link>
          </li>
        })}
      </ul>
    </div>

    {/*Above tablet*/}
    <div className="hidden md:block">
      <ul className="flex justify-between gap-2 lg:gap-4 pr-10">
        {navigationPages.map((page, index) => {
          return <li
            key={`${page.name}-${index}`}
            onClick={() => { store?.actions.setCurrentPage(page.href) }}>
            <Link className={`border p-2 px-4 rounded-3xl text-text-color
${page.href === store?.state.currentPage ? 'border-border-color bg-button-bg' : 'border-black'}`}
              href={page.href}
            >
              {page.name}
            </Link>
          </li>
        })}
      </ul>
    </div>
  </div>
}
