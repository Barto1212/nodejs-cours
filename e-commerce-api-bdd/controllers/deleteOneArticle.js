import Articles from "../models/Article.js";

const deleteOneArticle = async (req, res) => {
  try {
    const { articleId } = req.params;
    const deletedArticle = await Articles.findByIdAndDelete(articleId);
    console.log(deletedArticle);
    if (!deletedArticle) {
      res.status(404).send("cet article n\'existe pas");
    }
    res.status(200).send(deletedArticle);
  } catch (error) {
    if (error.toString().includes("ObjectId")) {
      res.status(400).send("id invalide");
      return;
    }
    console.log(error);
    res.sendStatus(500);
  }
};

export default deleteOneArticle;
