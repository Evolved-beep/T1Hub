// components/TopChampions.tsx
import { Champion } from '@/db/t1'

interface TopChampionsProps {
  champions?: Champion[]
  year: number
}

const TopChampions = ({ champions, year }: TopChampionsProps) => {
  if (!champions || champions.length === 0) {
    return (
      <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Most Played Champions</h2>
        <p className="text-gray-400 text-center py-8">No champion data for {year}</p>
      </div>
    )
  }

  return (
    <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Most Played Champions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {champions.map((champ, idx) => (
          <div key={idx} className="bg-zinc-800 rounded-lg p-4 border border-zinc-700 hover:border-[#e2012d] transition-all">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-bold text-lg">{champ.champion}</h3>
              <span className="text-gray-400 text-sm">{champ.games}G</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Win Rate</span>
                <span className={`font-semibold ${champ.winRate >= 60 ? 'text-green-400' : 'text-gray-300'}`}>
                  {champ.winRate.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">KDA</span>
                <span className="text-white font-semibold">{champ.kda.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>{champ.wins}W - {champ.losses}L</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopChampions
