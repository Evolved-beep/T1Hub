import React from 'react'

type YearsProps = {
    years: number[];
    selectedYear?: number;
    onYearChange?: (year: number) => void;
}
const SelectedYears = ({years, selectedYear, onYearChange}: YearsProps) => {
    const handleClick = (year: number) => {
            onYearChange?.(year);
    };
  return (
    <>
        <div className='flex gap-2 md:gap-4 justify-center'>
                {years.map((year) => (
                    <div 
                        key={year} 
                        className={`flex p-2 rounded-lg transition-all cursor-pointer ${
                                    selectedYear === year 
                                    ? 'bg-[#e2012d] border border-[#e2012d]'
                                    : 'bg-zinc-900 border border-[#e2012d]/50 hover:border-[#e2012d]'
                                }`}
                        onClick={() => handleClick(year)}
                        >
                        <h3 className='text-2xl font-semibold text-white'>{year}</h3>
                    </div>
                ))}
        </div>
    </>
  )
}

export default SelectedYears