"use client"
import React from 'react'
import {motion} from 'framer-motion'


const Timeline = () => {
    const timelineEvents = [
  {
    year: 2013,
    title: "First World Championship",
    description: "The dynasty begins with Impact, Bengi, Faker, Piglet, and PoohManDu claiming the Summoner's Cup.",
    highlight: true
  },
  {
    year: 2015,
    title: "Back-to-Back Dominance",
    description: "Return to glory with Marin, Bengi, Faker, Bang, and Wolf. The era of dominance continues.",
    highlight: true
  },
  {
    year: 2016,
    title: "Three-Peat Champions",
    description: "Making history with a third consecutive world championship. Duke, Bengi, Faker, Bang, and Wolf cement their legacy.",
    highlight: true
  },
  {
    year: 2017,
    title: "Worlds Finalist",
    description: "A hard-fought journey ends in the finals. The hunger for redemption grows stronger.",
    highlight: false
  },
  {
    year: 2023,
    title: "The Comeback",
    description: "After years of rebuilding, T1 returns to the summit. A new generation rises with Zeus, Oner, Faker, Gumayusi, and Keria.",
    highlight: true
  },
  {
    year: 2024,
    title: "Fifth World Title",
    description: "History made once again. T1 becomes the most decorated organization in League of Legends esports.",
    highlight: true
  },
  {
    year: 2025,
    title: "Unprecedented Three-Peat",
    description: "Legendary achievement unlocked. Doran joins the roster as T1 secures three consecutive world championships, cementing their dynasty.",
    highlight: true
  }
];

  return (
    <section className='py-20 px-4 bg-black'>
        <motion.h2
            className='text-4xl md:text-5xl font-bold text-center mb-4 text-white'
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            T1 Legacy
        </motion.h2>
        <motion.p
            className='text-gray-400 text-center mb-16 max-w-2xl mx-auto'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            >A journey through excellence - from the first championship to becoming legends</motion.p>
            <div className='max-w-4xl mx-auto relative pl-8 md:pl-12 border-l-2 border-[#e2012d]'>
                {timelineEvents.map((event,index) => (
                    <motion.div
                        key={event.year}
                        className='relative mb-16 last:mb-0'
                        initial={{opacity:0, x:-50}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:0.6, 
                                     delay: index * 0.1,
                                     ease: "easeOut"}}
                        viewport={{once:true, margin:"-50px"}}
                        >
                            {/** DOT */}
                    <motion.div 
                        className={`absolute -left-[2.15rem] md:-left-[2.65rem] w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-black ${event.highlight ? 'bg-[#e2012d]' : 'bg-gray-500'}`}
                        whileHover={{ scale: 1.3, boxShadow: event.highlight ? "0 0 20px rgba(220,38,38,0.6)":"0 0 20px rgba(107,114,128,0.6)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    />
                        {/** CONTENT CARD */}
                        <motion.div 
                            className='bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-[#e2012d]/50 transition-colors'
                            whileHover={{scale:1.02}}
                            transition={{type:"spring", stiffness:300}}
                            >
                                <div className='flex items-center gap-3 mb-2'>
                                    <h3 className='text-2xl md:text-3xl font-bold text-[#e2012d]'>{event.year}</h3>
                                    {event.highlight && (
                                        <span className='px-2 py-1 text-xs font-semibold bg-[#e2012d] text-white rounded'>WORLD CHAMPIONS</span>
                                    )}
                                </div>
                                <h4 className='text-xl font-semibold text-white mb-2'>{event.title}</h4>
                                <p className='text-gray-400 leading-relaxed'>{event.description}</p>
                    </motion.div>
                        </motion.div>
                ))}
            </div>
    </section>
  )
}

export default Timeline