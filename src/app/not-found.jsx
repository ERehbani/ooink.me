import Image from 'next/image'
import React from 'react'
import './globals.css'
import Link from 'next/link'
import CircleBg from 'src/components/circle-bg/page'


export default function NotFound() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <CircleBg/>
        <div className=''>
            <div>
            <Image src='/oops.svg' alt='404' width={268} height={0} className='mx-auto'/>
            <p className='text-notfound'>{'It seems like the page you were looking for doesn\'t exist.'}</p>
            <Link href='/' className='button-404'>
             <div className='button-container'>
             Go to home <Image src='/home-black.svg' alt='home' width={20} height={0} className='ml-2'/>
             </div>
            </Link>
            </div>
        </div>
    </div>
  )
}
