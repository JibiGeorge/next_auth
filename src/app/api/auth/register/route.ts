import { connect } from "@/db/mongo.config";
import { User } from "@/model/UserSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

connect();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const user = await User.findOne({ email: body.email });
    if (user) {
      return NextResponse.json(
        { status: 400, message: "Email Already Taken" },
        { status: 200 }
      );
    } else {
      const passwordBcrypt = await bcrypt.hash(body.password, 10);
      body.password = passwordBcrypt;

      await User.create(body);
      return NextResponse.json(
        {
          status: 200,
          message: "Account Created Successfully! Please login to continue",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ status: 400, message: error }, { status: 200 });
  }
}
