import React from 'react'

const Register = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='bg-gray-500 p-2 rounded-md min-w-[400px]'>
                <div className='bg-white p-3'>
                    <h1 className='text-2xl font-bold'>Register</h1>
                    <p className='text-sm text-gray-600'>Already Have an Account? {" "}
                        <span className='font-semibold text-black text-lg'>Login</span>
                    </p>
                    <form action="" className='mt-5 flex flex-col gap-3'>
                        <div>
                            <p className='text-base font-medium text-gray-900'>Name</p>
                            <input
                                type="text"
                                className='mt-1 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400' />
                        </div>
                        <div>
                            <p className='text-base font-medium text-gray-900'>Email</p>
                            <input
                                type="email"
                                className='mt-1 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400' />
                        </div>
                        <div>
                            <p className='text-base font-medium text-gray-900'>Password</p>
                            <input
                                type="password"
                                className='mt-1 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400' />
                        </div>
                        <div>
                            <p className='text-base font-medium text-gray-900'>Confirm Password</p>
                            <input
                                type="password"
                                className='mt-1 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400' />
                        </div>
                        <button className='bg-black font-semibold text-white p-2 rounded-md hover:bg-[#191919]'>
                            Register
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

export default Register