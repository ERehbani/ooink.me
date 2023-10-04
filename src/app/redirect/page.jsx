'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Redirect({ searchParams }) {
  console.log(searchParams)
  const [data, setData] = useState(null);
  const [seconds, setSeconds] = useState(3);
  const code = searchParams.params;
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api?code=${code}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        cache: 'no-store'
      })
      if (res.ok) {
        const data = await res.json();
        setData(data);
      } else {
        console.log('Error:', res.status);
      }
    }
    getData();
  }, [code]);

  useEffect(() => {
    if (seconds === 0 && data) {
      let webLink = data.webLink;
      if (!webLink.startsWith('http://') && !webLink.startsWith('https://')) {
        webLink = 'http://' + webLink;
      }
      window.open(webLink);
      router.push('/')
    } else if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [seconds, data, router]);

  return (
    <div className='text-white'>
      <div>
        <div className='h-[123px] bg-ooink flex justify-center'>
          <div className='mt-20'>
            <b className='mr-1'>{data ? data.userName : ''}</b>shared this link
          </div>
        </div>
      </div>

      <div>
        <h2 className='text-2xl font-normal flex justify-center mt-32'>Redirecting in {seconds} seconds...</h2>
      </div>
    </div>
  )
}

export default Redirect
