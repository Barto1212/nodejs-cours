import http from "http";

const server = http.createServer(function (request, response) {
  console.log(request.url);
  response.end("Hello world");
});

server.listen(3000);
console.log("listen on 3000");
