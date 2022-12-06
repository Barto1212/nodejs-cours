const { model, Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    email: String,
    pwd: String,
  },
  { timestamps: true }
);
const User = model("User", UserSchema);
module.exports = User;
