import React from "react";
import Image from "next/image";
import Comments from "./Comments";

export default function Post() {
  return (
    <div className="flex flex-col gap-4">
      {/* User */}
      <div className="flex items-center justify-between">
        {/* Avatar & Name */}
        <div className="flex gap-4 items-center">
          <Image
            src="https://images.pexels.com/photos/20881517/pexels-photo-20881517/free-photo-of-a-woman-sitting-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className=" rounded-full w-10 h-10"
          />
          <span className="font-medium"> John Doe</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} className="" />
      </div>
      {/* Description */}
      <div className="flex flex-col gap-4">
        {/* Caption */}
        <div className="">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it
          </p>
        </div>
        {/* Image  */}
        <div className="w-full min-h-96 relative ">
          <Image
            src="https://images.pexels.com/photos/15487855/pexels-photo-15487855/free-photo-of-yogurt-with-blackberries-in-disposable-cup.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
      {/* Interaction */}
      <div className="flex items-center justify-between text-sm my-4">
        {/* Left */}
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Commnets</span>
            </span>
          </div>
        </div>
        {/* Right */}
        <div className="">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <Comments />
      </div>
    </div>
  );
}
