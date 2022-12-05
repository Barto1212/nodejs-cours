import User from "../models/User.js";

const create = async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const newUser = new User({ email, pwd });
    await newUser.save();
    res.status(201);
  } catch (error) {
    console.log(retour);
  }
};

export default create;
