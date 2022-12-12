import User from "../models/User.js";

const create = async (req, res) => {
  try {
    const { email, pwd } = req.body;
    if (!email || !pwd) {
      res.sendStatus(400);
      return;
    }
    if (typeof email !== "string" || typeof pwd !== "string") {
      res.sendStatus(400);
      return;
    }
    // const exists = await User.find({ email });
    // if (exists.length > 0) {
    //   res.status(403).send("Cet email est déjà pris");
    //   return;
    // }
    const newUser = new User({ email, pwd });
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default create;
