import React from 'react'
import Cards from '../ui/Cards'
import { Achievement } from '@/db/t1'

type achivementItem = {
    achivements: Achievement[]
}

const Achivement = ({achivements}: achivementItem) => {
  return (
    <div className="mt-8">
  <h4 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
    Achievements
  </h4>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Cards
      data={achivements}
      renderItem={(item, index) => (
        <div
          key={index}
          className="flex items-center bg-zinc-900 rounded-xl shadow-lg p-6 border border-zinc-800 hover:border-[#e2012d]/50 transition-colors"
        >
          <div className="flex flex-col items-center justify-center gap-3 w-full text-center">
            <p className="text-2xl md:text-3xl font-semibold text-white">
              {item.tournament}
            </p>

            <p
              className={`text-3xl md:text-4xl font-extrabold ${
                item.placement === "1st"
                  ? "text-[#e2012d] drop-shadow-[0_0_6px_#e2012d80]"
                  : "text-gray-400 text-3xl md:text-4xl font-extrabold"
              }`}
            >
              {item.placement}
            </p>

            {item.prize ? (
              <p className="text-lg md:text-xl font-medium text-gray-200">
                {item.prize}
              </p>
            ) : (
              <p className="text-lg md:text-xl text-gray-500 font-medium">NC</p>
            )}
          </div>
        </div>
      )}
    />
  </div>
</div>

  )
}

export default Achivement