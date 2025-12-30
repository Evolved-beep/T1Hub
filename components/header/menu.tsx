"use client"
import { TextAlignJustify, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItem = [
        {label: "Home", href:'/'},
        {label:"Roster", href:'/roster'},
        {label:"Partnership", href:'/partner'},
    ]
  return (
    <div>
        <nav className='md:hidden sticky'>
            <div className='flex items-center justify-between p-4 border-b border-gray-200'>
                <Image src="/assets/images/Logo.png" alt="Logo" width={40} height={40} />
                <div className='space-x-4'>
                    <TextAlignJustify color="#e2012d" onClick={() => setIsOpen(!isOpen)} />
                </div>
            </div>
        </nav>
       {isOpen && (
  <div className="
    fixed inset-0 z-50 flex flex-col
    bg-black/90
  ">
    <div className="absolute inset-0 bg-gradient-to-tr from-[#e2012d]/20 via-[#171717]/40 to-[#131313]/60 pointer-events-none" />

    <div className="relative flex flex-col h-full">
      <div className="flex justify-end p-4">
        <X color="#e2012d" onClick={() => setIsOpen(false)} />
      </div>
      <nav className="flex-1 flex flex-col items-center justify-center space-y-8">
        {menuItem.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className={`
              text-[#e2012d] text-3xl font-light
              opacity-0 translate-y-4 animate-fadeIn
              animation-delay-${i * 100}
            `}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  </div>
)}
  <nav className='hidden md:flex'>
        <div className='flex items-center justify-between p-4 border-b border-gray-200 w-full'>
            <Image src="/assets/images/Logo.png" alt="Logo" width={80} height={80} />
            <div className='space-x-8 flex'>
                {menuItem.map((link, i) => (
                    <Link key={i} href={link.href} className='text-gray-300 hover:text-[#e2012d] transition-colors'>{link.label}</Link>
                ))}
            </div>
        </div>
  </nav>
    </div>
  )
}   
export default Menu