const app = require("./app.js");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://user:1234@cluster0.wu4lnyz.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connecté à la base de donnée"))
  .catch((err) => console.log(err));

app.listen(3000, console.log("listen on 3000"));
