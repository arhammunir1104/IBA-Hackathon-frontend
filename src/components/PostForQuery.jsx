import React from 'react'
import { Heart } from "lucide-react";
import { Link } from 'react-router-dom';
export default function PostForQuery() {
  return (
    <Link className="bg-white p-4 shadow-md rounded-lg flex space-x-4 border border-gray-300 cursor-pointer" to="">;
          {/* Left: Image */}
          <img
            src="https://via.placeholder.com/80"
            alt="Work Preview"
            className="w-[80px] h-[80px] rounded-full"
          />

          {/* Right: User Info & Details */}
          <div className="flex flex-col justify-between">
            {/* User Name */}
            <h3 className="text-lg font-semibold">John Doe</h3>
            {/* Description */}
            <p className="text-gray-600">
              Created a stunning website using React and TailwindCSS. 🚀
            </p>
            {/* Likes Section */}
            <div className="flex items-center space-x-2 mt-2">
              <Heart className="text-red-500 w-5 h-5 cursor-pointer" />
              <span className="text-gray-700">120 Likes</span>
            </div>
          </div>
        </Link>
  )
}
