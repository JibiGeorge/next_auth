import { connect } from "@/db/mongo.config";
import { User } from "@/model/UserSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import vine, { errors } from "@vinejs/vine";
import { loginSchema } from "@/validator/authSchema";
import { ErrorReporter } from "@/validator/errorReporter";

connect();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validator = vine.compile(loginSchema);
    validator.errorReporter = () => new ErrorReporter();
    const output = await validator.validate(body);
    const findUser = await User.findOne({ email: output.email });
    if (findUser) {
      const checkPassword = await bcrypt.compare(
        output.password,
        findUser.password
      );

      if (checkPassword) {
        return NextResponse.json(
          { status: 200, message: { successMessage: "User logged In" } },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          {
            status: 400,
            message: { errorMessage: "Please check you credentials" },
          },
          { status: 200 }
        );
      }
    } else {
      return NextResponse.json(
        { status: 400, message: { errorMessage: "No Account Found" } },
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
