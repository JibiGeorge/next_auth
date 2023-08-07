import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: Schema.Types.String,
    require: [true, "Name field is required"],
  },
  email: {
    type: Schema.Types.String,
    require: [true, "Email field is required"],
    unique: true,
    trim: true,
  },
  password: {
    type: Schema.Types.String,
    require: false,
  },
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);