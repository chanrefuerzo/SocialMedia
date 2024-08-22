import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FriendRequestList from "./FriendRequestList";

export default async function FriendRequest() {
  const { userId } = auth();

  if (!userId) return null;

  const request = await prisma.followRequest.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
  });

  if (request.length === 0) return null;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-sm flex flex-col">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Request</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <FriendRequestList request={request} />
    </div>
  );
}
