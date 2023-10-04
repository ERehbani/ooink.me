'use client'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';

export default function Home() {
  const [linkCode, setLinkCode] = useState('');
  const [info, setInfo] = useState(null)
  const router = useRouter()

  const getLink = async () => {
    try {
      const res = await fetch(`/api?code=${linkCode}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        if (data.id) {
          router.push(`/redirect?params=${linkCode}`);
          setInfo(data);
        } else {
          toast.error("This code doesn't exist");
        }
      } else {
        console.log('Error with fetch request');
        toast.error("An error occurred while fetching the link");
      }
    } catch (error) {
      console.error('Error parsing response as JSON:', error);
      toast.error("El codigo ingresado no es válido");
    }
  };
  



  return (
   <div className='flex items-center justify-center h-screen'>
     <div className='flex justify-center items-center my-auto'>
      <div className="">
        <Image src="/ooink_logo.svg" alt="Imagen SVG" width={200} height={0} className="mx-auto mb-8"/>
        <div className="flex justify-center items-center mb-4">
          <input value={linkCode} onChange={(e) => setLinkCode(e.target.value)} type="text" placeholder="Paste your code" className="py-4 px-4 rounded-l-lg focus:outline-none" maxLength="11" pattern="\d*"/>
          <button onClick={() => getLink()} className="bg-ooink py-4 px-4 rounded-r-lg text-white">
            <Image src="/search.svg" alt='search' width={24.077} height={0}/>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/form" className="flex text-ooink items-center">
            <span>Upload a new code</span>
            <Image src="upload.svg" alt='upload' width={20} height={0} className='ml-2'/>
          </Link>
        </div>
      </div>
    </div>
    <Toaster position='top-center' reverseOrder={false}/>
   </div>
  )
}
