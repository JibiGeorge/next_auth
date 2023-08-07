import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import SignOutBtn from "@/components/SignOutBtn";

export default async function Home() {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login')
  }
  
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-2xl font-bold bg-green-200 p-3 rounded-lg">Welcome Back</h1>
        <SignOutBtn />
      </div>
    </div>
  )
}
