import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='text-blue-600'>Navbar</div>
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/education">Education</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/experience">Experience</Link>

    </>
  )
}

export default Navbar