import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* Left */}
      <div className=" md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          SocialMedia
        </Link>
      </div>

      {/* Center */}
      <div className="hidden md:flex w-[50%] text-sm">
        {/* Links */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/home.png"
              alt="Homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="">Homepage</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/friends.png"
              alt="Friends"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="">Firends</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/stories.png"
              alt="Stories"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="">Stories</span>
          </Link>
        </div>
      </div>

      {/* Right */}
      <div className="w-[30%] flex item-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
      </div>
    </div>
  );
}
