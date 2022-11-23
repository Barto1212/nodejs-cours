import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import allRoutes from "./routes/allRoutes.js";

// --------------------------CONFIG EXPRESS--------------------------
const app = express();
const upload = multer();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
// ----------------------------FIN EXPRESS--------------------------

app.use("/", allRoutes);

app.listen(3000, () => console.log("listening 3000"));
