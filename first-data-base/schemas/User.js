import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: String,
    pwd: String,
    created_at: Date
  },
  // { timestamps: true }
);

export default model("User", UserSchema);
