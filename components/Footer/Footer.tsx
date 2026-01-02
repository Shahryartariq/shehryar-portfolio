import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="text-green-600">Footer</div>
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/education">Education</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/experience">Experience</Link>

    </>
  ) 
}

export default Footer