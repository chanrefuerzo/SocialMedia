import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";
import StoryList from "./StoryList";

export default async function Stories() {
  const { userId: currentUserID } = auth();
  if (!currentUserID) return null;
  const stories = await prisma.story.findMany({
    where: {
      expiredAt: {
        gt: new Date(),
      },
      OR: [
        {
          user: {
            followers: {
              some: {
                followerId: currentUserID,
              },
            },
          },
        },
        {
          userId: currentUserID,
        },
      ],
    },
    include: {
      user: true,
    },
  });
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className=" flex gap-8 w-max">
        <StoryList stories={stories} userId={currentUserID} />
      </div>
    </div>
  );
}
