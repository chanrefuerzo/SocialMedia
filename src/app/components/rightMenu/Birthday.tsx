import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Birthday() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-sm">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
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
          <span className="font-semibold">Anya Lou</span>
        </div>
        <div className="flex gap-3 justify-end">
          <button className="bg-blue-500 px-2 py-2 rounded-md text-white text-xs">
            Celebrate
          </button>
        </div>
      </div>
      <div className="flex gap-4 bg-slate-100 p-4 rounded-lg items-center mt-2">
        <Image src="/gift.png" alt="" width={24} height={24} />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-500">See other 18 upcoming birthdays</span>
        </Link>
      </div>
    </div>
  );
}
