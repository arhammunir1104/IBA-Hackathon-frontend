import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Navbar2 from '@/components/Navbar2';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { apiContext } from '@/context/ApiContext';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';

export default function Signup() {

    const {token,signupUser} = useContext(apiContext);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    
        useEffect(()=>{
            if(token){
                navigate('/dashboard'); // Redirect to dashboard if user is already logged in
            }
        },[token])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await signupUser({name : fullName, email, password, registerType: "email" });

            if(res?.status === "success"){
                toast.success("Signup successful!");
                navigate('/dashboard'); // Redirect after signup
            }
            else{
                setLoading(true);
                toast.error(res?.message);
            }

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSuccess = async (credentialResponse) => {
        try {
            const decoded = jwtDecode(credentialResponse.credential);
            const { name, email } = decoded; // Extract Google user details

            const res = await signupUser({name , email, password :"", registerType: "google" });

            if(res?.status === "success"){
                toast.success("Signup successful!");
                navigate('/dashboard'); // Redirect after signup
            }
            else{
                setLoading(true);
                toast.error(res?.message);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
        
        {
            token
            ?
            <> </>
            :

            <>
            <Navbar2 />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-[420px] h-[520px] flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold text-center mb-6 text-green-700">Sign Up</h2>
                    {error && <p className="text-red-500 text-center mb-3">{error}</p>}
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Full Name" 
                            className="border border-gray-300 p-3 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-green-400" 
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="border border-gray-300 p-3 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-green-400" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="border border-gray-300 p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-400" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        
                        <button 
                            type="submit" 
                            className="bg-green-500 text-white px-4 py-3 rounded-full w-full text-lg font-semibold hover:bg-green-600 transition"
                            disabled={loading}
                        >
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        
                        <div className="relative text-center mt-4">
                            <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 border-t border-gray-300"></span>
                            <span className="bg-white px-3 text-gray-500 relative">OR</span>
                        </div>
                        
                        <div className="flex justify-center mt-4">
        <GoogleLogin
        onSuccess={handleGoogleSuccess }
        onError={() => {
            // console.log('Login Failed');
        }}
        />
                        </div>
                    </form>
    
                    <p className="mt-4 text-center text-gray-600">
                        Already have an account? <Link to="/login" className="text-green-600 font-semibold">Login</Link>
                    </p>
                </div>
            </div>
            </>
        }
        </>
       
    );
}
