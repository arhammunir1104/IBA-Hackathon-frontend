import React, { useState } from "react";
import PostForQuery from "../components/PostForQuery";
import user from "../assets/user.webp";
import Navbar2 from "@/components/Navbar2";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  // Dummy data for followers and following with avatars
  const followers = [
    { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Jane Smith", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Alice Johnson", avatar: "https://randomuser.me/api/portraits/women/3.jpg" }
  ];

  const following = [
    { name: "Michael Brown", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    { name: "Emily Davis", avatar: "https://randomuser.me/api/portraits/women/5.jpg" }
  ];

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  return (
    <>
      <Navbar2 />

      <div className="flex flex-col md:flex-row px-4">
        {/* Profile Section */}
        <div className="md:w-[25vw] p-4 flex flex-col items-center md:border-r-2 border-gray-300 md:h-screen py-[60px] border-b-2">
          <img
            src={user}
            alt="User Profile"
            className="w-[200px] h-[200px] rounded-full mb-4 border-4"
          />
          <h2 className="text-xl font-semibold">Abdul Moazzim</h2>
          <p>@AbdulMoazzim</p>
          <div className="flex gap-4 mt-2">
            <span className="cursor-pointer text-blue-500" onClick={() => openModal("Followers")}>
              Followers: <strong>{followers.length}</strong>
            </span>
            <span className="cursor-pointer text-blue-500" onClick={() => openModal("Following")}>
              Following: <strong>{following.length}</strong>
            </span>
          </div>
          <div className="mt-4 flex flex-col items-center gap-2">
            <a href="https://linkedin.com/in/abdulmoazzim" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              LinkedIn
            </a>
            <a href="mailto:abdulmoazzim0815@gmail.com" className="text-gray-500">
              abdulmoazzim0815@gmail.com
            </a>
            <Link to="/edit">
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="md:w-[70vw] px-4 py-[60px]">
          {/* Amount Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Total Amount Earned</h3>
              <p className="text-2xl font-bold text-green-700">$5000</p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Total Donation Amount</h3>
              <p className="text-2xl font-bold text-red-700">$1200</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Total Amount Balance</h3>
              <p className="text-2xl font-bold text-blue-700">$3800</p>
            </div>
          </div>

          {/* Posts Section */}
          <h2 className="text-xl font-semibold mb-4">Posts</h2>
          <div className="p-3">
            <PostForQuery />
          </div>
        </div>
      </div>

      {/* Followers/Following Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
            <h2 className="text-lg font-semibold mb-3">{modalType} List</h2>
            <ul className="space-y-2">
              {(modalType === "Followers" ? followers : following).map((user, index) => (
                <li key={index} className="flex items-center gap-3 border-b py-2">
                  <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                  <span>{user.name}</span>
                </li>
              ))}
            </ul>
            <button className="mt-4 w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
