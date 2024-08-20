import React from "react";
import Image from "next/image";
import Comments from "./Comments";
import { Post as PostType, User } from "@prisma/client";

type FeedPostType = PostType & { user: User } & {
  likes: [{ userId: string }];
} & {
  _count: { comments: number };
};

export default function Post({ post }: { post: FeedPostType }) {
  return (
    <div className="flex flex-col gap-4">
      {/* User */}
      <div className="flex items-center justify-between">
        {/* Avatar & Name */}
        <div className="flex gap-4 items-center">
          <Image
            src={post.user.avatar || "/noAvatar.png"}
            alt=""
            width={40}
            height={40}
            className=" rounded-full w-10 h-10"
          />
          <span className="font-medium">
            {" "}
            {post.user.name && post.user.username
              ? post.user.name + " " + post.user.surname
              : post.user.username}{" "}
          </span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} className="" />
      </div>
      {/* Description */}
      <div className="flex flex-col gap-4">
        {/* Caption */}
        <div className="">{post.desc}</div>
        {/* Image  */}
        {post.img && (
          <div className="w-full min-h-96 relative ">
            <Image
              src={post.img}
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}
      </div>
      {/* Interaction */}
      <div className="flex items-center justify-between text-sm my-4">
        {/* Left */}
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>
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
      <div className="">
        <Comments />
      </div>
    </div>
  );
}
