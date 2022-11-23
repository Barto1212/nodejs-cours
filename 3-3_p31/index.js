import express from "express";
const app = express();

const logger = {};
app.all("*", (req, res, next) => {
  const url = req.url;
  // if (logger[url] !== undefined) {
  //   logger[url] = logger[url] + 1
  // } else {
  //   logger[url] = 1
  // }
  logger[url] ? logger[url]++ : (logger[url] = 1);
  console.log(logger);
  next();
});

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
