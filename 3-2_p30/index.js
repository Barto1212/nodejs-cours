import express from "express";
import bodyParser from "body-parser";
import multer from "multer";

const app = express();

// Voir doc Express
const upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/data", upload.array(), (req, res) => {
  const data = req.body;
  console.log("DATA CREATED :", req.body);
  res.status(201).send("created");
});

app.get("/data/:dataId", upload.array(), (req, res) => {
  const dataId = req.params.dataId;
  console.log("READ DATA :", dataId);
  res.status(200).send(`dataId : ${dataId}`);
});

app.put("/data/:dataId", upload.array(), (req, res) => {
  const dataId = req.params.dataId;
  const newData = { ...req.body };
  console.log("UPDATE DATA :", dataId, "devient", newData);
  res.status(201).send(`dataId : ${JSON.stringify(newData)}`);
});

app.put("/data/:dataId", upload.array(), (req, res) => {
  const dataId = req.params.dataId;
  console.log("DELETE DATA :", dataId);
  res.status(200).send(`dataId : ${JSON.stringify(newData)}`);
});

app.listen(3000, () => console.log("listening 3000"));
