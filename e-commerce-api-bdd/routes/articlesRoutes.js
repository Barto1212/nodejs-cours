import express from "express";
import getAllArticles from "../controllers/getAllArticles.js";
import postArticle from "../controllers/postArticle.js";
import getOneArticle from "../controllers/getOneArticle.js";
import deleteOneArticle from "../controllers/deleteOneArticle.js";

const articlesRoutes = express.Router();

articlesRoutes.get("/all", getAllArticles);
articlesRoutes.get("/:articleId", getOneArticle);

// Routes à sécuriser :
articlesRoutes.delete("/:articleId", deleteOneArticle);
//   const { articleId } = req.params; // req.params = {id: dezf, name: fr}
//   const article = BDD.articles.find((element) => element.id == articleId);
//   if (article === undefined) {
//     res.status(404).send("objet non trouvé");
//     return;
//   }
//   res.status(200).send(article);
articlesRoutes.post("/", postArticle);

export default articlesRoutes;
