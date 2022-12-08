const app = require("./app.js");
const connect = require("./utils/mongo.js").connect;
connect();
app.listen(3000, console.log("listen on 3000"));
