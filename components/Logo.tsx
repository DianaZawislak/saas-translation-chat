import Link from 'next/link'
import React from 'react'
import LogoImage from '@logos/logo1.png'
import { AspectRatio } from './ui/aspect-ratio'

function Logo() {
  return (
    <Link href="/">
    <div>
      <AspectRatio
      ratio={16/9}
      className="flex items-center justify-center"
    >
      <LogoImage />

    </AspectRatio>
    </div>
    </Link>
  )
}

export default Logo
