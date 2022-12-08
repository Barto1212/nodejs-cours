import User from "../models/User.js";

const getAllCart = async (req, res) => {
  try {
    const defaultUser = await User.findOne({ email: "default" });
    res.status(200).send(defaultUser.cart);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
};

export default getAllCart;
