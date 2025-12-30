interface AchievementsProps {
  achievements: string[]
  year: number
}

const PlayerAchievements = ({ achievements, year }: AchievementsProps) => {
  if (!achievements || achievements.length === 0) {
    return null
  }

  return (
    <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {achievements.map((achievement, idx) => (
          <div key={idx} className="flex items-center gap-3 bg-zinc-800 rounded-lg p-4 border border-zinc-700">
            <div className="flex-shrink-0 w-10 h-10 bg-[#e2012d] rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🏆</span>
            </div>
            <p className="text-white text-sm">{achievement}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlayerAchievements
