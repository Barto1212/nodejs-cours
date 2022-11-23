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
function addToCart(article) {
  if (BDD.articles[article].nb > 0) {
    BDD.articles[article].nb--;
    if (BDD.cart[article]) {
      BDD.cart[article].nb++;
    } else {
      BDD.cart[article] = { label: BDD.articles[article].label, nb: 1 };
    }
  } else {
    throw new Error("no left");
  }
}
router.get("/articles/all", (req, res) => {
  res.status(200).json(BDD.articles);
});
router.get("/cart", (req, res) => {
  res.status(200).json(BDD.cart);
});

router.get("/articles/:id", (req, res) => {
  const { id } = req.params; // req.params = {id: dezf, name: fr}
  const article = BDD.articles.find((element) => element.id == id);
  console.log(id, article);
  if (article === undefined) {
    res.status(404).send("objet non trouvé");
  }
  res.status(200).json(article);
});

export default router;
