"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './globals.css'
import { Select, SelectItem } from '@nextui-org/react'

function Donation() {
  return (
    <div className="flex justify-center items-center">
      <div className="h-screen flex justify-center items-center">
        {/* <CircleBg /> */}
        <div>
        <Link href='/' className='flex justify-around w-[25%] mb-6'>
  <Image src="/back.svg" alt='back' width={20} height={0}/> 
  <p className='text-ooink'>Back</p>
</Link>
          <h1 className="title-donation">Make a donation</h1>
          <div>
            <div className="">
              <label htmlFor="" className='text-white'>Select an option</label>
              <Select 
              color='secondary'
        className="max-w-xs" 
        defaultSelectedKeys={["TRC20"]}
      >
        
          <SelectItem value="TRC20">
          TRC20
          </SelectItem>
          <SelectItem value="BEP20">
          BEP20, Polygon
          </SelectItem>

      </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donation
