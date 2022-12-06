import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: String,
    pwd: String,
  },
  { timestamps: true }
);

export default model("User", UserSchema);
