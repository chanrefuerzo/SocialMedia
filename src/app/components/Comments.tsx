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
        <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl px-6 py-2 w-full">
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
      <div className=""></div>
    </div>
  );
}
