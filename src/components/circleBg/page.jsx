import React from 'react'
import './globals.css'
import Image from 'next/image'

function CircleBg() {
  return (
    <div>
      <div className="circle-svg">
        <Image className='circle.image' src="/bg-circle.svg" alt='circle' width={844} height={622}/>
        </div>
    </div>
  )
}

export default CircleBg
