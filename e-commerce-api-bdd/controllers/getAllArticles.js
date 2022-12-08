import Articles from "../models/Article.js";

const getAllArticles = async (req, res) => {
  try {
    const articles = await Articles.find();
    res.status(200).json(articles);
  } catch (error) {
    res.sendStatus(500);
  }
};
export default getAllArticles;
