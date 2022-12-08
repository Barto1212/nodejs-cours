import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  email: String,
  pwd: String,
  cart: {
    type: Array,
    default: [],
  },
});

export default model("User", UserSchema);
