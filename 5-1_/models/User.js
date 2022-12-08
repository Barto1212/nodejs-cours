const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: String,
    pwd: String,
  },
  { timestamps: true }
);
// const User = model("User", UserSchema);
module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
