"use client"

import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Register = () => {

    const [authState, setAuthState] = useState<registerInputType>({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<registerErrorType>({});

    const router = useRouter()

    const handleRegister = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setLoading(true)
        await axios.post("/api/auth/register", authState)
            .then((res) => {
                setLoading(false)
                const response = res.data;
                if (response.status == 200) {
                    router.push(`/login?message=${response.message}`)
                } else if (response.status == 400) {
                    setError(response.message)
                }
            })
            .catch((error) => {
                console.log('error', error);
                setLoading(false)
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
                    <h1 className='text-2xl font-bold'>Register</h1>
                    <p className='text-sm text-gray-600 mb-5'>Already Have an Account? {" "}
                        <span className='font-semibold text-black text-lg'>Login</span>
                    </p>
                    <form onSubmit={handleRegister} className=' flex flex-col gap-3'>
                        <div>
                            <p className='text-base font-medium text-gray-900'>Name</p>
                            <input
                                onChange={(e) => setAuthState({ ...authState, name: e.target.value })}
                                type="text"
                                className='mt-1 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400' />
                            <span className='text-red-500 font-bold'>{error?.name}</span>
                        </div>
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
                            <span className='text-red-500 font-bold'>{error?.password}</span>
                        </div>
                        <div>
                            <p className='text-base font-medium text-gray-900'>Confirm Password</p>
                            <input
                                onChange={(e) => setAuthState({ ...authState, password_confirmation: e.target.value })}
                                type="password"
                                className='mt-1 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400' />
                        </div>
                        <button className='bg-black font-semibold text-white p-2 rounded-md hover:bg-[#191919]'>
                            {loading ? "Loading" : "Register"}
                        </button>
                    </form>
                    <p className='text-center p-3'> -- OR -- </p>
                    <button
                        onClick={githubSignIn}
                        className='bg-white w-full font-semibold text-black p-2 rounded-md border border-gray-400'
                    >
                        Continue with Git Hub
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register