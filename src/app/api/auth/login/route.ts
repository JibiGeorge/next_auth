import { connect } from "@/db/mongo.config";
import { User } from "@/model/UserSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

connect();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const findUser = await User.findOne({ email: body.email });
    if (findUser) {
      const checkPassword = await bcrypt.compare(
        body.password,
        findUser.password
      );
      
      if (checkPassword) {
        return NextResponse.json(
          { status: 200, message: "User logged In" },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { status: 400, message: "Please check you credentials" },
          { status: 200 }
        );
      }
    } else {
      return NextResponse.json(
        { status: 400, message: "No Account Found" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
    
  }
}
