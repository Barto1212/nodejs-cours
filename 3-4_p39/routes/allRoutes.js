import express from "express";
const router = express.Router();

const BDD = {
  articles: [
    {
      id: 0,
      label: "Chaise de bureau",
      description: "Permet de s'assoir",
      price: 5000,
    },
    {
      id: 1,
      label: "Bureau",
      description: "Permet poser son ordi",
      price: 50000,
    },
    {
      id: 2,
      label: "Ordinateur",
      description: "Permet de regarder une série",
      price: 80000,
    },
  ],
  cart: [],
};
// ----------------------------------      GET /articles/all     ----------------------------------
router.get("/articles/all", (req, res) => {
  res.status(200).json(BDD.articles);
});
// ----------------------------------      GET /cart/all     ----------------------------------
router.get("/cart/all", (req, res) => {
  res.status(200).json(BDD.cart);
});
// ----------------------------------      GET /articles/{:articlesId}      ----------------------------------
router.get("/articles/:articleId", (req, res) => {
  const { articleId } = req.params; // req.params = {id: dezf, name: fr}
  const article = BDD.articles.find((element) => element.id == articleId);
  if (article === undefined) {
    res.status(404).send("objet non trouvé");
    return;
  }
  res.status(200).send(article);
});
// ----------------------------------      DELETE /articles/{:articlesId}      ----------------------------------

router.delete("/articles/:articleId", (req, res) => {
  const { articleId } = req.params;
  const indexToDelete = BDD.articles.findIndex(
    (element) => element.id == articleId
  );
  if (indexToDelete === -1) {
    res.status(404).send("objet non trouvé");
    return;
  }
  const deletedArticle = BDD.articles[indexToDelete];
  BDD.articles.splice(indexToDelete, 1);
  res.status(200).send(deletedArticle);
});

// ----------------------------------      POST /articles      ----------------------------------
router.post("/articles", (req, res) => {
  const newArticle = req.body;
  // Tests sur le format :
  const keys = Object.keys(newArticle);
  if (
    keys.includes("id") &&
    keys.includes("name") &&
    keys.includes("description") &&
    keys.includes("price")
  ) {
    if (typeof newArticle.id !== "number") {
      res.status(405).send("Type incorrect");
    }
    if (typeof newArticle.name !== "string") {
      res.status(405).send("Type incorrect");
    }
    if (typeof newArticle.description !== "string") {
      res.status(405).send("Type incorrect");
    }
    if (typeof newArticle.price !== "number") {
      res.status(405).send("Type incorrect");
    }
    // Cas sans erreurs
    BDD.articles.push(newArticle);
    res.sendStatus(201);
  } else {
    res.status(405).send("Champ manquant");
  }
});
// ----------------------------------      PATCH /cart/{articleId}      ----------------------------------

router.patch('/cart/:articleId', (req, res) => {
  const articleId = req.params.articleId
})
export default router;
