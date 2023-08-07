import mongoose from "mongoose";

export function connect() {
  mongoose
    .connect(process.env.MONGO_URL!, {
      tls: true,
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log("Database Connection Failed", err));
}
