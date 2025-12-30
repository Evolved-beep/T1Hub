import React from 'react'
import { Player } from '@/db/t1'
import Cards from '../ui/Cards';
import {motion} from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';

type PlayerDataProps = {
    selectedYear:number;
    roster: Player[];
    legend: string;
}

const PlayerData = ({roster,selectedYear, legend}: PlayerDataProps) => {
    const roleOrder = ["Top", "Jungle", "Mid", "ADC", "Support"];
    const sortedRoster = [...roster].sort((a,b) => roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role));
  return (
    <div className='mt-8'>
        <h3 className='text-4xl md:text-5xl font-bold mb-4 text-center text-white'>Roster {selectedYear}</h3>
        <p className='text-gray-400 italic text-center mb-8 md:text-2xl'>{legend}</p>
        <motion.div 
            key={selectedYear}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.3}}
        >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Cards 
                data={sortedRoster} 
                containerClassName="w-full" 
                renderItem={(player, index) => (
                    <Link href={`/${player.id}`}>
                    <motion.div
                        key={player.id} 
                        initial={{opacity:0, x:-30}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:0.5, delay:index*0.2}}  
                        className='bg-gradient-to-br from-zinc-900 to-black mb-6 w-[300px] rounded-xl p-5 text-center cursor-pointer glow-electric glow-electric-hover transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e2012d] focus:ring-offset-2'              
                    >
                        <div className='relative w-full aspect-square mb-4 rounded-lg'>
                            <Image src={player.picture} alt={player.gameName} fill className='object-contain' />
                        </div>
                        <h4 className='text-white text-3xl font-bold'>{player.gameName}</h4>
                        <p className='text-gray-300 text-base'>{player.realName}</p>
                        <p className='text-gray-400 text-sm mt-1'>{new Date().getFullYear() - player.birthYear} years old</p>
                        <p className='text-[#e2012d] text-xl font-semibold mt-2'>{player.role}</p>
                        <p className='text-gray-400 text-sm mt-1'>{player.nationality}</p>
                    </motion.div>
                    </Link>
            )} />
        </div>
        </motion.div>
    </div>
  )
}

export default PlayerData