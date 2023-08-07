"use client"

import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-2xl font-bold bg-green-200 p-3 rounded-lg">Welcome Back</h1>
        <button
          className="w-fit bg-purple-400 p-2 rounded-lg hover:bg-purple-300 font-semibold"
          onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}
