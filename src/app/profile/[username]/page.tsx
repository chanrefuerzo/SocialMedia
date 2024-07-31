import Feed from "@/app/components/feed/Feed";
import LeftMenu from "@/app/components/leftMenu/LeftMenu";
import RightMenu from "@/app/components/rightMenu/RightMenu";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const ProfilePage = async ({params}:{params:{username:string}}) => {
  

  const username = params.username
  

  const user = await prisma.user.findFirst({
    where: {
      username
    },
    include: {
      _count: {
        select: {
          followers: true,
          following: true,
          posts: true,

        }
      }
    }
  })

  if (!user) return notFound();

  const { userId: currentUserId } = auth()
  let isBlock
  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId
      }
    })
    if (res) isBlock = true
  } else {
    isBlock = false
  }
    if (isBlock) return notFound();


  return (
    <div className="flex gap-6 pt-6">
      {/*Left */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      {/*Center */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={user.cover || "/noCover.png"}
                alt=""
                fill
                className="object-cover rounded-md"
              />
              <Image
                src={user.avatar || "/noAvatar.png"}
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full object-cover absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
              />
            </div>
            <h1 className="mt-20 mb-4 font-medium text-2xl">{ (user.name && user.surname ? user.name + " " + user.surname : user.username)}</h1>
            <div className="flex  items-center justify-center gap-6">
              <div className="flex flex-col items-center ">
                <span className="font-medium">{ user._count.posts }</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center ">
                <span className="font-medium">{user._count.followers }</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center ">
                <span className="font-medium">{ user._count.following}</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      {/*Right */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu user={user} />
      </div>
    </div>
  );
}

export default ProfilePage