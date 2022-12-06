import User from "../models/User.js";

const del = async (req, res) => {
  try {
    const removed = await User.findByIdAndRemove(req.params.id);
    if (!removed) {
      res.sendStatus(404);
      return;
    }
    res.status(200).send(removed);
  } catch (error) {
    if (error.kind && error.kind === "ObjectId") {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(500);
    console.log(error);
  }
};

export default del;
