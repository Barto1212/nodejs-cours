import Articles from "../models/Article.js";
import User from "../models/User.js";

const patchCart = async (req, res) => {
  try {
    const articleId = req.params.articleId;
    const exist = await Articles.findById(articleId);
    if (!exist) {
      res.status(404).send("Article non trouvé");
      return;
    }
    let defaultUser = await User.findOne({ email: "default" });
    if (!defaultUser) {
      const newUser = new User({ email: "default", pwd: "default" });
      defaultUser = await newUser.save();
    }
    const oldCart = defaultUser.cart;
    const updatedUser = await User.findOneAndUpdate(
      { email: "default" },
      { cart: [...oldCart, articleId] }
    );
    res.status(201).send([...updatedUser.cart, articleId]);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
};

export default patchCart;
