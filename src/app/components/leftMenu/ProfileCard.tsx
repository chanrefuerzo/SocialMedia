import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

const ProfileCard = async () => {

  const { userId } = auth()
  
  if (!userId) return null

  const user = await prisma.user.findFirst({
    where: {
      id: userId
    },
    include: {
      _count: {
        select: {
          followers:true
        }
      }
    }
  })

  console.log(user)
  if (!user) return null
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative ">
        <Image
          src={user.cover || "/noCover.png"}
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={user.avatar || "/noAvatar.png"}
          alt=""
          width={48}
          height={48}
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover"
        />
      </div>
      <div className="flex flex-col  items-center gap-2 ">
        <span className="flex justify-center mt-2 font-semibold text-black text-lg">
         {(user.name && user.surname) ? user.name + " " + user.surname : user.username }
        </span>

        <span className="">{user._count.followers} followers</span>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md ">
          My Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileCard
