import User from "../schemas/User.js";

const signin = async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const newUser = new User({ email, pwd });
    await newUser.save();
    res.status(201);
  } catch (error) {
    console.log(retour);
  }
};

export default signin;
