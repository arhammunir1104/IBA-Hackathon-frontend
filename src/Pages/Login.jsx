import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar2 from '@/components/Navbar2';
import { apiContext } from '@/context/ApiContext';
import { GoogleLogin } from '@react-oauth/google';
import Cookies from 'js-cookie';
import {jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

export default function Login() {
    const {server, loginUser, token} = useContext(apiContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        if(token){
            navigate('/dashboard'); // Redirect to dashboard if user is already logged in
        }
    },[token])

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await loginUser({email, password, loginType : "email"});
            if(res?.status === "success"){
                toast.success("Login successful!");
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
            const { email } = decoded; // Extract Google user details
            const res = await loginUser({email, password : "", loginType : "google"});
            if(res?.status === "success"){
                toast.success("Login successful!");
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

    return  (
        <>
        {
            token
            ?
            <>
            </>
            :
            <>
            <Navbar2 />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] h-[480px] flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold text-center mb-6 text-green-700">Login</h2>

                    <form className="flex flex-col" onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-gray-300 p-3 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="border border-gray-300 p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button type="submit" className="bg-green-500 text-white px-4 py-3 rounded-full w-full text-lg font-semibold hover:bg-green-600 transition">
                            {loading ? 'Logging in...' : 'Login'}
                        </button>

                        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                        <div className="relative text-center mt-4">
                            <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 border-t border-gray-300"></span>
                            <span className="bg-white px-3 text-gray-500 relative">OR</span>
                        </div>

                        {/* Google Login Button */}
                        <div className="flex justify-center mt-4">
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onError={() => {
                                    // console.log('Login Failed');
                                }}
                            />
                        </div>
                    </form>

                    <p className="mt-4 text-center text-gray-600">
                        Don't have an account? <Link to="/signup" className="text-green-600 font-semibold">Sign Up</Link>
                    </p>
                </div>
            </div>
        </>

        }
        </>
       
    );
}