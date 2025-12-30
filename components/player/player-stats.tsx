import React, { useState } from 'react'
import { CartesianAxis, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { PlayerStats } from '@/db/t1'

interface PlayerStatsProps {
    playerStat: Record<number, Record<string, PlayerStats>>
    playerId: string
}

const PlayerStatistic = ({playerStat, playerId}:PlayerStatsProps) => {
  const getPlayerYearlyData = (playerId: string) => {
    return Object.entries(playerStat)
      .map(([year, players]) => ({
        year: Number(year),
        kda: players[playerId]?.overallStats.kda ?? 0,
        winRate: players[playerId]?.overallStats.winRate ?? 0,
        kills: players[playerId]?.overallStats.kills ?? 0,
        deaths: players[playerId]?.overallStats.deaths ?? 0,
        assists: players[playerId]?.overallStats.assists ?? 0
      }))
      .filter(data => data.kda !== 0)
  };

  const [metric, setMetric] = useState<"kda" | "winRate" | "kills" | "deaths" | "assists">("kda")
  
  const yearlyData = getPlayerYearlyData(playerId)
  if (yearlyData.length === 0) {
    return (
      <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-lg md:w-2/4 lg:w-3/4 mx-auto">
        <h2 className='text-xl md:text-2xl font-bold text-white text-center'>Seasonal Performance Overview</h2>
        <p className="text-gray-400 text-center py-8">No performance data available</p>
      </div>
    )
  }

  return (
    <>
      <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-lg md:w-2/4 lg:w-3/4 mx-auto">
          <h2 className='flex justify-center items-center text-xl md:text-2xl font-bold text-white text-center'>
            Seasonal Performance Overview
          </h2>
          <p className="text-center text-gray-400 text-sm mt-2">
            {yearlyData.length === 1 
              ? `Season ${yearlyData[0].year}` 
              : `${yearlyData[0].year} - ${yearlyData[yearlyData.length - 1].year}`
            }
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 my-6">
            {["kda", "winRate", "kills", "deaths", "assists"].map((m) => (
              <button
                key={m}
                onClick={() => setMetric(m as any)}
                className={`
                  px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-bold text-sm sm:text-base
                  transition-all
                  ${metric === m
                    ? 'bg-[#e2012d] text-white shadow-lg' 
                    : 'bg-transparent border border-zinc-700 text-zinc-300 hover:bg-zinc-800'}
                `}
              >
                {m.toUpperCase()}
              </button>
            ))}
          </div>
          
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={yearlyData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianAxis strokeDasharray="3 3" stroke='#27272a' />
              <XAxis dataKey="year" stroke='#a1a1aa' />
              <YAxis stroke='#a1a1aa' />
              <Tooltip 
                contentStyle={{ backgroundColor: '#18181b', border:"1px solid #27272a", borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
                formatter={(value: number) => {
                  if (metric === 'winRate') return `${value.toFixed(1)}%`;
                  return value.toFixed(2);
                }}
              />
              <Legend wrapperStyle={{ color: '#fff' }} /> 
              <Line 
                type="monotone" 
                dataKey={metric} 
                stroke="#e2012d" 
                strokeWidth={3}
                dot={{ fill: '#e2012d', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
      </div>
    </>
  )
}

export default PlayerStatistic
