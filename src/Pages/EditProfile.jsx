import React, { useState } from 'react';
import user from "../assets/user.webp"
import Navbar2 from '@/components/Navbar2';

export default function EditProfile() {
  const [name, setName] = useState('Abdul Moazzim');
  const [username, setUsername] = useState('@AbdulMoazzim');
  const [email, setEmail] = useState('abdulmoazzim0815@gmail.com');
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    alert('Profile updated successfully!');
  };

  return (
    <>
    <Navbar2 />
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md m-14">
      <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
      <div className="flex flex-col items-center">
        <label className="cursor-pointer">
          <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          <img
            src={profileImage || user}
            alt="Profile"
            className="w-32 h-32 rounded-full border-2 border-gray-300 mb-4 object-cover"
          />
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-md mb-2"
          placeholder="Name"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded-md mb-2"
          placeholder="Username"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-md mb-2"
          placeholder="Email"
        />
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3 hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </div>
    </>
  );
}
