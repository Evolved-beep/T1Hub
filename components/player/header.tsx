import { Player } from '@/db/t1'
import React from 'react'
import Cards from '../ui/Cards'
import Image from 'next/image'

interface HeaderProps { 
    rosters: Player[]
}

const Header = ({rosters}: HeaderProps) => {
  return (
    <div className='flex justify-center items-center my-8'>
        <Cards 
            data={rosters}
            containerClassName='flex flex-row gap-4 p-4'
            renderItem={(player, index) => (
                <div key={index} className='flex w-full md:w-2/4 lg:w-3/4 items-center justify-between bg-gradient-to-br from-zinc-900 to-black rounded-xl p-6 lg:p-8 border border-gray-700/50'>
                <div className='flex flex-col'>
                    <h4 className='text-white text-3xl font-bold'>{player.gameName}</h4>
                    <p className='text-gray-200 text-base'>{player.realName}</p>
                    <p className='text-gray-400 text-sm mt-1 mb-3'>{new Date().getFullYear() - player.birthYear} years old</p>
                    <p className='text-[#e2012d] text-xl font-semibold'>{player.role}</p>
                    <p className='text-gray-400 text-sm mt-1'>{player.nationality}</p>
                </div>
                <div className='flex-shrink-0 ml-6'>
                    <Image src={player.picture} height={150} width={150} alt={player.gameName} className='object-contain rounded-lg' />
                </div>
            </div>

            )}
        />
    </div>
  )
}

export default Header