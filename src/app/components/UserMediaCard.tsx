import Image from "next/image";
import Link from "next/link";
import React from "react";

type UserMediaCardProps = {
  userId: string;
};

export default function UserMediaCard({ userId }: UserMediaCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex justify-between gap-4  flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/17499608/pexels-photo-17499608/free-photo-of-view-of-the-castle-on-bled-island-on-lake-bled-in-slovenia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt={""}
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/17499608/pexels-photo-17499608/free-photo-of-view-of-the-castle-on-bled-island-on-lake-bled-in-slovenia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt={""}
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/17499608/pexels-photo-17499608/free-photo-of-view-of-the-castle-on-bled-island-on-lake-bled-in-slovenia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt={""}
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/17499608/pexels-photo-17499608/free-photo-of-view-of-the-castle-on-bled-island-on-lake-bled-in-slovenia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt={""}
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/17499608/pexels-photo-17499608/free-photo-of-view-of-the-castle-on-bled-island-on-lake-bled-in-slovenia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt={""}
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/17499608/pexels-photo-17499608/free-photo-of-view-of-the-castle-on-bled-island-on-lake-bled-in-slovenia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt={""}
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/17499608/pexels-photo-17499608/free-photo-of-view-of-the-castle-on-bled-island-on-lake-bled-in-slovenia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt={""}
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/17499608/pexels-photo-17499608/free-photo-of-view-of-the-castle-on-bled-island-on-lake-bled-in-slovenia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt={""}
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
      </div>
    </div>
  );
}
