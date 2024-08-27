"use client";

import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useState } from "react";
import AddPostButton from "./AddPostButton";
import { addPost } from "@/lib/action";

export default function AddPost() {
  const { user, isLoaded } = useUser();
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();

  if (!isLoaded) {
    return "Loading...";
  }
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* Avatar*/}
      <Image
        src={user?.imageUrl || "noAvatar.png"}
        alt="avatar-post"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST*/}
      <div className="flex-1 ">
        {/* TEXT*/}
        <form
          action={(formData) => addPost(formData, img?.secure_url)}
          className="flex gap-4"
        >
          <textarea
            name="desc"
            id=""
            placeholder="What's on your mind?"
            className="bg-slate-100 rounded-lg flex-1 p-2"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div>
            <Image
              src="/emoji.png"
              alt="emoji"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            <AddPostButton />
          </div>
        </form>

        {/* Options */}
        <div className="flex gap-4 items-center mt-2 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="Sosyal"
            onSuccess={(result, { widget }) => {
              setImg(result.info);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => open()}
                >
                  <Image
                    src="/addImage.png"
                    alt="emoji"
                    width={20}
                    height={20}
                    className="w-5 h-5 cursor-pointer self-end"
                  />
                  Photo
                </div>
              );
            }}
          </CldUploadWidget>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addVideo.png"
              alt="emoji"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/poll.png"
              alt="emoji"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addevent.png"
              alt="emoji"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            Event
          </div>
        </div>
      </div>
    </div>
  );
}
