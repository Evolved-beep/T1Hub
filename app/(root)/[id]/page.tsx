"use client"
import Header from '@/components/player/header'
import React, { useState } from 'react'
import { rosters, playerStats } from '@/db/t1'
import { useParams } from 'next/navigation'
import PlayerStatistic from '@/components/player/player-stats'
import TopChampions from '@/components/player/top-champion'
import PlayerAchievements from '@/components/player/achievement'

const PlayerPage = () => {
    const params = useParams()
    const id = params.id as string
    
    const getAllPlayers = Object.values(rosters).flat();
    const getPlayersById = getAllPlayers.filter((p) => String(p.id) === String(id))
    const getSinglePlayer = Array.from(new Map(getPlayersById.map(p => [p.id, p])).values());
    const availableYears = Object.keys(playerStats)
        .map(Number)
        .filter(year => playerStats[year]?.[id])
        .sort((a, b) => b - a)
    const [selectedYear, setSelectedYear] = useState(availableYears[0])
    
    const stats = selectedYear ? playerStats[selectedYear]?.[id] : null
    
    if (!stats) {
        return (
            <section className='max-w-4xl md:mx-auto px-6 py-12 text-white'>
                <Header rosters={getSinglePlayer} />
                <p className="text-center text-gray-400 mt-8">No stats available</p>
            </section>
        )
    }
    
    return (
        <section className='max-w-4xl md:mx-auto px-6 py-12 text-white'>
            <Header rosters={getSinglePlayer} />
            {availableYears.length > 1 && (
                <div className="flex justify-center gap-2 mt-8 mb-4">
                    {availableYears.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`
                                px-6 py-3 rounded-lg font-bold text-lg transition-all
                                ${selectedYear === year
                                    ? 'bg-[#e2012d] text-white shadow-lg scale-105' 
                                    : 'bg-zinc-900 border border-zinc-700 text-zinc-300 hover:bg-zinc-800'}
                            `}
                        >
                            Season {year}
                        </button>
                    ))}
                </div>
            )}
            <PlayerStatistic playerStat={playerStats} playerId={id} />
            <TopChampions 
                champions={stats.topChampions} 
                year={selectedYear}
            />
            <PlayerAchievements 
                achievements={stats.achievements}
                year={selectedYear}
            />
        </section>
    )
}

export default PlayerPage
