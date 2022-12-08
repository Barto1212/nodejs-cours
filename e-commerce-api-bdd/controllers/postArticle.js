import * as yup from "yup";
import Articles from "../models/Article.js";

let schema = yup.object().shape({
  label: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required(),
});
const postArticle = async (req, res) => {
  try {
    const newArticle = req.body;
    await schema.validate(newArticle);
    const article = new Articles(newArticle);
    const saved = await article.save();
    res.status(201).send(saved);
  } catch (error) {
    // Si l'erreur vient de yup :
    if (error.toString().includes("ValidationError:")) {
      res.sendStatus(400);
      return;
    }
    console.log(error);
    res.sendStatus(500);
  }
};

export default postArticle;
