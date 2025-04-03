"use client";

import Lottie from "lottie-react";
import Link from "next/link";
import React from "react";
import animationData from "@/public/assets/data.json";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="shadow-lg shadow-gray-700/30 border-b border-gray-700 bg-[#1a1b29]">
      <div className="container mx-auto xl:max-w-[1180px] text-white flex items-center justify-between py-4 px-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="h-[70px] w-[70px]">
            <Lottie animationData={animationData} className="h-full w-full" />
          </div>
          <p className="font-bold uppercase text-xl hover:text-purple-500">Blogs</p>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8 text-lg">
          <Link href="/" className="hover:text-purple-400 cursor-pointer">Home</Link>
          <Link href="/" className="hover:text-purple-400 cursor-pointer">Blogs</Link>
          <Link href="/" className="hover:text-purple-400 cursor-pointer">Pages</Link>
          <Link href="/" className="hover:text-purple-400 cursor-pointer">Contact</Link>
        </ul>

        {/* Search Bar */}
        <div className="flex items-center bg-[#242535] px-3 py-2 rounded-md border border-gray-600">
          <input
            className="w-full bg-transparent outline-none text-white placeholder-gray-400 px-2"
            type="text"
            placeholder="Search..."
          />
          <BiSearch fontSize={22} className="cursor-pointer text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
