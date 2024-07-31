import React from "react";
import Post from "./Post";

export default function Feed() {
  return (
    <div className="bg-white p-4 items-center flex flex-col shadow-md rounded-lg gap-12">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
