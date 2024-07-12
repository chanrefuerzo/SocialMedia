import React from "react";

export default function Advertisement({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-sm">
      Advertisement
    </div>
  );
}
