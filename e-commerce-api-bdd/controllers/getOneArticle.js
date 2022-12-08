import Articles from "../models/Article.js";

const getOneArticle = async (req, res) => {
  try {
    const { articleId } = req.params;
    const article = await Articles.findById(articleId);
    res.status(200).send(article);
  } catch (error) {
    if (error.toString().includes("ObjectId")) {
      res.status(400).send("id invalide");
      return;
    }
    console.log(error);
    res.sendStatus(500);
  }
};

export default getOneArticle;
