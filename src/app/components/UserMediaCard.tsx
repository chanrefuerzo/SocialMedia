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
    </div>
  );
}
