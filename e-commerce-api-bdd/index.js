import express from "express";
import bodyParser from "body-parser";
import articlesRoutes from "./routes/articlesRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import connectMongoDb from "./connectMongoDB.js";
// --------------------------CONFIG EXPRESS--------------------------
const app = express();
app.use(bodyParser.json());
// ----------------------------FIN EXPRESS--------------------------
connectMongoDb();
// -------------------------------ROUTES-----------------------------
app.use("/articles", articlesRoutes);
app.use("/cart", cartRoutes);

app.listen(3000, () => console.log("listening 3000"));
