import React from 'react'
import { Link } from 'react-router-dom';
import google from "../assets/google.svg"
import Navbar2 from '@/components/Navbar2';


export default function Login() {
    return (
        <>
      <Navbar2 />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form className="bg-white p-6 rounded-lg shadow-lg">
                <input type="email" placeholder="Email" className="border p-2 rounded w-full mb-2" />
                <input type="password" placeholder="Password" className="border p-2 rounded w-full mb-2" />
                <button className="bg-green-500 text-white px-4 py-2 rounded w-full">Sign Up</button>
                <div className='flex w-full items-center justify-center'>
                    <div className='flex justify-around items-center w-1/2 mt-6 py-2 border-red-500 border-2 rounded-md'>
                        <button className=" px-6">Log In with Google</button>
                        <img src={google} className='w-[40px]'/>
                    </div>
                </div>
              </form>
        <p className="mt-2">Don't have an account? <Link to="/signup" className="text-green-500">Sign Up</Link></p>
      </div>
      </>
      );
}
