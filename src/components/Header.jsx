import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>

      <div className=" mx-auto flex items-center justify-between py-4 px-10 bg-white shadow-md h-[60px]">
        <h1 className="text-xl font-bold">My Website</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-black">Home</a>
          <a href="#" className="text-gray-700 hover:text-black">About</a>
          <a href="#" className="text-gray-700 hover:text-black">Services</a>
          <a href="#" className="text-gray-700 hover:text-black">Contact</a>
        </nav>
        <div className="hidden md:inline-block">
          <button className=" bg-blue-500 text-white px-4 py-2 rounded mx-5">Sign Up</button>
          <button className=" bg-blue-500 text-white px-4 py-2 rounded mx-5">Log In</button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <span className="text-xl">✖</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>
      </div>
      <div className={`md:hidden bg-white shadow-md p-4 flex justify-center items-center flex-col ease-linear duration-1000 ${isOpen ? "translate-y-[0]" : "translate-y-[-400px]"}`}>
        <a href="#" className="block py-2 text-gray-700 hover:text-black">Home</a>
        <a href="#" className="block py-2 text-gray-700 hover:text-black">About</a>
        <a href="#" className="block py-2 text-gray-700 hover:text-black">Services</a>
        <a href="#" className="block py-2 text-gray-700 hover:text-black">Contact</a>
        <button className="w-full mt-2 bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
        <button className="w-full mt-2 bg-blue-500 text-white px-4 py-2 rounded">Log In</button>
      </div>
    </div>
  );
}
