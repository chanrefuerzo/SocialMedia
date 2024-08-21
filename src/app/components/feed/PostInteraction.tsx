"use client";

import { swtichLike } from "@/lib/action";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";

export default function PostInteraction({
  postId,
  likes,
  commentNumber,
}: {
  postId: number;
  likes: string[];
  commentNumber: number;
}) {
  const { isLoaded, userId } = useAuth();

  const [likeState, setLikeState] = useState({
    likeCount: likes.length,
    isLike: userId ? likes.includes(userId) : false,
  });

  const [optimisticLike, switchOptimisticLike] = useOptimistic(
    likeState,
    (state, value) => {
      return {
        likeCount: state.isLike ? state.likeCount - 1 : state.likeCount + 1,
        isLike: !state.isLike,
      };
    }
  );

  const likeAction = async () => {
    switchOptimisticLike("");
    swtichLike(postId);
    setLikeState((state) => ({
      likeCount: state.isLike ? state.likeCount - 1 : state.likeCount + 1,
      isLike: !state.isLike,
    }));
    try {
    } catch (error) {}
  };
  return (
    <div className="flex items-center justify-between text-sm my-4">
      {/* Left */}
      <div className="flex gap-8">
        <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
          <form action={likeAction}>
            <button>
              <Image
                src={optimisticLike.isLike ? "/liked.png" : "/like.png"}
                alt=""
                width={16}
                height={16}
                className="cursor-pointer"
              />
            </button>
          </form>

          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            {optimisticLike.likeCount + " "}
            <span className="hidden md:inline">Likes</span>
          </span>
        </div>
        <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
          <Image
            src="/comment.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            123 <span className="hidden md:inline">Commnets</span>
          </span>
        </div>
      </div>
      {/* Right */}
      <div className="">
        <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
          <Image
            src="/share.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            123 <span className="hidden md:inline">Shares</span>
          </span>
        </div>
      </div>
    </div>
  );
}
