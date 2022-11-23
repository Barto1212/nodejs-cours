import express from "express";
const app = express();

app.post("/", function (req, res) {
  res.status(201).send("post");
});

app.get("/", (req, res) => {
  res.status(200).send("get");
});

app.put("/", (req, res) => {
  res.status(200).send("put");
});

app.patch("/", (req, res) => {
  res.status(200).send("patch");
});

app.delete("/", (req, res) => {
  res.status(200).send("delete");
});

app.listen(3000, () => console.log("listening 3000"));
