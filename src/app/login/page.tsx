"use client"

import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

const Login = () => {

    const [authState, setAuthState] = useState<loginInputType>({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<loginErrorType>({});

    const params = useSearchParams();

    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setLoading(true);
        await axios.post('/api/auth/login', authState)
            .then((res) => {
                const response = res.data;
                if (response.status == 200) {
                    signIn("credentials", {
                        email: authState.email,
                        password: authState.password,
                        callbackUrl: "/",
                        redirect: true
                    })
                } else if (response.status == 400) {
                    setLoading(false)
                    setError(response.message)
                }
            })
            .catch((error) => {
                console.log('login error', error);
            })
    }

    const githubSignIn = () => {
        signIn('github', {
            callbackUrl: '/',
            redirect: true
        })
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='bg-gray-500 p-2 rounded-md min-w-[400px]'>
                <div className='bg-white p-3'>
                    <h1 className='text-2xl font-bold'>Login</h1>
                    <p className='text-sm text-gray-600 mb-5'>Don&#x27;t have an account? {" "}
                        <span className='font-semibold text-black text-lg'>Sign Up</span>
                    </p>
                    {error && <span className='text-red-500 font-regular text-[13px]'>{error?.errorMessage}</span>}
                    {params.get("message") ? <p className='bg-green-400 font-semibold rounded-md px-3 py-1 text-[13px] mb-2'>{params.get("message")}</p> : null}
                    <form onSubmit={handleLogin} className='flex flex-col gap-3'>
                        <div>
                            <p className='text-base font-medium text-gray-900'>Email</p>
                            <input
                                onChange={(e) => setAuthState({ ...authState, email: e.target.value })}
                                type="email"
                                className='mt-1 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400' />
                            <span className='text-red-500 font-bold'>{error?.email}</span>
                        </div>
                        <div>
                            <p className='text-base font-medium text-gray-900'>Password</p>
                            <input
                                onChange={(e) => setAuthState({ ...authState, password: e.target.value })}
                                type="password"
                                className='mt-1 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400' />
                            <span className='text-red-500 font-bold'>{error?.email}</span>
                        </div>
                        <button className='bg-black font-semibold text-white p-2 rounded-md hover:bg-[#191919]'>
                            {loading ? "Loading" : "Login"}
                        </button>
                    </form>
                    <p className='text-center p-3'> -- OR -- </p>
                    <button
                        onClick={githubSignIn}
                        className='bg-white w-full font-semibold text-black p-2 rounded-md border border-gray-400'>
                        Continue with Git Hub
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login