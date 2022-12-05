import User from "../models/User.js";

const read = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).send(users);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default read;
