import React from 'React'
import Link from 'next/link'

export default () => (
  <nav>
    <Link href="/about">About</Link>
    <br/>
    <Link href="/">Home</Link>
    <br/>
    <Link href="/info">Info</Link> 
  </nav>		
)
