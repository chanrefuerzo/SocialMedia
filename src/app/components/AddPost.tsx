import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

export default function AddPost() {
  const { userId } = auth()

  // const testAction = async (formData: FormData) => {
  //   "use server"

  //   if(!userId) return;
  //   const desc = formData.get("desc") as string
  //   try {
  //     const res = await prisma.post.create({
  //       data: {
  //         userId: userId,
  //         desc: desc,
  //       }
  //     })
  //     console.log(res)
  //   } catch (err) { 
  //     console.log(err);
  //   }
  // }
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* Avatar*/}
      <Image
        src="https://images.pexels.com/photos/25396183/pexels-photo-25396183/free-photo-of-a-woman-walking-down-the-street-with-a-suitcase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="avatar-post"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST*/}
      <div className="flex-1 ">
        {/* TEXT*/}
        <form action={""} className="flex gap-4">
          <textarea
            name="desc"
            id=""
            placeholder="What's on your mind?"
            className="bg-slate-100 rounded-lg flex-1 p-2"
          ></textarea>
          <Image
            src="/emoji.png"
            alt="emoji"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
          <button>Send</button>
        </form>

        {/* Options */}
        <div className="flex gap-4 items-center mt-2 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addImage.png"
              alt="emoji"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            Photo
          </div>
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
