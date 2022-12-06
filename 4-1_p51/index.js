import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import create from "./controlers/create.js";
import read from "./controlers/read.js";
import update from "./controlers/update.js";
import del from "./controlers/del.js";
import counter from "./middlewares/counter.js";

const app = express();

mongoose
  .connect(
    "mongodb+srv://user:1234@cluster0.wu4lnyz.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connecté à la base de donnée"))
  .catch((err) => console.log(err));

app.use(bodyParser.json()); // for parsing application/json

app.use(counter);

app.post("/", create);
app.get("/", read);
app.put("/:id", update);
app.delete("/:id", del);

app.listen(3000, console.log("listen on 3000"));
