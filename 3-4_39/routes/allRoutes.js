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
router.get("/articles/all", (req, res) => {
  res.status(200).json(BDD.articles);
});
router.get("/cart/all", (req, res) => {
  res.status(200).json(BDD.cart);
});
router.get("/articles/:id", (req, res) => {
  const { id } = req.params; // req.params = {id: dezf, name: fr}
  const article = BDD.articles.find((element) => element.id == id);
  if (article === undefined) {
    res.status(404).send("objet non trouvé");
    return;
  }
  res.status(200).send(article);
});

export default router;
