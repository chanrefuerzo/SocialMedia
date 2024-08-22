import Image from "next/image";
import React from "react";

export default function Comments() {
  return (
    <div className="">
      {/* New Comment*/}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/20579596/pexels-photo-20579596/free-photo-of-black-and-white-blurred-photography-of-a-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="avatar-commment"
          width={32}
          height={32}
          className="rounded-full w-8 h-8"
        />
        <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl px-6 py-2 w-full ">
          <input
            name=""
            id=""
            placeholder="Write a comment.."
            className=" p-2 bg-transparent outline-none flex-1"
          ></input>
          <Image
            src="/emoji.png"
            alt="emoji-commment"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* Old Comment*/}
      <div className="flex justify-between gap-4 mt-6">
        {/* Avatar Old Comment*/}
        <Image
          src="https://images.pexels.com/photos/20579596/pexels-photo-20579596/free-photo-of-black-and-white-blurred-photography-of-a-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="avatar-commment"
          width={40}
          height={40}
          className="rounded-full w-10 h-10"
        />
        {/* User & Comment & likes*/}
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium">Al Sagarino</span>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution
          </p>
          <div className="flex flex-col gap-8 text-xs text-gray-500 mt-2 ">
            <div className="flex items-center gap-4 ">
              <Image
                src="/like.png"
                alt=""
                width={12}
                height={12}
                className="cursor-pointer"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">
                123 <span className="hidden md:inline">Likes</span>
              </span>
              <div className="">Reply</div>
            </div>
          </div>
        </div>
        {/* More button*/}
        <div className="">
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
}
