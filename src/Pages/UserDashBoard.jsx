import React from 'react';
import PostForQuery from '../components/PostForQuery'; 
import user from "../assets/user.webp"

export default function UserDashboard() {
  return (
    <div className="flex flex-col md:flex-row px-4">
      {/* Profile Section */}
      <div className="md:w-[25vw] p-4 flex flex-col items-center md:border-r-2 border-gray-300 md:h-screen py-[60px] border-b-2">
        <img
          src={user} // Replace with user's profile image
          alt="User Profile"
          className="w-[200px] h-[200px] rounded-full mb-4 border-4"
        />
        <h2 className="text-xl font-semibold">Abdul Moazzim</h2>
        <p>@AbdulMoazzim</p>
        <div className="flex gap-4 mt-2">
          <span>Followers: <strong>12</strong></span>
          <span>Following: <strong>10</strong></span>
        </div>
        <div className="mt-4 flex flex-col items-center gap-2">
          <a href="https://linkedin.com/in/abdulmoazzim" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a>
          <a href="mailto:abdulmoazzim0815@gmail.com" className="text-gray-500">abdulmoazzim0815@gmail.com</a>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Edit Profile</button>
        </div>
      </div>
      
      {/* Posts Section */}
      <div className="md:w-[70vw] px-4 py-[60px]">
        <h2 className="text-xl font-semibold mb-4">Posts</h2>
        <div className='p-3'>
            <PostForQuery />
        </div>
      </div>
    </div>
  );
}
