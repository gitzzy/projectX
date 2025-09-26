import React from "react";
import logo from "../assets/TE logo.jpeg";

export default function FullPost() {
  return (
    <div className="border w-full sm:w-full overflow-y-auto max-h-screen p-2 flex flex-col">
      <div className="flex gap-4 items-center p-4 justify-between">
        <div className="cursor-pointer border w-30 flex justify-center rounded-xl bg-red-500 text-white h-10 items-center">
          Cancel
        </div>
        <div className="cursor-pointer border w-30 flex justify-center rounded-xl bg-green-500 text-white h-10 items-center">
          Post
        </div>
      </div>
      <div className="pt-4">
        <div className="flex items-center w-full gap-4 justify-center">
          <img
            src="https://avatarfiles.alphacoders.com/375/thumb-1920-375473.jpeg"
            className="w-[60px] h-[60px] rounded-full object-cover"
            alt="avatar"
          />
          <div className="flex flex-col gap-2">
            <textarea
              type="text"
              className="border p-2 rounded-lg w-[400px] h-[100px]"
              placeholder="Write a comment..."
            ></textarea>
            <div className="flex gap-2">
                <div>📷</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
