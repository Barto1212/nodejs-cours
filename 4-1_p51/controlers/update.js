import User from "../models/User.js";

const update = async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      email,
      pwd,
    });
    res.status(200).send(updatedUser);
  } catch (error) {
    if (error.kind && error.kind === "ObjectId") {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(500);
  }
};

export default update;
