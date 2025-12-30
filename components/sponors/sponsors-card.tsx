import React from 'react'
import { Sponsor } from '@/db/t1'

type PartnershipItem = {
    sponsors: Sponsor[]
}

const SponsorsCard = ({sponsors}: PartnershipItem) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

    </div>
  )
}

export default SponsorsCard