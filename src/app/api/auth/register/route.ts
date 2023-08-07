import { connect } from "@/db/mongo.config";
import { User } from "@/model/UserSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import vine, { errors } from "@vinejs/vine";
import { registerSchema } from "@/validator/authSchema";
import { ErrorReporter } from "@/validator/errorReporter";

connect();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validator = vine.compile(registerSchema);
    validator.errorReporter = () => new ErrorReporter();
    const output = await validator.validate(body);
    const user = await User.findOne({ email: output.email });
    if (user) {
      return NextResponse.json(
        {
          status: 400,
          message: {
            email: "Email Already Taken",
          },
        },
        { status: 200 }
      );
    } else {
      const passwordBcrypt = await bcrypt.hash(output.password, 10);
      output.password = passwordBcrypt;

      await User.create(output);
      return NextResponse.json(
        {
          status: 200,
          message: "Account Created Successfully! Please login to continue",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json(
        { status: 400, message: error.messages },
        { status: 200 }
      );
    }
  }
}
