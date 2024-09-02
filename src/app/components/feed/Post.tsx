import React, { Suspense } from "react";
import Image from "next/image";
import Comments from "./Comments";
import { Post as PostType, User } from "@prisma/client";
import PostInteraction from "./PostInteraction";
import PostInfo from "./PostInfo";
import { auth } from "@clerk/nextjs/server";

type FeedPostType = PostType & { user: User } & {
  likes: [{ userId: string }];
} & {
  _count: { comments: number };
};

const { userId } = auth();
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
        {userId === post.user.id && <PostInfo postId={post.id} />}{" "}
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
      <Suspense fallback="loading">
        <PostInteraction
          postId={post.id}
          likes={post.likes.map((like) => like.userId)}
          commentNumber={post._count.comments}
        />
      </Suspense>
      <Suspense fallback="loading">
        <div className="">
          <Comments postId={post.id} />
        </div>
      </Suspense>
    </div>
  );
}
