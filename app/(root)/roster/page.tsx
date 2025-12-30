"use client"
import React, {useState} from 'react'
import SelectedYears from '@/components/roster/selected-years';
import { rosters, rosterLegends, coaches, achievements } from '@/db/t1';
import PlayerData from '@/components/roster/player-data';
import CoachData from '@/components/roster/coach-data';
import Achivement from '@/components/roster/achivement';
const Roster = () => {
    const years = Object.keys(rosters).map(Number);
    const [selectedYear, setSelectedYear] = useState<number>(2024)
    
  return (
    <section className='px-8 py-16 max-w-7xl mx-auto flex justify-center items-center flex-col'> 
        <h2 className='text-4xl md:text-5xl font-bold mb-4 text-white'>Relive T1 Roster</h2>
        <p className='text-gray-400 text-center mb-8 md:text-2xl'>A long term history through the years</p>
        <SelectedYears years={years} selectedYear={selectedYear} onYearChange={setSelectedYear} />
        <PlayerData selectedYear={selectedYear} roster={rosters[selectedYear]} legend={rosterLegends[selectedYear]}  />
        <CoachData selectedYear={selectedYear} coach={coaches[selectedYear]} />
        <Achivement achivements={achievements[selectedYear]} />
    </section>
  )
}

export default Roster