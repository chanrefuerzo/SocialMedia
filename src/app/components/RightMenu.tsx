import React from "react";
import FriendRequest from "./FriendRequest";
import Birthday from "./Birthday";
import Advertisement from "./Advertisement";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

export default function RightMenu({ userId }: { userId?: string }) {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
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
