import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FriendRequest() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-sm flex flex-col">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Request</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className=" flex items-center  gap-4">
          <Image
            src="https://images.pexels.com/photos/20881517/pexels-photo-20881517/free-photo-of-a-woman-sitting-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className=" rounded-full w-10 h-10 object-cover"
          />
          <span className="font-semibold">Rey Aleonar</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className=" cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className=" cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className=" flex items-center  gap-4">
          <Image
            src="https://images.pexels.com/photos/20881517/pexels-photo-20881517/free-photo-of-a-woman-sitting-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className=" rounded-full w-10 h-10 object-cover"
          />
          <span className="font-semibold">Anya Lou</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className=" cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className=" cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className=" flex items-center  gap-4">
          <Image
            src="https://images.pexels.com/photos/20881517/pexels-photo-20881517/free-photo-of-a-woman-sitting-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className=" rounded-full w-10 h-10 object-cover"
          />
          <span className="font-semibold">Louella Catillosa</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className=" cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className=" cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
