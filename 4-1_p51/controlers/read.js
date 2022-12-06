import User from "../models/User.js";

const read = async (req, res) => {
  try {
    const users = await User.find().limit(2);
    res.status(201).send(users);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default read;


const count = {
  create: 1,
  delete: 5,
  update: 2,
  read: 4
}