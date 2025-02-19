'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'


interface HeroProps {
  className: string
}

export default function Hero({ className }: HeroProps) {
  return (
    <div className={cn('w-full h-screen', className)}>
      <div className="absolute bottom-0 left-0 p-8">
        {/* <h1 className="text-3xl lg:text-7xl text-white font-medium leading-none">
          Freelance Web <span>D</span>esigner <br /> <span>&</span> Webflow <span>D</span>eveloper.
        </h1> */}

        <motion.span
        
          className="text-white text-7xl"

        >
          Freelance Web
        </motion.span>
      </div>
    </div>
  )
}
