import express from "express";
import bodyParser from "body-parser";
import multer from "multer";

// ----------------- Config express -------------------------
const app = express();
const upload = multer();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(upload.array());
// ----------------------------------------------------------

app.get("/articles", function (req, res) {
  console.log(req.query);
  res.status(201).send("created");
});

app.listen(3000, () => console.log("listening on 3000"));
