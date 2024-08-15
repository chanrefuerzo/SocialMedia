"use client";

import { updateProfile } from "@/lib/action";
import { User } from "@prisma/client";
import Image from "next/image";
import React, { useState } from "react";

export default function updateUser({ user }: { user: User }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <span
        className="text-blue-500 text-xs cursor-pointer "
        onClick={() => setOpen(true)}
      >
        Update
      </span>
      {open && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
          <form
            action={updateProfile}
            className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative"
          >
            {/* Title */}
            <h1>Update Profile</h1>
            <div className="mt-4 text-xs text-gray-500">
              Use the navbar profile to change the avatar or username
            </div>

            {/* CoverPicture */}
            <div className="flex flex-col gap-4 my-4">
              <label htmlFor="">Cover Picture</label>
              <div className="flex items-center gap-2 cursor-pointer">
                <Image
                  src={user.cover || "./noCover.png"}
                  alt=""
                  width={48}
                  height={32}
                  className=" w-12 h-8 rounded-md object-cover"
                />
                <span className="text-xs underline text-gray-600">Change</span>
              </div>
            </div>
            {/* Wrapper */}
            <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
              {/* Inputs */}
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder={user.name || "Chan"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="name"
                />
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  Surname
                </label>
                <input
                  type="text"
                  placeholder={user.username || "Milby"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="surname"
                />
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  Description{" "}
                </label>
                <input
                  type="text"
                  placeholder={user.description || "Life is HERE"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="description"
                />
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  City{" "}
                </label>
                <input
                  type="text"
                  placeholder={user.city || "Davao City"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="city"
                />
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  School{" "}
                </label>
                <input
                  type="text"
                  placeholder={user.school || "Addu"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="school"
                />
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  Work{" "}
                </label>
                <input
                  type="text"
                  placeholder={user.work || "Stripper"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="work"
                />
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  Website{" "}
                </label>
                <input
                  type="text"
                  placeholder={user.website || "www.youporn.com"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="website"
                />
              </div>
            </div>

            <button className="bg-blue-500 p-2 mt-2 rounded-md text-white">
              Update
            </button>
            <div
              className="absolute text-lg right-2 top-3 cursor-pointer "
              onClick={() => setOpen(false)}
            >
              x
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
