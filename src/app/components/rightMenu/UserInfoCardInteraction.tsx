"use client";
import React from "react";

export default function UserInfoCardInteraction({
  userId,
  currentUserId,
  isBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
  currentUserId: string;
  isBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) {
  return (
    <>
      <form action="">
        <button className="w-full bg-blue-500 p-2 rounded-md text-white text-sm">
          {isFollowing
            ? "Following"
            : isFollowingSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action="" className="self-end">
        <span className=" text-red-500 text-xs cursor-pointer">
          {isBlocked ? "Unblock User" : "Block User"}
        </span>
      </form>
    </>
  );
}
