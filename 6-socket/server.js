import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const monServeurHttp = http.createServer(app);
const io = new Server(monServeurHttp);

io.on("connection", (maVariable) => {
  console.log("client connecté");
  console.log(maVariable);
});

app.use(express.static("public"));

const port = 3000;
monServeurHttp.listen(
  port,
  console.log(`Serveur en écooute sur le port ${port}`)
);
