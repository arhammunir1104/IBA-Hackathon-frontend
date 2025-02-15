import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; // Google Icon
import Navbar2 from '@/components/Navbar2';

export default function Signup() {
    return (
        <>
        <Navbar2 />
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[420px] h-[520px] flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-center mb-6 text-green-700">Sign Up</h2>
                
                <form className="flex flex-col">
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="border border-gray-300 p-3 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-green-400" 
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="border border-gray-300 p-3 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-green-400" 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="border border-gray-300 p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-400" 
                    />
                    
                    <button className="bg-green-500 text-white px-4 py-3 rounded-full w-full text-lg font-semibold hover:bg-green-600 transition">
                        Sign Up
                    </button>
                    
                    <div className="relative text-center mt-4">
                        <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 border-t border-gray-300"></span>
                        <span className="bg-white px-3 text-gray-500 relative">OR</span>
                    </div>
                    
                    {/* Google Signup Button */}
                    <button className="flex items-center justify-center gap-3 border border-green-500 text-green-700 px-4 py-3 rounded-full w-full mt-4 font-semibold hover:bg-green-500 hover:text-white transition">
                        <FcGoogle size={22} /> Sign Up with Google
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-600">
                    Already have an account? <Link to="/login" className="text-green-600 font-semibold">Login</Link>
                </p>
            </div>
        </div>
        </>
    );
}
