import Image from "next/image";
import React from "react";

export default function ProfileCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative ">
        <Image
          src="https://images.pexels.com/photos/27140162/pexels-photo-27140162/free-photo-of-a-bride-is-holding-her-bouquet-in-her-hand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/17945201/pexels-photo-17945201/free-photo-of-young-man-reading-a-book-on-the-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={48}
          height={48}
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover"
        />
      </div>
      <div className="flex flex-col  items-center gap-2 ">
        <span className="flex justify-center mt-2 font-semibold text-black text-lg">
          Edward Gabriel May
        </span>

        <span className="">500 followers</span>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md ">
          My Profile
        </button>
      </div>
    </div>
  );
}
