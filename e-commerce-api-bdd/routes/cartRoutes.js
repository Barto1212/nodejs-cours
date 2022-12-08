import express from "express";
import userAuth from "../middlewares/userAuth.js";
import patchCart from "../controllers/patchCart.js";
import getAllCart from "../controllers/getAllCart.js";
const cartRoutes = express.Router();

// ----------------------------------      PATCH /cart/{articleId}      ----------------------------------
cartRoutes.patch("/:articleId", patchCart);
cartRoutes.get("/all", getAllCart);
// cartRoutes.delete("/:articleId", userAuth, (req, res) => {
// ----------------------------------      POST /cart/pay      ----------------------------------
// cartRoutes.post("/pay", userAuth, (req, res) => {
//   const { cardNumber } = req.body;
//   if (cardNumber === undefined) {
//     res.status(405).send("Pas de carte renseignée");
//     return;
//   }
//   // Format : 4505 4585 0854 5420
//   const splitedCard = cardNumber.split(" ");
//   if (splitedCard.length !== 4) {
//     res.status(405).send("Format de carte non valide");
//     return;
//   }
//   let isValid = true;
//   splitedCard.forEach((element) => {
//     const elementNumber = Number(element);
//     isValid = isValid && !isNaN(elementNumber);
//   });
//   if (!isValid) {
//     res.status(405).send("Pas un number");
//     return;
//   }
//   splitedCard.forEach((element) => {
//     const elementNumber = Number(element);
//     isValid = isValid && !(elementNumber < 999 || elementNumber >= 9999);
//   });

//   if (!isValid) {
//     res.status(405).send("Un des digits trop grand ou trop petit");
//     return;
//   }
//   BDD.cart = [];
//   res.status(200).send("Paiement accepté");
// });

export default cartRoutes;
