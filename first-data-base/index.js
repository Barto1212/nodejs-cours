import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import signin from "./controlers/signin.js";

const app = express();

mongoose
  .connect(
    "mongodb+srv://user:1234@cluster0.wu4lnyz.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connecté à la base de donnée"))
  .catch((err) => console.log(err));

app.use(bodyParser.json()); // for parsing application/json

app.post("/signin", signin);

app.listen(3000, console.log("listen on 3000"));
