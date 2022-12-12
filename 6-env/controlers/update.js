import User from "../models/User.js";

const update = async (req, res) => {
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
