const socket = io();

const form = document.querySelector("#form");
const input = document.querySelector("#input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value) {
    socket.emit("canal 1", input.value);
    input.value = "";
  }
});
input.focus();
socket.on("canal 1", (msg) => {
  const ul = document.querySelector("#ul");
  const li = document.createElement("li");
  li.innerHTML = msg;
  ul.appendChild(li);
});
