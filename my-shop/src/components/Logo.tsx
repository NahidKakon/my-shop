import React from 'react'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

interface Props {}

const Logo = () => {
  return (
  <Link href={'/'}>
  <h2 
   className={twMerge( 
     "text-2xl text-slate-900 hover:text-red-600 font-bold uppercase hoverEffect relative group"

     )}
     >
        {/* if I want to keep transition hidden then the code should be "relative group overflow-hidden" */}
    Shoppers
    <span className="absolute left-0 bottom-0 w-full h-px bg-amber-700 -translate-x-[105%] group-hover:translate-x-0 hoverEffect transition-transform"/>
    </h2>
  </Link>
)
}

export default Logo;