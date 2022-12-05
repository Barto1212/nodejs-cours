import User from "../models/User.js";

const create = async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const newUser = new User({ email, pwd });
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
};

export default create;
