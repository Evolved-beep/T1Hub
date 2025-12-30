import React from 'react'
import Cards from '../ui/Cards'
import { TrophyIcon } from 'lucide-react'

const Resume = () => {
    const dataResume = [
        {stats:'6 times world champion', icon:<TrophyIcon size={30} color="#e2012d" />},
        {stats:'13 years of dominance', icon:<TrophyIcon size={30} color="#e2012d" />},
        {stats:'40+ players since 2012', icon:<TrophyIcon size={30} color="#e2012d" />},
        {stats:"Faker, 6 times World Champion", icon:<TrophyIcon size={30} color="#e2012d" />},
        ]

  return (
    <section className='px-8 py-16 max-w-7xl mx-auto' id='about'>
        <h1 className='text-4xl mb-6'>Historical achivement</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <Cards 
                data={dataResume}
                renderItem={(item,index)=>(
                    <div key={index} className='flex items-center min-h-0 md:min-h-32 lg:min-h-36 bg-zinc-900 rounded-xl shadow-lg p-4 border border-zinc-800 hover:border-[#e2012d]/50 transition-colors'>
                        <div className='flex gap-4 items-center px-4 h-full w-full'>
                            {item.icon}
                            <p className='leading-8 text-xl lg:text-2xl text-center'>{item.stats}</p>
                        </div>
                    </div>
                )}
            />
        </div>
    </section>
  )
}

export default Resume