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
router.get("/articles", (req, res) => {
  res.status(200).json(BDD.articles);
});
router.get("/cart", (req, res) => {
  res.status(200).json(BDD.cart);
});
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

router.patch("/cart/:article", (req, res) => {
  const { article } = req.params;
  if (BDD.articles[article]) {
    try {
      addToCart(article);
    } catch (error) {
      res.status(403).json(error.message);
      return;
    }
  } else {
    res.status(404).send("Cet article n'existe pas");
    return;
  }
  res.status(201).json({ cart: BDD.cart });
});

router.delete("/article/:id", (req, res) => {});

export default router;
