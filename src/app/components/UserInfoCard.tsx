import Image from "next/image";
import Link from "next/link";
import React from "react";

type UserInfoCardProps = {
  userId: string;
};
export default function UserInfoCard({ userId }: UserInfoCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black font-semibold">
            Charles Capper
          </span>
          <span className="text-sm">@scamper</span>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16}></Image>
          <span className="">
            Living in <b>Denver</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16}></Image>
          <span className="">
            Went to <b>USEP</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16}></Image>
          <span className="">
            Works at <b>House</b>
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Image src="/work.png" alt="" width={16} height={16}></Image>
            <Link
              href="https://chan-portfolio.vercel.app"
              className="text-blue-500 font-medium"
            >
              chan-portfolio
            </Link>
          </div>
          <div className="flex gap-2">
            <Image src="/work.png" alt="" width={16} height={16}></Image>
            <span className="">Joined November 2024</span>
          </div>
        </div>
        <button className="bg-blue-500 p-2 rounded-md text-white text-sm">
          Following
        </button>
        <span className="self-end text-red-500 text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
}
