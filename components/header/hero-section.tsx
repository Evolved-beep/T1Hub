import React from 'react'
import Image from 'next/image'  
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
const HeroSection = () => {
  return (
    <section className='flex justify-center items-center h-[calc(100vh-57px)]'>
        <div className='space-y-6 flex flex-col justify-center items-center'>   
            <Image src="/assets/images/Logo.png" alt="Logo" width={120} height={120} />
            <h2 className='text-white font-bold text-4xl'>eSport of Excellency</h2>
        </div>
        <Link href="#about">
          <div className="inset-0 bg-gradient-to-tr from-[#e2012d]/20 via-[#171717]/40 to-[#131313]/60 pointer-events-none" />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-12 h-12 rounded-full border border-gray-600
              flex items-center justify-center cursor-pointer
              hover:border-[#e2012d] transition-colors
              animate-bounce-chevron">
              <ChevronDown color="#fff" size={20} />
          </div>
        </div>
        </Link>
    </section>
  )
}

export default HeroSection