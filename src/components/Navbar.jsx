import React, { useState } from 'react'
import logo from '../assets/TE logo.jpeg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className='w-[100%] p-4 text-3xl font-bold flex flex-col gap-8
      bg-gray-500 sm:bg-white'>
        <div className="flex gap-4 items-center cursor-pointer">
          <div className='flex justify-center w-full'><img className='h-[100px] w-[100px] items-center' src={logo}></img></div>
        </div>
        <div className="flex gap-4 items-center cursor-pointer">
          <div>🏠</div> Home
        </div>
        <div className="flex gap-4  items-center cursor-pointer">
          <div>🔍</div> Explore
        </div>
        <div className="flex gap-4 items-center cursor-pointer">
          <div>💬</div> Message
        </div>
        <div className="flex gap-4 items-center cursor-pointer">
          <div>⚙️</div> Settings
        </div>
        <div className="border p-3 text-center w-[50%] bg-black text-white rounded-4xl text-xl font-bold cursor-pointer
        sm:w-[80%]">
          <div></div>
          <Link to='/post'><div>Post</div></Link>
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
