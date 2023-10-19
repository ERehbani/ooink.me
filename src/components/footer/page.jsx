"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <footer className="flex w-full p-3 border-t border-zinc-800 shadow items-center justify-between bg-black">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span>© 2023 -</span>
          <a href="/" className="hover:underline">
            {" "}
            OOINK
          </a>
        </div>
        {/* <ul className="flex items-center text-sm font-medium text-gray-ooink dark:text-gray-ooink">
          <li>
            <Link href="/privacy-policy" className="mr-4 hover:underline md:mr-6 input">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="mailto:hello.ooink@proton.me" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul> */}
        <Dropdown className="bg-[#18181B] text-gray-ooink">
          <DropdownTrigger>
            <Button variant="" className="text-gray-ooink font-medium text-sm">
              More
            </Button>
          </DropdownTrigger>
          <DropdownMenu >
            <DropdownItem>
              <Link
                href="/privacy-policy"
                className="mr-4 hover:underline md:mr-6 input">
                Privacy Policy
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link
                href="mailto:hello.ooink@proton.me"
                className="hover:underline">
                Contact
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link
                href="/donation"
                className="hover:underline">
                Donate
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </footer>
    </div>
  );
}

export default Footer;
