import Feed from "@/app/components/Feed";
import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";
import React from "react";

export default function ProfilePage() {
  return (
    <div className="flex gap-6 pt-6">
      {/*Left */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      {/*Center */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Feed />
        </div>
      </div>
      {/*Right */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
}
