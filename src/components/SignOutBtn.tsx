"use client"

import { signOut } from 'next-auth/react'
import React from 'react'

const SignOutBtn = () => {
    return (
        <button
            className="w-fit bg-purple-400 p-2 rounded-lg hover:bg-purple-300 font-semibold"
            onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
        >
            Sign Out
        </button>
    )
}

export default SignOutBtn