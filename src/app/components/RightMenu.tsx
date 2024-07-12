import React from "react";
import FriendRequest from "./FriendRequest";
import Birthday from "./Birthday";
import Advertisement from "./Advertisement";

export default function RightMenu({ userId }: { userId?: string }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="">
        <FriendRequest />
      </div>
      <div className="">
        <Birthday />
      </div>
      <div className="">
        <Advertisement size="md" />
      </div>
      <div className="">Right Menu</div>
      <div className="">Right Menu</div>
    </div>
  );
}
