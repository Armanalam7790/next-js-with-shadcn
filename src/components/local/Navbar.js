import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-6 border-0 border-b px-10 font-serif '>
      <h1 className='text-2xl'>logo</h1>

      <div className='flex gap-7 font-semibold'>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/console'}>Console</Link>
      </div>

      <div>
       <ThemeToggle />
      </div>

    </div>
  )
}

export default Navbar