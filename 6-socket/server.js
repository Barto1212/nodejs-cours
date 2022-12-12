import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const monServeurHttp = http.createServer(app);
const io = new Server(monServeurHttp);

io.on("connection", (socket) => {
  // Un client se connecte
  console.log("client connecté");

  // Un message est envoyé sur le "canal 1"
  socket.on("canal 1", (msg) => {
    console.log("message reçu : ", msg);
    io.emit("canal 1", msg);
  });

  // Un client se déconnecte :
  socket.on("disconnect", (socket) => {
    console.log("client déconnecté");
  });
});

app.use(express.static("public"));

const port = 3000;
monServeurHttp.listen(
  port,
  console.log(`Serveur en écooute sur le port ${port}`)
);
