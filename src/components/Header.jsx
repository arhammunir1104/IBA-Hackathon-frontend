import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">My Website</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-black">Home</a>
          <a href="#" className="text-gray-700 hover:text-black">About</a>
          <a href="#" className="text-gray-700 hover:text-black">Services</a>
          <a href="#" className="text-gray-700 hover:text-black">Contact</a>
        </nav>
        <button className="hidden md:inline-block bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <span className="text-xl">✖</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <a href="#" className="block py-2 text-gray-700 hover:text-black">Home</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-black">About</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-black">Services</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-black">Contact</a>
          <button className="w-full mt-2 bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
        </div>
      )}
    </header>
  );
}
