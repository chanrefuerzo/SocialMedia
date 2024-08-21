import React from "react";
import Image from "next/image";
import Comments from "./Comments";
import { Post as PostType, User } from "@prisma/client";
import PostInteraction from "./PostInteraction";

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
      <PostInteraction
        postId={post.id}
        likes={post.likes.map((like) => like.userId)}
        commentNumber={post._count.comments}
      />
      <div className="">
        <Comments />
      </div>
    </div>
  );
}
