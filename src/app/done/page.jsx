'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import CircleBg from 'src/components/circle-bg/page'
import './globals.css'

function Done({searchParams}) {
  const code = searchParams.params

  const copyToClipboard = async(text) => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success('Copied to clipboard!')
    } catch (error) {
      console.log('Error al copiar el texto', error)
    }
  }

  return (
    <div className='text-white flex items-center justify-center done'>
      <CircleBg/>
     <div className='w-full max-w-xs'>
     <div className='mb-7'>
        <h1 className='text-2xl font-bold'>Great Job!</h1>
      </div>

      <div>
        <div>
          <h2 className='text-base text-[#8DA3AF] mb-3'>Your TKTK Code is</h2>

          <div>
            <input type="text" value={code} className="py-4 px-4 rounded-lg focus:outline-none w-full text-white bg-zinc-800"/>
          </div>

          <div>
          <button onClick={() => copyToClipboard(code)}  type="submit" className=" bg-ooink py-4 mt-8 px-4 rounded-lg text-black flex items-center justify-center w-full">
    <span>Copy to clipboard</span>
    <Image src="/copy.svg" alt='upload' width={17} height={0} className='ml-2'/>
  </button>
          </div>
          <div>
          <Link href='/' className=" border border-ooink py-4 mt-4 px-4 rounded-lg text-black flex items-center justify-center w-full">
    <span className='text-ooink'>Go to home</span>
    <Image src="/home.svg" alt='upload' width={17} height={0} className='ml-2'/>
  </Link>
          </div>
        </div>
      </div>
     </div>
     <Toaster position='top-center' reverseOrder={false}/>
    </div>
  )
}

export default Done