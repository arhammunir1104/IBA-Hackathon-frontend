import React from 'react'
import { Link } from 'react-router-dom';
import google from "../assets/google.svg"
import Navbar2 from '@/components/Navbar2';

export default function Signup() {
    return (
      <>
      <Navbar2 />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form className="bg-white p-6 rounded-lg shadow-lg">
        <input type="text" placeholder="Name" className="border p-2 rounded w-full mb-2" />
        <input type="email" placeholder="Email" className="border p-2 rounded w-full mb-2" />
        <input type="password" placeholder="Password" className="border p-2 rounded w-full mb-2" />
        <button className="bg-green-500 text-white px-4 py-2 rounded w-full">Sign Up</button>
        <div className='flex w-full items-center justify-center'>
            <div className='flex justify-around items-center w-1/2 mt-6 py-2 border-red-500 border-2 rounded-md'>
                <button className=" px-6">Sign Up with Google</button>
                <img src={google} className='w-[40px]'/>
            </div>
        </div>
      </form>
      <p className="mt-2">Already have an account? <Link to="/login" className="text-green-500">Login</Link></p>
    </div>
    </>
      );
}
