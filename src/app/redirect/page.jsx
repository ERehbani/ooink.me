"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// import CircleBg from 'src/components/circle-bg/page';
import "./globals.css";

function Redirect({ searchParams }) {
  // console.log(searchParams);
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
        cache: "no-store"
      });
      if (res.ok) {
        const data = await res.json();
        setData(data);
      } else {
        // console.log("Error:", res.status);
      }
    };
    getData();
  }, [code]);

  useEffect(() => {
    if (seconds === 0 && data) {
      let webLink = data.webLink;
      if (!webLink.startsWith("http://") && !webLink.startsWith("https://")) {
        webLink = "http://" + webLink;
      }
      window.open(webLink);
      router.push("/");
    } else if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [seconds, data, router]);

  return (
    <div className="text-white flex justify-center items-center redirect">
      {/* <CircleBg/> */}
      <div className="h-screen w-full">
        <div className="">
          <div className="h-[61.5px] bg-ooink flex justify-center">
            <div className="my-5 text-black">
              <b className="mr-1">{data ? data.userName : ""}</b>shared this
              link
            </div>
          </div>
        </div>

        <div className="max-md:max-h-20">
          <div>
            <h2 className="text-2xl font-normal flex justify-center mt-32 max-md:mt-10">
              Redirecting in {seconds} seconds...
            </h2>
          </div>

          <div className="border border-dotted max-w-xs flex mx-auto my-20 h-56 max-md:my-10"></div>

          <div className="w-full max-w-xs flex mx-auto my-0">
            <div className="flex border border-gray-border-ooink bg-gray-dark-ooink rounded-lg">
              <Image
                src="/screen.svg"
                alt="screen"
                width={20}
                height={0}
                className="mx-6"
              />
              <div>
                <h2 className="text-base text-gray-ooink pt-6 pb-6 pr-6 tracking-wide">
                  Make sure to allow link pop-ups in your browser.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Redirect;
