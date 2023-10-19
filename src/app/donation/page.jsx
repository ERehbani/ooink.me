"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "./globals.css";
import { Select, SelectItem } from "@nextui-org/react";
import CopyButton from "src/components/copyButton/copyButton";

function Donation() {
  const [cryptoCode, setCryptoCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [selectedOption, setSelectedOption] = useState("TRC20");

  const updateQRAndCode = () => {
    let code = "";

    if (selectedOption === "TRC20") {
      code = "TSD5JkigoenCy13CArM6rVHbbL9JU7b77Y";
    } else if (selectedOption === "BEP20") {
      code = "0xf6fb4e2f435920f0b572731677435bb039c78eae";
    }

    setCryptoCode(code);
  };

  useEffect(() => {
    updateQRAndCode();
  }, [selectedOption]);

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(cryptoCode);
  //   setCopied(true);

  //   setTimeout(() => {
  //     setCopied(false);
  //   }, 2000); // Change back to "Copy" after 2 seconds
  // }

  return (
    <div className="flex justify-center items-center">
      <div className="h-screen flex justify-center items-center">
        <div>
          <Link href="/">
            <div className="flex justify-around w-[25%] mb-6">
              <Image src="/back.svg" alt="back" width={20} height={20} />
              <p className="text-ooink ml-2">Back</p>
            </div>
          </Link>
          <h1 className="title-donation">Make a donation</h1>
          <div>
            <div className="">
              <label htmlFor="" className="text-white">
                Select an option
              </label>
              <Select
                value={selectedOption}
                className="max-w-xs mt-2"
                size="lg"
                id="crypto"
                onChange={(e) => setSelectedOption(e.target.value)}
                defaultSelectedKeys={["TRC20"]}
                labelPlacement="outside">
                <SelectItem
                  value="TRC20"
                  key="TRC20"
                  onClick={() => setSelectedOption("TRC20")}>
                  TRC20
                </SelectItem>
                <SelectItem
                  value="BEP20"
                  onClick={() => setSelectedOption("BEP20")}>
                  BEP20, Polygon
                </SelectItem>
              </Select>

              {/* { cryptoCode && ( */}
              <div>
                <div id="qr-container" className="mt-4">
                  <Image
                    src={`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${cryptoCode}`}
                    alt="qr"
                    width={150}
                    height={150}
                    className="mx-auto rounded-lg"
                  />
                </div>
                <input
                  type="text"
                  id="crypto-code"
                  value={cryptoCode}
                  className="block w-full py-2 px-3 bg-[#27272A] text-gray-300 rounded-lg mt-4 h-12"
                  readOnly
                />
              </div>
              {/* )} */}
              {/* <button id="copy-button" className={`bg-green-${copied ? '400 cursor-not-allowed' : '500 text-white'} py-2 px-4 rounded-lg mt-2 hover:bg-green-${copied ? '400' : '600'} w-full`} onClick={copyToClipboard}>
                {copied ? 'Copied' : 'Copy'}
              </button> */}
              <CopyButton code={cryptoCode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation;
