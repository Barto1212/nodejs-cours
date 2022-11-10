import express from "express";
const PORT = 3000;

const app = express();
app.use(express.static("./public"));

app.get("/bonjour", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
