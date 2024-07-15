import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Advertisement({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-sm">
      <div className="flex justify-between items-center text-gray-500 font-medium">
        <span className="text-gray-500">Sponsered Ads</span>
        <Image src="/more.png" alt="" width={16} height={16}></Image>
      </div>
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/20881517/pexels-photo-20881517/free-photo-of-a-woman-sitting-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className=" rounded-lg object-cover"
          />
        </div>
        <div className=" flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/20881517/pexels-photo-20881517/free-photo-of-a-woman-sitting-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={24}
            height={24}
            className=" rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">Titan Gel</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            : size === "md"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit."
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        </p>

        <button className="flex items-center justify-center bg-gray-200 text-gray-500 text-xs rounded-lg p-2">
          Learn More
        </button>
      </div>
    </div>
  );
}
