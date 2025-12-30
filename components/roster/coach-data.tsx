import React from 'react'
import { Coach } from '@/db/t1'
import Cards from '../ui/Cards';
import {motion} from 'framer-motion'
import Image from 'next/image';

type CoachDataProps = {
    selectedYear:number;
    coach: Coach[];
}

const CoachData = ({selectedYear,coach}: CoachDataProps) => {
    console.log(coach, selectedYear);
  return (
    <div className='mt-8'>
        <h4 className='text-4xl md:text-5xl font-bold mb-8 text-center text-white'>Coach</h4>
        <motion.div 
            key={selectedYear}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.3}}
        >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Cards 
                data={coach} 
                containerClassName="w-full" 
                renderItem={(c, index) => (
                    <motion.div
                        key={index} 
                        initial={{opacity:0, x:-30}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:0.5, delay:index*0.2}}  
                        className='bg-gradient-to-br from-zinc-900 to-black mb-6 w-[300px] rounded-xl p-5 text-center cursor-pointer glow-electric glow-electric-hover transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e2012d] focus:ring-offset-2'              
                    >
                        <div className='relative w-full aspect-square mb-4 rounded-lg'>
                        <Image src={c.picture} alt={c.name} fill className='object-contain' />
                        </div>
                        <h4 className='text-white text-3xl font-bold'>{c.name}</h4>
                        <p className='text-gray-300 text-base'>{c.realName}</p>
                        <p className='text-gray-400 text-sm mt-1'>{new Date().getFullYear() - c.birthYear} years old</p>
                        <p className='text-[#e2012d] text-xl font-semibold mt-2'>{c.role}</p>
                    </motion.div>
            )} />
        </div>
        </motion.div>
    </div>
  )
}

export default CoachData