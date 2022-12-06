const express = require("express");
const bodyParser = require("body-parser");
// const create = require("./controlers/create.js");
const read = require("./controlers/read.js");
// const update = require("./controlers/update.js");
// const del = require("./controlers/del.js");
// const counter = require("./middlewares/counter.js");

const app = express();

app.use(bodyParser.json()); // for parsing application/json

// app.use(counter);

// app.post("/", create);c
app.get("/", read);
// app.put("/:id", update);
// app.delete("/:id", del);

module.exports = app;
