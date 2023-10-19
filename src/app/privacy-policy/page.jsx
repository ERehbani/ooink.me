"use client";
import React from "react";
import "./globals.css";
// import CircleBg from "src/components/circle-bg/page";
import Link from "next/link";
import Image from "next/image";
import { ScrollShadow } from "@nextui-org/react";

function Privacy() {
  return (
    <div className="flex justify-center items-center">
      <div className="h-screen flex justify-center items-center">
        {/* <CircleBg /> */}
        <div>
          <Link href="/" className="flex justify-around w-[25%] mb-6">
            <Image src="/back.svg" alt="back" width={20} height={0} />
            <p className="text-ooink">Back</p>
          </Link>
          <h1 className="title-privacy">Privacy Policy</h1>
          <div>
            <div className="privacy-square">
              <div className="square-content">
                <ScrollShadow hideScrollBar className="w-[274px] h-[424px]">
                  <h2 className="square-title">Ooink Privacy Policy</h2>
                  <i>Effective Date: October 16, 2023</i>
                  <p className="square-p">
                    Ooink.me does not collect or store privacy data or personal
                    information from users at any time. Ooink is a tool that
                    allows the conversion of links to codes and does not require
                    personal information for its operation.
                  </p>

                  <h2 className="square-title">Tool Usage</h2>
                  <p className="square-p">
                    Users can utilize the Ooink tool to convert links to codes
                    anonymously and without the need to provide personal
                    information. Personal information is not collected during
                    the conversion process.
                  </p>

                  <h2 className="square-title">Responsibility for Use</h2>
                  <p className="square-p">
                    We understand that Ooink users may convert links to codes
                    for various purposes. We are not responsible for how users
                    utilize the codes generated through our service. We do not
                    endorse or guarantee the legality or suitability of any
                    content accessed through the generated codes.
                  </p>

                  <h2 className="square-title">Contact</h2>
                  <p className="square-p">
                    If you have any questions or concerns related to the
                    operation of Ooink, please do not hesitate to get in touch
                    with us at hello.oink@proton.me.
                  </p>
                </ScrollShadow>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
