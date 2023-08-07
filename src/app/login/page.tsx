"use client"

import React, { useState } from 'react'

const Login = () => {

    const [authState, setAuthState] = useState<loginInputType>({
        email: "",
        password: ""
    })

    const handleLogin = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log('Login Credentials', authState);

    }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='bg-gray-500 p-2 rounded-md min-w-[400px]'>
                <div className='bg-white p-3'>
                    <h1 className='text-2xl font-bold'>Login</h1>
                    <p className='text-sm text-gray-600'>Don&#x27;t have an account? {" "}
                        <span className='font-semibold text-black text-lg'>Sign Up</span>
                    </p>
                    <form onSubmit={handleLogin} className='mt-5 flex flex-col gap-3'>
                        <div>
                            <p className='text-base font-medium text-gray-900'>Email</p>
                            <input
                                onChange={(e) => setAuthState({ ...authState, email: e.target.value })}
                                type="email"
                                className='mt-1 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400' />
                        </div>
                        <div>
                            <p className='text-base font-medium text-gray-900'>Password</p>
                            <input
                                onChange={(e) => setAuthState({ ...authState, password: e.target.value })}
                                type="password"
                                className='mt-1 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400' />
                        </div>
                        <button className='bg-black font-semibold text-white p-2 rounded-md hover:bg-[#191919]'>
                            Login
                        </button>
                    </form>
                    <p className='text-center p-3'> -- OR -- </p>
                    <button className='bg-white w-full font-semibold text-black p-2 rounded-md border border-gray-400'>
                        Continue with Git Hub
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login