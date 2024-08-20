import React from "react";
import Post from "./Post";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";

export default async function Feed({ username }: { username: string }) {
  const { userId } = auth();

  let posts: any[] = [];

  if (username) {
    posts = await prisma.post.findMany({
      where: {
        user: {
          username: username,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  if (!username && userId) {
    const following = await prisma.follower.findMany({
      where: {
        followerId: userId,
      },
      select: {
        followingId: true,
      },
    });

    const followingIds = following.map((id) => id.followingId);
    console.log(followingIds);
    posts = await prisma.post.findMany({
      where: {
        userId: {
          in: followingIds,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return (
    <div className="bg-white p-4 items-center flex flex-col shadow-md rounded-lg gap-12">
      {posts.length
        ? posts.map((post) => <Post key={post.id} post={post} />)
        : "No post found"}
    </div>
  );
}
