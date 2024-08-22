import React, { Suspense } from "react";
import FriendRequest from "./FriendRequest";
import Birthday from "./Birthday";
import Advertisement from "../Advertisement";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";

export default function RightMenu({ user }: { user?: User }) {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="loading...">
          <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
          <UserMediaCard user={user} />
          </Suspense>
        </>
      
      ) : null}
      <FriendRequest />
      <Birthday />
      <Advertisement size="md" />
      <div className="">Right Menu</div>
      <div className="">Right Menu</div>
    </div>
  );
}
