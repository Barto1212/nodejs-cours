const User = require("../models/User.js");

const read = async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users);
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
module.exports = read;
