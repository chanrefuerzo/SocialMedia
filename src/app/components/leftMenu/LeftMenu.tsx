import Image from "next/image";
import React from "react";
import ProfileCard from "./ProfileCard";
import Link from "next/link";
import Advertisement from "../Advertisement";

export default function LeftMenu({ type }: { type: "home" | "profile" }) {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}

      <div className="bg-white p-4 rounded-lg shadow-md text-sm flex flex-col gap-4">
        <Link
          href="/"
          className="flex gap-4 items-center rounded-lg hover:bg-slate-200 p-2"
        >
          <Image src="/posts.png" alt={""} width={16} height={16}></Image>
          <span className="">My Post</span>
        </Link>
        {/* <hr className="border-t-1 border-gray-50 w-36 self-center" /> */}
        <Link
          href="/"
          className="flex gap-4 items-center rounded-lg hover:bg-slate-200 p-2"
        >
          <Image src="/market.png" alt={""} width={16} height={16}></Image>
          <span className="">Activity</span>
        </Link>
        <Link
          href="/"
          className="flex gap-4 items-center rounded-lg hover:bg-slate-200 p-2"
        >
          <Image src="/posts.png" alt={""} width={16} height={16}></Image>
          <span className="">Marketplace</span>
        </Link>
        <Link
          href="/"
          className="flex gap-4 items-center rounded-lg hover:bg-slate-200 p-2"
        >
          <Image src="/events.png" alt={""} width={16} height={16}></Image>
          <span className="">Events</span>
        </Link>
        <Link
          href="/"
          className="flex gap-4 items-center rounded-lg hover:bg-slate-200 p-2"
        >
          <Image src="/albums.png" alt={""} width={16} height={16}></Image>
          <span className="">Albums</span>
        </Link>
        <Link
          href="/"
          className="flex gap-4 items-center rounded-lg hover:bg-slate-200 p-2"
        >
          <Image src="/videos.png" alt={""} width={16} height={16}></Image>
          <span className="">Videos</span>
        </Link>
        <Link
          href="/"
          className="flex gap-4 items-center rounded-lg hover:bg-slate-200 p-2"
        >
          <Image src="/news.png" alt={""} width={16} height={16}></Image>
          <span className="">News</span>
        </Link>
        <Link
          href="/"
          className="flex gap-4 items-center rounded-lg hover:bg-slate-200 p-2"
        >
          <Image src="/courses.png" alt={""} width={16} height={16}></Image>
          <span className="">Courses</span>
        </Link>
        <Link
          href="/"
          className="flex gap-4 items-center rounded-lg hover:bg-slate-200 p-2"
        >
          <Image src="/lists.png" alt={""} width={16} height={16}></Image>
          <span className="">Lists</span>
        </Link>
        <Link
          href="/"
          className="flex gap-4 items-center rounded-lg hover:bg-slate-200 p-2"
        >
          <Image src="/settings.png" alt={""} width={16} height={16}></Image>
          <span className="">Settings</span>
        </Link>
      </div>
      <Advertisement size="sm" />
    </div>
  );
}
