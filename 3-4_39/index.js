import express from "express";
import bodyParser from "body-parser";
import multer from "multer";

const BDD = {
  articles: {
    chair: {
      label: "Chaise de bureau",
      nb: 5,
    },
    desk: {
      label: "Bureau",
      nb: 2,
    },
    computer: {
      label: "Ordinateur",
      nb: 6,
    },
  },
  cart: {},
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

const app = express();

// Voir doc Express
const upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/cart", upload.array(), (req, res) => {
  res.status(200).json({ cart: BDD.cart });
});

app.get("/articles", upload.array(), (req, res) => {
  res.status(200).json({ cart: BDD.articles });
});

app.patch("/cart/:article", upload.array(), (req, res) => {
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

app.listen(3000, () => console.log("listening 3000"));
