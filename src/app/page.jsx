"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
// import CircleBg from 'src/components/circle-bg/page';
import "./globals.css";
import { Button } from "@nextui-org/react";

export default function Home() {
  const [linkCode, setLinkCode] = useState("");
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const getLink = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api?code=${linkCode}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (res.ok) {
        const data = await res.json();
        // console.log(data);
        if (data.id) {
          router.push(`/redirect?params=${linkCode}`);
          setInfo(data);
        } else {
          toast.error("This code doesn't exist");
        }
      } else {
        // console.log("Error with fetch request");
        toast.error("An error occurred while fetching the link");
      }
    } catch (error) {
      console.error("Error parsing response as JSON:", error);
      toast.error("The code is not valid.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

  }, [])

  return (
    <div className="app flex items-center justify-center h-screen">
      <div className="flex justify-center items-center my-auto h-screen">
        <div className="w-full max-w-xs">
          <Image
            src="/ooink_logo.svg"
            alt="Imagen SVG"
            width={200}
            height={0}
            className="mx-auto mb-8 pointer-events-none"
          />
          <div className="flex justify-center items-center mb-4">
            <input
              value={linkCode}
              onChange={(e) => setLinkCode(e.target.value)}
              placeholder="Paste your code"
              className="py-4 px-4 rounded-l-lg focus:outline-none"
              maxLength="11"
              type="text"
            />
            <button
              onClick={() => getLink()}
              className="bg-ooink rounded-r-lg py-4 px-4 text-white"
              style={{ padding: loading ? "0.5rem 0" : "1rem" }}>
              {loading ? (
                <Button
                  isLoading
                  color="#FF78A9"
                  spinner={
                    <svg
                      className="animate-spin h-7 w-7 text-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" strokeWidth="4" />
                      <path
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        fill="white"
                      />
                    </svg>
                  }></Button>
              ) : (
                <Image
                  src="/search.svg"
                  alt="search"
                  width={24.077}
                  height={0}
                  style={{ minWidth: "24.077px" }}
                />
              )}
            </button>
          </div>
          <div className="flex justify-center items-center">
            <Link href="/form" className="flex text-ooink items-center">
              <span>Upload a new code</span>
              <Image
                src="upload.svg"
                alt="upload"
                width={20}
                height={0}
                className="ml-2"
              />
            </Link>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
