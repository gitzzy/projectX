import React, { useState } from 'react'

export default function Menubar() {
  const [tog, setTog] = useState(false)

  return (
    <>
      {/* Toggle Button (only mobile & tablet) */}
      <div 
        onClick={() => setTog(!tog)} 
        className="cursor-pointer p-4 lg:hidden md:hidden"
      >
        {!tog ? (
          <div>
            <img
              className="w-[30px]"
              src="https://img.icons8.com/?size=100&id=3096&format=png&color=000000"
              alt="menu"
            />
          </div>
        ) : (
          <div>
            <img
              className="w-[30px]"
              src="https://img.icons8.com/?size=100&id=6483&format=png&color=000000"
              alt="close"
            />
          </div>
        )}
      </div>

      {/* Sidebar Menu */}
      <div
        className={`text-black flex flex-col gap-5 w-[60%]
        text-2xl font-extrabold text-poppins p-5 pt-10
        ${tog ? "visible" : "invisible"} 
        lg:block lg:w-[30%] lg:flex-col lg:gap-5 lg:p-10 lg:border
        md:block md:w-[30%] md:flex-col md:gap-10 lg:m-10`}
      >
        <div className="flex gap-4 lg:gap-6 items-center cursor-pointer">
          <div>🏠</div> Home
        </div>
        <div className="flex gap-4 lg:gap-6 items-center cursor-pointer">
          <div>🔍</div> Explore
        </div>
        <div className="flex gap-4 lg:gap-6 items-center cursor-pointer">
          <div>💬</div> Message
        </div>
        <div className="flex gap-4 lg:gap-6 items-center cursor-pointer">
          <div>⚙️</div> Settings
        </div>

        <div className="border p-3 text-center bg-black text-white rounded-4xl text-xl font-bold cursor-pointer">
          Post
        </div>

        <div className="flex gap-2 lg:gap-6 items-center cursor-pointer">
          <img
            className="border h-[50px] w-[50px] rounded-[50%]"
            src="https://avatarfiles.alphacoders.com/375/thumb-1920-375473.jpeg"
            alt="avatar"
          />
          <div className="flex flex-col justify-center">
            <div className="text-xl text-left">Name</div>
            <span className="text-sm text-gray-400">@Username</span>
          </div>
          <div className="flex font-thin text-right mx-4">
            <img
              className="w-[20px] h-[20px]"
              src="https://img.icons8.com/?size=100&id=102729&format=png&color=000000"
              alt="options"
            />
          </div>
        </div>
      </div>
    </>
  )
}
