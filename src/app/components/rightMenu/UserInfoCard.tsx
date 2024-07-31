import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserInfoCardInteraction from "./UserInfoCardInteraction";


export default async function UserInfoCard ({ user }: { user: User }) {
  
  const createdDate = new Date(user.createdAt)
  const formattedDate = createdDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });


  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  const { userId: currentUserId } = auth()

  if (currentUserId) {
      const blockRes = await prisma.block.findFirst({
        where: {
          blockerId: currentUserId,
          blockedId: user.id,
        }
      })
    blockRes ? (isUserBlocked = true) : (isUserBlocked = false)

     const followingRes = await prisma.follower.findFirst({
        where: {
          followerId: currentUserId,
          followingId: user.id,
        }
      })
    followingRes ? (isFollowing = true) : (isFollowing = false)

     const followingSentRes = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: user.id,
        }
      })
    followingSentRes ? (isFollowingSent = true) : (isFollowingSent = false)
  }

  


  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black font-semibold">
            {(user.name && user.surname ? user.name + " " + user.surname : user.username)}
          </span>
          <span className="text-sm">{ user.username}</span>
        </div>
        <p>
         {user.description && <p>{user.description}</p> }
        </p>
        {user.city && <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16}></Image>
          <span className="">
            Living in <b>{user.city}</b>
          </span>
        </div> }
        { user.school &&   <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16}></Image>
          <span className="">
            Went to <b>{ user.school}</b>
          </span>
        </div>}
      { user.work && <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16}></Image>
          <span className="">
            Works at <b>{ user.work}</b>
          </span>
        </div>}
      
        <div className="flex justify-between items-center">
            {user.website && <div className="flex gap-2">
            <Image src="/link.png" alt="" width={16} height={16}></Image>
            <Link
              href={user.website}
              className="text-blue-500 font-medium"
            >
              {user.website}
            </Link>
          </div> }
          
          <div className="flex gap-2">
            <Image src="/work.png" alt="" width={16} height={16}></Image>
            <span className="">Joined { formattedDate}</span>
          </div>
        </div>
        <UserInfoCardInteraction userId={user.id} currentUserId={currentUserId} isBlocked={ isUserBlocked} isFollowing={isFollowing} isFollowingSent={isFollowingSent} />
      </div>
    </div>
  );
}
