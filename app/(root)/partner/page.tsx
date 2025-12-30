
'use client'
import { sponsors } from '@/db/t1'

export default function PartnersPage() {
  console.log('🔍 Sponsors loaded:', sponsors)
  console.log('🔍 Length:', sponsors?.length)
  
  return (
    <div className="min-h-screen bg-black text-white p-12">
      <h1 className="text-4xl font-bold mb-8">Our Partners</h1>
      
      {!sponsors || sponsors.length === 0 ? (
        <p className="text-red-500">No sponsors data</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsors.map((sponsor, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-2">{sponsor.name}</h2>
              <p className="text-gray-400 text-sm">{sponsor.category}</p>
              <p className="text-gray-500 text-xs mt-2">Since {sponsor.since}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
